"use client";

import React from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { MobileNewsletterSection } from "@/components/mobile-newsletter-section";
import { useLanguage } from "@/context/language-context";
import { Mail, Phone, MapPin, ArrowLeft, Sparkles } from "lucide-react";

export function ContactPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const homeHref = isEs ? "/" : "/en";

  return (
    <div className="min-h-screen relative bg-[#edf2f7] text-slate-800 selection:bg-brand-600 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] neural-glow rounded-full blur-3xl opacity-80" />
        <div className="absolute top-[500px] -right-24 w-[600px] h-[600px] neural-glow-purple rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 -left-20 w-[600px] h-[600px] neural-glow-cyan rounded-full blur-3xl opacity-60" />
      </div>

      <FloatingNavbar />

      <main className="relative z-10 pt-32 sm:pt-40 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-8">
          <a
            href={homeHref}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 neu-badge px-4 py-2 rounded-full hover:text-brand-700 transition-all group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            {isEs ? "Volver al inicio" : "Back to home"}
          </a>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-badge text-xs font-bold text-brand-700 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {isEs ? "Contacto Directo" : "Direct Contact"}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {isEs ? "Hablemos de tu Proyecto" : "Let's Talk About Your Project"}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {isEs
              ? "Cuéntanos sobre tu necesidad técnica u operativa y te entregamos un diagnóstico y propuesta a la medida en menos de 24 horas."
              : "Tell us about your technical or operational needs, and we'll deliver a tailored proposal within 24 hours."}
          </p>
        </div>

        {/* Contact Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          <a
            href="mailto:info@saventihq.com"
            className="neu-extruded neu-extruded-hover rounded-2xl p-5 flex flex-col items-center text-center transition-all group"
          >
            <div className="w-12 h-12 rounded-xl neu-pressed flex items-center justify-center text-brand-600 mb-3 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {isEs ? "Correo Corporativo" : "Corporate Email"}
            </span>
            <span className="text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
              info@saventihq.com
            </span>
          </a>

          <a
            href="tel:+584147708179"
            className="neu-extruded neu-extruded-hover rounded-2xl p-5 flex flex-col items-center text-center transition-all group"
          >
            <div className="w-12 h-12 rounded-xl neu-pressed flex items-center justify-center text-emerald-600 mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {isEs ? "Teléfono & WhatsApp" : "Phone & WhatsApp"}
            </span>
            <span className="text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
              +58 414-7708179
            </span>
          </a>

          <div className="neu-extruded rounded-2xl p-5 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl neu-pressed flex items-center justify-center text-indigo-600 mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {isEs ? "Ubicación" : "Location"}
            </span>
            <span className="text-sm font-bold text-slate-800">
              Valencia, Carabobo · VE
            </span>
          </div>
        </div>

        {/* Embedded Form (Desktop & Mobile) */}
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:block">
            <CtaSection />
          </div>
          <div className="block md:hidden">
            <MobileNewsletterSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
