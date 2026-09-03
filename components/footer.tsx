"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t, lang } = useLanguage();
  const base = lang === "en" ? "/en" : "";
  const isEn = lang === "en";

  return (
    <footer className="mt-28 border-t border-slate-300/40 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-auto flex items-center">
              <Image
                src="/saventi-text.png"
                alt="Saventi"
                width={400}
                height={54}
                quality={100}
                className="h-6 w-auto object-contain dark:hidden"
              />
              <Image
                src="/saventi-text-white.png"
                alt="Saventi"
                width={400}
                height={54}
                quality={100}
                className="hidden h-6 w-auto object-contain dark:block"
              />
            </div>
            <span className="text-xs text-slate-400 ml-2">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6 text-xs font-semibold text-slate-500">
              <a href="#servicios" className="hover:text-slate-900 transition-colors">{t("nav.services")}</a>
              <a href="#metodologia" className="hover:text-slate-900 transition-colors">{t("nav.methodology")}</a>
              <a href="#beneficios" className="hover:text-slate-900 transition-colors">{t("nav.benefits")}</a>
              <a href="#modelos" className="hover:text-slate-900 transition-colors">{t("nav.models")}</a>
              <a href="#faq" className="hover:text-slate-900 transition-colors">{t("nav.faq")}</a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6 text-xs font-semibold text-slate-500 border-t border-slate-300/30 pt-3">
              <a href={isEn ? "/en/services" : "/servicios"} className="hover:text-slate-900 transition-colors">{t("nav.services")}</a>
              <a href={isEn ? "/en/custom-erp-development" : "/desarrollo-erp"} className="hover:text-slate-900 transition-colors">{isEn ? "Custom ERP" : "ERP a la Medida"}</a>
              <a href={isEn ? "/en/mobile-app-development" : "/aplicaciones-moviles"} className="hover:text-slate-900 transition-colors">{isEn ? "Mobile Apps" : "Apps Móviles"}</a>
              <a href={isEn ? "/en/pricing" : "/precios"} className="hover:text-slate-900 transition-colors">{isEn ? "Pricing" : "Precios"}</a>
              <span className="w-px h-4 bg-slate-300/60 hidden sm:inline-block" />
              <a href={`${base}/privacy`} className="hover:text-slate-900 transition-colors">{t("footer.privacy")}</a>
              <a href={`${base}/terms`} className="hover:text-slate-900 transition-colors">{t("footer.terms")}</a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 neu-badge px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t("footer.status")}
          </div>

        </div>
      </div>
    </footer>
  );
}
