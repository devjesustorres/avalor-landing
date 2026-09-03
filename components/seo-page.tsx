"use client";

import React from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HelpCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { SeoPageContent, SeoSection } from "@/lib/seo-content";

export default function SeoPage({ content }: { content: SeoPageContent }) {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const homeHref = isEs ? "/" : "/en";
  const homeLabel = isEs ? "Volver al inicio" : "Back to home";

  return (
    <div className="min-h-screen relative">
      <FloatingNavbar />

      <main className="relative z-10 pt-32 sm:pt-36 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 mb-8 neu-badge px-3.5 py-1.5 rounded-full hover:text-brand-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {homeLabel}
        </a>

        {/* Hero */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> {content.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-3xl">
            {content.title}
          </h1>
          <p className="text-slate-600 mt-5 text-base sm:text-lg leading-relaxed max-w-3xl">
            {content.lead}
          </p>
          <p className="text-xs text-slate-400 mt-3 font-medium">{content.updated}</p>
        </header>

        {/* Sections */}
        {content.sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}

        {/* FAQ (siempre renderizado en el DOM: visible para crawlers/LLM) */}
        <section
          id="faq"
          aria-label={content.faq.title}
          className="mt-16 border-t border-slate-300/40 pt-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> {content.faq.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.faq.title}
          </h2>
          <p className="text-slate-600 mt-3 mb-8 max-w-3xl">{content.faq.lead}</p>

          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <div
                key={idx}
                className="neu-extruded rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-[#e8edf3] to-[#e1e7ee]"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.q}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2 pt-3 border-t border-slate-300/40">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="neu-extruded rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {content.cta.title}
              </h2>
              <p className="text-slate-600 mt-4 text-base sm:text-lg mb-8">
                {content.cta.text}
              </p>
              <a
                href={content.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                {content.cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Related / enlaces internos */}
        <section className="mt-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> {content.related.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            {content.related.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.related.cards.map((card, idx) => (
              <a
                key={idx}
                href={card.href}
                className="neu-badge rounded-2xl p-5 sm:p-6 flex flex-col gap-2 hover:border-brand-500/40 transition-colors group"
              >
                <span className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  {card.title}
                </span>
                <span className="text-sm text-slate-600 leading-relaxed">
                  {card.text}
                </span>
                <span className="text-xs font-bold text-brand-600 inline-flex items-center gap-1 mt-1">
                  {isEs ? "Ver más" : "Read more"} <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function SectionBlock({ section }: { section: SeoSection }) {
  return (
    <section className="mb-14">
      {section.eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          {section.eyebrow}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        {section.heading}
      </h2>

      {section.intro && (
        <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed max-w-3xl">
          {section.intro}
        </p>
      )}

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-slate-600 mt-4 text-base leading-relaxed max-w-3xl">
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-6 space-y-3 max-w-3xl">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-base leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.cards && (
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.cards.map((card, i) => {
            const inner = (
              <>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
              </>
            );
            return card.href ? (
              <a
                key={i}
                href={card.href}
                className="group neu-badge rounded-2xl p-5 sm:p-6 flex flex-col gap-2 hover:border-brand-500/40 transition-colors"
              >
                {inner}
                <span className="text-xs font-bold text-brand-600 inline-flex items-center gap-1 mt-1">
                  {card.href.startsWith("/en")
                    ? "Read more"
                    : "Ver más"}{" "}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ) : (
              <div key={i} className="neu-badge rounded-2xl p-5 sm:p-6 flex flex-col gap-2">
                {inner}
              </div>
            );
          })}
        </div>
      )}

      {section.note && (
        <div className="mt-6 max-w-3xl rounded-2xl border border-brand-500/25 bg-brand-50/60 p-5 text-sm text-slate-700 leading-relaxed">
          {section.note}
        </div>
      )}
    </section>
  );
}
