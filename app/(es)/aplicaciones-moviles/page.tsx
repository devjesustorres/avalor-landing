import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { appsContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = appsContent.es;
const pageUrl = "https://saventihq.com/aplicaciones-moviles";

export const metadata: Metadata = seoPageMetadata({
  path: "/aplicaciones-moviles",
  esPath: "/aplicaciones-moviles",
  enPath: "/en/mobile-app-development",
  title: content.title,
  description:
    "Desarrollo de aplicaciones móviles iOS y Android en Venezuela: apps nativas y multiplataforma con notificaciones push, pagos integrados, sincronización en tiempo real y publicación en App Store y Google Play.",
  locale: "es_ES",
});

export default function AplicacionesMovilesPage() {
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
        name: "Desarrollo de Aplicaciones Móviles iOS y Android",
        serviceType: "Mobile App Development",
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
        { name: content.title, path: "/aplicaciones-moviles" },
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
