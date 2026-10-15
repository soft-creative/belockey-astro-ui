import { contactFormMessages, contactTopics } from '../src/i18n/contact-form.ts';

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  CONTACT_RATE_LIMITER: { limit(options: { key: string }): Promise<{ success: boolean }> };
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
}

type Locale = keyof typeof contactFormMessages;
type Result = 'success' | 'error' | 'invalid' | 'limited';
const contactPaths = { es: '/contacto', en: '/en/contact', fr: '/fr/contact', de: '/de/kontakt' };
const topicNames = { information: 'Información', quote: 'Presupuesto', demo: 'Demo', other: 'Otro' };
const maxBodyBytes = 65_536;

function reply(request: Request, result: Result, status: number, lang: Locale = 'es') {
  const headers = new Headers({ 'Cache-Control': 'no-store', 'Vary': 'Accept', 'X-Content-Type-Options': 'nosniff' });
  if (status === 405) headers.set('Allow', 'POST');
  if (status === 429) headers.set('Retry-After', '60');
  if (request.headers.get('Accept')?.includes('application/json')) {
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return new Response(JSON.stringify({ ok: result === 'success', code: result }), { status, headers });
  }

  // A native form submission also gets a usable result when JavaScript is disabled.
  const t = contactFormMessages[lang];
  headers.set('Content-Type', 'text/html; charset=utf-8');
  headers.set('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'; base-uri 'none'");
  return new Response(`<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>BeLockey</title><main><h1>${t[result]}</h1><p><a href="${contactPaths[lang]}#formulario">${t.back}</a></p></main></html>`, { status, headers });
}

async function readBody(request: Request) {
  if (Number(request.headers.get('Content-Length')) > maxBodyBytes) throw new Error('Body too large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('Empty body');
  const decoder = new TextDecoder();
  let body = '';
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBodyBytes) {
      await reader.cancel();
      throw new Error('Body too large');
    }
    body += decoder.decode(value, { stream: true });
  }
  return body + decoder.decode();
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname !== '/api/contact') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return reply(request, 'error', 405);

    const origin = request.headers.get('Origin');
    if ((origin && origin !== new URL(request.url).origin) || request.headers.get('Sec-Fetch-Site') === 'cross-site') {
      return reply(request, 'error', 403);
    }

    const contentType = request.headers.get('Content-Type')?.split(';')[0].trim();
    if (contentType !== 'application/json' && contentType !== 'application/x-www-form-urlencoded') {
      return reply(request, 'invalid', 415);
    }

    let data: Record<string, unknown>;
    try {
      const body = await readBody(request);
      const parsed = contentType === 'application/json' ? JSON.parse(body) : Object.fromEntries(new URLSearchParams(body));
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Invalid body');
      data = parsed;
    } catch {
      return reply(request, 'invalid', 400);
    }

    const lang: Locale = typeof data.lang === 'string' && Object.hasOwn(contactFormMessages, data.lang) ? data.lang as Locale : 'es';
    const field = (name: string) => typeof data[name] === 'string' ? data[name].trim() : '';
    // Honeypot: acknowledge automated submissions without sending mail.
    if (field('website')) return reply(request, 'success', 200, lang);

    const name = field('name');
    const email = field('email');
    const company = field('company');
    const topic = field('topic');
    const message = field('message');
    const singleLine = (value: string) => !/[\r\n\u0000]/.test(value);
    if (!name || name.length > 100 || !singleLine(name)
      || !email || email.length > 254 || !singleLine(email) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)
      || company.length > 200 || !singleLine(company)
      || !contactTopics.includes(topic as typeof contactTopics[number])
      || !message || message.length > 5000 || message.includes('\u0000')) {
      return reply(request, 'invalid', 400, lang);
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
      console.error('Contact email configuration is missing.');
      return reply(request, 'error', 503, lang);
    }

    try {
      const { success } = await env.CONTACT_RATE_LIMITER.limit({ key: `contact:${request.headers.get('CF-Connecting-IP') || 'local'}` });
      if (!success) return reply(request, 'limited', 429, lang);

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.CONTACT_FROM_EMAIL,
          to: [env.CONTACT_TO_EMAIL],
          reply_to: email,
          subject: `Contacto BeLockey · ${topicNames[topic as keyof typeof topicNames]}`,
          text: `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company || '—'}\nTema: ${topicNames[topic as keyof typeof topicNames]}\nIdioma: ${lang}\n\nMensaje:\n${message}`
        }),
        signal: AbortSignal.timeout(15_000)
      });
      const payload = await response.json() as { id?: string };
      if (!response.ok || !payload.id) {
        console.error('Resend rejected the contact email. HTTP status:', response.status);
        return reply(request, 'error', 502, lang);
      }
      return reply(request, 'success', 200, lang);
    } catch {
      console.error('Contact email delivery failed.');
      return reply(request, 'error', 502, lang);
    }
  }
};
