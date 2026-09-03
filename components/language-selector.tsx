"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { lang } = useLanguage();
  const pathname = usePathname() ?? "/";

  // Ruta en español: quitar el prefijo /en. /en/privacy -> /privacy ; /en -> /
  const esPath =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(4) : pathname;
  // Ruta en inglés: anteponer /en. /privacy -> /en/privacy ; / -> /en
  const enPath = pathname === "/" ? "/en" : pathname.startsWith("/en") ? pathname : `/en${pathname}`;

  return (
    <div className="flex items-center gap-1 bg-slate-200/60 neu-badge p-1 rounded-full text-xs">
      <div className="pl-1.5 pr-0.5 text-slate-500 flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <Link
        href={esPath}
        prefetch={false}
        className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all duration-200 ${
          lang === "es"
            ? "bg-white text-brand-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Cambiar idioma a Español"
      >
        ES
      </Link>
      <Link
        href={enPath}
        prefetch={false}
        className={`px-2.5 py-1 rounded-full font-bold text-[11px] transition-all duration-200 ${
          lang === "en"
            ? "bg-white text-brand-600 shadow-sm"
            : "text-slate-600 hover:text-slate-900"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </Link>
    </div>
  );
}


