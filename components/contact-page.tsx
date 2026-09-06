"use client";

import React from "react";
import { PageLayout } from "@/components/page-layout";
import { CtaSection } from "@/components/cta-section";
import { MobileNewsletterSection } from "@/components/mobile-newsletter-section";
import { useLanguage } from "@/context/language-context";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function ContactPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <PageLayout>
      <div className="pt-20 sm:pt-36 pb-16 sm:pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-badge text-xs font-bold text-brand-700 dark:text-brand-300 uppercase tracking-widest mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {isEs ? "Contacto Directo" : "Direct Contact"}
          </div>
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-[1.15]">
            {isEs ? "Hablemos de tu Proyecto" : "Let's Talk About Your Project"}
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {isEs
              ? "Cuéntanos sobre tu necesidad técnica u operativa y te entregamos un diagnóstico y propuesta a la medida en menos de 24 horas."
              : "Tell us about your technical or operational needs, and we'll deliver a tailored proposal within 24 hours."}
          </p>
        </div>

        {/* Contact Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 max-w-4xl mx-auto mb-10 sm:mb-14">
          <a
            href="mailto:info@saventihq.com"
            className="neu-extruded neu-extruded-hover rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center transition-all group bg-white/60 dark:bg-slate-900/60"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl neu-pressed flex items-center justify-center text-brand-600 dark:text-brand-400 mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              {isEs ? "Correo Corporativo" : "Corporate Email"}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              info@saventihq.com
            </span>
          </a>

          <a
            href="tel:+584147708179"
            className="neu-extruded neu-extruded-hover rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center transition-all group bg-white/60 dark:bg-slate-900/60"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl neu-pressed flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              {isEs ? "Teléfono & WhatsApp" : "Phone & WhatsApp"}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              +58 414-7708179
            </span>
          </a>

          <div className="neu-extruded rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center bg-white/60 dark:bg-slate-900/60">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl neu-pressed flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-2.5 sm:mb-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              {isEs ? "Ubicación" : "Location"}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
              Valencia, Carabobo · VE
            </span>
          </div>
        </div>

        {/* Embedded Form (Desktop & Mobile) */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="hidden md:block">
            <CtaSection />
          </div>
          <div className="block md:hidden">
            <MobileNewsletterSection />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
