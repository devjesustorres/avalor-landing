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
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { supabase } from "@/lib/supabase";

export function MobileNewsletterSection() {
  const { t } = useLanguage();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const sanitize = (text: string, maxLen = 500): string => {
    return text
      .replace(/<[^>]*>?/gm, "")
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
      .trim()
      .slice(0, maxLen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = sanitize(email, 120).toLowerCase();
    const cleanCompany = sanitize(companyName, 120);
    const cleanDesc = sanitize(description, 1000);

    if (!cleanEmail || !cleanEmail.includes("@")) return;

    setStatus("loading");
    try {
      const finalCompany = cleanCompany || (cleanEmail.split("@")[1] ? cleanEmail.split("@")[1].split(".")[0].toUpperCase() : "Lead Móvil");

      await supabase.from("prospects").insert([
        {
          company_name: finalCompany,
          email_primary: cleanEmail,
          sector: "Mobile Landing",
          location: "Mobile",
          custom_subject: "Interesado en Plan Mensual - Vista Móvil",
          custom_message: cleanDesc || "Prospecto registrado a través del formulario móvil de Saventi-landing.",
          stage: "nuevo",
          lead_status: "warm",
          lead_score: 50,
        },
      ]);
    } catch (err) {
      console.warn("Supabase lead error:", err);
    } finally {
      setStatus("success");
    }
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
          Recibe en tu correo una estimación de tiempos, propuesta técnica y presupuesto mensual sin compromiso.
        </p>

        {/* Trust Badges Chips (Horizontal Scrollable / Row) */}
        <div className="flex items-center gap-2 mt-3.5 mb-5 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <Clock className="w-3 h-3 text-brand-600" />
            <span>Respuesta &lt; 24h</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Datos Seguros</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-200/60 neu-badge shrink-0 text-[10px] font-bold text-slate-600">
            <Zap className="w-3 h-3 text-blue-600" />
            <span>Todo Incluido</span>
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
                Un asesor revisará tu requerimiento y te contactará hoy mismo.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              {/* Nombre / Razón Social */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 ml-1">
                  Nombre / Razón Social
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej. Distribuidora del Centro, C.A."
                  className="w-full px-3.5 py-3 rounded-xl neu-pressed bg-[#e5ebf3] text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 ml-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu-correo@empresa.com"
                  className="w-full px-3.5 py-3 rounded-xl neu-pressed bg-[#e5ebf3] text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all"
                />
              </div>

              {/* Descripción breve */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1 ml-1">
                  Descripción de lo que necesitas
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe brevemente qué proceso deseas resolver..."
                  className="w-full px-3.5 py-2.5 rounded-xl neu-pressed bg-[#e5ebf3] text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 transition-all resize-none"
                />
              </div>

              {/* Big Touch-Friendly Button with Haptic Feel */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-4 rounded-2xl bg-brand-600 hover:bg-brand-500 active:scale-[0.98] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neu-btn-blue transition-all disabled:opacity-75 cursor-pointer mt-1"
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

