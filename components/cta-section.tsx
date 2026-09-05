"use client";

import React, { useState } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { Rocket, Mail, Building2, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { supabase } from "@/lib/supabase";

export function CtaSection() {
  const { t } = useLanguage();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sanitización de entrada (limpieza de tags HTML, caracteres invisibles y recorte de espacios)
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

    setLoading(true);
    try {
      const finalCompany = cleanCompany || (cleanEmail.split("@")[1] ? cleanEmail.split("@")[1].split(".")[0].toUpperCase() : "Prospecto Web");

      await supabase.from("prospects").insert([
        {
          company_name: finalCompany,
          email_primary: cleanEmail,
          sector: "Inbound Landing",
          location: "Web",
          custom_subject: "Interesado en Plan Mensual Gestionado",
          custom_message: cleanDesc || "Prospecto registrado a través del formulario principal de Saventi-landing.",
          stage: "nuevo",
          lead_status: "warm",
          lead_score: 50,
        },
      ]);
    } catch (err) {
      console.warn("Supabase lead error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="hidden md:block mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="neu-extruded rounded-[2.5rem] p-8 sm:p-14 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 mx-auto mb-6">
            <Rocket className="w-7 h-7" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("cta.title")}
          </h2>
          
          <p className="text-slate-600 mt-4 text-base sm:text-lg mb-8">
            {t("cta.subtitle")}
          </p>

          {submitted ? (
            <div className="neu-pressed rounded-2xl py-6 px-8 text-sm font-bold text-emerald-700 bg-emerald-50/50 max-w-md mx-auto shadow-inner border border-emerald-200/50">
              <span className="text-xl block mb-1">✨</span>
              {t("cta.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 max-w-lg mx-auto text-left">
              {/* Nombre / Razón Social */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                  {t("cta.placeholder_company")}
                </label>
                <Input
                  type="text"
                  required
                  placeholder="Ej. Distribuidora del Centro, C.A."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  startContent={<Building2 className="w-4 h-4 text-slate-400" />}
                  radius="full"
                  variant="flat"
                  classNames={{
                    inputWrapper: "neu-pressed bg-[#e4e9ef] shadow-none h-12 px-4",
                    input: "text-xs sm:text-sm text-slate-800 placeholder:text-slate-400",
                  }}
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                  {t("cta.placeholder")}
                </label>
                <Input
                  type="email"
                  required
                  placeholder="tu-correo@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  startContent={<Mail className="w-4 h-4 text-slate-400" />}
                  radius="full"
                  variant="flat"
                  classNames={{
                    inputWrapper: "neu-pressed bg-[#e4e9ef] shadow-none h-12 px-4",
                    input: "text-xs sm:text-sm text-slate-800 placeholder:text-slate-400",
                  }}
                />
              </div>

              {/* Descripción de necesidad operativa */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">
                  Descripción del Proyecto o Necesidad
                </label>
                <Textarea
                  minRows={3}
                  placeholder={t("cta.placeholder_desc")}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  radius="lg"
                  variant="flat"
                  classNames={{
                    inputWrapper: "neu-pressed bg-[#e4e9ef] shadow-none p-3",
                    input: "text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 resize-none",
                  }}
                />
              </div>

              {/* Submit CTA Button */}
              <Button
                type="submit"
                color="primary"
                radius="full"
                size="lg"
                isLoading={loading}
                className="w-full mt-2 font-bold text-sm bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white h-12"
              >
                {t("cta.btn")}
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 mt-5 font-medium">
            {t("cta.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
