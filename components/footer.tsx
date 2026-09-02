"use client";

import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-slate-300/40 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="Avelor Software Solutions"
                width={140}
                height={35}
                className="h-7 w-auto object-contain"
              />
            </div>
            <span className="text-xs text-slate-400 ml-2">
              © {new Date().getFullYear()} Avelor Software Solutions. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Security & Trust</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Status</a>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 neu-badge px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Systems Operational
          </div>

        </div>
      </div>
    </footer>
  );
}
