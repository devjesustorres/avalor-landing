"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  const homeHref = isEn ? "/en" : "/";
  const servicesHref = isEn ? "/en/services" : "/servicios";
  const methodologyHref = isEn ? "/en/methodology" : "/metodologia";
  const benefitsHref = isEn ? "/en/benefits" : "/beneficios";
  const pricingHref = isEn ? "/en/pricing" : "/precios";
  const faqHref = isEn ? "/en/faq" : "/faq";
  const contactHref = isEn ? "/en/contact" : "/contacto";
  const base = isEn ? "/en" : "";

  return (
    <div className="min-h-screen relative bg-[#edf2f7] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 selection:bg-brand-600 selection:text-white transition-colors duration-300">
      {/* Background Ambient Glows — idéntico al de la landing */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] neural-glow rounded-full blur-3xl opacity-90 animate-pulse-glow" />
        <div className="absolute top-[450px] -right-24 w-[650px] h-[650px] neural-glow-purple rounded-full blur-3xl opacity-75 animate-float-slow" />
        <div className="absolute top-[1200px] -left-32 w-[650px] h-[650px] neural-glow-cyan rounded-full blur-3xl opacity-75 animate-float-delayed" />
      </div>

      {/* ── MOBILE HEADER (igual que MobileHome) ── */}
      <header className="md:hidden sticky top-0 z-50 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 py-3 shadow-xs flex items-center justify-between">
        <Link href={homeHref} className="flex items-center">
          <Image
            src="/saventi-text.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={240}
            height={36}
            priority
            className="h-5 w-auto object-contain dark:hidden"
          />
          <Image
            src="/saventi-text-white.png"
            alt="Saventi — Software a la Medida, ERPs y Apps Móviles"
            width={240}
            height={36}
            priority
            className="hidden h-5 w-auto object-contain dark:block"
          />
        </Link>
        <div className="flex items-center gap-1.5">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      {/* ── DESKTOP NAVBAR (igual que la landing) ── */}
      <div className="hidden md:block">
        <FloatingNavbar />
      </div>

      {/* ── CONTENIDO ── */}
      <main className="relative z-10">
        {children}
      </main>

      {/* ── MOBILE FOOTER (igual que MobileHome) ── */}
      <footer className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/90 py-10 px-4 text-center mt-12 w-full">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <Link href={homeHref}>
            <Image
              src="/saventi-text.png"
              alt="Saventi"
              width={160}
              height={26}
              className="h-6 w-auto object-contain mx-auto mb-2 dark:hidden"
            />
            <Image
              src="/saventi-text-white.png"
              alt="Saventi"
              width={160}
              height={26}
              className="hidden h-6 w-auto object-contain mx-auto mb-2 dark:block"
            />
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Software diseñado alrededor de operaciones reales.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-5">
            <Link href={servicesHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.services")}</Link>
            <Link href={methodologyHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.methodology")}</Link>
            <Link href={benefitsHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.benefits")}</Link>
            <Link href={pricingHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.models")}</Link>
            <Link href={faqHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.faq")}</Link>
            <Link href={contactHref} className="hover:text-brand-600 dark:hover:text-brand-400">{t("nav.contact")}</Link>
          </div>

          <div className="flex flex-col items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
            <a href="tel:+584147708179" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              📞 +58 414-7708179
            </a>
            <a href="mailto:info@saventihq.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              info@saventihq.com
            </a>
            <span className="text-slate-400 dark:text-slate-500">Valencia, Carabobo, VE</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[10px] text-slate-400 dark:text-slate-500 font-medium mb-3">
            <Link href={`${base}/privacy`} className="hover:text-slate-600 dark:hover:text-slate-300">{t("footer.privacy")}</Link>
            <span>·</span>
            <Link href={`${base}/terms`} className="hover:text-slate-600 dark:hover:text-slate-300">{t("footer.terms")}</Link>
          </div>

          <div className="w-10 h-px bg-slate-200 dark:bg-slate-800 mx-auto my-3" />
          <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed">
            © {new Date().getFullYear()} Saventi · Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* ── DESKTOP FOOTER (igual que la landing) ── */}
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

