export const locales = ['es', 'en', 'fr', 'de'] as const;
export type Locale = (typeof locales)[number];

export type PageKey =
  | 'home'
  | 'product'
  | 'solutions'
  | 'pricing'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | 'chatbotPrivacy';

export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  de: 'Deutsch'
};

export const paths: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: '/',
    product: '/producto',
    solutions: '/soluciones',
    pricing: '/precios',
    contact: '/contacto',
    privacy: '/privacidad',
    terms: '/terminos',
    cookies: '/cookies',
    chatbotPrivacy: '/politica-de-privacidad-del-chatbot-de-belockey'
  },
  en: {
    home: '/en',
    product: '/en/product',
    solutions: '/soluciones',
    pricing: '/en/pricing',
    contact: '/en/contact',
    privacy: '/en/privacy',
    terms: '/en/terms',
    cookies: '/en/cookies',
    chatbotPrivacy: '/en/chatbot-privacy'
  },
  fr: {
    home: '/fr',
    product: '/fr/produit',
    solutions: '/soluciones',
    pricing: '/fr/tarifs',
    contact: '/fr/contact',
    privacy: '/fr/confidentialite',
    terms: '/fr/conditions',
    cookies: '/fr/cookies',
    chatbotPrivacy: '/fr/confidentialite-chatbot'
  },
  de: {
    home: '/de',
    product: '/de/produkt',
    solutions: '/soluciones',
    pricing: '/de/preise',
    contact: '/de/kontakt',
    privacy: '/de/datenschutz',
    terms: '/de/bedingungen',
    cookies: '/de/cookies',
    chatbotPrivacy: '/de/chatbot-datenschutz'
  }
};

const legalEs = {
  privacy: {
    title: 'Política de privacidad',
    intro: 'Estructura visual para el contenido legal aprobado de BeLockey.',
    sections: ['1. Quiénes somos', '2. Qué recogemos, y por qué', '3. Bases jurídicas bajo el RGPD', '4. Dónde se guarda', '5. Cuánto tiempo lo conservamos', '6. Tus derechos', '7. Compartición con terceros', '8. Menores', '9. Cambios en esta política', '10. Contacto']
  },
  terms: {
    title: 'Términos y condiciones',
    intro: 'Estructura visual para las condiciones del servicio aprobadas de BeLockey.',
    sections: ['1. Partes', '2. El servicio', '3. Tu cuenta', '4. Uso aceptable', '5. Tarifas y pago', '6. SLA y créditos', '7. Tus datos', '8. Propiedad intelectual', '9. Confidencialidad', '10. Garantías y exoneraciones', '11. Limitación de responsabilidad', '12. Indemnizaciones', '13. Vigencia y rescisión', '14. Ley aplicable', '15. Cambios', '16. Contacto']
  },
  cookies: {
    title: 'Política de cookies',
    intro: 'Estructura visual para la política de cookies aprobada de BeLockey.',
    sections: ['1. Qué es una cookie', '2. Categorías que usamos', '3. La lista', '4. Cómo gestionar tus preferencias', '5. Do Not Track', '6. Niños', '7. Cambios', '8. Contacto']
  },
  chatbotPrivacy: {
    title: 'Política de privacidad del chatbot de BeLockey',
    intro: 'Página accesible por URL, sin enlace en la navegación principal ni en el footer.',
    sections: ['1. Responsable del tratamiento', '2. Qué es el chatbot de BeLockey', '3. Datos personales que podemos tratar', '4. Finalidades del tratamiento', '5. Bases jurídicas', '6. Uso de WhatsApp y Meta', '7. Uso de inteligencia artificial y sistemas automatizados', '8. Proveedores y encargados del tratamiento', '9. Transferencias internacionales de datos', '10. Conservación de los datos', '11. Comunicaciones comerciales', '12. Datos de terceros', '13. Menores de edad', '14. Seguridad', '15. Derechos de los usuarios', '16. Reclamaciones ante la autoridad de control', '17. Eliminación de datos', '18. Cambios en esta política']
  }
};

export const translations = {
  es: {
    common: {
      navLabel: 'Navegación principal', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', language: 'Idioma',
      nav: { product: 'Producto', solutions: 'Soluciones', pricing: 'Precios', contact: 'Contacto', demo: 'Solicitar demo →' },
      footer: {
        description: 'Software para gestionar negocios basados en lockers inteligentes.',
        productLinks: ['Visión general', 'Marca y experiencia', 'Operaciones', 'Pagos e integraciones', 'Preguntas frecuentes'],
        solutionLinks: ['Casos de uso', 'Sectores', 'Implementación', 'Guía de decisión'],
        pricingLinks: ['Cómo se compone', 'Factores de precio', 'Contratación', 'Preguntas frecuentes'],
        about: 'Sobre nosotros', privacy: 'Política de privacidad', terms: 'Términos y condiciones', cookies: 'Cookies',
        signature: 'Diseño web · Sistema visual BeLockey'
      }
    },
    product: {
      metaTitle: 'Producto · BeLockey', metaDescription: 'Plataforma BeLockey para gestión de lockers inteligentes.',
      hero: { eyebrow: 'Producto BeLockey', before: 'Una plataforma para', highlight: 'gestionar lockers', after: 'de principio a fin.', description: 'Centraliza reservas, taquillas, ubicaciones, usuarios, pagos y el estado de la operativa desde un único panel. Conecta la experiencia del cliente con la gestión diaria del negocio.', primary: 'Solicitar demo →', secondary: 'Ver cómo funciona', notes: ['Gestión centralizada', 'Acceso seguro', 'Operación remota'] },
      strip: ['Reservas online', 'Kiosco autoservicio', 'Gestión remota', 'Pagos integrados', 'Monitorización'],
      brand: { eyebrow: 'Tu marca por delante', title: 'Una experiencia coherente para tus clientes.', copy: 'Personaliza la experiencia visible del servicio para que la reserva, el kiosco y las comunicaciones encajen con la identidad de tu negocio.', cards: [['Identidad visual', 'Logo, colores y elementos visuales aplicados a los puntos de contacto.'], ['Web de reservas', 'Reserva online adaptada a la experiencia de tu negocio y tus ubicaciones.'], ['Kiosco en el local', 'Autoservicio para que el cliente pueda reservar y acceder desde la ubicación.'], ['Comunicaciones', 'Flujos y mensajes vinculados a la reserva y al acceso.']], panelEyebrow: 'Configuración', panelTitle: 'Una misma identidad en todos los canales', panelRows: ['Colores de marca', 'Reserva online', 'Kiosco', 'Pagos'] },
      operations: { eyebrow: 'Consola de operaciones', before: 'Toda tu operativa,', highlight: 'en una pantalla.', copy: 'Consulta y gestiona la actividad de tus ubicaciones desde una plataforma pensada para la operación diaria.', cards: [['Reservas', ['Reservas actuales y futuras', 'Estados y seguimiento', 'Gestión desde el panel']], ['Taquillas y ubicaciones', ['Estado de taquillas', 'Múltiples ubicaciones', 'Configuración centralizada']], ['Monitorización', ['Estado de conexión', 'Actividad reciente', 'Control remoto']]] },
      integrations: { eyebrow: 'Pagos e integraciones', title: 'Conecta la operativa con tus herramientas.', copy: 'BeLockey integra los pagos dentro del flujo de reserva y permite conectar la plataforma con servicios externos.', cards: [['Stripe', 'Integración de pago dentro del proceso de reserva.'], ['PayPal', 'Opción de pago integrada en la operativa.'], ['myPOS', 'Integración con el ecosistema de pagos utilizado por el negocio.']] },
      faq: { title: 'Preguntas sobre el producto.', items: ['¿Puedo gestionar varias ubicaciones?', '¿Los clientes pueden reservar online?', '¿Puedo utilizar un kiosco en el local?', '¿Cómo se monitoriza el estado de un kiosco?'] },
      cta: { eyebrow: 'Conoce BeLockey', title: '¿Quieres verlo funcionando en tu negocio?', copy: 'Solicita una demo y revisamos contigo el flujo que necesitas.', button: 'Solicitar demo →' }
    },
    home: {
      metaTitle: 'Soluciones · BeLockey', metaDescription: 'Soluciones de lockers inteligentes para distintos casos de uso y sectores.',
      hero: { eyebrow: 'Una solución para cada negocio', before: 'Soluciones para cada', highlight: 'caso de uso.', description: 'Adaptamos el hardware y el software a las necesidades de cada sector y modelo de negocio para ofrecer una experiencia de autoservicio segura, flexible y eficiente.', primary: 'Solicitar demo →', secondary: 'Explorar soluciones', imageAlt: 'Lockers inteligentes BeLockey con kiosco integrado', notes: ['Soluciones adaptadas al negocio', 'Hardware y software coordinados', 'Una o múltiples ubicaciones'] },
      tabs: ['Click & Collect', 'Custodia de equipaje', 'Consignas inteligentes', 'Custodia de llaves', 'Retail y e-commerce', 'Hoteles y turismo', 'Empresas', 'Transporte', 'Gimnasios y centros'],
      cases: { eyebrow: 'Soluciones destacadas', title: 'Casos de uso que transforman tu operación.', copy: 'Explora las principales soluciones y encuentra el enfoque que mejor encaja con tu operativa.', link: 'Saber más →', cards: [['Click & Collect', 'Entrega pedidos online y permite que tus clientes los recojan cuando quieran.'], ['Custodia de equipaje', 'Ofrece un espacio para equipaje con reservas digitales y acceso autónomo.'], ['Consignas inteligentes', 'Una solución versátil para objetos en espacios públicos, comerciales o de alta afluencia.'], ['Custodia de llaves', 'Gestiona llaves para alquileres, flotas, empresas de servicios y otros usos.']] },
      sectors: { eyebrow: 'Soluciones por sector', title: 'Tu sector, nuestra tecnología.', copy: 'Cada sector tiene retos propios. Configura la solución según el uso, el entorno y la operativa.', link: 'Ver solución →', cards: [['Retail y e-commerce', 'Entrega de pedidos online, devoluciones y recogidas.'], ['Hoteles y turismo', 'Custodia de equipaje y acceso autónomo para huéspedes.'], ['Empresas', 'Gestión de pertenencias, equipos de trabajo y llaves.'], ['Transporte', 'Consignas en estaciones, aeropuertos y terminales.'], ['Gimnasios y centros', 'Taquillas para socios, visitas y personal.']] },
      implementation: { eyebrow: 'Diferentes formas de implementación', title: 'Una solución, múltiples formas de funcionar.', cards: [['Reservas online', 'Los usuarios reservan y pagan desde el móvil.'], ['Autoservicio en el local', 'Acceso mediante los métodos configurados para el proyecto.'], ['Control remoto', 'Gestiona la operativa desde una única plataforma.'], ['Multiubicación', 'Coordina una o varias ubicaciones desde el mismo entorno.']] },
      includes: { eyebrow: 'Todo lo que necesitas', title: 'Qué incluye cada solución.', copy: 'Combina los elementos que necesita tu proyecto.', cards: [['Software de gestión', 'Panel web y herramientas de control.'], ['Hardware inteligente', 'Taquillas, kioscos y elementos de acceso.'], ['Pagos', 'Opciones de pago dentro del flujo configurado.'], ['Permisos y usuarios', 'Control de accesos y roles.'], ['Configuración y soporte', 'Acompañamiento según el alcance del proyecto.']] },
      guide: { eyebrow: 'Guía de decisión', title: 'Encuentra tu solución ideal.', copy: 'Compara las opciones según necesidad, ubicación y modelo operativo.', headers: ['Solución', 'Qué resuelve', 'Ubicación habitual', 'Modelo operativo', 'Ideal para'], rows: [['Click & Collect', 'Entrega y recogida de pedidos', 'Tiendas y centros comerciales', 'Autoservicio', 'Retail y e-commerce'], ['Custodia de equipaje', 'Guarda de maletas y pertenencias', 'Hoteles, estaciones y aeropuertos', 'Con reserva o autónomo', 'Turismo y transporte'], ['Consignas inteligentes', 'Custodia de objetos', 'Espacios públicos y centros', 'Autoservicio', 'Uso general'], ['Custodia de llaves', 'Gestión de llaves', 'Empresas, alquileres y servicios', 'Con permisos', 'Empresas y servicios']] },
      faq: { eyebrow: 'Preguntas frecuentes', title: 'Dudas comunes sobre nuestras soluciones.', items: ['¿Cómo se define la solución adecuada?', '¿Puedo adaptar el tamaño y número de taquillas?', '¿Qué métodos de pago están disponibles?', '¿Cómo se plantea la puesta en marcha?'] },
      cta: { title: '¿Hablamos de tu proyecto?', copy: 'Cuéntanos tu caso y te ayudamos a definir la solución.', primary: 'Solicitar demo →', secondary: 'Ver precios' }
    },
    pricing: {
      metaTitle: 'Precios · BeLockey', metaDescription: 'Cómo se compone una propuesta de BeLockey.',
      hero: { eyebrow: 'Precios', before: 'Una solución modular.', highlight: 'Un presupuesto adaptado.', description: 'El coste depende del alcance real del proyecto: hardware, número de ubicaciones, configuración del software, integraciones y servicios necesarios. Por eso la propuesta se prepara según cada caso.', primary: 'Solicitar presupuesto →', secondary: 'Ver cómo se compone' },
      composition: { eyebrow: 'Cómo se compone', title: 'Tres bloques para definir tu proyecto.', copy: 'La propuesta se construye con los elementos que realmente necesitas, sin trasladar al mock precios que todavía no están definidos.', cards: [['Hardware', 'Taquillas, kiosco y elementos de acceso según la instalación.', ['Configuración según el espacio', 'Tipos y tamaños de taquilla', 'Elementos de acceso compatibles']], ['Plataforma', 'Software de gestión, reservas, usuarios, ubicaciones y operativa.', ['Panel centralizado', 'Reserva online y/o kiosco', 'Pagos e integraciones']], ['Servicios', 'Implantación y acompañamiento según las necesidades del proyecto.', ['Configuración', 'Puesta en marcha', 'Soporte según alcance']]] },
      factors: { eyebrow: 'Factores de precio', title: 'Qué hace variar el presupuesto.', copy: 'Estos factores permiten dimensionar la solución sin inventar una tarifa única que no represente el proyecto real.', cards: [['Hardware', 'Número y configuración de taquillas y dispositivos.'], ['Ubicaciones', 'Una o varias instalaciones gestionadas desde la plataforma.'], ['Canales', 'Reserva web, kiosco y otros flujos necesarios.'], ['Integraciones', 'Pagos y conexiones requeridas por la operativa.'], ['Servicios', 'Implantación, configuración y soporte asociado.']] },
      hiring: { eyebrow: 'Contratación', title: 'Primero entendemos el proyecto. Después, te damos una propuesta.', copy: 'La página de precios no necesita mostrar cifras no confirmadas. El objetivo es explicar con claridad de qué depende el coste y llevar al usuario a una solicitud cualificada.', button: 'Solicitar presupuesto →', dataTitle: 'Datos que necesitamos', rows: [['Uso principal', 'Consigna, equipaje, llaves, Click & Collect…'], ['Ubicación', 'Número de instalaciones y entorno'], ['Capacidad', 'Necesidades aproximadas de taquillas'], ['Operativa', 'Reserva, acceso, pagos y gestión']] },
      faq: { title: 'Precios y contratación.', items: ['¿Cómo se calcula el precio?', '¿El hardware forma parte del proyecto?', '¿Se puede ampliar la solución más adelante?', '¿Cómo solicito una propuesta?'] },
      cta: 'Cuéntanos tu caso y dimensionamos la solución contigo.'
    },
    contact: {
      metaTitle: 'Contacto · BeLockey', metaDescription: 'Contacto comercial y solicitud de demo de BeLockey.',
      hero: { eyebrow: 'Contacto', before: 'Hablemos de tu proyecto', highlight: 'con lockers inteligentes.', copy: 'Cuéntanos qué necesitas y el equipo de BeLockey podrá orientarte sobre producto, precios o una demo.' },
      form: { title: 'Cuéntanos qué necesitas.', copy: 'Usa este formulario para solicitar información, presupuesto o una demo.', name: 'Nombre', namePlaceholder: 'Tu nombre', email: 'Email', company: 'Empresa (opcional)', companyPlaceholder: 'Nombre de empresa', topic: 'Tema', topicPlaceholder: 'Selecciona una opción ▾', message: 'Mensaje', messagePlaceholder: 'Cuéntanos brevemente tu proyecto, el uso previsto y cualquier requisito relevante.', send: 'Enviar mensaje →' },
      aside: { eyebrow: 'Antes de enviar', title: 'Información útil para orientarte mejor', items: ['Uso principal del locker', 'Número aproximado de ubicaciones', 'Si necesitas reserva online o kiosco', 'Métodos de acceso o pago que necesitas'], note: 'No mostramos en este mock teléfonos, direcciones ni tiempos de respuesta que no estén confirmados.' },
      cards: [['Producto', 'Consulta cómo encaja BeLockey en tu operativa y qué módulos necesitas.'], ['Precios', 'Solicita una propuesta ajustada al hardware, software y servicios requeridos.'], ['Demo', 'Revisa el flujo de producto con el equipo y resuelve tus dudas de implementación.']]
    },
    legal: { label: 'Legal', note: 'Mock visual: mantener aquí el texto legal aprobado vigente. No se añade contenido jurídico nuevo que no aparezca en las fuentes de BeLockey.', ...legalEs }
  },
  en: {
    common: {
      navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu', language: 'Language',
      nav: { product: 'Product', solutions: 'Solutions', pricing: 'Pricing', contact: 'Contact', demo: 'Request a demo →' },
      footer: { description: 'Software for managing businesses based on smart lockers.', productLinks: ['Overview', 'Brand and experience', 'Operations', 'Payments and integrations', 'Frequently asked questions'], solutionLinks: ['Use cases', 'Industries', 'Implementation', 'Decision guide'], pricingLinks: ['How pricing is structured', 'Pricing factors', 'Contracting', 'Frequently asked questions'], about: 'About us', privacy: 'Privacy policy', terms: 'Terms and conditions', cookies: 'Cookies', signature: 'Web design · BeLockey visual system' }
    },
    product: {
      metaTitle: 'Product · BeLockey', metaDescription: 'The BeLockey platform for managing smart lockers.',
      hero: { eyebrow: 'BeLockey product', before: 'One platform to', highlight: 'manage lockers', after: 'from start to finish.', description: 'Centralise bookings, lockers, locations, users, payments and operational status in one dashboard. Connect the customer experience with your day-to-day business management.', primary: 'Request a demo →', secondary: 'See how it works', notes: ['Centralised management', 'Secure access', 'Remote operation'] },
      strip: ['Online bookings', 'Self-service kiosk', 'Remote management', 'Integrated payments', 'Monitoring'],
      brand: { eyebrow: 'Your brand comes first', title: 'A consistent experience for your customers.', copy: 'Customise the visible service experience so that bookings, the kiosk and communications fit your business identity.', cards: [['Visual identity', 'Apply your logo, colours and visual elements across every touchpoint.'], ['Booking website', 'Online booking adapted to your business and locations.'], ['On-site kiosk', 'Self-service booking and access at the location.'], ['Communications', 'Messages and flows linked to bookings and access.']], panelEyebrow: 'Configuration', panelTitle: 'One identity across every channel', panelRows: ['Brand colours', 'Online booking', 'Kiosk', 'Payments'] },
      operations: { eyebrow: 'Operations console', before: 'Your entire operation,', highlight: 'on one screen.', copy: 'View and manage activity across your locations from a platform designed for daily operations.', cards: [['Bookings', ['Current and upcoming bookings', 'Statuses and tracking', 'Dashboard management']], ['Lockers and locations', ['Locker status', 'Multiple locations', 'Centralised configuration']], ['Monitoring', ['Connection status', 'Recent activity', 'Remote control']]] },
      integrations: { eyebrow: 'Payments and integrations', title: 'Connect operations with your tools.', copy: 'BeLockey integrates payments into the booking flow and lets you connect the platform to external services.', cards: [['Stripe', 'Payment integration within the booking process.'], ['PayPal', 'An integrated payment option for your operation.'], ['myPOS', 'Integration with the payment ecosystem used by your business.']] },
      faq: { title: 'Product questions.', items: ['Can I manage several locations?', 'Can customers book online?', 'Can I use a kiosk on site?', 'How is a kiosk’s status monitored?'] },
      cta: { eyebrow: 'Discover BeLockey', title: 'Would you like to see it working in your business?', copy: 'Request a demo and we will review the flow you need with you.', button: 'Request a demo →' }
    },
    home: {
      metaTitle: 'Solutions · BeLockey', metaDescription: 'Smart locker solutions for different use cases and industries.',
      hero: { eyebrow: 'A solution for every business', before: 'Solutions for every', highlight: 'use case.', description: 'We adapt the hardware and software to each industry and business model to provide a secure, flexible and efficient self-service experience.', primary: 'Request a demo →', secondary: 'Explore solutions', imageAlt: 'BeLockey smart lockers with an integrated kiosk', notes: ['Solutions tailored to the business', 'Coordinated hardware and software', 'One or multiple locations'] },
      tabs: ['Click & Collect', 'Luggage storage', 'Smart lockers', 'Key storage', 'Retail and e-commerce', 'Hotels and tourism', 'Companies', 'Transport', 'Gyms and centres'],
      cases: { eyebrow: 'Featured solutions', title: 'Use cases that transform your operation.', copy: 'Explore the main solutions and find the approach that best fits your operation.', link: 'Learn more →', cards: [['Click & Collect', 'Deliver online orders and let customers collect them at their convenience.'], ['Luggage storage', 'Provide space for luggage with digital booking and self-service access.'], ['Smart lockers', 'A versatile solution for objects in public, commercial or high-traffic spaces.'], ['Key storage', 'Manage keys for rentals, fleets, service companies and other uses.']] },
      sectors: { eyebrow: 'Solutions by industry', title: 'Your industry, our technology.', copy: 'Every industry has its own challenges. Configure the solution around its use, setting and operation.', link: 'View solution →', cards: [['Retail and e-commerce', 'Online order delivery, returns and collections.'], ['Hotels and tourism', 'Luggage storage and self-service access for guests.'], ['Companies', 'Management of belongings, work equipment and keys.'], ['Transport', 'Lockers in stations, airports and terminals.'], ['Gyms and centres', 'Lockers for members, visitors and staff.']] },
      implementation: { eyebrow: 'Different implementation models', title: 'One solution, multiple ways to operate.', cards: [['Online bookings', 'Users book and pay from their mobile.'], ['On-site self-service', 'Access through the methods configured for the project.'], ['Remote control', 'Manage the operation from one platform.'], ['Multiple locations', 'Coordinate one or several locations in the same environment.']] },
      includes: { eyebrow: 'Everything you need', title: 'What each solution includes.', copy: 'Combine the elements your project needs.', cards: [['Management software', 'Web dashboard and control tools.'], ['Smart hardware', 'Lockers, kiosks and access elements.'], ['Payments', 'Payment options within the configured flow.'], ['Permissions and users', 'Access control and roles.'], ['Configuration and support', 'Guidance based on the project scope.']] },
      guide: { eyebrow: 'Decision guide', title: 'Find the right solution.', copy: 'Compare options by need, location and operating model.', headers: ['Solution', 'What it solves', 'Typical location', 'Operating model', 'Ideal for'], rows: [['Click & Collect', 'Order delivery and collection', 'Shops and shopping centres', 'Self-service', 'Retail and e-commerce'], ['Luggage storage', 'Storage for luggage and belongings', 'Hotels, stations and airports', 'Booking or self-service', 'Tourism and transport'], ['Smart lockers', 'Storage of objects', 'Public spaces and centres', 'Self-service', 'General use'], ['Key storage', 'Key management', 'Companies, rentals and services', 'Permission-based', 'Companies and services']] },
      faq: { eyebrow: 'Frequently asked questions', title: 'Common questions about our solutions.', items: ['How is the right solution defined?', 'Can I adapt the size and number of lockers?', 'Which payment methods are available?', 'How is the launch planned?'] },
      cta: { title: 'Shall we discuss your project?', copy: 'Tell us about your use case and we will help you define the solution.', primary: 'Request a demo →', secondary: 'View pricing' }
    },
    pricing: {
      metaTitle: 'Pricing · BeLockey', metaDescription: 'How a BeLockey proposal is structured.',
      hero: { eyebrow: 'Pricing', before: 'A modular solution.', highlight: 'A tailored quote.', description: 'The cost depends on the actual scope of the project: hardware, number of locations, software configuration, integrations and required services. That is why each proposal is prepared individually.', primary: 'Request a quote →', secondary: 'See how pricing is structured' },
      composition: { eyebrow: 'How pricing is structured', title: 'Three building blocks for your project.', copy: 'The proposal is built around what you genuinely need, without showing prices that have not yet been defined.', cards: [['Hardware', 'Lockers, kiosk and access elements to suit the installation.', ['Configuration for the space', 'Locker types and sizes', 'Compatible access elements']], ['Platform', 'Management software for bookings, users, locations and operations.', ['Centralised dashboard', 'Online booking and/or kiosk', 'Payments and integrations']], ['Services', 'Implementation and guidance according to the project’s needs.', ['Configuration', 'Launch', 'Support based on scope']]] },
      factors: { eyebrow: 'Pricing factors', title: 'What affects the quote.', copy: 'These factors help size the solution without inventing a single price that does not reflect the actual project.', cards: [['Hardware', 'Number and configuration of lockers and devices.'], ['Locations', 'One or more installations managed from the platform.'], ['Channels', 'Web booking, kiosk and other required flows.'], ['Integrations', 'Payments and connections required by the operation.'], ['Services', 'Implementation, configuration and associated support.']] },
      hiring: { eyebrow: 'Contracting', title: 'First, we understand the project. Then we prepare a proposal.', copy: 'The pricing page does not need to show unconfirmed figures. Its purpose is to clearly explain what determines the cost and lead to a qualified request.', button: 'Request a quote →', dataTitle: 'Information we need', rows: [['Primary use', 'Luggage storage, baggage, keys, Click & Collect…'], ['Location', 'Number of installations and setting'], ['Capacity', 'Approximate locker requirements'], ['Operation', 'Booking, access, payments and management']] },
      faq: { title: 'Pricing and contracting.', items: ['How is the price calculated?', 'Is hardware part of the project?', 'Can the solution be expanded later?', 'How do I request a proposal?'] },
      cta: 'Tell us about your project and we will size the solution with you.'
    },
    contact: {
      metaTitle: 'Contact · BeLockey', metaDescription: 'Contact BeLockey sales or request a demo.',
      hero: { eyebrow: 'Contact', before: 'Let’s talk about your', highlight: 'smart locker project.', copy: 'Tell us what you need and the BeLockey team can advise you about the product, pricing or a demo.' },
      form: { title: 'Tell us what you need.', copy: 'Use this form to request information, a quote or a demo.', name: 'Name', namePlaceholder: 'Your name', email: 'Email', company: 'Company (optional)', companyPlaceholder: 'Company name', topic: 'Topic', topicPlaceholder: 'Select an option ▾', message: 'Message', messagePlaceholder: 'Briefly tell us about your project, intended use and any relevant requirements.', send: 'Send message →' },
      aside: { eyebrow: 'Before sending', title: 'Useful information to help us advise you', items: ['Main use of the locker', 'Approximate number of locations', 'Whether you need online booking or a kiosk', 'Required access or payment methods'], note: 'This mock does not show unconfirmed phone numbers, addresses or response times.' },
      cards: [['Product', 'See how BeLockey fits your operation and which modules you need.'], ['Pricing', 'Request a proposal tailored to the required hardware, software and services.'], ['Demo', 'Review the product flow with the team and resolve your implementation questions.']]
    },
    legal: {
      label: 'Legal', note: 'Visual mock: keep the currently approved legal text here. No new legal content is added unless it appears in BeLockey sources.',
      privacy: { title: 'Privacy policy', intro: 'Visual structure for BeLockey’s approved legal content.', sections: ['1. Who we are', '2. What we collect and why', '3. Legal bases under the GDPR', '4. Where it is stored', '5. How long we keep it', '6. Your rights', '7. Sharing with third parties', '8. Children', '9. Changes to this policy', '10. Contact'] },
      terms: { title: 'Terms and conditions', intro: 'Visual structure for BeLockey’s approved terms of service.', sections: ['1. Parties', '2. The service', '3. Your account', '4. Acceptable use', '5. Fees and payment', '6. SLA and credits', '7. Your data', '8. Intellectual property', '9. Confidentiality', '10. Warranties and disclaimers', '11. Limitation of liability', '12. Indemnities', '13. Term and termination', '14. Governing law', '15. Changes', '16. Contact'] },
      cookies: { title: 'Cookie policy', intro: 'Visual structure for BeLockey’s approved cookie policy.', sections: ['1. What a cookie is', '2. Categories we use', '3. The list', '4. How to manage your preferences', '5. Do Not Track', '6. Children', '7. Changes', '8. Contact'] },
      chatbotPrivacy: { title: 'BeLockey chatbot privacy policy', intro: 'A page accessible by URL, with no link in the main navigation or footer.', sections: ['1. Data controller', '2. What the BeLockey chatbot is', '3. Personal data we may process', '4. Purposes of processing', '5. Legal bases', '6. Use of WhatsApp and Meta', '7. Use of artificial intelligence and automated systems', '8. Providers and data processors', '9. International data transfers', '10. Data retention', '11. Commercial communications', '12. Third-party data', '13. Minors', '14. Security', '15. User rights', '16. Complaints to the supervisory authority', '17. Data deletion', '18. Changes to this policy'] }
    }
  },
  fr: {
    common: {
      navLabel: 'Navigation principale', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', language: 'Langue',
      nav: { product: 'Produit', solutions: 'Solutions', pricing: 'Tarifs', contact: 'Contact', demo: 'Demander une démo →' },
      footer: { description: 'Logiciel de gestion pour les entreprises utilisant des casiers intelligents.', productLinks: ['Vue d’ensemble', 'Marque et expérience', 'Opérations', 'Paiements et intégrations', 'Questions fréquentes'], solutionLinks: ['Cas d’usage', 'Secteurs', 'Mise en œuvre', 'Guide de décision'], pricingLinks: ['Composition du tarif', 'Facteurs de prix', 'Souscription', 'Questions fréquentes'], about: 'À propos', privacy: 'Politique de confidentialité', terms: 'Conditions générales', cookies: 'Cookies', signature: 'Design web · Système visuel BeLockey' }
    },
    product: {
      metaTitle: 'Produit · BeLockey', metaDescription: 'La plateforme BeLockey pour gérer les casiers intelligents.',
      hero: { eyebrow: 'Produit BeLockey', before: 'Une plateforme pour', highlight: 'gérer vos casiers', after: 'de bout en bout.', description: 'Centralisez les réservations, casiers, sites, utilisateurs, paiements et l’état des opérations dans un seul tableau de bord. Reliez l’expérience client à la gestion quotidienne de votre activité.', primary: 'Demander une démo →', secondary: 'Voir comment ça marche', notes: ['Gestion centralisée', 'Accès sécurisé', 'Opérations à distance'] },
      strip: ['Réservations en ligne', 'Borne en libre-service', 'Gestion à distance', 'Paiements intégrés', 'Supervision'],
      brand: { eyebrow: 'Votre marque au premier plan', title: 'Une expérience cohérente pour vos clients.', copy: 'Personnalisez l’expérience visible du service pour que la réservation, la borne et les communications correspondent à l’identité de votre entreprise.', cards: [['Identité visuelle', 'Votre logo, vos couleurs et vos éléments visuels sur chaque point de contact.'], ['Site de réservation', 'Une réservation en ligne adaptée à votre entreprise et à vos sites.'], ['Borne sur site', 'Un libre-service permettant de réserver et d’accéder aux casiers sur place.'], ['Communications', 'Des parcours et messages liés à la réservation et à l’accès.']], panelEyebrow: 'Configuration', panelTitle: 'Une même identité sur tous les canaux', panelRows: ['Couleurs de la marque', 'Réservation en ligne', 'Borne', 'Paiements'] },
      operations: { eyebrow: 'Console d’exploitation', before: 'Toutes vos opérations,', highlight: 'sur un seul écran.', copy: 'Consultez et gérez l’activité de vos sites depuis une plateforme conçue pour les opérations quotidiennes.', cards: [['Réservations', ['Réservations actuelles et futures', 'Statuts et suivi', 'Gestion depuis le tableau de bord']], ['Casiers et sites', ['État des casiers', 'Plusieurs sites', 'Configuration centralisée']], ['Supervision', ['État de la connexion', 'Activité récente', 'Contrôle à distance']]] },
      integrations: { eyebrow: 'Paiements et intégrations', title: 'Connectez vos opérations à vos outils.', copy: 'BeLockey intègre les paiements au parcours de réservation et permet de connecter la plateforme à des services externes.', cards: [['Stripe', 'Intégration du paiement dans le processus de réservation.'], ['PayPal', 'Une option de paiement intégrée à vos opérations.'], ['myPOS', 'Intégration à l’écosystème de paiement utilisé par votre entreprise.']] },
      faq: { title: 'Questions sur le produit.', items: ['Puis-je gérer plusieurs sites ?', 'Les clients peuvent-ils réserver en ligne ?', 'Puis-je utiliser une borne sur place ?', 'Comment superviser l’état d’une borne ?'] },
      cta: { eyebrow: 'Découvrez BeLockey', title: 'Vous souhaitez le voir fonctionner dans votre entreprise ?', copy: 'Demandez une démo et examinons ensemble le parcours dont vous avez besoin.', button: 'Demander une démo →' }
    },
    home: {
      metaTitle: 'Solutions · BeLockey', metaDescription: 'Solutions de casiers intelligents pour différents usages et secteurs.',
      hero: { eyebrow: 'Une solution pour chaque entreprise', before: 'Des solutions pour chaque', highlight: 'cas d’usage.', description: 'Nous adaptons le matériel et le logiciel à chaque secteur et modèle économique pour proposer une expérience en libre-service sûre, flexible et efficace.', primary: 'Demander une démo →', secondary: 'Explorer les solutions', imageAlt: 'Casiers intelligents BeLockey avec borne intégrée', notes: ['Solutions adaptées à l’entreprise', 'Matériel et logiciel coordonnés', 'Un ou plusieurs sites'] },
      tabs: ['Click & Collect', 'Consigne à bagages', 'Casiers intelligents', 'Consigne de clés', 'Retail et e-commerce', 'Hôtels et tourisme', 'Entreprises', 'Transport', 'Salles de sport et centres'],
      cases: { eyebrow: 'Solutions à la une', title: 'Des cas d’usage qui transforment vos opérations.', copy: 'Explorez les principales solutions et trouvez l’approche adaptée à vos opérations.', link: 'En savoir plus →', cards: [['Click & Collect', 'Livrez les commandes en ligne et laissez les clients les retirer quand ils le souhaitent.'], ['Consigne à bagages', 'Proposez un espace pour les bagages avec réservation numérique et accès autonome.'], ['Casiers intelligents', 'Une solution polyvalente pour les objets dans les espaces publics, commerciaux ou très fréquentés.'], ['Consigne de clés', 'Gérez les clés pour les locations, flottes, sociétés de services et autres usages.']] },
      sectors: { eyebrow: 'Solutions par secteur', title: 'Votre secteur, notre technologie.', copy: 'Chaque secteur a ses propres défis. Configurez la solution selon l’usage, l’environnement et les opérations.', link: 'Voir la solution →', cards: [['Retail et e-commerce', 'Livraison de commandes en ligne, retours et retraits.'], ['Hôtels et tourisme', 'Consigne à bagages et accès autonome pour les clients.'], ['Entreprises', 'Gestion des effets personnels, équipements et clés.'], ['Transport', 'Casiers dans les gares, aéroports et terminaux.'], ['Salles de sport et centres', 'Casiers pour les membres, visiteurs et équipes.']] },
      implementation: { eyebrow: 'Différents modèles de mise en œuvre', title: 'Une solution, plusieurs modes de fonctionnement.', cards: [['Réservations en ligne', 'Les utilisateurs réservent et paient depuis leur mobile.'], ['Libre-service sur site', 'Accès via les méthodes configurées pour le projet.'], ['Contrôle à distance', 'Gérez les opérations depuis une plateforme unique.'], ['Multi-sites', 'Coordonnez un ou plusieurs sites dans le même environnement.']] },
      includes: { eyebrow: 'Tout ce dont vous avez besoin', title: 'Ce que comprend chaque solution.', copy: 'Combinez les éléments nécessaires à votre projet.', cards: [['Logiciel de gestion', 'Tableau de bord web et outils de contrôle.'], ['Matériel intelligent', 'Casiers, bornes et éléments d’accès.'], ['Paiements', 'Options de paiement intégrées au parcours configuré.'], ['Autorisations et utilisateurs', 'Contrôle des accès et rôles.'], ['Configuration et assistance', 'Accompagnement selon le périmètre du projet.']] },
      guide: { eyebrow: 'Guide de décision', title: 'Trouvez la solution adaptée.', copy: 'Comparez les options selon le besoin, le lieu et le modèle opérationnel.', headers: ['Solution', 'Besoin couvert', 'Lieu habituel', 'Modèle opérationnel', 'Idéal pour'], rows: [['Click & Collect', 'Livraison et retrait de commandes', 'Magasins et centres commerciaux', 'Libre-service', 'Retail et e-commerce'], ['Consigne à bagages', 'Garde de bagages et d’effets personnels', 'Hôtels, gares et aéroports', 'Avec réservation ou autonome', 'Tourisme et transport'], ['Casiers intelligents', 'Garde d’objets', 'Espaces publics et centres', 'Libre-service', 'Usage général'], ['Consigne de clés', 'Gestion des clés', 'Entreprises, locations et services', 'Avec autorisations', 'Entreprises et services']] },
      faq: { eyebrow: 'Questions fréquentes', title: 'Questions courantes sur nos solutions.', items: ['Comment définir la bonne solution ?', 'Puis-je adapter la taille et le nombre de casiers ?', 'Quels moyens de paiement sont disponibles ?', 'Comment la mise en service est-elle organisée ?'] },
      cta: { title: 'Parlons de votre projet.', copy: 'Présentez-nous votre usage et nous vous aiderons à définir la solution.', primary: 'Demander une démo →', secondary: 'Voir les tarifs' }
    },
    pricing: {
      metaTitle: 'Tarifs · BeLockey', metaDescription: 'Comment se compose une proposition BeLockey.',
      hero: { eyebrow: 'Tarifs', before: 'Une solution modulaire.', highlight: 'Un devis adapté.', description: 'Le coût dépend du périmètre réel du projet : matériel, nombre de sites, configuration du logiciel, intégrations et services nécessaires. Chaque proposition est donc préparée sur mesure.', primary: 'Demander un devis →', secondary: 'Voir la composition' },
      composition: { eyebrow: 'Composition du tarif', title: 'Trois blocs pour définir votre projet.', copy: 'La proposition est construite avec les éléments dont vous avez réellement besoin, sans afficher de prix qui ne sont pas encore définis.', cards: [['Matériel', 'Casiers, borne et éléments d’accès adaptés à l’installation.', ['Configuration selon l’espace', 'Types et dimensions des casiers', 'Éléments d’accès compatibles']], ['Plateforme', 'Logiciel de gestion des réservations, utilisateurs, sites et opérations.', ['Tableau de bord centralisé', 'Réservation en ligne et/ou borne', 'Paiements et intégrations']], ['Services', 'Déploiement et accompagnement selon les besoins du projet.', ['Configuration', 'Mise en service', 'Assistance selon le périmètre']]] },
      factors: { eyebrow: 'Facteurs de prix', title: 'Ce qui fait varier le devis.', copy: 'Ces facteurs permettent de dimensionner la solution sans inventer un tarif unique qui ne reflète pas le projet réel.', cards: [['Matériel', 'Nombre et configuration des casiers et appareils.'], ['Sites', 'Une ou plusieurs installations gérées depuis la plateforme.'], ['Canaux', 'Réservation web, borne et autres parcours nécessaires.'], ['Intégrations', 'Paiements et connexions nécessaires aux opérations.'], ['Services', 'Déploiement, configuration et assistance associée.']] },
      hiring: { eyebrow: 'Souscription', title: 'Nous comprenons d’abord le projet. Ensuite, nous vous proposons une offre.', copy: 'La page des tarifs n’a pas besoin d’afficher de montants non confirmés. Elle explique clairement ce qui détermine le coût et vous mène vers une demande qualifiée.', button: 'Demander un devis →', dataTitle: 'Informations nécessaires', rows: [['Usage principal', 'Consigne, bagages, clés, Click & Collect…'], ['Site', 'Nombre d’installations et environnement'], ['Capacité', 'Besoins approximatifs en casiers'], ['Opérations', 'Réservation, accès, paiements et gestion']] },
      faq: { title: 'Tarifs et souscription.', items: ['Comment le prix est-il calculé ?', 'Le matériel fait-il partie du projet ?', 'La solution peut-elle être étendue plus tard ?', 'Comment demander une proposition ?'] },
      cta: 'Parlez-nous de votre projet et dimensionnons la solution ensemble.'
    },
    contact: {
      metaTitle: 'Contact · BeLockey', metaDescription: 'Contact commercial et demande de démo BeLockey.',
      hero: { eyebrow: 'Contact', before: 'Parlons de votre projet', highlight: 'de casiers intelligents.', copy: 'Expliquez-nous vos besoins : l’équipe BeLockey pourra vous conseiller sur le produit, les tarifs ou une démo.' },
      form: { title: 'Expliquez-nous vos besoins.', copy: 'Utilisez ce formulaire pour demander des informations, un devis ou une démo.', name: 'Nom', namePlaceholder: 'Votre nom', email: 'E-mail', company: 'Entreprise (facultatif)', companyPlaceholder: 'Nom de l’entreprise', topic: 'Sujet', topicPlaceholder: 'Sélectionnez une option ▾', message: 'Message', messagePlaceholder: 'Décrivez brièvement votre projet, l’usage prévu et toute exigence pertinente.', send: 'Envoyer le message →' },
      aside: { eyebrow: 'Avant l’envoi', title: 'Informations utiles pour mieux vous conseiller', items: ['Usage principal du casier', 'Nombre approximatif de sites', 'Besoin d’une réservation en ligne ou d’une borne', 'Modes d’accès ou de paiement nécessaires'], note: 'Cette maquette n’affiche aucun numéro de téléphone, adresse ou délai de réponse non confirmé.' },
      cards: [['Produit', 'Découvrez comment BeLockey s’intègre à vos opérations et les modules nécessaires.'], ['Tarifs', 'Demandez une proposition adaptée au matériel, au logiciel et aux services requis.'], ['Démo', 'Parcourez le produit avec l’équipe et posez vos questions sur la mise en œuvre.']]
    },
    legal: {
      label: 'Mentions légales', note: 'Maquette visuelle : conserver ici le texte juridique approuvé et en vigueur. Aucun nouveau contenu juridique n’est ajouté s’il ne figure pas dans les sources BeLockey.',
      privacy: { title: 'Politique de confidentialité', intro: 'Structure visuelle pour le contenu juridique approuvé de BeLockey.', sections: ['1. Qui sommes-nous ?', '2. Données collectées et finalités', '3. Bases juridiques au titre du RGPD', '4. Lieu de stockage', '5. Durée de conservation', '6. Vos droits', '7. Partage avec des tiers', '8. Mineurs', '9. Modifications de cette politique', '10. Contact'] },
      terms: { title: 'Conditions générales', intro: 'Structure visuelle pour les conditions de service approuvées de BeLockey.', sections: ['1. Parties', '2. Le service', '3. Votre compte', '4. Utilisation acceptable', '5. Tarifs et paiement', '6. SLA et crédits', '7. Vos données', '8. Propriété intellectuelle', '9. Confidentialité', '10. Garanties et exclusions', '11. Limitation de responsabilité', '12. Indemnisation', '13. Durée et résiliation', '14. Droit applicable', '15. Modifications', '16. Contact'] },
      cookies: { title: 'Politique relative aux cookies', intro: 'Structure visuelle pour la politique relative aux cookies approuvée de BeLockey.', sections: ['1. Qu’est-ce qu’un cookie ?', '2. Catégories utilisées', '3. La liste', '4. Gérer vos préférences', '5. Do Not Track', '6. Mineurs', '7. Modifications', '8. Contact'] },
      chatbotPrivacy: { title: 'Politique de confidentialité du chatbot BeLockey', intro: 'Page accessible par URL, sans lien dans la navigation principale ni dans le pied de page.', sections: ['1. Responsable du traitement', '2. Qu’est-ce que le chatbot BeLockey ?', '3. Données personnelles susceptibles d’être traitées', '4. Finalités du traitement', '5. Bases juridiques', '6. Utilisation de WhatsApp et Meta', '7. Utilisation de l’intelligence artificielle et de systèmes automatisés', '8. Prestataires et sous-traitants', '9. Transferts internationaux de données', '10. Conservation des données', '11. Communications commerciales', '12. Données de tiers', '13. Mineurs', '14. Sécurité', '15. Droits des utilisateurs', '16. Réclamations auprès de l’autorité de contrôle', '17. Suppression des données', '18. Modifications de cette politique'] }
    }
  },
  de: {
    common: {
      navLabel: 'Hauptnavigation', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', language: 'Sprache',
      nav: { product: 'Produkt', solutions: 'Lösungen', pricing: 'Preise', contact: 'Kontakt', demo: 'Demo anfragen →' },
      footer: { description: 'Software zur Verwaltung von Unternehmen mit intelligenten Schließfächern.', productLinks: ['Überblick', 'Marke und Erlebnis', 'Betrieb', 'Zahlungen und Integrationen', 'Häufige Fragen'], solutionLinks: ['Anwendungsfälle', 'Branchen', 'Implementierung', 'Entscheidungshilfe'], pricingLinks: ['Preisaufbau', 'Preisfaktoren', 'Beauftragung', 'Häufige Fragen'], about: 'Über uns', privacy: 'Datenschutzerklärung', terms: 'Allgemeine Geschäftsbedingungen', cookies: 'Cookies', signature: 'Webdesign · BeLockey Gestaltungssystem' }
    },
    product: {
      metaTitle: 'Produkt · BeLockey', metaDescription: 'Die BeLockey-Plattform zur Verwaltung intelligenter Schließfächer.',
      hero: { eyebrow: 'BeLockey Produkt', before: 'Eine Plattform, um', highlight: 'Schließfächer zu verwalten', after: '– von Anfang bis Ende.', description: 'Bündeln Sie Buchungen, Schließfächer, Standorte, Nutzer, Zahlungen und den Betriebsstatus in einem zentralen Dashboard. Verbinden Sie das Kundenerlebnis mit der täglichen Verwaltung Ihres Unternehmens.', primary: 'Demo anfragen →', secondary: 'So funktioniert es', notes: ['Zentrale Verwaltung', 'Sicherer Zugang', 'Fernbetrieb'] },
      strip: ['Online-Buchungen', 'Selbstbedienungsterminal', 'Fernverwaltung', 'Integrierte Zahlungen', 'Überwachung'],
      brand: { eyebrow: 'Ihre Marke im Mittelpunkt', title: 'Ein stimmiges Erlebnis für Ihre Kunden.', copy: 'Passen Sie das sichtbare Serviceerlebnis so an, dass Buchung, Terminal und Kommunikation zur Identität Ihres Unternehmens passen.', cards: [['Visuelle Identität', 'Logo, Farben und visuelle Elemente an allen Kontaktpunkten.'], ['Buchungswebsite', 'Online-Buchung passend zu Ihrem Unternehmen und Ihren Standorten.'], ['Terminal vor Ort', 'Selbstbedienung für Buchung und Zugang direkt am Standort.'], ['Kommunikation', 'Abläufe und Nachrichten rund um Buchung und Zugang.']], panelEyebrow: 'Konfiguration', panelTitle: 'Eine Identität auf allen Kanälen', panelRows: ['Markenfarben', 'Online-Buchung', 'Terminal', 'Zahlungen'] },
      operations: { eyebrow: 'Betriebskonsole', before: 'Ihr gesamter Betrieb,', highlight: 'auf einem Bildschirm.', copy: 'Überblicken und verwalten Sie die Aktivitäten Ihrer Standorte auf einer Plattform für den täglichen Betrieb.', cards: [['Buchungen', ['Aktuelle und zukünftige Buchungen', 'Status und Nachverfolgung', 'Verwaltung im Dashboard']], ['Schließfächer und Standorte', ['Schließfachstatus', 'Mehrere Standorte', 'Zentrale Konfiguration']], ['Überwachung', ['Verbindungsstatus', 'Letzte Aktivitäten', 'Fernsteuerung']]] },
      integrations: { eyebrow: 'Zahlungen und Integrationen', title: 'Verbinden Sie den Betrieb mit Ihren Tools.', copy: 'BeLockey bindet Zahlungen in den Buchungsablauf ein und ermöglicht die Verbindung der Plattform mit externen Diensten.', cards: [['Stripe', 'Zahlungsintegration innerhalb des Buchungsprozesses.'], ['PayPal', 'Eine integrierte Zahlungsoption für Ihren Betrieb.'], ['myPOS', 'Integration in das von Ihrem Unternehmen genutzte Zahlungsumfeld.']] },
      faq: { title: 'Fragen zum Produkt.', items: ['Kann ich mehrere Standorte verwalten?', 'Können Kunden online buchen?', 'Kann ich vor Ort ein Terminal einsetzen?', 'Wie wird der Status eines Terminals überwacht?'] },
      cta: { eyebrow: 'BeLockey kennenlernen', title: 'Möchten Sie es in Ihrem Unternehmen in Aktion sehen?', copy: 'Fordern Sie eine Demo an und besprechen Sie mit uns den benötigten Ablauf.', button: 'Demo anfragen →' }
    },
    home: {
      metaTitle: 'Lösungen · BeLockey', metaDescription: 'Intelligente Schließfachlösungen für verschiedene Anwendungen und Branchen.',
      hero: { eyebrow: 'Eine Lösung für jedes Unternehmen', before: 'Lösungen für jeden', highlight: 'Anwendungsfall.', description: 'Wir passen Hardware und Software an Branche und Geschäftsmodell an – für ein sicheres, flexibles und effizientes Selbstbedienungserlebnis.', primary: 'Demo anfragen →', secondary: 'Lösungen entdecken', imageAlt: 'Intelligente BeLockey-Schließfächer mit integriertem Terminal', notes: ['An das Unternehmen angepasste Lösungen', 'Abgestimmte Hard- und Software', 'Ein oder mehrere Standorte'] },
      tabs: ['Click & Collect', 'Gepäckaufbewahrung', 'Intelligente Schließfächer', 'Schlüsselaufbewahrung', 'Einzelhandel und E-Commerce', 'Hotels und Tourismus', 'Unternehmen', 'Verkehr', 'Fitnessstudios und Zentren'],
      cases: { eyebrow: 'Ausgewählte Lösungen', title: 'Anwendungsfälle, die Ihren Betrieb verändern.', copy: 'Entdecken Sie die wichtigsten Lösungen und finden Sie den passenden Ansatz für Ihren Betrieb.', link: 'Mehr erfahren →', cards: [['Click & Collect', 'Stellen Sie Online-Bestellungen bereit und ermöglichen Sie eine flexible Abholung.'], ['Gepäckaufbewahrung', 'Bieten Sie Platz für Gepäck mit digitaler Buchung und selbstständigem Zugang.'], ['Intelligente Schließfächer', 'Eine vielseitige Lösung für Gegenstände in öffentlichen, gewerblichen oder stark frequentierten Bereichen.'], ['Schlüsselaufbewahrung', 'Verwalten Sie Schlüssel für Vermietungen, Flotten, Dienstleister und weitere Anwendungen.']] },
      sectors: { eyebrow: 'Lösungen nach Branche', title: 'Ihre Branche, unsere Technologie.', copy: 'Jede Branche hat eigene Anforderungen. Konfigurieren Sie die Lösung passend zu Nutzung, Umgebung und Betrieb.', link: 'Lösung ansehen →', cards: [['Einzelhandel und E-Commerce', 'Bereitstellung, Rückgabe und Abholung von Online-Bestellungen.'], ['Hotels und Tourismus', 'Gepäckaufbewahrung und selbstständiger Zugang für Gäste.'], ['Unternehmen', 'Verwaltung von Gegenständen, Arbeitsmitteln und Schlüsseln.'], ['Verkehr', 'Schließfächer an Bahnhöfen, Flughäfen und Terminals.'], ['Fitnessstudios und Zentren', 'Schließfächer für Mitglieder, Besucher und Personal.']] },
      implementation: { eyebrow: 'Verschiedene Implementierungsmodelle', title: 'Eine Lösung, mehrere Betriebsmodelle.', cards: [['Online-Buchungen', 'Nutzer buchen und bezahlen mobil.'], ['Selbstbedienung vor Ort', 'Zugang über die für das Projekt konfigurierten Methoden.'], ['Fernsteuerung', 'Verwalten Sie den Betrieb über eine zentrale Plattform.'], ['Mehrere Standorte', 'Koordinieren Sie einen oder mehrere Standorte in derselben Umgebung.']] },
      includes: { eyebrow: 'Alles, was Sie benötigen', title: 'Bestandteile jeder Lösung.', copy: 'Kombinieren Sie die Elemente, die Ihr Projekt benötigt.', cards: [['Verwaltungssoftware', 'Web-Dashboard und Steuerungswerkzeuge.'], ['Intelligente Hardware', 'Schließfächer, Terminals und Zugangselemente.'], ['Zahlungen', 'Zahlungsoptionen innerhalb des konfigurierten Ablaufs.'], ['Berechtigungen und Nutzer', 'Zugangssteuerung und Rollen.'], ['Konfiguration und Support', 'Begleitung passend zum Projektumfang.']] },
      guide: { eyebrow: 'Entscheidungshilfe', title: 'Finden Sie die passende Lösung.', copy: 'Vergleichen Sie die Optionen nach Bedarf, Standort und Betriebsmodell.', headers: ['Lösung', 'Gelöster Bedarf', 'Typischer Standort', 'Betriebsmodell', 'Ideal für'], rows: [['Click & Collect', 'Bereitstellung und Abholung von Bestellungen', 'Geschäfte und Einkaufszentren', 'Selbstbedienung', 'Einzelhandel und E-Commerce'], ['Gepäckaufbewahrung', 'Aufbewahrung von Gepäck und Gegenständen', 'Hotels, Bahnhöfe und Flughäfen', 'Mit Buchung oder selbstständig', 'Tourismus und Verkehr'], ['Intelligente Schließfächer', 'Aufbewahrung von Gegenständen', 'Öffentliche Bereiche und Zentren', 'Selbstbedienung', 'Allgemeine Nutzung'], ['Schlüsselaufbewahrung', 'Schlüsselverwaltung', 'Unternehmen, Vermietungen und Dienste', 'Berechtigungsbasiert', 'Unternehmen und Dienste']] },
      faq: { eyebrow: 'Häufige Fragen', title: 'Häufige Fragen zu unseren Lösungen.', items: ['Wie wird die passende Lösung bestimmt?', 'Kann ich Größe und Anzahl der Schließfächer anpassen?', 'Welche Zahlungsmethoden sind verfügbar?', 'Wie wird die Inbetriebnahme geplant?'] },
      cta: { title: 'Sprechen wir über Ihr Projekt.', copy: 'Beschreiben Sie Ihren Anwendungsfall – wir helfen Ihnen, die Lösung zu definieren.', primary: 'Demo anfragen →', secondary: 'Preise ansehen' }
    },
    pricing: {
      metaTitle: 'Preise · BeLockey', metaDescription: 'So setzt sich ein Angebot von BeLockey zusammen.',
      hero: { eyebrow: 'Preise', before: 'Eine modulare Lösung.', highlight: 'Ein passendes Angebot.', description: 'Die Kosten hängen vom tatsächlichen Projektumfang ab: Hardware, Anzahl der Standorte, Softwarekonfiguration, Integrationen und benötigte Leistungen. Deshalb wird jedes Angebot individuell erstellt.', primary: 'Angebot anfragen →', secondary: 'Preisaufbau ansehen' },
      composition: { eyebrow: 'Preisaufbau', title: 'Drei Bausteine für Ihr Projekt.', copy: 'Das Angebot enthält genau die Elemente, die Sie wirklich benötigen – ohne noch nicht festgelegte Preise darzustellen.', cards: [['Hardware', 'Schließfächer, Terminal und Zugangselemente passend zur Installation.', ['Konfiguration passend zum Raum', 'Arten und Größen der Schließfächer', 'Kompatible Zugangselemente']], ['Plattform', 'Verwaltungssoftware für Buchungen, Nutzer, Standorte und Betrieb.', ['Zentrales Dashboard', 'Online-Buchung und/oder Terminal', 'Zahlungen und Integrationen']], ['Leistungen', 'Implementierung und Begleitung nach den Anforderungen des Projekts.', ['Konfiguration', 'Inbetriebnahme', 'Support je nach Umfang']]] },
      factors: { eyebrow: 'Preisfaktoren', title: 'Was das Angebot beeinflusst.', copy: 'Mit diesen Faktoren lässt sich die Lösung dimensionieren, ohne einen Einheitspreis zu erfinden, der das reale Projekt nicht abbildet.', cards: [['Hardware', 'Anzahl und Konfiguration der Schließfächer und Geräte.'], ['Standorte', 'Eine oder mehrere über die Plattform verwaltete Installationen.'], ['Kanäle', 'Webbuchung, Terminal und weitere benötigte Abläufe.'], ['Integrationen', 'Zahlungen und Verbindungen, die der Betrieb benötigt.'], ['Leistungen', 'Implementierung, Konfiguration und zugehöriger Support.']] },
      hiring: { eyebrow: 'Beauftragung', title: 'Zuerst verstehen wir Ihr Projekt. Dann erstellen wir ein Angebot.', copy: 'Auf der Preisseite müssen keine unbestätigten Zahlen stehen. Sie erklärt klar, wovon die Kosten abhängen, und führt zu einer qualifizierten Anfrage.', button: 'Angebot anfragen →', dataTitle: 'Diese Angaben benötigen wir', rows: [['Hauptanwendung', 'Aufbewahrung, Gepäck, Schlüssel, Click & Collect…'], ['Standort', 'Anzahl der Installationen und Umgebung'], ['Kapazität', 'Ungefährer Bedarf an Schließfächern'], ['Betrieb', 'Buchung, Zugang, Zahlungen und Verwaltung']] },
      faq: { title: 'Preise und Beauftragung.', items: ['Wie wird der Preis berechnet?', 'Gehört die Hardware zum Projekt?', 'Kann die Lösung später erweitert werden?', 'Wie fordere ich ein Angebot an?'] },
      cta: 'Erzählen Sie uns von Ihrem Projekt – wir dimensionieren die Lösung gemeinsam mit Ihnen.'
    },
    contact: {
      metaTitle: 'Kontakt · BeLockey', metaDescription: 'Vertriebskontakt und Demo-Anfrage bei BeLockey.',
      hero: { eyebrow: 'Kontakt', before: 'Sprechen wir über Ihr Projekt', highlight: 'mit intelligenten Schließfächern.', copy: 'Teilen Sie uns Ihre Anforderungen mit. Das BeLockey-Team berät Sie gerne zu Produkt, Preisen oder einer Demo.' },
      form: { title: 'Was benötigen Sie?', copy: 'Nutzen Sie dieses Formular, um Informationen, ein Angebot oder eine Demo anzufordern.', name: 'Name', namePlaceholder: 'Ihr Name', email: 'E-Mail', company: 'Unternehmen (optional)', companyPlaceholder: 'Unternehmensname', topic: 'Thema', topicPlaceholder: 'Option auswählen ▾', message: 'Nachricht', messagePlaceholder: 'Beschreiben Sie kurz Ihr Projekt, die vorgesehene Nutzung und relevante Anforderungen.', send: 'Nachricht senden →' },
      aside: { eyebrow: 'Vor dem Absenden', title: 'Hilfreiche Angaben für eine passende Beratung', items: ['Hauptanwendung des Schließfachs', 'Ungefähre Anzahl der Standorte', 'Bedarf an Online-Buchung oder Terminal', 'Benötigte Zugangs- oder Zahlungsmethoden'], note: 'Dieses Mockup zeigt keine unbestätigten Telefonnummern, Adressen oder Reaktionszeiten.' },
      cards: [['Produkt', 'Erfahren Sie, wie BeLockey zu Ihrem Betrieb passt und welche Module Sie benötigen.'], ['Preise', 'Fordern Sie ein Angebot passend zu Hardware, Software und benötigten Leistungen an.'], ['Demo', 'Gehen Sie den Produktablauf mit unserem Team durch und klären Sie Fragen zur Umsetzung.']]
    },
    legal: {
      label: 'Rechtliches', note: 'Visuelles Mockup: Hier bleibt der aktuell freigegebene Rechtstext bestehen. Neue rechtliche Inhalte werden nur ergänzt, wenn sie in den BeLockey-Quellen enthalten sind.',
      privacy: { title: 'Datenschutzerklärung', intro: 'Visuelle Struktur für die freigegebenen rechtlichen Inhalte von BeLockey.', sections: ['1. Wer wir sind', '2. Welche Daten wir erheben und warum', '3. Rechtsgrundlagen nach DSGVO', '4. Speicherort', '5. Speicherdauer', '6. Ihre Rechte', '7. Weitergabe an Dritte', '8. Minderjährige', '9. Änderungen dieser Erklärung', '10. Kontakt'] },
      terms: { title: 'Allgemeine Geschäftsbedingungen', intro: 'Visuelle Struktur für die freigegebenen BeLockey-Nutzungsbedingungen.', sections: ['1. Parteien', '2. Der Dienst', '3. Ihr Konto', '4. Zulässige Nutzung', '5. Gebühren und Zahlung', '6. SLA und Gutschriften', '7. Ihre Daten', '8. Geistiges Eigentum', '9. Vertraulichkeit', '10. Gewährleistungen und Haftungsausschlüsse', '11. Haftungsbeschränkung', '12. Freistellungen', '13. Laufzeit und Kündigung', '14. Anwendbares Recht', '15. Änderungen', '16. Kontakt'] },
      cookies: { title: 'Cookie-Richtlinie', intro: 'Visuelle Struktur für die freigegebene Cookie-Richtlinie von BeLockey.', sections: ['1. Was ist ein Cookie?', '2. Verwendete Kategorien', '3. Die Liste', '4. Einstellungen verwalten', '5. Do Not Track', '6. Minderjährige', '7. Änderungen', '8. Kontakt'] },
      chatbotPrivacy: { title: 'Datenschutzerklärung für den BeLockey-Chatbot', intro: 'Diese Seite ist über ihre URL erreichbar, aber nicht in Hauptnavigation oder Footer verlinkt.', sections: ['1. Verantwortlicher', '2. Was ist der BeLockey-Chatbot?', '3. Personenbezogene Daten, die wir verarbeiten können', '4. Zwecke der Verarbeitung', '5. Rechtsgrundlagen', '6. Nutzung von WhatsApp und Meta', '7. Nutzung künstlicher Intelligenz und automatisierter Systeme', '8. Anbieter und Auftragsverarbeiter', '9. Internationale Datenübermittlungen', '10. Datenspeicherung', '11. Kommerzielle Kommunikation', '12. Daten Dritter', '13. Minderjährige', '14. Sicherheit', '15. Rechte der Nutzer', '16. Beschwerden bei der Aufsichtsbehörde', '17. Löschung von Daten', '18. Änderungen dieser Erklärung'] }
    }
  }
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function alternateLinks(page: PageKey) {
  return locales.map((locale) => ({ locale, href: paths[locale][page] }));
}
