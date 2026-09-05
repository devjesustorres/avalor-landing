import type { Metadata } from "next";

const baseUrl = "https://www.saventihq.com";

export interface SeoPageMetaArgs {
  path: string; // ruta absoluta de esta página, p.ej. "/servicios" o "/en/services"
  esPath: string; // ruta absoluta ES
  enPath: string; // ruta absoluta EN
  title: string; // título local (el layout añade "| Saventi")
  description: string;
  locale: "es_ES" | "en_US";
}

// Metadata estándar de las páginas SEO: canonical + hreflang (alternates).
export function seoPageMetadata({
  path,
  esPath,
  enPath,
  title,
  description,
  locale,
}: SeoPageMetaArgs): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${baseUrl}${esPath}`,
        en: `${baseUrl}${enPath}`,
        "x-default": `${baseUrl}${esPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      alternateLocale: locale === "es_ES" ? ["en_US"] : ["es_ES"],
      url,
      siteName: "Saventi",
      title: `${title} | Saventi`,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Saventi`,
      description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export { baseUrl };
