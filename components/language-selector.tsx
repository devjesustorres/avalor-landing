"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  // El idioma se deriva de la URL: independiente del LanguageProvider para que
  // este selector pueda vivir fuera de <Providers> (wrapper con transform).
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";

  // Ruta en español: quitar el prefijo /en. /en/privacy -> /privacy ; /en -> /
  const esPath =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(4) : pathname;
  // Ruta en inglés: anteponer /en. /privacy -> /en/privacy ; / -> /en
  const enPath = pathname === "/" ? "/en" : pathname.startsWith("/en") ? pathname : `/en${pathname}`;

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, []);

  const options = [
    { code: "es" as const, label: "Español", href: esPath },
    { code: "en" as const, label: "English", href: enPath },
  ];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 bg-slate-200/60 neu-badge pl-2.5 pr-2 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500" />
        <span>{lang === "es" ? "Español" : "English"}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[160px] rounded-xl bg-white shadow-xl shadow-black/10 border border-slate-200/70 p-1.5 z-50"
        >
          {options.map((o) => {
            const active = o.code === lang;
            return (
              <li key={o.code} role="option" aria-selected={active}>
                <Link
                  href={o.href}
                  prefetch={false}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
                    active
                      ? "text-brand-600 bg-brand-50"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {o.label}
                  {active && <Check className="w-4 h-4" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}


