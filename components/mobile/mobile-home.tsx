"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { StatsCards } from "@/components/stats-cards";
import { MobileDashboardPreview } from "@/components/mobile-dashboard-preview";
import { SolutionsSection } from "@/components/solutions";
import { BusinessImpactSection } from "@/components/business-impact-section";
import { PricingSection } from "@/components/pricing";
import { FaqSection } from "@/components/faq-section";
import { MobileNewsletterSection } from "@/components/mobile-newsletter-section";

export function MobileHome() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  const homeHref = isEn ? "/en" : "/";
  const contactHref = isEn ? "/en/contact" : "/contacto";
  const servicesHref = isEn ? "/en/services" : "/servicios";
  const methodologyHref = isEn ? "/en/methodology" : "/metodologia";
  const benefitsHref = isEn ? "/en/benefits" : "/beneficios";
  const pricingHref = isEn ? "/en/pricing" : "/precios";
  const faqHref = isEn ? "/en/faq" : "/faq";

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 pb-16">
      {/* 1. Mobile Top Brand Bar (Logo Centrado y Link a Home) */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 py-3.5 shadow-xs flex items-center justify-between">
        <Link href={homeHref} className="flex items-center">
          <Image
            src="/saventi-text.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={240}
            height={36}
            priority
            className="h-5 sm:h-6 w-auto object-contain dark:hidden"
          />
          <Image
            src="/saventi-text-white.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={240}
            height={36}
            priority
            className="hidden h-5 sm:h-6 w-auto object-contain dark:block"
          />
        </Link>
        <Link
          href={contactHref}
          className="text-xs font-bold px-3 py-1.5 rounded-full bg-brand-600 text-white shadow-xs"
        >
          {t("nav.quote")}
        </Link>
      </header>

      {/* 2. Mobile Hero Section - Toma todo el ancho disponible */}
      <section className="w-full px-4 pt-8 pb-6 text-center relative overflow-hidden">
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
        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto mb-6">
          <Button
            as={Link}
            href={contactHref}
            color="primary"
            radius="full"
            size="lg"
            startContent={<Zap className="w-4 h-4 fill-current" />}
            className="w-full font-bold text-sm text-white bg-brand-600 shadow-neu-btn-blue py-6"
          >
            {t("hero.cta_quote")}
          </Button>

          <Button
            as={Link}
            href={servicesHref}
            radius="full"
            size="lg"
            variant="flat"
            endContent={<ArrowRight className="w-4 h-4 text-brand-600" />}
            className="w-full font-bold text-xs text-slate-700 bg-white border border-slate-200 py-6 shadow-xs"
          >
            {t("hero.cta_services")}
          </Button>
        </div>

        {/* Mini Trust Metrics Strip: 100% full width responsive */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200 text-center w-full">
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center">
            <div className="text-lg font-extrabold text-slate-900">100%</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">Gestionado</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center">
            <div className="text-lg font-extrabold text-slate-900">2-4 Sem</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">En Línea</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center">
            <div className="text-lg font-extrabold text-slate-900">Soporte</div>
            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">Continuo</div>
          </div>
        </div>
      </section>

      {/* 3. Beneficios & Tarjetas de Valor (Aprovechan todo el espacio en pantalla) */}
      <div className="w-full">
        <StatsCards />
      </div>

      {/* 4. Crecimiento Empresarial & Confianza (Business Impact) */}
      <div className="w-full">
        <BusinessImpactSection />
      </div>

      {/* 5. Interactive Mobile Dashboard / Architecture Component */}
      <div className="w-full">
        <MobileDashboardPreview />
      </div>

      {/* 6. Soluciones Adaptadas */}
      <div className="w-full">
        <SolutionsSection />
      </div>

      {/* 7. Precios y Modelos de Trabajo */}
      <div className="w-full">
        <PricingSection />
      </div>

      {/* 8. Formulario de Diagnóstico Rápido */}
      <div className="w-full px-2 mt-8">
        <MobileNewsletterSection />
      </div>

      {/* 9. Preguntas Frecuentes */}
      <div className="w-full">
        <FaqSection />
      </div>

      {/* 10. Footer Móvil Limpio con Links a Páginas Específicas */}
      <footer className="border-t border-slate-200 bg-white py-10 px-4 text-center mt-12 w-full">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <Link href={homeHref}>
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
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Software diseñado alrededor de operaciones reales.
          </p>

          {/* Quick links to dedicated pages */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600 mb-5">
            <Link href={servicesHref} className="hover:text-brand-600">{t("nav.services")}</Link>
            <Link href={methodologyHref} className="hover:text-brand-600">{t("nav.methodology")}</Link>
            <Link href={benefitsHref} className="hover:text-brand-600">{t("nav.benefits")}</Link>
            <Link href={pricingHref} className="hover:text-brand-600">{t("nav.models")}</Link>
            <Link href={faqHref} className="hover:text-brand-600">{t("nav.faq")}</Link>
            <Link href={contactHref} className="hover:text-brand-600">{t("nav.contact")}</Link>
          </div>

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
