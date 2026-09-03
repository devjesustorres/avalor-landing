import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { preciosContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = preciosContent.en;
const pageUrl = "https://avelorglobal.com/en/pricing";

export const metadata: Metadata = seoPageMetadata({
  path: "/en/pricing",
  esPath: "/precios",
  enPath: "/en/pricing",
  title: content.title,
  description:
    "How much custom software development costs: pricing factors, engagement models (turnkey, dedicated squad, hours retainer) and ranges from USD $1,500. Free technical assessment.",
  locale: "en_US",
});

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: content.title,
        inLanguage: "en",
        isPartOf: { "@id": "https://avelorglobal.com/#website" },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Custom Software Development",
        serviceType: "Custom Software Development",
        url: pageUrl,
        description: content.lead,
        priceRange: "From USD $1,500 per project",
        provider: { "@id": "https://avelorglobal.com/#organization" },
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
        { name: content.title, path: "/en/pricing" },
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
