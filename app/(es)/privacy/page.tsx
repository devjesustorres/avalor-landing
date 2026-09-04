import type { Metadata } from "next";
import PrivacyPage from "@/components/privacy-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de Saventi: compromiso de confidencialidad, acuerdos NDA y propiedad total del código y datos de nuestros clientes.",
  alternates: {
    canonical: `${baseUrl}/privacy`,
    languages: {
      es: `${baseUrl}/privacy`,
      en: `${baseUrl}/en/privacy`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return <PrivacyPage />;
}
