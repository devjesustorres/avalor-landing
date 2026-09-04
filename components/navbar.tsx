"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { LanguageSelector } from "@/components/language-selector";

export function FloatingNavbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-6">
      <div className="flex w-full max-w-6xl items-center justify-center gap-2 sm:gap-3">
        <nav className="neu-pill-nav rounded-full py-4 pl-4 sm:pl-6 pr-4 sm:pr-6 flex-1 min-w-0 flex items-center justify-between transition-all duration-300">
        {/* Brand Logo (solo texto SAVENTI; versión blanca en modo oscuro) */}
        <a href="#" className="flex items-center group">
          <div className="relative h-5 sm:h-6 w-auto flex items-center">
            <Image
              src="/saventi-text.png"
              alt="Saventi — Empresa de Desarrollo de Software a la Medida y ERPs"
              width={400}
              height={54}
              priority
              quality={100}
              className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105 dark:hidden"
            />
            <Image
              src="/saventi-text-white.png"
              alt="Saventi — Empresa de Desarrollo de Software a la Medida y ERPs"
              width={400}
              height={54}
              priority
              quality={100}
              className="hidden h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105 dark:block"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#servicios"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.services")}
          </a>
          <a
            href="#metodologia"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.methodology")}
          </a>
          <a
            href="#beneficios"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.benefits")}
          </a>
          <a
            href="#modelos"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.models")}
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.faq")}
          </a>
          <a
            href="#contacto"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            {t("nav.contact")}
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            as="a"
            href="#contacto"
            color="primary"
            radius="full"
            size="sm"
            endContent={<ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />}
            className="font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-600 to-brand-500 shadow-neu-btn-blue hover:shadow-lg hover:from-brand-500 hover:to-brand-600 active:shadow-neu-btn-blue-active transition-all px-3.5 sm:px-5 py-2 group"
          >
            {t("nav.quote")}
          </Button>
        </div>
        </nav>
        {/* Selector de idioma: fuera del pill del navbar, a su derecha */}
        <div className="shrink-0">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
