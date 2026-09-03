import type { SeoFaq } from "@/lib/seo-content";

// Construye los nodos Question/Answer de schema.org a partir del MISMO array
// de FAQ que se renderiza en pantalla. Así el JSON-LD y el HTML visible nunca
// se desincronizan (requisito clave de GEO/SEO).
export function faqMainEntity(faq: SeoFaq[]) {
  return faq.map((item) => ({
    "@type": "Question" as const,
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: item.a,
    },
  }));
}

// BreadcrumbList con "Inicio" + la página actual (mejora la navegación
// entendible por los motores generativos).
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: `https://avelorglobal.com${item.path}`,
    })),
  };
}
