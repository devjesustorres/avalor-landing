"use client";

import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import {
  Layers,
  Lock,
  RefreshCw,
  Database,
  BarChart3,
  Code2,
  ChevronRight,
} from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "Autonomous Multi-Agent Mesh",
    description:
      "Hierarchical agents collaborate to solve complex multi-step workflows, autonomously negotiating tasks and validating results.",
    cta: "Learn more",
  },
  {
    icon: Lock,
    title: "Air-Gapped Private Cloud",
    description:
      "Keep your proprietary weights and training vectors within your private perimeter. Zero telemetry leakage or external calls.",
    cta: "Explore security",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Pipeline Engine",
    description:
      "Instantly detects schema drifts, failing upstream microservices, and auto-generates patch heuristics in real-time.",
    cta: "View resilience specs",
  },
  {
    icon: Database,
    title: "Universal Vector Connectors",
    description:
      "Out-of-the-box native adapters for Snowflake, Databricks, PostgreSQL, Pinecone, BigQuery, and S3 lakehouses.",
    cta: "Browse 80+ integrations",
  },
  {
    icon: BarChart3,
    title: "Deterministic Audit Logs",
    description:
      "Immutable cryptographic trail recording every decision node, agent prompt, input token, and downstream consequence.",
    cta: "Governance whitepaper",
  },
  {
    icon: Code2,
    title: "Developer First SDKs",
    description:
      "Type-safe SDKs for Python, TypeScript, Go, and Rust with full support for OpenTelemetry tracing and streaming primitives.",
    cta: "Read the documentation",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-badge text-xs font-bold text-brand-600 mb-3 uppercase tracking-wider">
          Core Solutions
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Engineered for Complex Enterprise Topologies
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          Deploy autonomous intelligence without compromising compliance, security, or system integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              className="neu-extruded neu-extruded-hover rounded-3xl p-2 border-none bg-transparent shadow-none"
            >
              <CardBody className="p-6">
                <div className="w-12 h-12 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </CardBody>
              <CardFooter className="px-6 pb-6 pt-0 border-t border-slate-300/30">
                <Button
                  as="a"
                  href="#get-started"
                  variant="light"
                  size="sm"
                  endContent={<ChevronRight className="w-4 h-4 ml-0.5" />}
                  className="px-0 font-bold text-xs text-brand-600 hover:text-brand-700 data-[hover=true]:bg-transparent"
                >
                  {item.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

