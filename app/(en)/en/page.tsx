import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const baseUrl = "https://avelorglobal.com";

export const metadata: Metadata = {
  title: "Saventi — Custom Software Development & Digital Solutions",
  description:
    "We engineer bespoke ERPs, web platforms and mobile apps for growing companies. 100% owned code, NDA agreements, scalable architecture and guaranteed support.",
  alternates: {
    canonical: `${baseUrl}/en`,
    languages: {
      es: baseUrl,
      en: `${baseUrl}/en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    url: `${baseUrl}/en`,
    siteName: "Saventi",
    title: "Saventi — Custom Software Development for Enterprises",
    description:
      "We turn your operational challenges into bespoke software, robust web platforms and high-performance mobile apps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saventi — Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saventi — Custom Software Development for Enterprises",
    description:
      "Bespoke systems, web platforms and scalable mobile apps for growing companies.",
    images: ["/og-image.png"],
  },
};

export default function HomeEn() {
  return <HomePage />;
}
