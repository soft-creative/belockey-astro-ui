import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from '../worker/index.ts';

const valid = { name: 'Ana', email: 'ana@example.com', company: 'Empresa', topic: 'demo', message: 'Me gustaría solicitar una demo.', lang: 'es', website: '' };
const env = () => ({
  ASSETS: { fetch: async () => new Response('static asset') },
  CONTACT_RATE_LIMITER: { limit: async () => ({ success: true }) },
  RESEND_API_KEY: 'test-key',
  CONTACT_FROM_EMAIL: 'BeLockey <test@example.com>',
  CONTACT_TO_EMAIL: 'contacta@belockey.com'
});
const request = (data = valid, headers = {}) => new Request('https://belockey.example/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Origin': 'https://belockey.example', ...headers },
  body: JSON.stringify(data)
});

test('sends to the configured recipient, uses reply_to and keeps visitor content as plain text', async (t) => {
  let calls = 0;
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    calls++;
    assert.equal(url, 'https://api.resend.com/emails');
    assert.equal(new Headers(init.headers).get('Authorization'), 'Bearer test-key');
    const body = JSON.parse(init.body);
    assert.deepEqual(body.to, ['contacta@belockey.com']);
    assert.equal(body.from, 'BeLockey <test@example.com>');
    assert.equal(body.reply_to, valid.email);
    assert.match(body.text, /<script>alert\(1\)<\/script>/);
    assert.equal(body.html, undefined);
    assert.match(body.subject, /Demo/);
    return Response.json({ id: 'test-email-id' });
  });
  const response = await worker.fetch(request({ ...valid, message: '<script>alert(1)</script>', to: 'untrusted@example.com' }), env());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true, code: 'success' });
  assert.equal(calls, 1);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
});

test('rejects invalid fields, malformed bodies and oversized streams without calling Resend', async (t) => {
  t.mock.method(globalThis, 'fetch', () => assert.fail('Must not call Resend'));
  for (const data of [null, [], { ...valid, name: ' ' }, { ...valid, email: 'bad-email' }, { ...valid, email: 'a@b.com\r\nBcc: other@example.com' }, { ...valid, topic: 'unknown' }, { ...valid, message: ' ' }, { ...valid, company: 'x'.repeat(201) }, { ...valid, name: 'x'.repeat(101) }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, name: 'Ana\r\nInjected' }]) {
    assert.equal((await worker.fetch(request(data), env())).status, 400);
  }
  assert.equal((await worker.fetch(new Request(request(), { body: '{broken' }), env())).status, 400);
  assert.equal((await worker.fetch(request({ ...valid, extra: 'x'.repeat(70_000) }), env())).status, 400);
  assert.equal((await worker.fetch(request(valid, { 'Content-Type': 'text/plain' }), env())).status, 415);
});

test('blocks cross-origin requests and unsupported methods; serves other routes as assets', async (t) => {
  t.mock.method(globalThis, 'fetch', () => assert.fail('Must not call Resend'));
  assert.equal((await worker.fetch(request(valid, { Origin: 'https://other.example' }), env())).status, 403);
  assert.equal((await worker.fetch(request(valid, { 'Sec-Fetch-Site': 'cross-site' }), env())).status, 403);
  const response = await worker.fetch(new Request('https://belockey.example/api/contact'), env());
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('Allow'), 'POST');
  assert.equal(await (await worker.fetch(new Request('https://belockey.example/contacto'), env())).text(), 'static asset');
});

test('honeypot and rate limiter prevent delivery', async (t) => {
  t.mock.method(globalThis, 'fetch', () => assert.fail('Must not call Resend'));
  assert.equal((await worker.fetch(request({ ...valid, website: 'spam.example' }), env())).status, 200);
  const config = env();
  config.CONTACT_RATE_LIMITER.limit = async () => ({ success: false });
  const response = await worker.fetch(request(), config);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Retry-After'), '60');
});

test('missing credentials, provider failures and network errors never report success or expose secrets', async (t) => {
  t.mock.method(console, 'error', () => {});
  const config = { ...env(), RESEND_API_KEY: '' };
  assert.equal((await worker.fetch(request(), config)).status, 503);
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => Response.json({ message: 'private provider error' }, { status: 403 }));
  const rejected = await worker.fetch(request(), env());
  assert.equal(rejected.status, 502);
  assert.deepEqual(await rejected.json(), { ok: false, code: 'error' });
  fetchMock.mock.mockImplementation(async () => { throw new Error('test-key'); });
  const failed = await worker.fetch(request(), env());
  assert.equal(failed.status, 502);
  assert.doesNotMatch(await failed.text(), /test-key/);
  fetchMock.mock.mockImplementation(async () => Response.json({}));
  assert.equal((await worker.fetch(request(), env())).status, 502);
});

test('supports native HTML form submissions in every locale', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => Response.json({ id: 'test-email-id' }));
  for (const [lang, path] of Object.entries({ es: '/contacto', en: '/en/contact', fr: '/fr/contact', de: '/de/kontakt' })) {
    const response = await worker.fetch(new Request('https://belockey.example/api/contact', {
      method: 'POST', body: new URLSearchParams({ ...valid, lang })
    }), env());
    assert.equal(response.status, 200);
    assert.match(response.headers.get('Content-Type'), /text\/html/);
    const html = await response.text();
    assert.ok(html.includes(`lang="${lang}"`));
    assert.ok(html.includes(`href="${path}#formulario"`));
  }
});
