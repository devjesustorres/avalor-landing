"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export function FloatingNavbar() {
  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 sm:px-6">
      <nav className="neu-pill-nav rounded-full py-2.5 px-4 sm:px-6 w-full max-w-5xl flex items-center justify-between transition-all duration-300">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative h-8 sm:h-9 w-auto flex items-center">
            <Image
              src="/logo.png"
              alt="Avelor Software Solutions Logo"
              width={160}
              height={40}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#platform"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            Platform
          </a>
          <a
            href="#solutions"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            Solutions
          </a>
          <a
            href="#metrics"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            Performance
          </a>
          <a
            href="#pricing"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            Pricing
          </a>
          <a
            href="#enterprise"
            className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:neu-badge transition-all"
          >
            Enterprise
          </a>
        </div>

        {/* HeroUI Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            as="a"
            href="#login"
            variant="light"
            radius="full"
            size="sm"
            className="hidden sm:inline-flex text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-200/50"
          >
            Sign In
          </Button>
          <Button
            as="a"
            href="#get-started"
            color="primary"
            radius="full"
            size="sm"
            endContent={<ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />}
            className="font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-600 to-brand-500 shadow-neu-btn-blue hover:shadow-lg hover:from-brand-500 hover:to-brand-600 active:shadow-neu-btn-blue-active transition-all px-4 sm:px-5 py-2 group"
          >
            Start Free Trial
          </Button>
        </div>
      </nav>
    </header>
  );
}
