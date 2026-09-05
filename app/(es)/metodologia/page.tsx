import type { Metadata } from "next";
import { MethodologyPage } from "@/components/methodology-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Metodología & Arquitectura de Software",
  description:
    "Conoce cómo diseñamos, construimos y gestionamos sistemas a la medida con estándares de excelencia, DevOps moderno y control de calidad.",
  alternates: {
    canonical: `${baseUrl}/metodologia`,
    languages: {
      es: `${baseUrl}/metodologia`,
      en: `${baseUrl}/en/methodology`,
    },
  },
  robots: { index: true, follow: true },
};

export default function MetodologiaRoute() {
  return <MethodologyPage />;
}
