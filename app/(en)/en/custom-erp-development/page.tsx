import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { erpContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = erpContent.en;
const pageUrl = "https://saventihq.com/en/custom-erp-development";

export const metadata: Metadata = seoPageMetadata({
  path: "/en/custom-erp-development",
  esPath: "/desarrollo-erp",
  enPath: "/en/custom-erp-development",
  title: content.title,
  description:
    "Custom ERP development in Valencia, Carabobo and Venezuela: inventory, sales, invoicing, purchasing, HR and finance in a platform you own. Data migration, integrations and a closed budget.",
  locale: "en_US",
});

export default function CustomErpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: content.title,
        inLanguage: "en",
        isPartOf: { "@id": "https://saventihq.com/#website" },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Custom ERP Development",
        serviceType: "Custom ERP Development",
        url: pageUrl,
        description: content.lead,
        provider: { "@id": "https://saventihq.com/#organization" },
        areaServed: [
          { "@type": "Place", name: "Valencia, Carabobo" },
          { "@type": "Place", name: "Venezuela" },
          { "@type": "Place", name: "Worldwide (remote)" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqMainEntity(content.faq.items),
      },
      breadcrumbList([
        { name: "Home", path: "/en" },
        { name: content.title, path: "/en/custom-erp-development" },
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
