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
                alt="Saventi — Soluciones Digitales y Sistemas a la Medida"
                width={400}
                height={54}
                quality={100}
                className="h-6 w-auto object-contain dark:hidden"
              />
              <Image
                src="/saventi-text-white.png"
                alt="Saventi — Soluciones Digitales y Sistemas a la Medida"
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

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/saventihq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Saventi @saventihq"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-pink-600 transition-colors py-1 px-2.5 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@saventihq</span>
            </a>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 neu-badge px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {t("footer.status")}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
