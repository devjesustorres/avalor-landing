"use client";

import React from "react";
import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { FaqSection } from "@/components/faq-section";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FaqPageComponent() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const homeHref = isEs ? "/" : "/en";
  const contactHref = isEs ? "/contacto" : "/en/contact";

  return (
    <PageLayout>
      <div className="pt-20 sm:pt-36 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6 sm:mb-8 max-w-5xl mx-auto">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 neu-badge px-4 py-2 rounded-full hover:text-brand-700 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            {isEs ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>

        {/* FAQ Section */}
        <FaqSection />

        {/* CTA */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
          <div className="neu-extruded rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-14 bg-white/70 backdrop-blur-md">
            <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEs ? "¿Tienes alguna otra pregunta?" : "Have any other questions?"}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-lg max-w-xl mx-auto">
              {isEs
                ? "Escríbenos directamente o solicita una sesión de diagnóstico sin costo para evaluar la viabilidad de tu idea."
                : "Message us directly or request a free consultation session to assess your project requirements."}
            </p>
            <div className="mt-6 sm:mt-8">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue transition-all w-full sm:w-auto"
              >
                {isEs ? "Contactar al Equipo" : "Contact Our Team"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
