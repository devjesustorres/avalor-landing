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
      <nav className="neu-pill-nav rounded-full py-2.5 px-4 sm:px-6 w-full max-w-5xl flex items-center justify-between transition-all duration-300">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative h-8 sm:h-9 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Saventi Logo"
              width={160}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
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

        {/* Language Selector & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelector />

          <Button
            as="a"
            href="#contacto"
            variant="light"
            radius="full"
            size="sm"
            className="hidden lg:inline-flex text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-200/50"
          >
            {t("nav.schedule")}
          </Button>
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
    </header>
  );
}
