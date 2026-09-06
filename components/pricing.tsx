"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Check, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function PricingSection() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";
  const contactHref = isEn ? "/en/contact" : "/contacto";

  return (
    <section id="modelos" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          {t("pricing.badge")}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {t("pricing.title")}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
          {t("pricing.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        
        {/* Tier 1: Proyecto Llave en Mano */}
        <Card className="neu-extruded rounded-3xl p-3 border-none bg-transparent shadow-none flex flex-col justify-between">
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("pricing.t1.title")}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("pricing.t1.desc")}</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{t("pricing.t1.price")}</span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">{t("pricing.t1.period")}</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t1.f1")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t1.f2")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t1.f3")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t1.f4")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t1.f5")}
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as={Link}
              href={contactHref}
              radius="full"
              variant="flat"
              className="w-full py-3 neu-extruded neu-extruded-hover text-xs font-bold text-slate-800 dark:text-slate-200 bg-transparent"
            >
              {t("pricing.t1.cta")}
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 2: Dedicated Squad (Highlighted) */}
        <Card className="neu-extruded rounded-3xl p-3 border-2 border-brand-500 relative bg-gradient-to-b from-white/80 via-[#e2e8f0] to-[#e8edf3] dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90 shadow-2xl flex flex-col justify-between overflow-visible group hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <Chip color="primary" size="sm" className="font-extrabold text-[11px] uppercase shadow-lg px-3.5 bg-gradient-to-r from-brand-600 to-indigo-600 text-white animate-pulse-glow border border-white/40 dark:border-white/15">
              {t("pricing.t2.badge")}
            </Chip>
          </div>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("pricing.t2.title")}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("pricing.t2.desc")}</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{t("pricing.t2.price")}</span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">{t("pricing.t2.period")}</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t2.f1")}
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t2.f2")}
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t2.f3")}
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t2.f4")}
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t2.f5")}
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as={Link}
              href={contactHref}
              color="primary"
              radius="full"
              className="w-full py-3.5 font-bold text-xs bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white"
            >
              {t("pricing.t2.cta")}
            </Button>
          </CardFooter>
        </Card>

        {/* Tier 3: Bolsa de Horas */}
        <Card className="neu-extruded rounded-3xl p-3 border-none bg-transparent shadow-none flex flex-col justify-between">
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t("pricing.t3.title")}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("pricing.t3.desc")}</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{t("pricing.t3.price")}</span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mt-1">{t("pricing.t3.period")}</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t3.f1")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t3.f2")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t3.f3")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t3.f4")}
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" /> {t("pricing.t3.f5")}
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as={Link}
              href={contactHref}
              radius="full"
              variant="flat"
              className="w-full py-3 neu-extruded neu-extruded-hover text-xs font-bold text-slate-800 dark:text-slate-200 bg-transparent"
            >
              {t("pricing.t3.cta")}
            </Button>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}
