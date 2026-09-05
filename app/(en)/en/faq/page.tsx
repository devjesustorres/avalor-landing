import type { Metadata } from "next";
import { FaqPageComponent } from "@/components/faq-page-component";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions regarding development turnaround, monthly subscription models, code ownership, technology stack, and direct support.",
  alternates: {
    canonical: `${baseUrl}/en/faq`,
    languages: {
      es: `${baseUrl}/faq`,
      en: `${baseUrl}/en/faq`,
    },
  },
  robots: { index: true, follow: true },
};

export default function FaqRouteEn() {
  return <FaqPageComponent />;
}
