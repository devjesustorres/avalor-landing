"use client";

import React from "react";
import { useLanguage, Language } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-slate-200/60 neu-badge p-1 rounded-full text-xs">
      <div className="pl-1.5 pr-0.5 text-slate-500 flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all duration-200 ${
          lang === "es"
            ? "bg-white text-brand-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Cambiar idioma a Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all duration-200 ${
          lang === "en"
            ? "bg-white text-brand-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </button>
    </div>
  );
}

