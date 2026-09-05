import type { Metadata } from "next";
import { BenefitsPage } from "@/components/benefits-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Beneficios de Nuestro Software Gestionado",
  description:
    "Descubre las ventajas de contar con software 100% a la medida, soporte continuo, ahorro operativo y cero dolores de cabeza tecnológicos.",
  alternates: {
    canonical: `${baseUrl}/beneficios`,
    languages: {
      es: `${baseUrl}/beneficios`,
      en: `${baseUrl}/en/benefits`,
    },
  },
  robots: { index: true, follow: true },
};

export default function BeneficiosRoute() {
  return <BenefitsPage />;
}
