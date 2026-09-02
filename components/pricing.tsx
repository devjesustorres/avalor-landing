"use client";

import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { Check, CheckCircle2 } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-badge text-xs font-bold text-brand-600 mb-3 uppercase tracking-wider">
          Transparent Scaling
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Flexible Plans for Every Stage
        </h2>
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          Predictable pricing based on compute orchestration with zero hidden egress fees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        
        {/* Starter Tier */}
        <Card className="neu-extruded rounded-3xl p-3 border-none bg-transparent shadow-none flex flex-col justify-between">
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900">Developer Cloud</h3>
            <p className="text-xs text-slate-500 mt-1">Ideal for fast prototyping and agile AI development.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">$499</span>
              <span className="text-xs font-semibold text-slate-500">/ month</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> Up to 10 Autonomous Agents
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> 5M Inference Tokens / mo
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> Community Slack Support
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> Standard Vector DB Connectors
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as="a"
              href="#get-started"
              radius="full"
              variant="flat"
              className="w-full py-3 neu-extruded neu-extruded-hover text-xs font-bold text-slate-800 bg-transparent"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Pro/Enterprise Tier (Highlighted) */}
        <Card className="neu-extruded rounded-3xl p-3 border-2 border-brand-600 relative bg-gradient-to-b from-[#e8edf3] via-[#e2e8f0] to-[#e8edf3] shadow-xl flex flex-col justify-between overflow-visible">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <Chip color="primary" size="sm" className="font-extrabold text-[11px] uppercase shadow-md px-3 bg-brand-600 text-white">
              Most Popular
            </Chip>
          </div>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900">Enterprise Growth</h3>
            <p className="text-xs text-slate-500 mt-1">Full autonomous workflow mesh for scaling teams.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">$1,890</span>
              <span className="text-xs font-semibold text-slate-500">/ month</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> Unlimited Autonomous Agents
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> 50M Inference Tokens / mo
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> Dedicated Solution Architect
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> SOC2 & GDPR Compliance Vault
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" /> 99.99% SLA Guarantee
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as="a"
              href="#get-started"
              color="primary"
              radius="full"
              className="w-full py-3.5 font-bold text-xs bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white"
            >
              Start 14-Day Free Trial
            </Button>
          </CardFooter>
        </Card>

        {/* Custom Scale Tier */}
        <Card className="neu-extruded rounded-3xl p-3 border-none bg-transparent shadow-none flex flex-col justify-between">
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-slate-900">Sovereign Custom</h3>
            <p className="text-xs text-slate-500 mt-1">Dedicated bare-metal instances & custom fine-tuning.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-900">Custom</span>
              <span className="text-xs font-semibold text-slate-500">/ tailored</span>
            </div>
            <ul className="space-y-3 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> On-Premises Air-Gapped Deployment
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> Custom LLM Weight Fine-Tuning
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> 24/7 Dedicated Engineering Pod
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" /> Custom Security Compliance Audits
              </li>
            </ul>
          </CardBody>
          <CardFooter className="p-6 pt-0">
            <Button
              as="a"
              href="#get-started"
              radius="full"
              variant="flat"
              className="w-full py-3 neu-extruded neu-extruded-hover text-xs font-bold text-slate-800 bg-transparent"
            >
              Contact Enterprise Sales
            </Button>
          </CardFooter>
        </Card>

      </div>
    </section>
  );
}

