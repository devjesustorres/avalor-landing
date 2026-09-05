import type { Metadata } from "next";
import { FaqPageComponent } from "@/components/faq-page-component";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre Software Gestionado",
  description:
    "Respuestas a las dudas más comunes sobre tiempos de desarrollo, modelo de suscripción mensual, confidencialidad, tecnologías y soporte continuo.",
  alternates: {
    canonical: `${baseUrl}/faq`,
    languages: {
      es: `${baseUrl}/faq`,
      en: `${baseUrl}/en/faq`,
    },
  },
  robots: { index: true, follow: true },
};

export default function FaqRoute() {
  return <FaqPageComponent />;
}
