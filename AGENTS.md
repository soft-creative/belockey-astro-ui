# Instrucciones para agentes - BeLockey Astro

## Alcance y prioridades

- Este repositorio contiene la web corporativa de BeLockey en Astro 5 y TypeScript.
- La guía visual está resumida en `docs/BELOCKEY_DESIGN_SYSTEM.md`. Consúltala antes de modificar UI, CSS, componentes o assets.
- El PDF original (`BeLockey_Web_Design_System_v1.pdf`) es una referencia de **estilo**, no una fuente de contenido. No copies literalmente titulares, párrafos, ejemplos, métricas, integraciones, clientes, certificaciones ni promesas que aparezcan en él.
- No inventes capacidades, cifras, integraciones, clientes, certificaciones ni afirmaciones técnicas. Para copy nuevo, usa exclusivamente el briefing o contenido aprobado que acompañe la tarea. Si falta, emplea texto neutral o pide la información.
- Si una petición específica contradice este archivo o la guía, sigue la petición explícita del usuario.

## Arquitectura

- `src/pages/`: rutas y composición de páginas. La raíz redirige a `/producto`.
- `src/components/`: componentes Astro reutilizables de estructura y secciones.
- `src/layouts/BaseLayout.astro`: documento HTML, metadatos comunes e importación del CSS global.
- `src/styles/global.css`: tokens y estilos compartidos. Reutiliza y extiende los tokens antes de introducir valores de color, espaciado o radio aislados.
- `public/assets/`: imágenes estáticas. Usa rutas absolutas desde la raíz web, por ejemplo `/assets/hero-product.webp`.

## Implementación

- Mantén el proyecto sin framework de cliente salvo que la tarea requiera estado o interacción real. Prioriza Astro y HTML semántico.
- Para enlaces internos usa `<a href="/ruta">`; para acciones que no navegan, no simules funcionalidad con botones sin comportamiento.
- Conserva `lang="es"`, títulos de página y descripciones cuando existan. Las imágenes de contenido necesitan `alt` descriptivo; usa `alt=""` solo si son decorativas.
- Evita CSS inline y duplicar estilos de componentes. Centraliza patrones repetibles en el CSS global o en un componente cuando proceda.
- Respeta la jerarquía de encabezados: un único `h1` por página y títulos de sección semánticos.
- Diseña y verifica escritorio, tablet y móvil; no conviertas una interfaz densa de escritorio en un carrusel forzado en móvil.

## Calidad visual y de contenido

- Cada sección debe tener una idea principal, suficiente espacio vertical y una composición distinguible de la anterior.
- Predominan blanco y navy; el azul eléctrico es un acento para acciones, foco, enlaces e iconos, nunca el color dominante de bloques grandes ni de texto largo.
- Da prioridad visual a hardware real, interfaces reales del producto y contexto operativo pertinente. Evita imágenes genéricas de SaaS, personas flotantes o mockups irreales.
- Mantén el copy breve, concreto, verificable y orientado al beneficio. Evita superlativos, lenguaje vago y claims no comprobados.

## Comprobación

Ejecuta antes de dar por terminado un cambio de código:

```bash
npm run build
```

Para cambios visuales, revisa al menos los anchos móvil (<768 px), tablet (768-1199 px) y escritorio (>=1200 px). Comprueba que no haya desbordamientos, texto ilegible, CTAs cortados ni imágenes deformadas.

## Cambios seguros

- No borres ni sustituyas assets, rutas, copy o estilos existentes fuera del alcance de la tarea.
- No añadas dependencias si Astro, HTML y CSS resuelven el trabajo.
- Mantén las modificaciones pequeñas, coherentes con los componentes existentes y verificadas con el build.
