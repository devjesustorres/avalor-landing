import { MetadataRoute } from "next";

const baseUrl = "https://www.saventihq.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/servicios`,
          en: `${baseUrl}/en/services`,
        },
      },
    },
    {
      url: `${baseUrl}/en/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/servicios`,
          en: `${baseUrl}/en/services`,
        },
      },
    },
    {
      url: `${baseUrl}/desarrollo-erp`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/desarrollo-erp`,
          en: `${baseUrl}/en/custom-erp-development`,
        },
      },
    },
    {
      url: `${baseUrl}/en/custom-erp-development`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/desarrollo-erp`,
          en: `${baseUrl}/en/custom-erp-development`,
        },
      },
    },
    {
      url: `${baseUrl}/aplicaciones-moviles`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/aplicaciones-moviles`,
          en: `${baseUrl}/en/mobile-app-development`,
        },
      },
    },
    {
      url: `${baseUrl}/en/mobile-app-development`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/aplicaciones-moviles`,
          en: `${baseUrl}/en/mobile-app-development`,
        },
      },
    },
    {
      url: `${baseUrl}/precios`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/precios`,
          en: `${baseUrl}/en/pricing`,
        },
      },
    },
    {
      url: `${baseUrl}/en/pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/precios`,
          en: `${baseUrl}/en/pricing`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/privacy`,
          en: `${baseUrl}/en/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: {
        languages: {
          es: `${baseUrl}/privacy`,
          en: `${baseUrl}/en/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
      alternates: {
        languages: {
          es: `${baseUrl}/terms`,
          en: `${baseUrl}/en/terms`,
        },
      },
    },
    {
      url: `${baseUrl}/en/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
      alternates: {
        languages: {
          es: `${baseUrl}/terms`,
          en: `${baseUrl}/en/terms`,
        },
      },
    },
  ];
}

