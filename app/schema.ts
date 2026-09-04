// Datos estructurados (JSON-LD) compartidos por ambos root layouts (es/en).
// GEO incluido: address/geo (Valencia, sin dirección exacta), openingHours,
// priceRange, foundingDate.
// TODO GEO pendiente (cuando existan datos reales):
//   - sameAs: perfiles oficiales de LinkedIn / Instagram de Saventi
//     (hoy solo hay un repo de GitHub de referencia).
//   - contactPoint con telephone/email públicos (hoy solo formulario).
//   - legalName / RIF si se decide publicarlos.
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avelorglobal.com/#organization",
      "name": "Saventi",
      "url": "https://avelorglobal.com",
      "logo": "https://avelorglobal.com/logo.png",
      "description": "Empresa especializada en desarrollo de software a la medida, sistemas empresariales, plataformas SaaS y aplicaciones móviles.",
      "foundingDate": "2026",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
        "url": "https://avelorglobal.com/#contacto"
      },
      "sameAs": [
        "https://www.instagram.com/saventihq/",
        "https://github.com/devjesustorres/saventi-landing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://avelorglobal.com/#website",
      "url": "https://avelorglobal.com",
      "name": "Saventi",
      "publisher": { "@id": "https://avelorglobal.com/#organization" },
      "inLanguage": ["es", "en"],
      "dateModified": "2026-09-03"
    },
    {
      "@type": "FAQPage",
      "@id": "https://avelorglobal.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuánto tiempo toma desarrollar un software a la medida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende de la complejidad y alcance. Un MVP o sistema inicial suele desarrollarse en 4 a 8 semanas, mientras que plataformas complejas o ERPs avanzados toman entre 8 y 16 semanas con entregas funcionales quincenales."
          }
        },
        {
          "@type": "Question",
          "name": "¿El código fuente y la propiedad intelectual me pertenecen al 100%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, absolutamente. Al finalizar cada etapa y el proyecto, te transferimos todos los derechos de autor, repositorios de código, esquemas de bases de datos y accesos directos sin dependencias ni regalías."
          }
        },
        {
          "@type": "Question",
          "name": "¿Firman acuerdos de confidencialidad (NDA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Antes de cualquier análisis técnico o reunión de descubrimiento detallada, firmamos un Acuerdo de Confidencialidad y No Divulgación (NDA) para proteger tu idea, datos y procesos comerciales."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué tecnologías utilizan para el desarrollo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabajamos con el stack tecnológico más robusto y moderno: React, Next.js, TypeScript, Tailwind CSS en el frontend; Node.js, Python, PostgreSQL, MySQL y Redis en el backend; y despliegues en AWS, Google Cloud, Azure o Vercel."
          }
        },
        {
          "@type": "Question",
          "name": "¿Ofrecen garantía y soporte después del lanzamiento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Todos nuestros proyectos incluyen garantía técnica post-entrega contra bugs o inconsistencias. Además, ofrecemos planes de soporte preventivo, monitoreo de infraestructura y evolución continua por bolsa de horas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se calcula el costo de un proyecto y cómo se paga?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ofrecemos tres modalidades: proyecto llave en mano con presupuesto fijo y pagos por hitos, squad dedicado con tarifa mensual y sprints ágiles, y planes de soporte por bolsa de horas. Antes de cotizar hacemos un diagnóstico técnico gratuito y entregamos un alcance cerrado sin costos ocultos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Pueden integrar el software con mis sistemas o herramientas actuales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Integramos pasarelas de pago (Stripe, PayPal y bancos locales), WhatsApp Business API, CRMs, sistemas contables y ERPs existentes, además de sincronizar bases de datos y automatizar flujos de trabajo."
          }
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://avelorglobal.com/#service",
      "parentOrganization": { "@id": "https://avelorglobal.com/#organization" },
      "name": "Saventi",
      "url": "https://avelorglobal.com",
      "image": "https://avelorglobal.com/logo.png",
      "description": "Empresa de ingeniería de software que diseña y desarrolla sistemas a la medida, ERPs, plataformas web, aplicaciones móviles e integraciones en la nube para empresas en crecimiento.",
      "foundingDate": "2026",
      "areaServed": [
        { "@type": "Place", "name": "Valencia, Carabobo" },
        { "@type": "Place", "name": "Venezuela" },
        { "@type": "Place", "name": "Internacional (remoto)" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valencia",
        "addressRegion": "Carabobo",
        "postalCode": "2015",
        "addressCountry": "VE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.162,
        "longitude": -68.0077
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "priceRange": "Desde $1.500 USD por proyecto",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Software a la Medida",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ERPs y Sistemas de Gestión a la Medida",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Centralizamos inventarios, pedidos, facturación, RRHH y operaciones en una aplicación privada adaptada a los flujos del negocio."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plataformas Web y Aplicaciones SaaS",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Aplicaciones web rápidas y escalables con paneles de administración e interfaces de usuario optimizadas."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Aplicaciones Móviles iOS y Android",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Apps nativas y multiplataforma con sincronización de datos en tiempo real y notificaciones push."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Integraciones API y Automatización de Flujos",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Conexión de sistemas con pasarelas de pago, WhatsApp API, CRMs y servicios de terceros."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Modernización de Software y Migración de Datos",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Modernización de sistemas legados y migración a arquitectura cloud sin tiempo de inactividad."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Arquitectura Cloud y Consultoría Tecnológica",
              "url": "https://avelorglobal.com/#servicios",
              "description": "Asesoría estratégica en AWS, Azure y Google Cloud para elegir la infraestructura óptima."
            }
          }
        ]
      }
    }
  ]
};
