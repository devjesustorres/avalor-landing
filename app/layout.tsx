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
    default: "Avelor — Desarrollo de Software a la Medida & Soluciones Digitales",
    template: "%s | Avelor Software Solutions",
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
    "Avelor",
    "Avelor Global",
  ],
  authors: [{ name: "Avelor Software Solutions", url: "https://avelorglobal.com" }],
  creator: "Avelor Software Solutions",
  publisher: "Avelor Software Solutions",
  alternates: {
    canonical: "https://avelorglobal.com",
    languages: {
      "es-ES": "https://avelorglobal.com",
      "en-US": "https://avelorglobal.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://avelorglobal.com",
    siteName: "Avelor Software Solutions",
    title: "Avelor — Desarrollo de Software a la Medida para Empresas",
    description:
      "Transformamos los procesos de tu empresa en software a la medida, plataformas web robustas y aplicaciones móviles de alto rendimiento.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Avelor Software Solutions — Desarrollo de Software a la Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelor — Desarrollo de Software a la Medida para Empresas",
    description:
      "Sistemas a la medida, plataformas web y aplicaciones móviles escalables para empresas en crecimiento.",
    images: ["/og-image.svg"],
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
      "name": "Avelor Software Solutions",
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
        "https://github.com/devjesustorres/avalor-landing"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://avelorglobal.com/#website",
      "url": "https://avelorglobal.com",
      "name": "Avelor Software Solutions",
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
        }
      ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased selection:bg-brand-600 selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
