import type { Metadata } from "next";
import TermsPage from "@/components/terms-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Saventi terms of service: scope of custom software engineering services, warranties and code handover.",
  alternates: {
    canonical: `${baseUrl}/en/terms`,
    languages: {
      es: `${baseUrl}/terms`,
      en: `${baseUrl}/en/terms`,
    },
  },
  robots: { index: true, follow: true },
};

export default function TermsEn() {
  return <TermsPage />;
}
