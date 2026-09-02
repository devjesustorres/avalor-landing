"use client";

import React from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function PrivacyPage() {
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
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {isEs ? "Política de Privacidad" : "Privacy Policy"}
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                {isEs ? "Última actualización: Septiembre 2026" : "Last updated: September 2026"}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-600" />
                {isEs ? "1. Compromiso de Confidencialidad y NDA" : "1. Confidentiality & NDA Commitment"}
              </h2>
              <p>
                {isEs
                  ? "En Avelor Software Solutions tratamos la información técnica, comercial y operativa de nuestros clientes bajo estrictos estándares de confidencialidad. Antes de iniciar cualquier proyecto, firmamos un Acuerdo de Confidencialidad (NDA) vinculante."
                  : "At Avelor Software Solutions, we treat all technical, commercial, and operational client data under strict confidentiality. Prior to project kick-off, we execute a legally binding Non-Disclosure Agreement (NDA)."}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4 text-brand-600" />
                {isEs ? "2. Datos que Recopilamos" : "2. Information We Collect"}
              </h2>
              <p>
                {isEs
                  ? "Solo recopilamos información de contacto empresarial (nombre, correo corporativo, requerimientos del proyecto) enviada voluntariamente a través de nuestros formularios de cotización o diagnóstico."
                  : "We solely collect business contact details (name, corporate email, project requirements) voluntarily submitted via our estimate or consultation request forms."}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-600" />
                {isEs ? "3. Propiedad de los Datos y Código" : "3. Code and Data Ownership"}
              </h2>
              <p>
                {isEs
                  ? "Avelor no comercializa, comparte ni utiliza para terceros ningún repositorio de código, base de datos ni secreto comercial desarrollado para sus clientes. Todos los activos digitales pertenecen 100% al cliente."
                  : "Avelor never sells, shares, or utilizes for third parties any source code repositories, databases, or trade secrets built for its clients. All digital deliverables belong 100% to the client."}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

