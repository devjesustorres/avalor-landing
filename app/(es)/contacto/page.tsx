import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Contacto & Diagnóstico de Software",
  description:
    "Contáctanos para evaluar el software, ERP o aplicación móvil de tu empresa. Diagnóstico técnico y propuesta en menos de 24 horas.",
  alternates: {
    canonical: `${baseUrl}/contacto`,
    languages: {
      es: `${baseUrl}/contacto`,
      en: `${baseUrl}/en/contact`,
    },
  },
  robots: { index: true, follow: true },
};

export default function ContactoRoute() {
  return <ContactPage />;
}
