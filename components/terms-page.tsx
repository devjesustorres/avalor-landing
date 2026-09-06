"use client";

import React, { useState, useEffect } from "react";
import { PageLayout } from "@/components/page-layout";
import { FileCheck, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://anpbyokcibolulyqikqo.supabase.co';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFucGJ5b2tjaWJvbHVseXFpa3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMjY0MTQsImV4cCI6MjEwMzkwMjQxNH0.wY58HH5o1-GzvR64BE90xoplHj6a6O6hnqrvjwANElA';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_TERMS_DATA = {
  lastUpdated: 'Septiembre 2026',
  sections: [
    {
      title: '1. Alcance de los Servicios',
      content: 'Saventi ofrece servicios profesionales de diseño, arquitectura, desarrollo y modernización de software a la medida, plataformas web, aplicaciones móviles y consultoría en infraestructura cloud con código 100% de propiedad del cliente.'
    },
    {
      title: '2. Garantía y Entrega de Código',
      content: 'Los desarrollos se entregan bajo hitos acordados contractualmente. Todo código incluye periodo de garantía post-lanzamiento contra defectos técnicos no detectados en fase de pruebas (QA).'
    },
    {
      title: '3. Propiedad Intelectual',
      content: 'Una vez completado el pago total de los hitos convenidos, todos los derechos de propiedad intelectual, repositorios de código fuente, bases de datos y documentación técnica son transferidos en su totalidad al cliente.'
    },
    {
      title: '4. Soporte y Continuidad Operativa',
      content: 'Saventi ofrece planes de mantenimiento preventivo, copias de seguridad continuas y actualización de dependencias para asegurar la disponibilidad ininterrumpida de las plataformas construidas.'
    }
  ]
};

export default function TermsPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  const [termsData, setTermsData] = useState(DEFAULT_TERMS_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTerms() {
      try {
        const { data, error } = await supabase
          .from('campaigns')
          .select('*')
          .eq('status', 'legal_content')
          .eq('subject', 'legal-config')
          .maybeSingle();

        if (!error && data && data.template) {
          const parsed = JSON.parse(data.template);
          if (parsed && parsed.terms) {
            setTermsData(parsed.terms);
          }
        }
      } catch (err) {
        console.warn('Error loading dynamic terms from Supabase:', err);
      } finally {
        setLoading(false);
      }
    }
    loadTerms();
  }, []);

  return (
    <PageLayout>
      <div className="pt-20 sm:pt-36 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neu-extruded rounded-3xl p-8 sm:p-12 bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 dark:text-brand-400 bg-blue-50 dark:bg-blue-950/40">
              <FileCheck className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                {isEs ? "Términos del Servicio" : "Terms of Service"}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Saventi • {termsData.lastUpdated || "Vigencia 2026"}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {termsData.sections?.map((sec, idx) => (
              <section key={idx} className="border-b border-slate-200/60 dark:border-slate-800/80 pb-5 last:border-b-0">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
                  {sec.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
