"use client";

import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Rocket, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { supabase } from "@/lib/supabase";

export function CtaSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    try {
      await supabase.from("prospects").insert([
        {
          company_name: email.split("@")[1] ? email.split("@")[1].split(".")[0].toUpperCase() : "Lead Web",
          email_primary: email.trim().toLowerCase(),
          sector: "Inbound Landing",
          location: "Web",
          custom_subject: "Interesado en Plan Mensual Gestionado",
          custom_message: "Prospecto registrado a través del formulario principal de Saventi-landing.",
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
            <div className="neu-pressed rounded-full py-4 px-6 text-sm font-bold text-emerald-700 bg-emerald-50/50 max-w-md mx-auto">
              ✨ {t("cta.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder={t("cta.placeholder")}
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
              <Button
                type="submit"
                color="primary"
                radius="full"
                size="lg"
                className="w-full sm:w-auto px-7 font-bold text-xs sm:text-sm bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white h-12 whitespace-nowrap"
              >
                {t("cta.btn")}
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 mt-4 font-medium">
            {t("cta.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
