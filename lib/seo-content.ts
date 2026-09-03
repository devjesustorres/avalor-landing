// Contenido bilingüe (ES/EN) de las páginas SEO dedicadas de Saventi.
// Estas páginas dan profundidad temática (GEO): una URL y FAQPage propia por
// consulta clave, en vez de concentrar todo en la landing.
// Fuente única: la misma data alimenta el HTML visible Y el JSON-LD (FAQPage),
// garantizando consistencia entre lo que ve el usuario y lo que cita el LLM.

export interface SeoCard {
  title: string;
  text: string;
  href?: string;
}

export interface SeoSection {
  eyebrow?: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: SeoCard[];
  note?: string;
}

export interface SeoFaq {
  q: string;
  a: string;
}

export interface SeoPageContent {
  updated: string;
  badge: string;
  title: string;
  lead: string;
  sections: SeoSection[];
  faq: { eyebrow: string; title: string; lead: string; items: SeoFaq[] };
  cta: { title: string; text: string; label: string; href: string };
  related: { eyebrow: string; title: string; cards: SeoCard[] };
}

/* ------------------------------------------------------------------ */
/* 1. SERVICIOS / SERVICES (overview)                                  */
/* ------------------------------------------------------------------ */

export const serviciosContent: { es: SeoPageContent; en: SeoPageContent } = {
  es: {
    updated: "Actualizado: septiembre de 2026",
    badge: "Servicios",
    title: "Servicios de Desarrollo de Software a la Medida",
    lead: "Saventi diseña y desarrolla software 100% a la medida para empresas en crecimiento: sistemas de gestión y ERPs, plataformas web y SaaS, aplicaciones móviles, integraciones API, modernización de sistemas y arquitectura cloud.",
    sections: [
      {
        eyebrow: "Qué hacemos",
        heading: "Seis líneas de servicio, un mismo estándar",
        intro:
          "Cada proyecto se modela según las reglas de tu negocio: sin plantillas, sin software prefabricado y con el código 100% transferido a tu empresa al finalizar.",
        cards: [
          {
            title: "Sistemas de Gestión & ERPs a la Medida",
            text: "Centraliza inventarios, ventas, facturación, compras, RRHH y operaciones en una plataforma privada adaptada a tus flujos internos.",
            href: "/desarrollo-erp",
          },
          {
            title: "Plataformas Web & Aplicaciones SaaS",
            text: "Soluciones web escalables y de alta velocidad con paneles de administración modernos y experiencia de usuario optimizada.",
          },
          {
            title: "Aplicaciones Móviles (iOS & Android)",
            text: "Apps nativas e híbridas con sincronización en tiempo real, notificaciones push y conexión directa con tus bases de datos.",
            href: "/aplicaciones-moviles",
          },
          {
            title: "Integraciones de APIs & Automatización",
            text: "Conexión con pasarelas de pago (Stripe, PayPal, bancos locales), WhatsApp Business API, CRMs y servicios de terceros.",
          },
          {
            title: "Modernización de Sistemas & Migración de Datos",
            text: "Migración de software obsoleto o lento hacia arquitecturas cloud contemporáneas, mejorando seguridad, velocidad y usabilidad.",
          },
          {
            title: "Consultoría Técnica & Arquitectura Cloud",
            text: "Asesoría para elegir la infraestructura óptima (AWS, Azure, Google Cloud) y optimizar el costo de tus servidores.",
          },
        ],
      },
      {
        eyebrow: "Por qué Saventi",
        heading: "Ingeniería a la medida con propiedad total",
        intro:
          "Diseñamos soluciones tecnológicas que impulsan la productividad y rentabilidad de tu empresa, con reglas claras desde el primer día.",
        bullets: [
          "100% a la medida: cada función, pantalla y base de datos se modela según tus procesos, sin atarte a software prefabricado.",
          "Propiedad del código: al finalizar se transfieren todos los derechos, repositorios, esquemas de base de datos y accesos, sin dependencias ni regalías.",
          "Confidencialidad: firmamos acuerdo de no divulgación (NDA) antes de cualquier análisis técnico o reunión de descubrimiento.",
          "Garantía y soporte: garantía técnica post-entrega incluida, más planes de soporte preventivo y monitoreo de infraestructura.",
        ],
      },
      {
        eyebrow: "Proceso",
        heading: "De la idea al despliegue, sin sorpresas",
        intro:
          "Trabajamos con un proceso transparente y entregas funcionales periódicas, para que valides avances reales en cada etapa.",
        paragraphs: [
          "Todo comienza con un diagnóstico técnico gratuito y un alcance cerrado antes de cotizar: así sabes exactamente qué se construirá y cuánto costará, sin costos ocultos.",
          "Desarrollamos en sprints ágiles con entregas quincenales, pruebas de calidad y despliegue en la nube (AWS, Azure, Google Cloud o Vercel), y la respuesta a tu solicitud de contacto llega en menos de 24 horas hábiles.",
        ],
        bullets: [
          "MVP o sistema inicial: 4 a 8 semanas.",
          "Plataformas o ERPs complejos: 8 a 16 semanas, con entregas funcionales quincenales.",
          "Tecnologías: React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MySQL y Redis.",
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre nuestros servicios",
      lead: "Resolvemos las dudas más habituales sobre qué podemos construir para tu empresa.",
      items: [
        {
          q: "¿Qué servicios de desarrollo de software ofrecen?",
          a: "Desarrollamos software 100% a la medida en seis líneas: sistemas de gestión y ERPs, plataformas web y SaaS, aplicaciones móviles iOS y Android, integraciones de APIs y automatización, modernización de sistemas y migración de datos, y consultoría de arquitectura cloud (AWS, Azure, Google Cloud).",
        },
        {
          q: "¿Hacen proyectos pequeños o solo grandes plataformas?",
          a: "Ambos. Construimos desde MVPs y sistemas iniciales de 4 a 8 semanas hasta ERPs y plataformas complejas de 8 a 16 semanas. El alcance se define en un diagnóstico técnico gratuito y cada proyecto se cotiza por etapas.",
        },
        {
          q: "¿Trabajan con clientes fuera de Venezuela?",
          a: "Sí. Aunque nuestra base está en Valencia (Carabobo), atendemos empresas de todo el mundo de forma remota: comunicación por Slack o Teams, sprints ágiles con entregas semanales o quincenales y despliegue en la nube.",
        },
        {
          q: "¿El servicio incluye mantenimiento después de la entrega?",
          a: "Sí. Todo proyecto incluye garantía técnica post-entrega contra bugs. Además ofrecemos planes de soporte preventivo, monitoreo de infraestructura y evolución continua por bolsa de horas para nuevas funcionalidades.",
        },
      ],
    },
    cta: {
      title: "¿Qué software necesita tu empresa?",
      text: "Cuéntanos tu proyecto o necesidad operativa y recibe un diagnóstico técnico y presupuesto a la medida en menos de 24 horas.",
      label: "Solicitar Diagnóstico Gratis",
      href: "/#contacto",
    },
    related: {
      eyebrow: "Explora por tema",
      title: "Profundiza en cada servicio",
      cards: [
        { title: "Desarrollo de ERPs", text: "Qué es un ERP a la medida, sus módulos y costos.", href: "/desarrollo-erp" },
        { title: "Aplicaciones Móviles", text: "Apps iOS y Android: tipos, tiempos y precios.", href: "/aplicaciones-moviles" },
        { title: "Precios y Modalidades", text: "Cómo se calcula el costo de un software a la medida.", href: "/precios" },
      ],
    },
  },
  en: {
    updated: "Updated: September 2026",
    badge: "Services",
    title: "Custom Software Development Services",
    lead: "Saventi designs and builds 100% bespoke software for growing companies: management systems and ERPs, web platforms and SaaS, mobile apps, API integrations, legacy modernization and cloud architecture.",
    sections: [
      {
        eyebrow: "What we do",
        heading: "Six service lines, one standard of engineering",
        intro:
          "Every project is modeled around your business rules — no templates, no off-the-shelf software, and the code is 100% handed over to your company on completion.",
        cards: [
          {
            title: "Bespoke ERPs & Management Systems",
            text: "Centralize inventory, sales, invoicing, purchasing, HR and operations in a private platform built around your internal workflows.",
            href: "/en/custom-erp-development",
          },
          {
            title: "Web Platforms & SaaS Applications",
            text: "High-speed, scalable web solutions with modern admin dashboards and a frictionless user experience.",
          },
          {
            title: "Mobile Applications (iOS & Android)",
            text: "Native and cross-platform apps with real-time data sync, push notifications and direct database connectivity.",
            href: "/en/mobile-app-development",
          },
          {
            title: "API Integrations & Automation",
            text: "Connect with payment gateways (Stripe, PayPal, local banks), the WhatsApp Business API, CRMs and third-party services.",
          },
          {
            title: "Legacy Modernization & Data Migration",
            text: "Move obsolete or slow software to modern cloud architectures, improving security, speed and usability.",
          },
          {
            title: "Cloud Architecture & Tech Consulting",
            text: "Advisory to choose the optimal infrastructure (AWS, Azure, Google Cloud) and reduce hosting overhead.",
          },
        ],
      },
      {
        eyebrow: "Why Saventi",
        heading: "Bespoke engineering with full ownership",
        intro:
          "We architect high-impact solutions that drive your company's productivity and profitability, with clear rules from day one.",
        bullets: [
          "100% bespoke: every feature, screen and database is tailored to your processes, with no template lock-in.",
          "Code ownership: on completion, all copyright, repositories, database schemas and access are transferred — no dependencies, no royalties.",
          "Confidentiality: we sign a non-disclosure agreement (NDA) before any technical analysis or discovery meeting.",
          "Warranty & support: post-delivery technical warranty included, plus preventive support and infrastructure monitoring plans.",
        ],
      },
      {
        eyebrow: "Process",
        heading: "From idea to deployment, with no surprises",
        intro:
          "We work with a transparent process and scheduled functional releases so you validate real progress at every stage.",
        paragraphs: [
          "Everything starts with a free technical assessment and a closed scope before quoting: you know exactly what will be built and what it costs, with no hidden fees.",
          "We develop in agile sprints with biweekly deliveries, quality assurance and cloud deployment (AWS, Azure, Google Cloud or Vercel). Contact requests are answered within 24 business hours.",
        ],
        bullets: [
          "MVP or initial system: 4 to 8 weeks.",
          "Complex platforms or ERPs: 8 to 16 weeks, with biweekly functional releases.",
          "Stack: React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MySQL and Redis.",
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions about our services",
      lead: "Clear answers on what we can build for your company.",
      items: [
        {
          q: "What custom software services do you offer?",
          a: "We build 100% bespoke software across six lines: management systems and ERPs, web platforms and SaaS, iOS and Android mobile apps, API integrations and automation, legacy modernization and data migration, and cloud architecture consulting (AWS, Azure, Google Cloud).",
        },
        {
          q: "Do you take small projects or only large platforms?",
          a: "Both. We build everything from MVPs and initial systems in 4 to 8 weeks to complex ERPs and platforms in 8 to 16 weeks. Scope is defined during a free technical assessment, and each project is quoted by phase.",
        },
        {
          q: "Do you work with clients outside Venezuela?",
          a: "Yes. Although we are based in Valencia (Carabobo), we serve companies worldwide remotely: direct communication via Slack or Teams, agile sprints with weekly or biweekly deliveries, and cloud deployment.",
        },
        {
          q: "Does the service include maintenance after delivery?",
          a: "Yes. Every project includes a post-delivery technical warranty against bugs. We also offer preventive support plans, infrastructure monitoring and ongoing feature development via hour retainers.",
        },
      ],
    },
    cta: {
      title: "What software does your business need?",
      text: "Tell us about your project or operational needs and receive a technical assessment and tailored quote within 24 hours.",
      label: "Request a Free Assessment",
      href: "/en#contacto",
    },
    related: {
      eyebrow: "Explore by topic",
      title: "Go deeper on each service",
      cards: [
        { title: "Custom ERP Development", text: "What a bespoke ERP is, its modules and cost.", href: "/en/custom-erp-development" },
        { title: "Mobile App Development", text: "iOS & Android apps: types, timelines and pricing.", href: "/en/mobile-app-development" },
        { title: "Pricing & Engagement Models", text: "How custom software cost is estimated.", href: "/en/pricing" },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/* 2. DESARROLLO ERP / CUSTOM ERP DEVELOPMENT                          */
/* ------------------------------------------------------------------ */

export const erpContent: { es: SeoPageContent; en: SeoPageContent } = {
  es: {
    updated: "Actualizado: septiembre de 2026",
    badge: "Servicio",
    title: "Desarrollo de ERP a la Medida en Venezuela",
    lead: "Diseñamos y desarrollamos sistemas de gestión (ERP) 100% a la medida desde Valencia, Carabobo, para empresas en Venezuela y el exterior: inventarios, ventas, facturación, compras, RRHH y finanzas en una sola plataforma privada.",
    sections: [
      {
        eyebrow: "Concepto",
        heading: "¿Qué es un ERP a la medida y por qué elegirlo?",
        intro:
          "Un ERP a la medida es un sistema de gestión construido específicamente para los flujos de tu negocio, a diferencia de un ERP genérico que te obliga a adaptar tus procesos a su lógica.",
        paragraphs: [
          "Las plataformas comerciales estándar suelen resolver un promedio de necesidades: instalas módulos que no usas, pagas licencias recurrentes y cambias la forma de trabajar de tu equipo. Un ERP a la medida elimina esa fricción: cada módulo, pantalla y reporte nace de tus reglas de negocio y del software eres dueño al 100%.",
        ],
        bullets: [
          "Se adapta a tus procesos actuales, no al revés.",
          "Código fuente, base de datos y accesos 100% transferidos: sin licencias ni cuotas anuales.",
          "Crecimiento por módulos: empiezas por lo crítico y escalas cuando lo necesites.",
          "Integración con tu contabilidad, pasarelas de pago, WhatsApp Business API y CRMs existentes.",
        ],
      },
      {
        eyebrow: "Módulos",
        heading: "Módulos típicos de un sistema de gestión a la medida",
        intro:
          "El alcance se define en el diagnóstico inicial, pero estos son los módulos que desarrollamos con más frecuencia para empresas de manufactura, retail, logística y servicios.",
        cards: [
          {
            title: "Inventario y Almacenes",
            text: "Control de existencias por sucursal o almacén, lotes, códigos de barras y alertas de stock mínimo.",
          },
          {
            title: "Ventas y Facturación",
            text: "Cotizaciones, órdenes, facturación electrónica o fiscal, notas de crédito y cartera de clientes.",
          },
          {
            title: "Compras y Proveedores",
            text: "Órdenes de compra, recepción, evaluación de proveedores y control de cuentas por pagar.",
          },
          {
            title: "RRHH y Nómina",
            text: "Expedientes, asistencia, cálculo de nómina y vacaciones adaptado a la legislación local.",
          },
          {
            title: "Contabilidad y Finanzas",
            text: "Registro contable, cuentas por cobrar y pagar, bancos y conciliaciones enlazadas a tus operaciones.",
          },
          {
            title: "Reportes e Indicadores (BI)",
            text: "Tableros en tiempo real de ventas, rentabilidad, inventario y productividad para tomar decisiones.",
          },
        ],
      },
      {
        eyebrow: "Migración",
        heading: "Migración de datos e integraciones",
        intro:
          "Cambiar de sistema no significa perder tu historia: migramos tus datos y conectamos el ERP con las herramientas que ya usas.",
        bullets: [
          "Migración de datos históricos desde Excel, sistemas legados u otros ERP, con validación previa y sin detener la operación.",
          "Integración con tu sistema contable o de facturación actual si no quieres reemplazarlo.",
          "Conexión con pasarelas de pago (Stripe, PayPal, bancos locales) y WhatsApp Business API.",
          "APIs documentadas para que tu equipo integre nuevas herramientas sin depender de nosotros.",
        ],
      },
      {
        eyebrow: "Tiempos y costo",
        heading: "Tiempos y presupuesto de un ERP a la medida",
        intro:
          "Los tiempos dependen del alcance y de cuántos módulos se desarrollen en la primera fase.",
        paragraphs: [
          "Un ERP para una operación mediana (inventario, ventas y facturación, compras y reportes) suele tomar entre 8 y 16 semanas, con entregas funcionales quincenales para que valides avances reales. El presupuesto se fija por hitos tras un diagnóstico técnico gratuito y alcance cerrado.",
        ],
        note: "El precio de un ERP a la medida depende del número de módulos, integraciones y usuarios. No publicamos una tarifa fija: tras el diagnóstico gratuito recibes un presupuesto cerrado sin costos ocultos. Como referencia, los proyectos parten desde USD $1.500.",
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre desarrollo de ERPs",
      lead: "Todo lo que debes saber antes de digitalizar la gestión de tu empresa.",
      items: [
        {
          q: "¿Cuánto cuesta desarrollar un ERP a la medida?",
          a: "Depende del alcance: número de módulos, integraciones y usuarios. Un sistema de gestión inicial parte desde aproximadamente USD $1.500 y se cotiza con presupuesto cerrado tras un diagnóstico técnico gratuito. No hay costos ocultos ni licencias recurrentes porque el software es 100% tuyo.",
        },
        {
          q: "¿Cuánto tiempo toma implementar un ERP a la medida?",
          a: "Un sistema para una operación mediana suele tomar entre 8 y 16 semanas, con entregas funcionales quincenales. Los tiempos se ajustan al alcance real definido en el diagnóstico inicial.",
        },
        {
          q: "¿Pueden integrar el ERP con mi sistema contable o facturación actual?",
          a: "Sí. Integramos el ERP con tu sistema contable o de facturación existente, pasarelas de pago (Stripe, PayPal, bancos locales), WhatsApp Business API y CRMs, con APIs documentadas para futuras conexiones.",
        },
        {
          q: "¿Migran mis datos históricos desde Excel u otro software?",
          a: "Sí. Migramos datos históricos desde hojas de cálculo, sistemas legados u otros ERP con validación previa, y lo hacemos sin detener la operación del negocio.",
        },
        {
          q: "¿El ERP funcionará en la nube o en servidores locales?",
          a: "Como prefieras: desplegamos en la nube (AWS, Azure, Google Cloud) para acceso remoto, o en servidores propios si tu política lo exige. Tú decides y el código es siempre tuyo.",
        },
      ],
    },
    cta: {
      title: "¿Listo para digitalizar la gestión de tu empresa?",
      text: "Recibe un diagnóstico técnico gratuito y un presupuesto cerrado para tu ERP a la medida en menos de 24 horas.",
      label: "Cotizar mi ERP",
      href: "/#contacto",
    },
    related: {
      eyebrow: "Sigue explorando",
      title: "Otros servicios relacionados",
      cards: [
        { title: "Todos los Servicios", text: "Conoce las seis líneas de desarrollo de Saventi.", href: "/servicios" },
        { title: "Aplicaciones Móviles", text: "Lleva tu ERP al bolsillo de tus equipos con una app.", href: "/aplicaciones-moviles" },
        { title: "Precios y Modalidades", text: "Cómo se estructura el costo y los pagos por hitos.", href: "/precios" },
      ],
    },
  },
  en: {
    updated: "Updated: September 2026",
    badge: "Service",
    title: "Custom ERP Development in Venezuela",
    lead: "We design and build 100% bespoke management systems (ERP) from Valencia, Carabobo, for companies in Venezuela and abroad: inventory, sales, invoicing, purchasing, HR and finance in one private platform.",
    sections: [
      {
        eyebrow: "Concept",
        heading: "What is a bespoke ERP and why choose it?",
        intro:
          "A bespoke ERP is a management system built specifically around your business flows — unlike a generic ERP that forces you to adapt your processes to its logic.",
        paragraphs: [
          "Off-the-shelf platforms solve an average of needs: you pay for modules you never use, deal with recurring licenses, and change how your team works. A bespoke ERP removes that friction: every module, screen and report is born from your business rules, and you own the software 100%.",
        ],
        bullets: [
          "It adapts to your current workflows — not the other way around.",
          "Source code, database and access fully handed over: no licenses or annual fees.",
          "Grow module by module: start with what's critical and scale when you need to.",
          "Integration with your accounting, payment gateways, WhatsApp Business API and existing CRMs.",
        ],
      },
      {
        eyebrow: "Modules",
        heading: "Typical modules of a bespoke management system",
        intro:
          "Scope is defined in the initial assessment, but these are the modules we build most often for manufacturing, retail, logistics and services companies.",
        cards: [
          {
            title: "Inventory & Warehouses",
            text: "Stock control per branch or warehouse, batches, barcodes and low-stock alerts.",
          },
          {
            title: "Sales & Invoicing",
            text: "Quotes, orders, electronic or tax invoicing, credit notes and customer receivables.",
          },
          {
            title: "Purchasing & Suppliers",
            text: "Purchase orders, receiving, supplier evaluation and accounts payable control.",
          },
          {
            title: "HR & Payroll",
            text: "Employee records, attendance, payroll and leave calculations adapted to local regulations.",
          },
          {
            title: "Accounting & Finance",
            text: "Accounting entries, receivables and payables, banks and reconciliations linked to your operations.",
          },
          {
            title: "Reports & BI",
            text: "Real-time dashboards for sales, profitability, inventory and productivity to support decisions.",
          },
        ],
      },
      {
        eyebrow: "Migration",
        heading: "Data migration and integrations",
        intro:
          "Switching systems does not mean losing your history: we migrate your data and connect the ERP to the tools you already use.",
        bullets: [
          "Migration of historical data from spreadsheets, legacy systems or other ERPs, with prior validation and zero downtime.",
          "Integration with your current accounting or invoicing system if you prefer to keep it.",
          "Connection with payment gateways (Stripe, PayPal, local banks) and the WhatsApp Business API.",
          "Documented APIs so your team can integrate new tools without depending on us.",
        ],
      },
      {
        eyebrow: "Timeline & cost",
        heading: "Timelines and budget for a bespoke ERP",
        intro:
          "Timelines depend on scope and how many modules are built in the first phase.",
        paragraphs: [
          "An ERP for a mid-size operation (inventory, sales and invoicing, purchasing and reports) typically takes 8 to 16 weeks, with biweekly functional deliveries so you validate real progress. The budget is set by milestones after a free technical assessment and a closed scope.",
        ],
        note: "The price of a bespoke ERP depends on the number of modules, integrations and users. We don't publish a fixed rate: after the free assessment you receive a closed budget with no hidden costs. As a reference, projects start from USD $1,500.",
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Custom ERP development — frequently asked questions",
      lead: "Everything you need to know before digitizing your company's operations.",
      items: [
        {
          q: "How much does a bespoke ERP cost?",
          a: "It depends on scope: number of modules, integrations and users. An initial management system starts at roughly USD $1,500 and is quoted with a closed budget after a free technical assessment. There are no hidden costs or recurring licenses because you own the software.",
        },
        {
          q: "How long does it take to implement a bespoke ERP?",
          a: "A system for a mid-size operation typically takes 8 to 16 weeks, with biweekly functional deliveries. Timelines are adjusted to the actual scope defined in the initial assessment.",
        },
        {
          q: "Can you integrate the ERP with my current accounting or invoicing system?",
          a: "Yes. We integrate the ERP with your existing accounting or invoicing system, payment gateways (Stripe, PayPal, local banks), the WhatsApp Business API and CRMs, with documented APIs for future connections.",
        },
        {
          q: "Can you migrate my historical data from Excel or other software?",
          a: "Yes. We migrate historical data from spreadsheets, legacy systems or other ERPs with prior validation, without stopping your business operations.",
        },
        {
          q: "Will the ERP run in the cloud or on local servers?",
          a: "Your choice: we deploy in the cloud (AWS, Azure, Google Cloud) for remote access, or on your own servers if your policy requires it. You decide, and the code is always yours.",
        },
      ],
    },
    cta: {
      title: "Ready to digitize your company's operations?",
      text: "Get a free technical assessment and a closed budget for your bespoke ERP within 24 hours.",
      label: "Get an ERP Quote",
      href: "/en#contacto",
    },
    related: {
      eyebrow: "Keep exploring",
      title: "Related services",
      cards: [
        { title: "All Services", text: "Explore Saventi's six custom software service lines.", href: "/en/services" },
        { title: "Mobile App Development", text: "Put your ERP in your teams' pockets with a mobile app.", href: "/en/mobile-app-development" },
        { title: "Pricing & Engagement Models", text: "How cost is structured and milestone payments work.", href: "/en/pricing" },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/* 3. APLICACIONES MÓVILES / MOBILE APP DEVELOPMENT                     */
/* ------------------------------------------------------------------ */

export const appsContent: { es: SeoPageContent; en: SeoPageContent } = {
  es: {
    updated: "Actualizado: septiembre de 2026",
    badge: "Servicio",
    title: "Desarrollo de Aplicaciones Móviles iOS y Android",
    lead: "Creamos aplicaciones móviles nativas y multiplataforma para empresas: con sincronización en tiempo real, notificaciones push, pagos integrados y publicación en App Store y Google Play.",
    sections: [
      {
        eyebrow: "Estrategia",
        heading: "¿Nativa, multiplataforma o híbrida?",
        intro:
          "La tecnología correcta depende de tu presupuesto, plazos y de qué tan profundo necesites usar el hardware del teléfono.",
        paragraphs: [
          "Para la mayoría de los negocios una app multiplataforma (React Native o Flutter) es la opción más rentable: un solo código para iOS y Android con rendimiento cercano al nativo. Elegimos desarrollo nativo cuando la app exige máximo rendimiento, uso intensivo de cámara, GPS, sensores o funciones de sistema muy específicas.",
        ],
        bullets: [
          "Multiplataforma: un solo equipo, menor costo y lanzamiento simultáneo en ambas tiendas.",
          "Nativa (Swift / Kotlin): máximo rendimiento y acceso total a funciones del dispositivo.",
          "Progresivas (PWA): ideales para probar una idea sin pasar por las tiendas de aplicaciones.",
        ],
      },
      {
        eyebrow: "Funcionalidades",
        heading: "Funcionalidades que desarrollamos en tu app",
        intro:
          "Integramos las capacidades que más valor aportan a operaciones móviles y modelos de negocio digitales.",
        cards: [
          {
            title: "Notificaciones Push",
            text: "Alertas de pedidos, promociones o recordatorios segmentados por usuario y comportamiento.",
          },
          {
            title: "Sincronización en Tiempo Real",
            text: "Datos actualizados al instante entre la app, tus equipos y tus bases de datos centrales.",
          },
          {
            title: "Pagos In-App y Pasarelas",
            text: "Cobros integrados con Stripe, PayPal y bancos locales, con recibos automáticos.",
          },
          {
            title: "Modo Sin Conexión (Offline)",
            text: "Los equipos siguen trabajando sin internet y los datos se sincronizan al reconectar.",
          },
          {
            title: "Panel de Administración",
            text: "Dashboard web para gestionar usuarios, contenido, pedidos y métricas de la app.",
          },
          {
            title: "Geolocalización y Rutas",
            text: "Seguimiento de entregas, visitas comerciales y zonas de cobertura en el mapa.",
          },
        ],
      },
      {
        eyebrow: "Proceso",
        heading: "De la idea a la tienda de aplicaciones",
        intro:
          "Nos encargamos de todo el ciclo para que tu app llegue publicada y operativa.",
        paragraphs: [
          "Empezamos con el diseño de experiencia (UX/UI), seguimos con el desarrollo, las pruebas en dispositivos reales y la preparación de los listados. Te acompañamos con la creación de las cuentas de desarrollador (Apple Developer y Google Play Console) y el proceso de revisión de cada tienda.",
        ],
        bullets: [
          "Publicación y gestión inicial en App Store y Google Play.",
          "Cumplimiento de políticas de las tiendas y de las guías de privacidad (datos personales).",
          "Actualizaciones y mantenimiento post-lanzamiento por bolsa de horas o plan mensual.",
        ],
      },
      {
        eyebrow: "Tiempos y costo",
        heading: "Tiempos y presupuesto de una app móvil",
        intro:
          "El costo de una app depende de las plataformas, las funcionalidades y de si ya existe un backend o hay que construirlo.",
        paragraphs: [
          "Un MVP móvil (multiplataforma, con 3 a 5 pantallas clave, login y una funcionalidad central) suele tomar entre 6 y 10 semanas. Apps con panel de administración, pagos y notificaciones push requieren más alcance. El presupuesto se fija por hitos tras un diagnóstico gratuito.",
        ],
        note: "El precio de una aplicación móvil varía según plataformas, funcionalidades e integraciones. Tras el diagnóstico gratuito recibes un alcance cerrado y presupuesto sin costos ocultos; los proyectos parten desde aproximadamente USD $1.500.",
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre apps móviles",
      lead: "Lo que las empresas preguntan antes de invertir en una aplicación.",
      items: [
        {
          q: "¿Cuánto cuesta desarrollar una aplicación móvil?",
          a: "Depende de las plataformas (iOS, Android o ambas), las funcionalidades y de si hay que construir el backend. Un MVP móvil parte desde aproximadamente USD $1.500. El precio final se entrega como presupuesto cerrado tras un diagnóstico técnico gratuito.",
        },
        {
          q: "¿Cuánto tiempo toma crear una app?",
          a: "Un MVP móvil multiplataforma suele tomar entre 6 y 10 semanas. Apps con panel de administración, pasarelas de pago, notificaciones push e integraciones requieren más tiempo; el cronograma se define por fases en el diagnóstico inicial.",
        },
        {
          q: "¿Me conviene una app nativa o multiplataforma?",
          a: "Para la mayoría de negocios, multiplataforma (React Native o Flutter) es la opción más rentable: un solo código para iOS y Android. Elegimos nativa solo cuando la app exige máximo rendimiento o acceso profundo al hardware del dispositivo.",
        },
        {
          q: "¿Se encargan de publicarla en App Store y Google Play?",
          a: "Sí. Preparamos los listados, te asesoramos con las cuentas de desarrollador de Apple y Google, y gestionamos el proceso de revisión hasta que la app quede publicada y operativa.",
        },
        {
          q: "¿Ofrecen mantenimiento y actualizaciones después del lanzamiento?",
          a: "Sí. Todo proyecto incluye garantía técnica post-entrega. Para la evolución ofrecemos planes mensuales o bolsas de horas con nuevas versiones, correcciones y adaptaciones a nuevas políticas de las tiendas.",
        },
      ],
    },
    cta: {
      title: "¿Tienes una idea para una app?",
      text: "Validemos tu idea con un diagnóstico técnico gratuito y un presupuesto cerrado en menos de 24 horas.",
      label: "Cotizar mi App",
      href: "/#contacto",
    },
    related: {
      eyebrow: "Sigue explorando",
      title: "Otros servicios relacionados",
      cards: [
        { title: "Todos los Servicios", text: "Conoce las seis líneas de desarrollo de Saventi.", href: "/servicios" },
        { title: "Desarrollo de ERPs", text: "El backend y la lógica de negocio detrás de tu app.", href: "/desarrollo-erp" },
        { title: "Precios y Modalidades", text: "Modelos de contratación para tu proyecto móvil.", href: "/precios" },
      ],
    },
  },
  en: {
    updated: "Updated: September 2026",
    badge: "Service",
    title: "Mobile App Development (iOS & Android)",
    lead: "We build native and cross-platform mobile apps for businesses: real-time sync, push notifications, integrated payments and publishing on the App Store and Google Play.",
    sections: [
      {
        eyebrow: "Strategy",
        heading: "Native, cross-platform or hybrid?",
        intro:
          "The right technology depends on your budget, timeline, and how deeply the app must use the device hardware.",
        paragraphs: [
          "For most businesses, a cross-platform app (React Native or Flutter) is the most cost-effective option: one codebase for iOS and Android with near-native performance. We choose native development when the app demands maximum performance or heavy use of the camera, GPS, sensors or specific system features.",
        ],
        bullets: [
          "Cross-platform: one team, lower cost and simultaneous launch on both stores.",
          "Native (Swift / Kotlin): maximum performance and full access to device features.",
          "Progressive Web Apps (PWA): ideal to validate an idea without going through app stores.",
        ],
      },
      {
        eyebrow: "Features",
        heading: "Features we build into your app",
        intro:
          "We integrate the capabilities that add the most value to mobile operations and digital business models.",
        cards: [
          {
            title: "Push Notifications",
            text: "Order alerts, promotions or reminders segmented by user and behavior.",
          },
          {
            title: "Real-Time Sync",
            text: "Instantly updated data between the app, your teams and your central databases.",
          },
          {
            title: "In-App Payments",
            text: "Charges integrated with Stripe, PayPal and local banks, with automatic receipts.",
          },
          {
            title: "Offline Mode",
            text: "Teams keep working without internet and data syncs when they reconnect.",
          },
          {
            title: "Admin Dashboard",
            text: "A web dashboard to manage users, content, orders and app metrics.",
          },
          {
            title: "Geolocation & Routes",
            text: "Delivery tracking, sales visits and coverage zones on a map.",
          },
        ],
      },
      {
        eyebrow: "Process",
        heading: "From idea to the app store",
        intro:
          "We handle the full lifecycle so your app launches published and operational.",
        paragraphs: [
          "We start with experience design (UX/UI), then development, testing on real devices and store listing preparation. We guide you through the developer accounts (Apple Developer and Google Play Console) and each store's review process.",
        ],
        bullets: [
          "Publishing and initial management on the App Store and Google Play.",
          "Compliance with store policies and privacy guidelines (personal data).",
          "Post-launch updates and maintenance via hour retainers or a monthly plan.",
        ],
      },
      {
        eyebrow: "Timeline & cost",
        heading: "Timelines and budget for a mobile app",
        intro:
          "The cost of an app depends on the platforms, the features, and whether a backend already exists or must be built.",
        paragraphs: [
          "A mobile MVP (cross-platform, with 3 to 5 key screens, login and one core feature) typically takes 6 to 10 weeks. Apps with an admin dashboard, payments and push notifications require more scope. The budget is set by milestones after a free assessment.",
        ],
        note: "The price of a mobile app varies by platforms, features and integrations. After the free assessment you receive a closed scope and budget with no hidden costs; projects start at roughly USD $1,500.",
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Mobile app development — frequently asked questions",
      lead: "What companies ask before investing in an application.",
      items: [
        {
          q: "How much does it cost to develop a mobile app?",
          a: "It depends on the platforms (iOS, Android or both), the features, and whether the backend must be built. A mobile MVP starts at roughly USD $1,500. The final price is delivered as a closed budget after a free technical assessment.",
        },
        {
          q: "How long does it take to build an app?",
          a: "A cross-platform mobile MVP typically takes 6 to 10 weeks. Apps with an admin dashboard, payment gateways, push notifications and integrations take longer; the roadmap is defined by phases in the initial assessment.",
        },
        {
          q: "Should I build a native or cross-platform app?",
          a: "For most businesses, cross-platform (React Native or Flutter) is the most cost-effective option: one codebase for iOS and Android. We go native only when the app demands maximum performance or deep access to device hardware.",
        },
        {
          q: "Do you handle publishing on the App Store and Google Play?",
          a: "Yes. We prepare the listings, advise you on the Apple and Google developer accounts, and manage the review process until the app is published and operational.",
        },
        {
          q: "Do you offer maintenance and updates after launch?",
          a: "Yes. Every project includes a post-delivery technical warranty. For ongoing evolution we offer monthly plans or hour retainers covering new releases, fixes and adaptation to changing store policies.",
        },
      ],
    },
    cta: {
      title: "Have an idea for an app?",
      text: "Let's validate your idea with a free technical assessment and a closed budget within 24 hours.",
      label: "Get an App Quote",
      href: "/en#contacto",
    },
    related: {
      eyebrow: "Keep exploring",
      title: "Related services",
      cards: [
        { title: "All Services", text: "Explore Saventi's six custom software service lines.", href: "/en/services" },
        { title: "Custom ERP Development", text: "The backend and business logic behind your app.", href: "/en/custom-erp-development" },
        { title: "Pricing & Engagement Models", text: "Engagement models for your mobile project.", href: "/en/pricing" },
      ],
    },
  },
};

/* ------------------------------------------------------------------ */
/* 4. PRECIOS / PRICING                                                */
/* ------------------------------------------------------------------ */

export const preciosContent: { es: SeoPageContent; en: SeoPageContent } = {
  es: {
    updated: "Actualizado: septiembre de 2026",
    badge: "Precios",
    title: "Precios de Desarrollo de Software a la Medida",
    lead: "Te explicamos con transparencia cómo se calcula el costo de un software a la medida: factores que influyen, modelos de contratación, rangos orientativos y formas de pago. Sin costos ocultos y con diagnóstico técnico gratuito.",
    sections: [
      {
        eyebrow: "Cómo se calcula",
        heading: "¿Qué determina el precio de un desarrollo a la medida?",
        intro:
          "No hay una tarifa única porque cada sistema responde a procesos distintos. El precio se construye a partir de un diagnóstico técnico y un alcance cerrado.",
        bullets: [
          "Alcance funcional: cantidad de módulos, pantallas, roles y reportes del sistema.",
          "Complejidad técnica: integraciones con terceros, automatización, migración de datos y requisitos de seguridad.",
          "Diseño UX/UI: definición de la experiencia y la interfaz desde prototipos aprobados.",
          "Equipo y plazos: tamaño del squad y velocidad de entrega que necesite tu negocio.",
          "Infraestructura: despliegue en la nube, respaldos, monitoreo y dominio propio.",
        ],
      },
      {
        eyebrow: "Modalidades",
        heading: "Tres modelos de contratación transparentes",
        intro:
          "Elige el modelo que mejor se adapta a tu etapa: un proyecto cerrado, un equipo dedicado o soporte continuo.",
        cards: [
          {
            title: "Proyecto Llave en Mano",
            text: "Presupuesto fijo y pagos por hitos. Ideal para sistemas nuevos, MVPs o digitalizaciones con alcance definido. Incluye desarrollo, pruebas, despliegue y transferencia total del código.",
          },
          {
            title: "Equipo Dedicado (Squad)",
            text: "Tarifa mensual con sprints ágiles y entregas semanales. Ingenieros senior dedicados a tu producto, comunicación directa por Slack/Teams y flexibilidad para escalar.",
          },
          {
            title: "Soporte & Consultoría",
            text: "Bolsa de horas para mantenimiento preventivo, parches de seguridad, nuevas funcionalidades y asesoría de infraestructura, con tiempos de respuesta (SLA) garantizados.",
          },
        ],
      },
      {
        eyebrow: "Rangos orientativos",
        heading: "Rangos de inversión de referencia",
        intro:
          "Como orientación inicial, y siempre sujetos al diagnóstico técnico gratuito (el presupuesto final es un alcance cerrado):",
        bullets: [
          "MVP o sistema web inicial: 4 a 8 semanas · desde USD $1.500.",
          "ERP a la medida (módulos de gestión): 8 a 16 semanas · cotizado por módulos.",
          "Aplicación móvil multiplataforma (MVP): 6 a 10 semanas · desde USD $1.500.",
          "Plataforma SaaS con panel de administración: según alcance, con entregas por fases.",
        ],
        note: "Estos rangos son orientativos. El precio real se define tras el diagnóstico gratuito, donde cerramos alcance, cronograma y presupuesto. El monto no cambia durante el proyecto salvo que tú solicites funciones nuevas fuera del alcance.",
      },
      {
        eyebrow: "Pagos y garantías",
        heading: "Formas de pago y garantías",
        intro:
          "Trabajamos con condiciones claras que protegen tu inversión en cada etapa.",
        paragraphs: [
          "En proyectos llave en mano se paga por hitos vinculados a entregas funcionales: avanzas solo cuando ves resultados. Al finalizar cada etapa y el proyecto se transfieren todos los derechos, repositorios, esquemas de base de datos y accesos, sin dependencias ni regalías.",
          "Todo desarrollo incluye garantía técnica post-entrega contra bugs, y puedes contratar planes de soporte preventivo y monitoreo por bolsa de horas o tarifa mensual.",
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre precios",
      lead: "Las dudas más habituales sobre cuánto cuesta un desarrollo a la medida.",
      items: [
        {
          q: "¿Cuánto cuesta un MVP o sistema inicial a la medida?",
          a: "Un MVP o sistema web inicial suele desarrollarse en 4 a 8 semanas y parte desde aproximadamente USD $1.500. El precio final se entrega como alcance cerrado tras un diagnóstico técnico gratuito, sin costos ocultos.",
        },
        {
          q: "¿Cuánto cuesta un ERP a la medida?",
          a: "Depende de los módulos, integraciones y usuarios. Un sistema de gestión inicial parte desde aproximadamente USD $1.500 y se cotiza por módulos con presupuesto cerrado. Como el software es 100% tuyo, no pagas licencias recurrentes.",
        },
        {
          q: "¿Cuánto cuesta una aplicación móvil?",
          a: "Una app móvil multiplataforma (iOS y Android) parte desde aproximadamente USD $1.500 para un MVP de 6 a 10 semanas. El costo sube con funcionalidades como pagos, panel de administración o integraciones con sistemas existentes.",
        },
        {
          q: "¿Cómo se estructuran los pagos?",
          a: "En proyectos llave en mano se paga por hitos vinculados a entregas funcionales. En el modelo de squad dedicado se factura una tarifa mensual con sprints ágiles, y el soporte se contrata por bolsa de horas con SLA.",
        },
        {
          q: "¿Por qué no publican una lista de precios fija?",
          a: "Porque un software a la medida se diseña sobre tus procesos: dos empresas con el mismo rubro pueden necesitar sistemas muy distintos. Publicar tarifas fijas sin conocer el alcance sería engañoso; por eso ofrecemos un diagnóstico técnico gratuito con alcance cerrado.",
        },
        {
          q: "¿El presupuesto puede aumentar después de empezar?",
          a: "No, si se respeta el alcance cerrado. El presupuesto se fija por escrito antes de iniciar y solo cambia si tú solicitas funcionalidades nuevas fuera del alcance original, las cuales se cotizan por separado.",
        },
      ],
    },
    cta: {
      title: "¿Quieres saber cuánto cuesta tu proyecto?",
      text: "Solicita un diagnóstico técnico gratuito y recibe un presupuesto cerrado y sin compromiso en menos de 24 horas.",
      label: "Recibir mi Presupuesto",
      href: "/#contacto",
    },
    related: {
      eyebrow: "Sigue explorando",
      title: "Guías por tipo de proyecto",
      cards: [
        { title: "Desarrollo de ERPs", text: "Módulos y rangos de inversión de un ERP a la medida.", href: "/desarrollo-erp" },
        { title: "Aplicaciones Móviles", text: "Costos y tiempos de una app iOS y Android.", href: "/aplicaciones-moviles" },
        { title: "Todos los Servicios", text: "Conoce las seis líneas de desarrollo de Saventi.", href: "/servicios" },
      ],
    },
  },
  en: {
    updated: "Updated: September 2026",
    badge: "Pricing",
    title: "Custom Software Development Pricing",
    lead: "A transparent look at how custom software costs are estimated: the factors involved, engagement models, indicative ranges and payment structures. No hidden fees and a free technical assessment.",
    sections: [
      {
        eyebrow: "How cost is calculated",
        heading: "What determines the price of a custom build?",
        intro:
          "There is no single rate because every system responds to different processes. The price is built from a technical assessment and a closed scope.",
        bullets: [
          "Functional scope: number of modules, screens, roles and reports in the system.",
          "Technical complexity: third-party integrations, automation, data migration and security requirements.",
          "UX/UI design: defining the experience and interface from approved prototypes.",
          "Team and timeline: squad size and the delivery speed your business needs.",
          "Infrastructure: cloud deployment, backups, monitoring and your own domain.",
        ],
      },
      {
        eyebrow: "Engagement models",
        heading: "Three transparent engagement models",
        intro:
          "Choose the model that best fits your stage: a closed project, a dedicated team, or ongoing support.",
        cards: [
          {
            title: "Turnkey Project",
            text: "Fixed budget with milestone payments. Ideal for new systems, MVPs or defined-scope digitalization. Includes development, testing, deployment and full code handover.",
          },
          {
            title: "Dedicated Squad",
            text: "Monthly fee with agile sprints and weekly releases. Senior engineers dedicated to your product, direct communication via Slack/Teams, and flexible scaling.",
          },
          {
            title: "Support & Consulting",
            text: "Hour retainers for preventive maintenance, security patches, new features and infrastructure advice, with guaranteed response times (SLA).",
          },
        ],
      },
      {
        eyebrow: "Indicative ranges",
        heading: "Reference investment ranges",
        intro:
          "As an initial guide, always subject to the free technical assessment (the final budget is a closed scope):",
        bullets: [
          "MVP or initial web system: 4 to 8 weeks · from USD $1,500.",
          "Bespoke ERP (management modules): 8 to 16 weeks · quoted per module.",
          "Cross-platform mobile app (MVP): 6 to 10 weeks · from USD $1,500.",
          "SaaS platform with admin dashboard: by scope, with phased deliveries.",
        ],
        note: "These ranges are indicative. The real price is defined after the free assessment, where we close scope, roadmap and budget. The amount does not change during the project unless you request out-of-scope features.",
      },
      {
        eyebrow: "Payments & guarantees",
        heading: "Payment structures and guarantees",
        intro:
          "We work under clear terms that protect your investment at every stage.",
        paragraphs: [
          "On turnkey projects you pay by milestones tied to functional deliveries: you move forward only when you see results. On completion of each stage and the project, all rights, repositories, database schemas and access are transferred — no dependencies or royalties.",
          "Every build includes a post-delivery technical warranty against bugs, and you can add preventive support and monitoring plans via hour retainers or a monthly fee.",
        ],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Custom software pricing — frequently asked questions",
      lead: "The most common questions about how much a custom build costs.",
      items: [
        {
          q: "How much does a custom MVP or initial system cost?",
          a: "An MVP or initial web system typically takes 4 to 8 weeks and starts at roughly USD $1,500. The final price is delivered as a closed scope after a free technical assessment, with no hidden costs.",
        },
        {
          q: "How much does a bespoke ERP cost?",
          a: "It depends on modules, integrations and users. An initial management system starts at roughly USD $1,500 and is quoted per module with a closed budget. Because you own the software, there are no recurring licenses.",
        },
        {
          q: "How much does a mobile app cost?",
          a: "A cross-platform mobile app (iOS and Android) starts at roughly USD $1,500 for an MVP built in 6 to 10 weeks. The cost rises with features such as payments, an admin dashboard or integrations with existing systems.",
        },
        {
          q: "How are payments structured?",
          a: "On turnkey projects you pay by milestones tied to functional deliveries. The dedicated squad model is billed as a monthly fee with agile sprints, and support is contracted as hour retainers with an SLA.",
        },
        {
          q: "Why don't you publish a fixed price list?",
          a: "Because custom software is designed around your processes: two companies in the same industry can need very different systems. Publishing fixed rates without knowing the scope would be misleading — that's why we offer a free technical assessment with a closed scope.",
        },
        {
          q: "Can the budget increase after we start?",
          a: "No, as long as the closed scope is respected. The budget is fixed in writing before we start and only changes if you request new out-of-scope features, which are quoted separately.",
        },
      ],
    },
    cta: {
      title: "Want to know what your project costs?",
      text: "Request a free technical assessment and receive a closed, no-obligation budget within 24 hours.",
      label: "Get My Budget",
      href: "/en#contacto",
    },
    related: {
      eyebrow: "Keep exploring",
      title: "Guides by project type",
      cards: [
        { title: "Custom ERP Development", text: "Modules and investment ranges for a bespoke ERP.", href: "/en/custom-erp-development" },
        { title: "Mobile App Development", text: "Costs and timelines for iOS & Android apps.", href: "/en/mobile-app-development" },
        { title: "All Services", text: "Explore Saventi's six custom software service lines.", href: "/en/services" },
      ],
    },
  },
};
