import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { preciosContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = preciosContent.es;
const pageUrl = "https://saventihq.com/precios";

export const metadata: Metadata = seoPageMetadata({
  path: "/precios",
  esPath: "/precios",
  enPath: "/en/pricing",
  title: content.title,
  description:
    "Cuánto cuesta desarrollar un software a la medida: factores de precio, modelos de contratación (llave en mano, squad, bolsa de horas) y rangos desde USD $1.500. Diagnóstico técnico gratuito.",
  locale: "es_ES",
});

export default function PreciosPage() {
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
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Desarrollo de Software a la Medida",
        serviceType: "Custom Software Development",
        url: pageUrl,
        description: content.lead,
        priceRange: "Desde USD $1.500 por proyecto",
        provider: { "@id": "https://saventihq.com/#organization" },
        areaServed: [
          { "@type": "Place", name: "Valencia, Carabobo" },
          { "@type": "Place", name: "Venezuela" },
          { "@type": "Place", name: "Internacional (remoto)" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqMainEntity(content.faq.items),
      },
      breadcrumbList([
        { name: "Inicio", path: "/" },
        { name: content.title, path: "/precios" },
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
