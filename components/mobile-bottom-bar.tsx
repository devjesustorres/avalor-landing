"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Terminal,
  Award,
  Sparkles,
  MessageSquare,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function MobileBottomBar() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("#servicios");

  const navItems = [
    { id: "#servicios", label: t("nav.services"), icon: Layers },
    { id: "#metodologia", label: t("nav.methodology"), icon: Terminal },
    { id: "#beneficios", label: t("nav.benefits"), icon: Award },
    { id: "#modelos", label: t("nav.models"), icon: Sparkles },
    { id: "#contacto", label: t("nav.contact"), icon: MessageSquare },
  ];

  // Sync active item via IntersectionObserver
  useEffect(() => {
    const ids = ["servicios", "metodologia", "beneficios", "modelos", "contacto"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(`#${id}`);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="md:hidden fixed bottom-3 inset-x-3 z-50 pointer-events-none">
      {/* Bottom Bar Floating Dock */}
      <nav
        aria-label="Mobile Navigation Bar"
        className="pointer-events-auto mx-auto max-w-sm rounded-[1.8rem] bg-[#e8edf3]/90 backdrop-blur-xl border border-white/80 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.14),0_2px_8px_rgba(255,255,255,0.7)] flex items-center justify-around"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 group select-none"
            >
              {/* Active Morphing Blob Capsule */}
              {isActive && (
                <motion.div
                  layoutId="mobile-bottom-active-pill"
                  className="absolute inset-0 rounded-2xl bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}

              {/* Icon Container with subtle bounce */}
              <motion.div
                animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`relative z-10 w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${
                  isActive ? "text-brand-600 font-bold" : "text-slate-500 group-hover:text-slate-700"
                }`}
              >
                <Icon className="w-4 h-4 stroke-[2.2]" />
              </motion.div>

              {/* Label */}
              <span
                className={`relative z-10 text-[10px] tracking-tight leading-none mt-0.5 transition-colors ${
                  isActive ? "font-extrabold text-brand-600" : "font-semibold text-slate-500"
                }`}
              >
                {item.label}
              </span>

              {/* Active Indicator Micro-dot */}
              {isActive && (
                <motion.span
                  layoutId="mobile-bottom-dot"
                  className="w-1 h-1 rounded-full bg-brand-600 mt-0.5"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

