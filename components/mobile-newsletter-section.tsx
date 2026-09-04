"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  Clock,
  FileCheck,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function MobileNewsletterSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <div className="block md:hidden my-12 px-3">
      {/* Mobile Card Container with Soft Neumorphism */}
      <div className="relative rounded-[2.2rem] bg-gradient-to-b from-[#edf3fa] to-[#e4eaf2] p-5 shadow-neu-flat border border-white/80 overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-[11px] font-bold mb-3">
          <Sparkles className="w-3 h-3 text-brand-600" />
          <span>Diagnóstico Tecnológico Gratuito</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-slate-900 leading-tight tracking-tight">
          ¿Tienes una idea o proyecto en mente?
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Recibe en tu correo una estimación de tiempos, stack recomendado y propuesta técnica sin compromiso.
        </p>

        {/* Trust Badges Chips (Horizontal Scrollable / Row) */}
        <div className="flex items-center gap-2 mt-3.5 mb-5 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <Clock className="w-3 h-3 text-brand-600" />
            <span>Respuesta &lt; 24h</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Acuerdo NDA</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <FileCheck className="w-3 h-3 text-blue-600" />
            <span>Código 100% Tuyo</span>
          </div>
        </div>

        {/* Interactive App-Like Form */}
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                <Check className="w-5 h-5 stroke-[3]" />
              </div>
              <h4 className="text-sm font-extrabold text-emerald-900">
                ¡Solicitud Recibida con Éxito!
              </h4>
              <p className="text-xs text-emerald-700 mt-1">
                Un ingeniero de soluciones revisará tu requerimiento y te contactará en breve.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Native Mobile Input Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@empresa.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-2xl neu-pressed bg-[#e5ebf3] text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
                />
              </div>

              {/* Big Touch-Friendly Button with Haptic Feel */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-500 active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neu-btn-blue transition-all disabled:opacity-75 cursor-pointer"
              >
                {status === "loading" ? (
                  <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                ) : (
                  <>
                    <span>Enviar Solicitud Rápida</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </AnimatePresence>

        {/* Security disclaimer footer */}
        <div className="mt-3.5 text-center">
          <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-slate-400" />
            Tus datos están protegidos bajo estricta confidencialidad. Sin spam.
          </p>
        </div>
      </div>
    </div>
  );
}

