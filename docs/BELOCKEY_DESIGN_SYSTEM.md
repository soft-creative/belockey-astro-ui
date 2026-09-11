# Sistema visual de BeLockey

Resumen operativo para diseño y desarrollo. Está extraído de la guía de estilo de BeLockey y sirve para conservar su dirección visual; los textos y ejemplos mostrados en la guía no son copy aprobado para reutilizar.

## Carácter de marca

La interfaz debe sentirse tecnológica, segura, profesional, clara y cercana. Combina producto físico y software con una composición limpia, modular, B2B accesible y orientada a que el usuario entienda, confíe o solicite información. El espacio en blanco forma parte del diseño: no compactar la página verticalmente.

Una pantalla debe reforzar estas ideas: hardware real, software centralizado y simplicidad operativa. Si un elemento añade ruido y no aporta a una de ellas, elimínalo o simplifícalo.

## Tokens de referencia

| Uso | Token | Valor |
| --- | --- | --- |
| Texto principal, títulos y fondos oscuros puntuales | Navy | `#001433` |
| CTA, enlaces, iconos, estados activos y énfasis | Blue | `#0062FE` |
| Hover o estado presionado del azul | Blue Dark | `#004FD1` |
| Fondo de sección alterna | Section | `#F4F8FF` |
| Superficies UI, iconos y halos | Soft Blue | `#EAF2FF` |
| Texto secundario | Secondary | `#5F6F89` |
| Bordes suaves | Border | `#DCE6F5` |
| Fondo dominante | White | `#FFFFFF` |

Los tokens existentes en `src/styles/global.css` deben converger con estos valores. No crees tonos nuevos sin una razón clara. El verde se limita a estados de éxito o disponibilidad. Evita degradados fuertes; si se usan, deben ser sutiles y derivados del azul.

## Tipografía

- Preferencia: Inter. Alternativas compatibles: Manrope o Plus Jakarta Sans. Fallback: Arial/Helvetica.
- `h1`: 56-64 px en escritorio, peso 700-800, 3-4 líneas como máximo.
- `h2`: 36-44 px, peso 700.
- `h3`: 22-26 px, peso 600-700.
- Introducción: 18-20 px, peso 400-500.
- Cuerpo: 16-18 px, peso 400.
- Eyebrow: 12-14 px, mayúsculas, peso 700, tracking aproximado de `0.08em`.
- En móvil, el `h1` baja a 36-44 px. No mantengas la escala de 64 px.

Usa titulares de geometría compacta y cuerpo legible con interlineado generoso. El texto extenso debe ir en navy o gris azulado, nunca en azul eléctrico.

## Grid y ritmo

- Contenedor de escritorio: 1200-1280 px.
- Padding horizontal: 64 px en escritorio, 32 px en tablet y 20-24 px en móvil.
- Separación entre narrativas principales: 112-144 px en escritorio.
- Padding interno de sección: 64-96 px.
- Espacio de título a texto: 20-24 px; texto a CTA: 28-32 px.
- Separación de grid: 24-32 px; padding de card: 28-32 px.

Alterna fondos blanco y `#F4F8FF` por secciones completas, no a intervalos pequeños. Se permite un borde superior o halo azul muy suave como separación, no líneas divisorias continuas. Los renders y screenshots requieren aire alrededor.

## Composición

Alterna composiciones para evitar una sucesión monótona de cards:

- Hero: texto e imagen en dos columnas aproximadamente 45/55.
- Contenido editorial: imagen y texto alternados.
- Valor: título con tres columnas o pilares.
- Soluciones/casos: título con cuatro cards, agrupadas en una misma sección.
- Producto/software: screenshot amplio y limpio.
- Sectores/capacidades: banda horizontal compacta.
- CTA final: promesa breve y un CTA principal; puede haber uno secundario.

No encadenes grids densos ni anides cards sin una necesidad clara. Una sección debe comunicar una única idea principal.

## Componentes

- Header: logo a la izquierda, 5-7 enlaces como máximo y CTA a la derecha; alto aproximado de 72-80 px.
- Botón principal: fondo Blue, texto blanco, radio 8-10 px y sombra discreta.
- Botón secundario: fondo blanco, borde azul claro y texto navy o azul.
- Card: blanca, borde `#DCE6F5`, radio 14-16 px y sombra casi imperceptible.
- Card de solución: imagen en la parte superior (45-55%); texto debajo y descripción breve.
- Card de valor: icono lineal azul, título y 2-5 puntos; sin fotografía.
- Screenshots: marco limpio, radio 18-24 px y sombra suave.
- Iconografía: lineal, monocroma azul y de trazo consistente; no usar mezclas de packs multicolor.
- FAQ: dos columnas en escritorio y una en móvil cuando el contenido lo permita.
- Footer: continuación natural de la página, con 64-80 px de padding superior, 4-5 columnas y franja legal final; apilar por grupos en móvil.

## Imagen y producto

Da prioridad a renders realistas de lockers oscuros bien iluminados en fondos neutros, screenshots reales o fieles del panel, kioscos y móvil como parte del mismo ecosistema, y fotografía contextual que explique un sector real. Mantén las capturas legibles.

Evita imágenes de stock SaaS genéricas, nubes abstractas, personas flotantes, fondos saturados, mockups imposibles, perspectivas exageradas, gradientes marcados, sombras pesadas y texto minúsculo dentro de pantallas.

## Responsive

| Rango | Regla |
| --- | --- |
| Escritorio (`>=1200px`) | Dos columnas amplias; grids de 3-4 cards; 120-144 px entre secciones. |
| Tablet (`768-1199px`) | Dos columnas solo cuando mantengan legibilidad; dos cards por fila; 88-112 px entre secciones. |
| Móvil (`<768px`) | Una columna; CTAs a ancho completo o apilados; 64-88 px entre secciones; imagen después del texto cuando mejore la lectura. |

En móvil, el CTA principal ha de quedar visible pronto en el hero. Recorta las capturas intencionadamente o ubícalas en un contenedor horizontal; nunca las reduzcas hasta hacerlas ilegibles. No fuerces carruseles para conservar grids de cuatro cards.

## Copy y verificación

El copy explica primero un beneficio concreto, usa frases cortas y verbos de acción, y evita tecnicismos sin contexto. No reutilices el contenido de ejemplo de la guía. No afirmes capacidades, integraciones, métricas, clientes, certificaciones ni garantías sin una fuente aprobada en la tarea.

Antes de aprobar una pantalla, valida contraste, jerarquía, aire entre secciones, consistencia de botones/radios/bordes/sombras, legibilidad de producto y screenshots, y comportamiento en escritorio, tablet y móvil.
