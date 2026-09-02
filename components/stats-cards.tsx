"use client";

import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { Target, TrendingUp, Gauge, Zap, DollarSign, Award, Wifi, CheckCircle } from "lucide-react";

export function StatsCards() {
  return (
    <section id="metrics" className="mt-16 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Uncompromising Scale
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">
          Real-time benchmark telemetry verified across enterprise deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Stats Card 1 */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl p-3 border-none bg-transparent shadow-none overflow-hidden group">
          <CardBody className="p-6 flex flex-col justify-between h-full gap-6">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <Chip
                startContent={<TrendingUp className="w-3.5 h-3.5" />}
                variant="flat"
                color="success"
                size="sm"
                className="neu-badge font-bold border border-emerald-500/20 bg-transparent text-emerald-600"
              >
                +4.8% MoM
              </Chip>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                99.98%
              </div>
              <div className="text-base font-bold text-slate-800 mb-1">
                Decision Precision Rate
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deterministic neural reasoning algorithms eliminate hallucination vectors in production workloads.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-300/30 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>SOC2 Type II Certified</span>
              <span className="text-brand-600 font-semibold flex items-center gap-1">
                Live Feed <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
            </div>
          </CardBody>
        </Card>

        {/* Stats Card 2 */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl p-3 border-none bg-transparent shadow-none overflow-hidden group">
          <CardBody className="p-6 flex flex-col justify-between h-full gap-6">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                <Gauge className="w-7 h-7" />
              </div>
              <Chip
                startContent={<Zap className="w-3.5 h-3.5" />}
                variant="flat"
                color="primary"
                size="sm"
                className="neu-badge font-bold border border-brand-500/20 bg-transparent text-brand-600"
              >
                Ultra Low Latency
              </Chip>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                10x
              </div>
              <div className="text-base font-bold text-slate-800 mb-1">
                Synthesis Acceleration
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Streamlines data ingest, semantic clustering, and cross-department autonomous workflow execution.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-300/30 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Sub-14ms Response</span>
              <span className="text-brand-600 font-semibold flex items-center gap-1">
                Distributed Edge <Wifi className="w-3.5 h-3.5" />
              </span>
            </div>
          </CardBody>
        </Card>

        {/* Stats Card 3 */}
        <Card className="neu-extruded neu-extruded-hover rounded-3xl p-3 border-none bg-transparent shadow-none overflow-hidden group">
          <CardBody className="p-6 flex flex-col justify-between h-full gap-6">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                <DollarSign className="w-7 h-7" />
              </div>
              <Chip
                startContent={<Award className="w-3.5 h-3.5" />}
                variant="flat"
                color="secondary"
                size="sm"
                className="neu-badge font-bold border border-indigo-500/20 bg-transparent text-indigo-600"
              >
                Avg ROI: 380%
              </Chip>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                $4.8M+
              </div>
              <div className="text-base font-bold text-slate-800 mb-1">
                Annual Operational Savings
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct labor and compute cost reduction calculated across over 1,200 active enterprise organizations.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-300/30 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Audited by Deloitte</span>
              <span className="text-brand-600 font-semibold flex items-center gap-1">
                Verified Impact <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              </span>
            </div>
          </CardBody>
        </Card>

      </div>
    </section>
  );
}

