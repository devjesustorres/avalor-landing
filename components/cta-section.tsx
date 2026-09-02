"use client";

import React, { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Rocket, Mail } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="get-started" className="mt-28 sm:mt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="neu-extruded rounded-[2.5rem] p-8 sm:p-14 text-center max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="w-14 h-14 rounded-2xl neu-pressed flex items-center justify-center text-brand-600 mx-auto mb-6">
            <Rocket className="w-7 h-7" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transform Your Enterprise with Autonomous Intelligence
          </h2>
          
          <p className="text-slate-600 mt-4 text-base sm:text-lg mb-8">
            Join over 1,200 organizations running production-grade neural agent workflows today.
          </p>

          {submitted ? (
            <div className="neu-pressed rounded-full py-4 px-6 text-sm font-bold text-emerald-700 bg-emerald-50/50 max-w-md mx-auto">
              ✨ Thank you! Our solutions architect will contact you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startContent={<Mail className="w-4 h-4 text-slate-400" />}
                radius="full"
                variant="flat"
                classNames={{
                  inputWrapper: "neu-pressed bg-[#e4e9ef] shadow-none h-12 px-4",
                  input: "text-xs sm:text-sm text-slate-800 placeholder:text-slate-400",
                }}
              />
              <Button
                type="submit"
                color="primary"
                radius="full"
                size="lg"
                className="w-full sm:w-auto px-7 font-bold text-xs sm:text-sm bg-brand-600 hover:bg-brand-500 shadow-neu-btn-blue text-white h-12"
              >
                Request Access
              </Button>
            </form>
          )}

          <p className="text-[11px] text-slate-400 mt-4 font-medium">
            No credit card required. Instant 14-day sandbox access.
          </p>
        </div>
      </div>
    </section>
  );
}

