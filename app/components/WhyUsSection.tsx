"use client";

import React from "react";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
          Why Top Digital Brands Choose DesignerPal
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Sub-second performance SLAs meets zero-plugin custom web engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <Zap className="w-8 h-8 text-amber-400" />
          <h3 className="text-lg font-bold text-white">Sub-Second LCP</h3>
          <p className="text-xs text-slate-400">
            Engineered with zero-layout-shift techniques and optimized edge delivery globally.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <ShieldCheck className="w-8 h-8 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Zero Security Debt</h3>
          <p className="text-xs text-slate-400">
            Clean Next.js App Router codebase built with strict TypeScript and zero bloat plugins.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <Cpu className="w-8 h-8 text-indigo-400" />
          <h3 className="text-lg font-bold text-white">Enterprise Scalability</h3>
          <p className="text-xs text-slate-400">
            Architected by experienced enterprise software developers built for extreme concurrency.
          </p>
        </div>
      </div>
    </section>
  );
}
