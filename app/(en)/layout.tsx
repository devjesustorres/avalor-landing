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
    default: "Saventi — Custom Software Development & Digital Solutions",
    template: "%s | Saventi",
  },
  description:
    "We build and manage custom ERPs, business platforms and mobile apps for growing companies. All-inclusive monthly plans, secure cloud hosting, direct support and continuous maintenance.",
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
    canonical: `${baseUrl}/en`,
    languages: {
      es: baseUrl,
      en: `${baseUrl}/en`,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: `${baseUrl}/en`,
    siteName: "Saventi",
    title: "Saventi — Custom Software Development for Enterprises",
    description:
      "We turn your operational challenges into bespoke software, robust web platforms and high-performance mobile apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saventi — Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saventi — Custom Software Development for Enterprises",
    description:
      "Bespoke systems, web platforms and scalable mobile apps for growing companies.",
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

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
      <body className={`${plusJakartaSans.variable} font-sans antialiased selection:bg-brand-600 selection:text-white`}>
        <Providers>{children}</Providers>
        <WhatsAppButton />
      </body>
    </html>
  );
}
