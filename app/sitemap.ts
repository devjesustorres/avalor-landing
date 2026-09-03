import { MetadataRoute } from "next";

const baseUrl = "https://avelorglobal.com";

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

