"use client";

import React, { useState, useEffect } from "react";
import { FloatingNavbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anpbyokcibolulyqikqo.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFucGJ5b2tjaWJvbHVseXFpa3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMjY0MTQsImV4cCI6MjEwMzkwMjQxNH0.wY58HH5o1-GzvR64BE90xoplHj6a6O6hnqrvjwANElA';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_PRIVACY_DATA = {
  lastUpdated: 'Septiembre 2026',
  sections: [
    {
      title: '1. Compromiso de Confidencialidad y NDA',
      content: 'En Saventi tratamos la información técnica, comercial y operativa de nuestros clientes bajo estrictos estándares de confidencialidad. Antes de iniciar cualquier proyecto, firmamos un Acuerdo de Confidencialidad (NDA) vinculante.'
    },
    {
      title: '2. Datos que Recopilamos',
      content: 'Solo recopilamos información de contacto empresarial (nombre, correo corporativo, requerimientos del proyecto) enviada voluntariamente a través de nuestros formularios de cotización o diagnóstico.'
    },
    {
      title: '3. Propiedad de los Datos y Código',
      content: 'Saventi no comercializa, comparte ni utiliza para terceros ningún repositorio de código, base de datos ni secreto comercial desarrollado para sus clientes. Todos los activos digitales pertenecen 100% al cliente.'
    },
    {
      title: '4. Seguridad de la Infraestructura',
      content: 'Implementamos estándares de cifrado SSL/TLS de grado bancario, políticas de acceso de privilegio mínimo y auditorías periódicas en todos los entornos desplegados en la nube.'
    }
  ]
};

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const homeHref = lang === "en" ? "/en" : "/";
  const [privacyData, setPrivacyData] = useState(DEFAULT_PRIVACY_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrivacy() {
      try {
        const { data, error } = await supabase
          .from('campaigns')
          .select('*')
          .eq('status', 'legal_content')
          .eq('subject', 'legal-config')
          .maybeSingle();

        if (!error && data && data.template) {
          const parsed = JSON.parse(data.template);
          if (parsed && parsed.privacy) {
            setPrivacyData(parsed.privacy);
          }
        }
      } catch (err) {
        console.warn('Error loading dynamic privacy from Supabase:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPrivacy();
  }, []);

  return (
    <div className="min-h-screen relative bg-[#f8fafc]">
      <FloatingNavbar />

      <main className="relative z-10 pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 mb-8 neu-badge px-3.5 py-1.5 rounded-full hover:text-brand-700"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {isEs ? "Volver al inicio" : "Back to home"}
        </a>

        <div className="neu-extruded rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 bg-blue-50">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                {isEs ? "Política de Privacidad" : "Privacy Policy"}
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Saventi • {privacyData.lastUpdated || "Septiembre 2026"}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            {privacyData.sections?.map((sec, idx) => (
              <section key={idx} className="border-b border-slate-100 pb-5 last:border-b-0">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                  {sec.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
