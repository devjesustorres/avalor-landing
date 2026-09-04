import type { Metadata } from "next";
import TermsPage from "@/components/terms-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Términos del Servicio",
  description:
    "Términos del Servicio de Saventi: alcance de los servicios de ingeniería de software, garantías y entrega de código a la medida.",
  alternates: {
    canonical: `${baseUrl}/terms`,
    languages: {
      es: `${baseUrl}/terms`,
      en: `${baseUrl}/en/terms`,
    },
  },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return <TermsPage />;
}
