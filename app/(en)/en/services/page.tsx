import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { serviciosContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = serviciosContent.en;
const pageUrl = "https://saventihq.com/en/services";

export const metadata: Metadata = seoPageMetadata({
  path: "/en/services",
  esPath: "/servicios",
  enPath: "/en/services",
  title: content.title,
  description:
    "Custom software development services in Venezuela: bespoke ERPs, web & SaaS platforms, mobile apps, API integrations, modernization and cloud architecture. 100% owned code, NDA and guaranteed support.",
  locale: "en_US",
});

export default function ServicesPage() {
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
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqMainEntity(content.faq.items),
      },
      breadcrumbList([
        { name: "Home", path: "/en" },
        { name: content.title, path: "/en/services" },
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
