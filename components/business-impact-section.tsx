"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react";
import { TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function BusinessImpactSection() {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <section id="crecimiento" className="mt-16 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          {isEn ? "Business Scale & ROI" : "Impulso & Rentabilidad Real"}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {isEn ? (
            <>
              Designed to Make Your Enterprise{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                Grow and Dominate.
              </span>
            </>
          ) : (
            <>
              Diseñado para Hacer Crecer{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500">
                tu Empresa sin Límites.
              </span>
            </>
          )}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
          {isEn
            ? "Technology is not an expense—it is your unfair competitive advantage. We replace manual friction with automated systems that scale revenue and streamline operations."
            : "La tecnología a la medida no es un gasto, es tu mayor ventaja competitiva. Eliminamos cuellos de botella para que tu empresa multiplique su capacidad operativa y facture con total tranquilidad."}
        </p>
      </div>

      {/* Main Growth Showcase Feature (Boardroom & Metrics) */}
      <div className="neu-extruded rounded-[2.5rem] p-6 sm:p-10 mb-12 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image side */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl group">
            <Image
              src="/business/business-growth-boardroom.jpg"
              alt={isEn ? "Executive business team scaling operations with data" : "Directiva empresarial escalando operaciones con software"}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/90 backdrop-blur-md flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-300">
                    {isEn ? "Proven Operational Growth" : "Crecimiento Operativo Medible"}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {isEn ? "Data-driven decisions & streamlined workflows" : "Decisiones basadas en datos y flujos automáticos"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Value Props side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold w-fit mb-4 border border-emerald-200 dark:border-emerald-800/60">
              <BarChart3 className="w-3.5 h-3.5" />
              {isEn ? "Scalability Focused" : "Enfoque en Rentabilidad"}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
              {isEn
                ? "Gain full control of your numbers and business operations."
                : "Toma el control absoluto de tus números y operaciones."}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {isEn
                ? "When your software adapts to your exact business rules, decisions become instant, inventory and billing synchronize effortlessly, and team productivity skyrockets."
                : "Cuando tu software se adapta milimétricamente a tus reglas de negocio, los errores humanos desaparecen, los presupuestos se envían al instante y tu capacidad de entrega se multiplica."}
            </p>

            <ul className="space-y-3 mb-8">
              {[
                isEn ? "Centralized management of clients, billing, and inventory" : "Gestión centralizada de clientes, facturación e inventario",
                isEn ? "Custom dashboards accessible from any device anywhere" : "Paneles de control accesibles desde cualquier lugar y dispositivo",
                isEn ? "Elimination of repetitive manual data entry tasks" : "Eliminación radical de tareas manuales repetitivas",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              as={Link}
              href={isEn ? "/en/contact" : "/contacto"}
              color="primary"
              radius="full"
              size="lg"
              endContent={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-fit font-bold text-sm bg-brand-600 text-white shadow-neu-btn-blue px-7"
            >
              {isEn ? "Accelerate My Business" : "Quiero Escalar Mi Empresa"}
            </Button>
          </div>
        </div>
      </div>

      {/* Trust & Confidence Grid (3 Complementary Pillars) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Partnership & Trust Handshake */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl overflow-hidden border-none bg-white/60 dark:bg-slate-900/60 transition-all duration-300 group">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/business/business-partnership-trust.jpg"
              alt={isEn ? "Firm business partnership and trust" : "Alianza de confianza y compromiso empresarial"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              {isEn ? "Total Confidentiality" : "Confidencialidad & Respaldo"}
            </div>
          </div>
          <CardBody className="p-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isEn ? "A Reliable Long-Term Partner" : "Un Aliado Tecnológico de Confianza"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isEn
                ? "Your company data and internal records remain strictly confidential. We maintain, optimize, and protect your software under a managed monthly plan."
                : "Tus datos y registros operativos están completamente protegidos con la máxima reserva. Mantenemos, optimizamos y resolvemos todo en tu sistema bajo un plan mensual sin complicaciones."}
            </p>
          </CardBody>
        </Card>

        {/* Card 2: Executive with Analytics */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl overflow-hidden border-none bg-white/60 dark:bg-slate-900/60 transition-all duration-300 group">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/business/business-analytics-executive.jpg"
              alt={isEn ? "Executive monitoring business growth metrics" : "Líder empresarial analizando crecimiento de negocio"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-xs flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              {isEn ? "Real-Time Clarity" : "Claridad en Tiempo Real"}
            </div>
          </div>
          <CardBody className="p-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isEn ? "Real-Time Strategic Visibility" : "Visibilidad Estratégica en Vivo"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isEn
                ? "Say goodbye to scattered Excel sheets. Centralize your financial metrics, operations, and orders in a sleek, tailored dashboard."
                : "Despídete de hojas de cálculo dispersas. Monitorea ventas, márgenes, pedidos y rendimiento operativo en un solo lugar con total exactitud."}
            </p>
          </CardBody>
        </Card>

        {/* Card 3: Logistics & Industrial Operations */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl overflow-hidden border-none bg-white/60 dark:bg-slate-900/60 transition-all duration-300 group">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/business/business-operations-warehouse.jpg"
              alt={isEn ? "Modern automated warehouse and logistics operations" : "Operaciones industriales y logística automatizada"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-100 shadow-xs flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              {isEn ? "Built for Scale" : "Preparado para Escalar"}
            </div>
          </div>
          <CardBody className="p-6">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {isEn ? "Built to Handle Enterprise Scale" : "Preparado para Alta Exigencia"}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {isEn
                ? "From logistics hubs to retail networks, our architectures handle heavy transactional loads with uninterrupted 99.9% uptime."
                : "Desde centros de distribución hasta cadenas comerciales, diseñamos sistemas de alto volumen que operan sin caídas ni lentitud."}
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

