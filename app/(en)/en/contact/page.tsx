import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

const baseUrl = "https://www.saventihq.com";

export const metadata: Metadata = {
  title: "Contact & Project Assessment",
  description:
    "Contact Saventi to build and manage your enterprise software, ERP, or mobile apps. Free technical assessment within 24 business hours.",
  alternates: {
    canonical: `${baseUrl}/en/contact`,
    languages: {
      es: `${baseUrl}/contacto`,
      en: `${baseUrl}/en/contact`,
    },
  },
  robots: { index: true, follow: true },
};

export default function ContactRouteEn() {
  return <ContactPage />;
}
