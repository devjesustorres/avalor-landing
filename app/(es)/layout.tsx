import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { plusJakartaSans } from "@/app/fonts";
import { jsonLd } from "@/app/schema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Providers } from "@/app/providers";

const baseUrl = "https://www.saventihq.com";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Saventi — Desarrollo de Software a la Medida & Soluciones Digitales",
    template: "%s | Saventi",
  },
  description:
    "Desarrollamos y gestionamos sistemas a la medida, ERPs y plataformas web para empresas en crecimiento. Planes mensuales todo incluido, servidores seguros, soporte técnico y mantenimiento continuo.",
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
  authors: [{ name: "Saventi", url: baseUrl }],
  creator: "Saventi",
  publisher: "Saventi",
  alternates: {
    canonical: baseUrl,
    languages: {
      es: baseUrl,
      en: `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: baseUrl,
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function EsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-70EV2FQM66"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8346W6GKF9');
              gtag('config', 'G-70EV2FQM66');
            `,
          }}
        />
        {/* Cloudflare Turnstile */}
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#e8edf3] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 selection:bg-brand-600 selection:text-white transition-colors duration-300`}>
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
