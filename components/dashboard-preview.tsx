"use client";

import React, { useState } from "react";
import { Tabs, Tab, Progress, Button, Chip } from "@heroui/react";
import {
  Terminal,
  GitBranch,
  GitCommit,
  Cpu,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function DashboardPreview() {
  const { t } = useLanguage();
  const [selectedTab, setSelectedTab] = useState("backend");

  return (
    <section id="metodologia" className="hidden md:block mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-badge text-xs font-bold text-brand-700 mb-3 uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" /> {t("method.badge")}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {t("method.title")}
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          {t("method.subtitle")}
        </p>
      </div>

      {/* Main Extruded Container */}
      <div className="neu-extruded rounded-[2.5rem] p-4 sm:p-8 lg:p-10 max-w-6xl mx-auto">
        
        {/* Window Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-300/40">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm inline-block" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-slate-300 mx-2 hidden sm:block" />
            <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-mono">
              <GitBranch className="w-4 h-4 text-brand-600" />
              saventi-core // production-architecture
            </div>
          </div>

          {/* HeroUI Tabs */}
          <Tabs
            aria-label="Metodología de Desarrollo"
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key as string)}
            radius="full"
            variant="solid"
            classNames={{
              tabList: "bg-slate-200/60 neu-badge p-1 gap-1",
              cursor: "bg-white shadow-sm text-brand-600",
              tab: "text-xs font-semibold text-slate-600 h-8 px-4",
              tabContent: "group-data-[selected=true]:text-brand-600 group-data-[selected=true]:font-bold",
            }}
          >
            <Tab key="backend" title={t("method.tab1")} />
            <Tab key="frontend" title={t("method.tab2")} />
            <Tab key="qa" title={t("method.tab3")} />
          </Tabs>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Metric Gauges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="neu-pressed rounded-2xl p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t("method.metric1.label")}
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  &lt; 45 <span className="text-xs font-semibold text-brand-600">{t("method.metric1.badge")}</span>
                </div>
                <Progress
                  aria-label="Latencia de APIs"
                  value={92}
                  size="sm"
                  color="primary"
                  className="mt-3"
                  classNames={{
                    track: "bg-slate-300/50",
                    indicator: "bg-brand-600",
                  }}
                />
              </div>

              <div className="neu-pressed rounded-2xl p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t("method.metric2.label")}
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  99.9% <span className="text-xs font-semibold text-emerald-600">{t("method.metric2.badge")}</span>
                </div>
                <Progress
                  aria-label="Disponibilidad"
                  value={99}
                  size="sm"
                  color="success"
                  className="mt-3"
                  classNames={{
                    track: "bg-slate-300/50",
                    indicator: "bg-emerald-500",
                  }}
                />
              </div>

              <div className="neu-pressed rounded-2xl p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {t("method.metric3.label")}
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  100% <span className="text-xs font-semibold text-indigo-600">{t("method.metric3.badge")}</span>
                </div>
                <Progress
                  aria-label="Cobertura QA"
                  value={100}
                  size="sm"
                  color="secondary"
                  className="mt-3"
                  classNames={{
                    track: "bg-slate-300/50",
                    indicator: "bg-indigo-500",
                  }}
                />
              </div>
            </div>

            {/* Live Pipeline Flow Card */}
            <div className="neu-extruded rounded-2xl p-6 bg-gradient-to-b from-[#e8edf3] to-[#e4eaf1]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{t("method.flow.title")}</h4>
                  <p className="text-xs text-slate-500">{t("method.flow.subtitle")}</p>
                </div>
                <Chip
                  variant="flat"
                  color="success"
                  size="sm"
                  className="neu-badge font-bold text-[11px] bg-transparent text-emerald-600"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5 inline-block" />
                  {t("method.flow.chip")}
                </Chip>
              </div>

              {/* Pipeline Step Traces */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <GitCommit className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">{t("method.flow.step1_title")}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>{t("method.flow.step1_desc")}</span>
                    <span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                      {t("method.flow.step1_badge")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">{t("method.flow.step2_title")}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>{t("method.flow.step2_desc")}</span>
                    <span className="text-brand-600 font-bold bg-brand-100 px-2 py-0.5 rounded text-[10px]">
                      {t("method.flow.step2_badge")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">{t("method.flow.step3_title")}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>{t("method.flow.step3_desc")}</span>
                    <span className="text-indigo-600 font-bold bg-indigo-100 px-2 py-0.5 rounded text-[10px]">
                      {t("method.flow.step3_badge")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            
            {/* Security & Guarantees Card */}
            <div className="neu-extruded rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-sm">{t("method.status.title")}</h4>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="neu-pressed rounded-xl p-4 mb-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900">{t("method.status.val")}</div>
                <div className="text-xs font-semibold text-slate-500 mt-1">{t("method.status.sub")}</div>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-slate-400" /> {t("method.status.item1_l")}</span>
                  <span className="font-bold text-emerald-600">{t("method.status.item1_r")}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> {t("method.status.item2_l")}</span>
                  <span className="font-bold text-slate-800">{t("method.status.item2_r")}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-slate-400" /> {t("method.status.item3_l")}</span>
                  <span className="font-bold text-brand-600">{t("method.status.item3_r")}</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Box */}
            <div className="neu-pressed rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full neu-extruded flex items-center justify-center mx-auto mb-3 text-brand-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 mb-1">{t("method.callout.title")}</h5>
              <p className="text-xs text-slate-500 mb-4">{t("method.callout.desc")}</p>
              <Button
                as="a"
                href="#contacto"
                color="primary"
                radius="full"
                size="sm"
                className="w-full font-bold text-xs bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white"
              >
                {t("method.callout.btn")}
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
