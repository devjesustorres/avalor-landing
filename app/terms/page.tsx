"use client";

import React from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileCheck, Shield, CheckCircle, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function TermsPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <div className="min-h-screen relative">
      <FloatingNavbar />

      <main className="relative z-10 pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 mb-8 neu-badge px-3.5 py-1.5 rounded-full hover:text-brand-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {isEs ? "Volver al inicio" : "Back to home"}
        </a>

        <div className="neu-extruded rounded-3xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {isEs ? "Términos del Servicio" : "Terms of Service"}
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                {isEs ? "Avelor Software Solutions • Vigencia 2026" : "Avelor Software Solutions • Active 2026"}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-600" />
                {isEs ? "1. Alcance de los Servicios" : "1. Scope of Services"}
              </h2>
              <p>
                {isEs
                  ? "Avelor ofrece servicios profesionales de diseño, arquitectura, desarrollo y modernización de software a la medida, plataformas web, aplicaciones móviles y consultoría en infraestructura cloud."
                  : "Avelor provides professional software engineering, custom platform development, mobile applications, and cloud infrastructure consulting."}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-600" />
                {isEs ? "2. Garantía y Entrega de Código" : "2. Warranty and Code Handover"}
              </h2>
              <p>
                {isEs
                  ? "Los desarrollos se entregan bajo hitos acordados contractualmente. Todo código incluye periodo de garantía post-lanzamiento contra defectos técnicos no detectados en fase de pruebas (QA)."
                  : "Projects are delivered against contractually defined milestones. All code includes a post-launch warranty period covering any latent defects or bugs."}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

