"use client";

import React from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StatsCards } from "@/components/stats-cards";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function BenefitsPage() {
  const { lang, t } = useLanguage();
  const isEs = lang === "es";
  const homeHref = isEs ? "/" : "/en";
  const contactHref = isEs ? "/contacto" : "/en/contact";

  return (
    <div className="min-h-screen relative bg-[#edf2f7] text-slate-800 selection:bg-brand-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] neural-glow rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[500px] -right-24 w-[600px] h-[600px] neural-glow-purple rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 -left-20 w-[600px] h-[600px] neural-glow-cyan rounded-full blur-3xl opacity-60" />
      </div>

      <FloatingNavbar />

      <main className="relative z-10 pt-32 sm:pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8 max-w-6xl mx-auto">
          <a
            href={homeHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 neu-badge px-4 py-2 rounded-full hover:text-brand-700 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            {isEs ? "Volver al inicio" : "Back to home"}
          </a>
        </div>

        {/* Benefits Cards Section */}
        <StatsCards />

        {/* Real Business Growth Impact */}
        <BusinessImpactSection />

        {/* Bottom CTA */}
        <div className="mt-16 max-w-5xl mx-auto text-center">
          <div className="neu-extruded rounded-[2.5rem] p-8 sm:p-14 bg-white/70 backdrop-blur-md">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isEs ? "¿Por qué elegir el modelo gestionado de Saventi?" : "Why choose Saventi's managed model?"}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              {isEs
                ? "Nos encargamos de todo el ciclo de vida del software para que tú te dediques a hacer crecer tu empresa, sin costos sorpresa."
                : "We take care of the entire software lifecycle so you can focus 100% on growing your business, with zero surprise fees."}
            </p>
            <div className="mt-8">
              <a
                href={contactHref}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue transition-all"
              >
                {isEs ? "Iniciar Mi Proyecto" : "Start My Project"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
