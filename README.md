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
