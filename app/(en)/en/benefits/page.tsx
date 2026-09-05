import type { Metadata } from "next";
import { BenefitsPage } from "@/components/benefits-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Managed Software Benefits",
  description:
    "Explore the tangible business benefits of bespoke software engineering, dedicated cloud maintenance, and hands-free IT operations.",
  alternates: {
    canonical: `${baseUrl}/en/benefits`,
    languages: {
      es: `${baseUrl}/beneficios`,
      en: `${baseUrl}/en/benefits`,
    },
  },
  robots: { index: true, follow: true },
};

export default function BenefitsRouteEn() {
  return <BenefitsPage />;
}
