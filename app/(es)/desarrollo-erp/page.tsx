import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { erpContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = erpContent.es;
const pageUrl = "https://saventihq.com/desarrollo-erp";

export const metadata: Metadata = seoPageMetadata({
  path: "/desarrollo-erp",
  esPath: "/desarrollo-erp",
  enPath: "/en/custom-erp-development",
  title: content.title,
  description:
    "Desarrollo de ERP a la medida en Valencia, Carabobo y Venezuela: inventarios, ventas, facturación, compras, RRHH y finanzas en una plataforma propia. Migración de datos, integraciones y presupuesto cerrado.",
  locale: "es_ES",
});

export default function DesarrolloErpPage() {
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
        name: "Desarrollo de ERP a la Medida",
        serviceType: "Custom ERP Development",
        url: pageUrl,
        description: content.lead,
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
        { name: content.title, path: "/desarrollo-erp" },
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
