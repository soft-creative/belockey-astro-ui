# BeLockey corporate website (Astro)

Conversión a Astro de las demos HTML aportadas. Para el trabajo de agentes, consulta `AGENTS.md` y `docs/BELOCKEY_DESIGN_SYSTEM.md`: la guía de diseño define la dirección visual, pero sus textos de ejemplo no son contenido aprobado para reutilizar.

## Rutas

- `/producto`
- `/precios`
- `/contacto`
- `/privacidad`
- `/terminos`
- `/cookies`
- `/politica-de-privacidad-del-chatbot-de-belockey` (solo por URL; no aparece en menú ni footer)

`/` redirige a `/producto`.

## Desarrollo

```bash
npm install
npm run dev
```

No se utiliza React: estas páginas no requieren estado de cliente complejo.

## Formulario de contacto y Resend (Cloudflare)

El formulario de `/contacto#formulario` y sus traducciones envía a `/api/contact`.
El Worker de `worker/index.ts` valida los campos y llama a Resend mediante `fetch`,
sin dependencias adicionales. El sitio sigue generándose como contenido estático.
Los mensajes se reciben en `contacta@belockey.com`; el email del visitante se utiliza
como `reply_to` para poder responderle directamente. No se envía una copia al visitante.

### Configuración por entorno

1. Verifica en Resend el dominio del remitente y crea una clave API con permiso de envío.
2. Añade los secretos al Worker correspondiente (los comandos piden el valor sin guardarlo en el repositorio):

```bash
npx wrangler secret put RESEND_API_KEY --config wrangler.dev.jsonc
npx wrangler secret put CONTACT_FROM_EMAIL --config wrangler.dev.jsonc
```

`CONTACT_FROM_EMAIL` admite `BeLockey <correo@dominio-verificado>`.
Repite los comandos con `wrangler.pre.jsonc` y `wrangler.pro.jsonc` para los otros
entornos. `CONTACT_TO_EMAIL` está configurado en los tres archivos Wrangler.
No uses variables `PUBLIC_` para la clave API ni la añadas a archivos versionados.
Los workflows actuales de Cloudflare ya despliegan el Worker y los assets al ejecutar
`wrangler deploy`; no necesitan incluir los secretos en el build.

### Desarrollo y comprobación

Para probar el sitio completo y el endpoint localmente:

```bash
cp .dev.vars.example .dev.vars
# Edita .dev.vars con la clave y el remitente verificado.
npm run build
npx wrangler dev --config wrangler.dev.jsonc
```

Abre la URL local que indique Wrangler. Los envíos con credenciales reales envían
correos reales. `.dev.vars` está ignorado por Git. `npm run dev` y `npm run preview`
sirven las páginas de Astro, pero no ejecutan el Worker de Cloudflare.
Un hosting que solo sirva `dist/` tampoco ejecutará el endpoint.

El servidor aplica un campo trampa, comprobación de origen, límites de tamaño y un
límite de cinco solicitudes válidas por IP y minuto en cada ubicación de Cloudflare.
Cada entorno usa un namespace de rate limiting distinto (1001/1002/1003); si ya
usas esos identificadores en la cuenta, elige otros para evitar compartir contadores.
El formulario muestra el estado del envío, conserva los datos si falla y evita
envíos simultáneos. Sin JavaScript, devuelve una página de resultado con un enlace
al formulario. Un resultado correcto significa que Resend aceptó el correo, no que
se haya confirmado su entrega en la bandeja del destinatario.

Pruebas del endpoint con Resend simulado (Node.js 22.18+ o 24):

```bash
node --test tests/contact.test.mjs
```

Referencias: [API de Resend](https://resend.com/docs/api-reference/emails/send-email),
[Workers con assets estáticos](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/).
