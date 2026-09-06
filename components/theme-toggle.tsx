"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Alternar modo claro / oscuro"
      title="Alternar modo claro / oscuro"
      className={`relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center bg-slate-200/80 dark:bg-slate-800/90 neu-badge text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-slate-300/40 dark:border-white/10 ${className}`}
    >
      <Sun className="w-4 h-4 text-amber-400 hidden dark:block transition-transform hover:rotate-45 duration-300" />
      <Moon className="w-4 h-4 text-slate-700 dark:hidden transition-transform hover:-rotate-12 duration-300" />
    </button>
  );
}

