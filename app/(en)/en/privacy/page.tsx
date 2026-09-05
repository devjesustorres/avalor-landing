import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Saventi privacy policy: confidentiality commitment, NDA agreements and full ownership of our clients' source code and data.",
  alternates: {
    canonical: `${baseUrl}/en/privacy`,
    languages: {
      es: `${baseUrl}/privacy`,
      en: `${baseUrl}/en/privacy`,
    },
  },
  robots: { index: true, follow: true },
};

export default function PrivacyEn() {
  return <PrivacyPage />;
}
