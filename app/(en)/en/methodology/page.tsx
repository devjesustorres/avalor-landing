import type { Metadata } from "next";
import { MethodologyPage } from "@/components/methodology-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Methodology & Software Architecture",
  description:
    "Discover how we build, deploy, and manage enterprise cloud software with agile continuous delivery, high uptime, and comprehensive QA.",
  alternates: {
    canonical: `${baseUrl}/en/methodology`,
    languages: {
      es: `${baseUrl}/metodologia`,
      en: `${baseUrl}/en/methodology`,
    },
  },
  robots: { index: true, follow: true },
};

export default function MethodologyRouteEn() {
  return <MethodologyPage />;
}
