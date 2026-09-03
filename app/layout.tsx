import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://avelorglobal.com"),
  title: {
    default: "Saventi — Desarrollo de Software a la Medida & Soluciones Digitales",
    template: "%s | Saventi",
  },
  description:
    "Desarrollamos sistemas a la medida, ERPs, plataformas web y aplicaciones móviles para empresas en crecimiento. Código 100% propio, acuerdos NDA, arquitectura escalable y soporte garantizado.",
  keywords: [
    "desarrollo de software a la medida",
    "software empresarial",
    "desarrollo web profesional",
    "creacion de aplicaciones moviles",
    "ERP a medida",
    "sistemas de gestion",
    "custom software development",
    "software engineering agency",
    "arquitectura cloud",
    "Saventi",
  ],
  authors: [{ name: "Saventi", url: "https://avelorglobal.com" }],
  creator: "Saventi",
  publisher: "Saventi",
  alternates: {
    canonical: "https://avelorglobal.com",
    languages: {
      es: "https://avelorglobal.com",
      en: "https://avelorglobal.com/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://avelorglobal.com",
    siteName: "Saventi",
    title: "Saventi — Desarrollo de Software a la Medida para Empresas",
    description:
      "Transformamos los procesos de tu empresa en software a la medida, plataformas web robustas y aplicaciones móviles de alto rendimiento.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saventi — Desarrollo de Software a la Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saventi — Desarrollo de Software a la Medida para Empresas",
    description:
      "Sistemas a la medida, plataformas web y aplicaciones móviles escalables para empresas en crecimiento.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://avelorglobal.com/#organization",
      "name": "Saventi",
      "url": "https://avelorglobal.com",
      "logo": "https://avelorglobal.com/logo.png",
      "description": "Empresa especializada en desarrollo de software a la medida, sistemas empresariales, plataformas SaaS y aplicaciones móviles.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Spanish", "English"],
        "url": "https://avelorglobal.com/#contacto"
      },
      "sameAs": [
        "https://github.com/devjesustorres/saventi-landing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://avelorglobal.com/#website",
      "url": "https://avelorglobal.com",
      "name": "Saventi",
      "publisher": { "@id": "https://avelorglobal.com/#organization" },
      "inLanguage": ["es", "en"]
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
      "areaServed": { "@type": "Place", "name": "Venezuela" },
      // TODO GEO: añadir cuando existan datos reales: address/geo (ubicación),
      // openingHours, priceRange, telefono/email y perfiles de LinkedIn/Instagram en sameAs.
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8346W6GKF9"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8346W6GKF9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased selection:bg-brand-600 selection:text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
