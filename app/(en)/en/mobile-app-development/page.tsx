import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/seo-meta";
import { appsContent } from "@/lib/seo-content";
import { faqMainEntity, breadcrumbList } from "@/lib/seo-jsonld";
import { JsonLd } from "@/components/json-ld";
import SeoPage from "@/components/seo-page";

const content = appsContent.en;
const pageUrl = "https://avelorglobal.com/en/mobile-app-development";

export const metadata: Metadata = seoPageMetadata({
  path: "/en/mobile-app-development",
  esPath: "/aplicaciones-moviles",
  enPath: "/en/mobile-app-development",
  title: content.title,
  description:
    "iOS & Android mobile app development in Venezuela: native and cross-platform apps with push notifications, integrated payments, real-time sync and publishing on the App Store and Google Play.",
  locale: "en_US",
});

export default function MobileAppPage() {
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
        name: "Mobile App Development (iOS & Android)",
        serviceType: "Mobile App Development",
        url: pageUrl,
        description: content.lead,
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
        { name: content.title, path: "/en/mobile-app-development" },
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
