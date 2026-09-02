"use client";

import React, { useState } from "react";
import { Tabs, Tab, Progress, Button, Chip } from "@heroui/react";
import {
  Terminal,
  GitBranch,
  GitCommit,
  Cpu,
  Shield,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export function DashboardPreview() {
  const [selectedTab, setSelectedTab] = useState("agents");

  return (
    <section id="platform" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-badge text-xs font-bold text-brand-600 mb-3 uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" /> Live Control Center
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          The Autonomous Nervous System for SaaS Infrastructure
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          Monitor, orchestrate, and audit self-healing neural agents with real-time telemetry.
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
              cluster-us-east-1 // neural-orchestrator-prod
            </div>
          </div>

          {/* HeroUI Tabs */}
          <Tabs
            aria-label="Dashboard Control Modes"
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
            <Tab key="agents" title="Autonomous Agents" />
            <Tab key="pipelines" title="Pipeline Latency" />
            <Tab key="security" title="Zero-Trust Guard" />
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
                  Throughput Rate
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  428.4k <span className="text-xs font-semibold text-brand-600">tps</span>
                </div>
                <Progress
                  aria-label="Throughput Progress"
                  value={78}
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
                  Active Neural Nodes
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  1,842 <span className="text-xs font-semibold text-emerald-600">Healthy</span>
                </div>
                <Progress
                  aria-label="Nodes Health Progress"
                  value={94}
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
                  Avg Inference Latency
                </div>
                <div className="text-2xl font-extrabold text-slate-800">
                  11.2 <span className="text-xs font-semibold text-slate-500">ms</span>
                </div>
                <Progress
                  aria-label="Inference Latency Progress"
                  value={42}
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
                  <h4 className="font-extrabold text-slate-900 text-sm">Dynamic Neural Dispatcher</h4>
                  <p className="text-xs text-slate-500">Autonomous self-balancing execution graph</p>
                </div>
                <Chip
                  variant="flat"
                  color="success"
                  size="sm"
                  className="neu-badge font-bold text-[11px] bg-transparent text-emerald-600"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5 inline-block" />
                  Synchronized
                </Chip>
              </div>

              {/* Pipeline Step Traces */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <GitCommit className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">ingest_telemetry_stream()</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>4,200 msg/sec</span>
                    <span className="text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                      100% Passed
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">semantic_reasoning_kernel_v4</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>fp16 quantized</span>
                    <span className="text-brand-600 font-bold bg-brand-100 px-2 py-0.5 rounded text-[10px]">
                      9.4 ms avg
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-pressed">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-brand-600" />
                    <span className="font-bold text-slate-800">guardrail_validator.dispatch()</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <span>0 vulnerabilities</span>
                    <span className="text-indigo-600 font-bold bg-indigo-100 px-2 py-0.5 rounded text-[10px]">
                      Encrypted
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
            
            {/* Status Card */}
            <div className="neu-extruded rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-900 text-sm">Security Vector</h4>
                <ShieldAlert className="w-4 h-4 text-slate-400" />
              </div>
              <div className="neu-pressed rounded-xl p-4 mb-4 text-center">
                <div className="text-3xl font-extrabold text-slate-900">0</div>
                <div className="text-xs font-semibold text-slate-500 mt-1">Anomalies Detected in 24h</div>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>Zero-Trust Attestation</span>
                  <span className="font-bold text-emerald-600">Active</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span>Multi-Region Failover</span>
                  <span className="font-bold text-slate-800">Standby</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Token Rate Limiter</span>
                  <span className="font-bold text-slate-800">Auto-Scaling</span>
                </div>
              </div>
            </div>

            {/* Quick Action Deploy Box */}
            <div className="neu-pressed rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full neu-extruded flex items-center justify-center mx-auto mb-3 text-brand-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-bold text-slate-900 mb-1">Deploy in Your VPC</h5>
              <p className="text-xs text-slate-500 mb-4">One-click Helm charts for AWS, GCP, and Azure.</p>
              <Button
                as="a"
                href="#get-started"
                color="primary"
                radius="full"
                size="sm"
                className="w-full font-bold text-xs bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white"
              >
                Generate Deployment Manifest
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

