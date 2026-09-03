"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Code, Clock, Lock, Sparkles, Wallet, Plug } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Clock,
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      icon: Code,
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      icon: Lock,
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      icon: Sparkles,
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      icon: ShieldCheck,
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      icon: Wallet,
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
    {
      icon: Plug,
      question: t("faq.q7"),
      answer: t("faq.a7"),
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="mt-28 sm:mt-36 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" /> {t("faq.badge")}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t("faq.title")}
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          {t("faq.subtitle")}
        </p>
      </div>

      {/* Accordion Container */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const Icon = faq.icon;
          return (
            <div
              key={index}
              className={`neu-extruded rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
                isOpen ? "bg-gradient-to-b from-[#e8edf3] to-[#e1e7ee] border border-brand-500/20" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isOpen
                        ? "neu-pressed text-brand-600 bg-brand-50"
                        : "neu-badge text-slate-500 group-hover:text-brand-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center neu-badge transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-brand-600" : "text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Las respuestas SIEMPRE están en el DOM (SEO/GEO: las ven los
                  crawlers que no ejecutan JS). El colapso es solo visual con CSS. */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
                aria-hidden={!isOpen}
              >
                <div className="overflow-hidden min-h-0">
                  <div
                    className={`${
                      isOpen ? "mt-4 pt-4 border-t border-slate-300/40" : ""
                    } pl-0 sm:pl-14 text-sm sm:text-base text-slate-600 leading-relaxed`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

