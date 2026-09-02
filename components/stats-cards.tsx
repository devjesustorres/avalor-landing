"use client";

import React from "react";
import { Chip } from "@heroui/react";
import { TrendingUp, Layers, Code2, ArrowUpRight, Cpu, Lock } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function StatsCards() {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 uppercase tracking-widest mb-3">
          {t("benefits.badge")}
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t("benefits.title")}
        </h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          {t("benefits.subtitle")}
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="neu-extruded neu-extruded-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/10 transition-all duration-500 pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600">
                <Code2 className="w-6 h-6" />
              </div>
              <Chip size="sm" variant="flat" color="success" className="font-semibold text-xs bg-emerald-100 text-emerald-800">
                {t("benefits.card1.chip")}
              </Chip>
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {t("benefits.card1.val")}
              </span>
              <span className="text-sm font-bold text-emerald-600 flex items-center">
                <ArrowUpRight className="w-4 h-4" /> 100%
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {t("benefits.card1.title")}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {t("benefits.card1.desc")}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-300/40 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>{t("benefits.card1.bottom_l")}</span>
            <span className="text-brand-600 flex items-center gap-1 font-bold">
              <Cpu className="w-3.5 h-3.5" /> {t("benefits.card1.bottom_r")}
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="neu-extruded neu-extruded-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group border-2 border-brand-500/20 bg-gradient-to-b from-[#e8edf3] to-slate-200/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full blur-2xl group-hover:bg-brand-600/15 transition-all duration-500 pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 shadow-inner">
                <TrendingUp className="w-6 h-6" />
              </div>
              <Chip size="sm" variant="flat" color="primary" className="font-semibold text-xs bg-brand-100 text-brand-700">
                {t("benefits.card2.chip")}
              </Chip>
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-brand-600 tracking-tight">
                {t("benefits.card2.val")}
              </span>
              <span className="text-sm font-bold text-brand-600 flex items-center">
                <ArrowUpRight className="w-4 h-4" /> Speed
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {t("benefits.card2.title")}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {t("benefits.card2.desc")}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-300/40 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>{t("benefits.card2.bottom_l")}</span>
            <span className="text-brand-600 flex items-center gap-1 font-bold">
              <Layers className="w-3.5 h-3.5" /> {t("benefits.card2.bottom_r")}
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="neu-extruded neu-extruded-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-all duration-500 pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600">
                <Lock className="w-6 h-6" />
              </div>
              <Chip size="sm" variant="flat" color="secondary" className="font-semibold text-xs bg-indigo-100 text-indigo-700">
                {t("benefits.card3.chip")}
              </Chip>
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {t("benefits.card3.val")}
              </span>
              <span className="text-sm font-bold text-indigo-600 flex items-center">
                <ArrowUpRight className="w-4 h-4" /> Ownership
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {t("benefits.card3.title")}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {t("benefits.card3.desc")}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-300/40 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>{t("benefits.card3.bottom_l")}</span>
            <span className="text-brand-600 flex items-center gap-1 font-bold">
              <Lock className="w-3.5 h-3.5" /> {t("benefits.card3.bottom_r")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
