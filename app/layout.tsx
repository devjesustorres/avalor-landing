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
    "Desarrollamos sistemas a la medida, ERPs, plataformas web y aplicaciones móviles para empresas en crecimiento. Código 100% propio, arquitectura escalable y máxima seguridad.",
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
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Avelor Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avelor — Desarrollo de Software a la Medida",
    description:
      "Sistemas a la medida, plataformas web y aplicaciones móviles escalables para empresas en crecimiento.",
    images: ["/logo.png"],
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
  "@type": "SoftwareApplication",
  "name": "Avelor Software Solutions",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "url": "https://avelorglobal.com",
  "description": "Desarrollo de software y sistemas a la medida, ERPs, plataformas web y apps móviles para empresas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
  },
  "provider": {
    "@type": "Organization",
    "name": "Avelor Software Solutions",
    "url": "https://avelorglobal.com",
    "logo": "https://avelorglobal.com/logo.png",
    "sameAs": [
      "https://github.com/devjesustorres/avalor-landing"
    ]
  }
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
