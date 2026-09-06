"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { Rocket, Mail, Building2, MessageSquare, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        params: {
          sitekey: string;
          action?: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function CtaSection() {
  const { t } = useLanguage();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAEpcH8uTYeZTY5jr";

  // Render widget explicitly once turnstile is loaded
  useEffect(() => {
    let checkInterval: NodeJS.Timeout;

    const renderWidget = () => {
      if (
        window.turnstile &&
        turnstileContainerRef.current &&
        !widgetIdRef.current
      ) {
        try {
          const id = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: siteKey,
            action: "contact",
            theme: "auto",
            callback: (token: string) => {
              setTurnstileToken(token);
              setTurnstileError("");
            },
            "expired-callback": () => {
              setTurnstileToken("");
            },
            "error-callback": () => {
              setTurnstileToken("");
              setTurnstileError("Error al cargar verificación.");
            },
          });
          widgetIdRef.current = id;
        } catch (e) {
          console.warn("Turnstile render error:", e);
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      checkInterval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(checkInterval);
        }
      }, 300);
    }

    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

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

    if (!turnstileToken) {
      setTurnstileError("Por favor completa la verificación de seguridad.");
      return;
    }

    setLoading(true);
    setTurnstileError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: turnstileToken,
          companyName: cleanCompany,
          email: cleanEmail,
          description: cleanDesc,
          source: "desktop",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "No se pudo procesar la solicitud");
      }

      setSubmitted(true);
    } catch (err: any) {
      setTurnstileError(err.message || "Error al enviar. Intenta de nuevo.");
      // Token Turnstile es de un solo uso: resetear widget tras error
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="hidden md:block mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="neu-extruded rounded-[2.5rem] p-8 sm:p-14 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 dark:text-brand-400 mx-auto mb-6">
            <Rocket className="w-7 h-7" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {t("cta.title")}
          </h2>
          
          <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg mb-8">
            {t("cta.subtitle")}
          </p>

          {submitted ? (
            <div className="neu-pressed rounded-2xl py-6 px-8 text-sm font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/40 max-w-md mx-auto shadow-inner border border-emerald-200/50 dark:border-emerald-800/50">
              <span className="text-xl block mb-1">✨</span>
              {t("cta.success")}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 max-w-lg mx-auto text-left">
              {/* Nombre / Razón Social */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
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
                    inputWrapper: "neu-pressed bg-[#e4e9ef] dark:bg-[#090d16] shadow-none h-12 px-4",
                    input: "text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500",
                  }}
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
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
                    inputWrapper: "neu-pressed bg-[#e4e9ef] dark:bg-[#090d16] shadow-none h-12 px-4",
                    input: "text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500",
                  }}
                />
              </div>

              {/* Descripción de necesidad operativa */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
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
                    inputWrapper: "neu-pressed bg-[#e4e9ef] dark:bg-[#090d16] shadow-none p-3",
                    input: "text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none",
                  }}
                />
              </div>

              {/* Cloudflare Turnstile verification widget */}
              <div className="flex flex-col items-center justify-center my-1">
                <div ref={turnstileContainerRef} className="min-h-[65px] flex items-center justify-center" />
                {turnstileError && (
                  <p className="text-xs text-rose-500 font-semibold mt-1 text-center">
                    {turnstileError}
                  </p>
                )}
              </div>

              {/* Submit CTA Button */}
              <Button
                type="submit"
                color="primary"
                radius="full"
                size="lg"
                isLoading={loading}
                className="w-full mt-1 font-bold text-sm bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white h-12"
              >
                {t("cta.btn")}
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-5 font-medium">
            {t("cta.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
