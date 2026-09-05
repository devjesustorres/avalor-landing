import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { serviciosContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = serviciosContent.es;
const pageUrl = "https://saventihq.com/servicios";

export const metadata: Metadata = seoPageMetadata({
  path: "/servicios",
  esPath: "/servicios",
  enPath: "/en/services",
  title: content.title,
  description:
    "Desarrollo de software a la medida en Venezuela: ERPs, plataformas web y SaaS, aplicaciones móviles, integraciones API, modernización y arquitectura cloud. Código 100% tuyo, NDA y soporte garantizado.",
  locale: "es_ES",
});

export default function ServiciosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: content.title,
        inLanguage: "es",
        isPartOf: { "@id": "https://saventihq.com/#website" },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqMainEntity(content.faq.items),
      },
      breadcrumbList([
        { name: "Inicio", path: "/" },
        { name: content.title, path: "/servicios" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <SeoPage content={content} />
    </>
  );
}
