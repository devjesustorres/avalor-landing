"use client";

import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import {
  Layers,
  Globe2,
  Smartphone,
  Cpu,
  RefreshCw,
  Server,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function SolutionsSection() {
  const { t, lang } = useLanguage();
  const isEn = lang === "en";

  const services = [
    {
      icon: Layers,
      title: t("services.s1.title"),
      description: t("services.s1.desc"),
      cta: t("services.s1.cta"),
      href: isEn ? "/en/custom-erp-development" : "/desarrollo-erp",
    },
    {
      icon: Globe2,
      title: t("services.s2.title"),
      description: t("services.s2.desc"),
      cta: t("services.s2.cta"),
      href: isEn ? "/en/services" : "/servicios",
    },
    {
      icon: Smartphone,
      title: t("services.s3.title"),
      description: t("services.s3.desc"),
      cta: t("services.s3.cta"),
      href: isEn ? "/en/mobile-app-development" : "/aplicaciones-moviles",
    },
    {
      icon: Cpu,
      title: t("services.s4.title"),
      description: t("services.s4.desc"),
      cta: t("services.s4.cta"),
      href: isEn ? "/en/services" : "/servicios",
    },
    {
      icon: RefreshCw,
      title: t("services.s5.title"),
      description: t("services.s5.desc"),
      cta: t("services.s5.cta"),
      href: isEn ? "/en/services" : "/servicios",
    },
    {
      icon: Server,
      title: t("services.s6.title"),
      description: t("services.s6.desc"),
      cta: t("services.s6.cta"),
      href: isEn ? "/en/services" : "/servicios",
    },
  ];

  return (
    <section id="servicios" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          {t("services.badge")}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t("services.title")}
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          {t("services.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              className="neu-extruded neu-extruded-hover rounded-3xl p-2 border-none bg-transparent shadow-none transition-all duration-300 group"
            >
              <CardBody className="p-6">
                <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 mb-6 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </CardBody>
              <CardFooter className="px-6 pb-6 pt-0 border-t border-slate-300/30 flex justify-between items-center">
                <Button
                  as="a"
                  href={item.href}
                  variant="light"
                  size="sm"
                  endContent={<ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />}
                  className="px-0 font-bold text-xs text-brand-600 hover:text-brand-700 data-[hover=true]:bg-transparent"
                >
                  {item.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
