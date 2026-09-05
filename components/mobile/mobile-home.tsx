"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { MobileDashboardPreview } from "@/components/mobile-dashboard-preview";
import { SolutionsSection } from "@/components/solutions";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { PricingSection } from "@/components/pricing";
import { FaqSection } from "@/components/faq-section";
import { MobileNewsletterSection } from "@/components/mobile-newsletter-section";

export function MobileHome() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 pb-16">
      {/* 1. Mobile Top Brand Bar (Logo Centrado Limpio) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3.5 shadow-xs flex items-center justify-center">
        <a href="#" className="flex items-center justify-center">
          <Image
            src="/saventi-text.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={280}
            height={40}
            priority
            className="h-5 sm:h-6 w-auto object-contain dark:hidden"
          />
          <Image
            src="/saventi-text-white.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={280}
            height={40}
            priority
            className="hidden h-5 sm:h-6 w-auto object-contain dark:block"
          />
        </a>
      </header>

      {/* 2. Mobile Hero Section */}
      <section className="px-4 pt-8 pb-6 text-center relative overflow-hidden">
        {/* Subtle mobile glows */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-36 bg-brand-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-24 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          {t("hero.title_prefix")}{" "}
          <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 animate-gradient-text">
            {t("hero.title_highlight")}
          </span>
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
          {t("hero.subtitle")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 max-w-xs mx-auto mb-6">
          <Button
            as="a"
            href="#contacto"
            color="primary"
            radius="full"
            size="lg"
            startContent={<Zap className="w-4 h-4 fill-current" />}
            className="w-full font-bold text-sm text-white bg-brand-600 shadow-neu-btn-blue py-6"
          >
            {t("hero.cta_quote")}
          </Button>

          <Button
            as="a"
            href="#servicios"
            radius="full"
            size="lg"
            variant="flat"
            endContent={<ArrowRight className="w-4 h-4 text-brand-600" />}
            className="w-full font-bold text-xs text-slate-700 bg-white border border-slate-200 py-6 shadow-xs"
          >
            {t("hero.cta_services")}
          </Button>
        </div>

        {/* Mini Trust Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 text-center">
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-extrabold text-slate-900">100%</div>
            <div className="text-[10px] font-semibold text-slate-500">Gestionado</div>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-extrabold text-slate-900">2-4 Sem</div>
            <div className="text-[10px] font-semibold text-slate-500">En Línea</div>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-base font-extrabold text-slate-900">Soporte</div>
            <div className="text-[10px] font-semibold text-slate-500">Continuo</div>
          </div>
        </div>
      </section>

      {/* 3. Crecimiento Empresarial & Confianza (Aparece más rápido) */}
      <BusinessImpactSection />

      {/* 4. Interactive Mobile Dashboard / Architecture Component */}
      <MobileDashboardPreview />

      {/* 5. Soluciones Adaptadas */}
      <SolutionsSection />

      {/* 6. Precios y Modelos de Trabajo */}
      <PricingSection />

      {/* 6. Formulario de Diagnóstico Rápido */}
      <section id="contacto">
        <MobileNewsletterSection />
      </section>

      {/* 7. Preguntas Frecuentes */}
      <FaqSection />

      {/* 8. Footer Móvil Limpio con Logo Oficial en Imagen */}
      <footer className="border-t border-slate-200 bg-white py-10 px-4 text-center mt-8">
        <div className="max-w-xs mx-auto flex flex-col items-center">
          <Image
            src="/saventi-text.png"
            alt="Saventi — Plataforma de Software Empresarial y Automatización"
            width={160}
            height={26}
            className="h-6 w-auto object-contain mx-auto mb-2 dark:hidden"
          />
          <Image
            src="/saventi-text-white.png"
            alt="Saventi — Plataforma de Software Empresarial y Automatización"
            width={160}
            height={26}
            className="hidden h-6 w-auto object-contain mx-auto mb-2 dark:block"
          />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Software diseñado alrededor de operaciones reales.
          </p>
          <div className="flex flex-col items-center gap-1 text-[11px] text-slate-500 mb-3">
            <a href="tel:+584147708179" className="font-semibold hover:text-blue-600 transition-colors">
              📞 +58 414-7708179
            </a>
            <a href="mailto:info@saventihq.com" className="hover:text-blue-600 transition-colors">
              info@saventihq.com
            </a>
            <span className="text-slate-400">Valencia, Carabobo, VE</span>
          </div>
          <div className="w-10 h-px bg-slate-200 mx-auto my-3" />
          <p className="text-[10px] text-slate-400 leading-relaxed">
            © 2026 Saventi · Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Keep export for backwards compatibility
export function MobileBottomBar() {
  return null;
}

// No bottom bar for mobile on Saventi-landing as per user request


