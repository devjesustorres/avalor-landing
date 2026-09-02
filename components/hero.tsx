"use client";

import React from "react";
import { Button, Chip } from "@heroui/react";
import { Zap, ArrowRight, Cpu, ShieldCheck, Globe, Layers, Database } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 pt-36 pb-16 sm:pt-44 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Hero Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full neu-badge text-xs font-semibold text-slate-700 mb-8 border border-white/60">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
          </span>
          <span className="tracking-wide">{t("hero.badge")}</span>
          <Chip size="sm" color="primary" variant="flat" className="text-[10px] font-bold uppercase h-5 bg-brand-100 text-brand-700">
            {t("hero.badge_chip")}
          </Chip>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
          {t("hero.title_prefix")}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-brand-700 to-brand-600">
            {t("hero.title_highlight")}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {t("hero.subtitle")}
        </p>

        {/* HeroUI CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Button
            as="a"
            href="#contacto"
            color="primary"
            radius="full"
            size="lg"
            startContent={<Zap className="w-5 h-5 fill-current" />}
            className="w-full sm:w-auto px-8 py-6 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue hover:shadow-xl active:shadow-neu-btn-blue-active transition-all transform hover:-translate-y-0.5"
          >
            {t("hero.cta_quote")}
          </Button>

          <Button
            as="a"
            href="#servicios"
            radius="full"
            size="lg"
            variant="light"
            endContent={<ArrowRight className="w-4 h-4 text-brand-600 ml-1" />}
            className="w-full sm:w-auto px-7 py-6 text-base font-bold text-slate-700 neu-extruded neu-extruded-hover hover:text-slate-900 bg-[#e8edf3]"
          >
            {t("hero.cta_services")}
          </Button>
        </div>

        {/* Tech Stack & Standards Badges */}
        <div className="pt-4 pb-2 border-t border-slate-300/40 w-full max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            {t("hero.tech_heading")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 transition-all duration-300">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm tracking-tighter hover:text-brand-600 transition-colors">
              <Cpu className="w-5 h-5 text-brand-600" /> REACT & NEXT.JS
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm tracking-tighter hover:text-brand-600 transition-colors">
              <ShieldCheck className="w-5 h-5 text-brand-600" /> CLOUD & DEVOPS
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm tracking-tighter hover:text-brand-600 transition-colors">
              <Database className="w-5 h-5 text-brand-600" /> POSTGRESQL & SQL
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm tracking-tighter hover:text-brand-600 transition-colors">
              <Layers className="w-5 h-5 text-brand-600" /> NODE.JS & PYTHON
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-sm tracking-tighter hover:text-brand-600 transition-colors">
              <Globe className="w-5 h-5 text-brand-600" /> APIS & MICROSERVICIOS
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

