"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  GitBranch,
  Layers,
  Database,
  Smartphone,
  CheckCircle2,
  Lock,
  ChevronRight,
  Server,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function MobileDashboardPreview() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"backend" | "frontend" | "qa">("backend");

  const metrics = [
    {
      label: t("method.metric1.label"),
      value: "< 45",
      unit: t("method.metric1.badge"),
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      bar: "w-[88%] bg-amber-500",
    },
    {
      label: t("method.metric2.label"),
      value: "99.99%",
      unit: t("method.metric2.badge"),
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      bar: "w-[99%] bg-emerald-500",
    },
    {
      label: t("method.metric3.label"),
      value: "100%",
      unit: t("method.metric3.badge"),
      icon: ShieldCheck,
      color: "text-brand-600",
      bg: "bg-brand-600/10",
      bar: "w-full bg-brand-600",
    },
  ];

  return (
    <div className="block md:hidden my-12 px-2">
      {/* App Container Device Frame */}
      <div className="relative rounded-[2.2rem] bg-gradient-to-b from-[#eef3f9] to-[#e4eaf2] p-3.5 shadow-neu-flat border border-white/80 overflow-hidden">
        
        {/* Dynamic Island / App Bar Top */}
        <div className="flex items-center justify-between px-2 pt-1 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] font-bold tracking-tight text-slate-600 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-brand-600" />
              saventi.kernel::v2.4
            </span>
          </div>

          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            ONLINE
          </span>
        </div>

        {/* Native Segmented Controls (iOS / Android Material Style) */}
        <div className="relative p-1 rounded-2xl bg-slate-200/70 neu-badge flex items-center gap-1 mb-4">
          {(["backend", "frontend", "qa"] as const).map((tab) => {
            const isSelected = activeTab === tab;
            const tabNames: Record<string, string> = {
              backend: "Cloud & API",
              frontend: "Mobile & UI",
              qa: "QA & DevOps",
            };
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 py-2 text-center text-xs font-bold rounded-xl transition-all select-none ${
                  isSelected ? "text-brand-600" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="mobile-dash-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{tabNames[tab]}</span>
              </button>
            );
          })}
        </div>

        {/* Swipeable Metrics Row (Horizontal App Cards) */}
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 pt-1 px-0.5 snap-x snap-mandatory">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="snap-start shrink-0 w-[138px] p-3 rounded-2xl neu-pressed bg-[#e5ebf3] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${m.bg}`}>
                    <Icon className={`w-4 h-4 ${m.color}`} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    {m.unit}
                  </span>
                </div>
                <div>
                  <div className="text-lg font-extrabold text-slate-800 leading-tight">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 line-clamp-1 mt-0.5">
                    {m.label}
                  </div>
                  <div className="w-full bg-slate-300/60 rounded-full h-1 mt-2 overflow-hidden">
                    <div className={`h-full rounded-full ${m.bar}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab Dynamic Content Cards */}
        <div className="mt-3">
          <AnimatePresence mode="wait">
            {activeTab === "backend" && (
              <motion.div
                key="tab-backend"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                {/* Micro Pipeline Step 1 */}
                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-brand-600 flex items-center justify-center shrink-0">
                    <Server className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">PostgreSQL + Redis Cache</h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                        P99: 12ms
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">Consultas indexadas de alta velocidad</p>
                  </div>
                </div>

                {/* Micro Pipeline Step 2 */}
                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">Node.js / Python FastAPIs</h4>
                      <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded-md">
                        Dockerized
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">Microservicios y arquitectura serverless</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "frontend" && (
              <motion.div
                key="tab-frontend"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">React Native / Next.js 15</h4>
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded-md">
                        60 FPS
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">UI nativa optimizada para gestos y tacto</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">Design System & Neumorphism</h4>
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md">
                        Tailwind
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">Componentes accesibles y temas oscuros</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "qa" && (
              <motion.div
                key="tab-qa"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">Tests End-to-End & Stress</h4>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                        0 Errores
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">Pruebas automatizadas en cada commit</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#eaf0f7] border border-white/80 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-800 truncate">NDA & Propiedad 100%</h4>
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Garantizado
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">Repositorios privados transferidos al cliente</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action CTA Button inside app */}
        <a
          href="#contacto"
          className="mt-3.5 w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neu-btn-blue active:scale-[0.98] transition-transform"
        >
          <span>{t("method.callout.btn")}</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

