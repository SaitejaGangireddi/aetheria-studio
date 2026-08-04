"use client";

import React from "react";
import { Check, X, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "Core Web Vitals Performance",
      us: "100/100 Guaranteed SLA",
      them: "30-60 Slow PageSpeed",
    },
    {
      feature: "Codebase & Security",
      us: "Zero-Plugin Custom Next.js",
      them: "Bloated Third-Party Plugins",
    },
    {
      feature: "Layout Shifts & Speed",
      us: "0.29s Instant Sub-Second",
      them: "3s+ Cumulative Layout Shifts",
    },
    {
      feature: "Engineering Leadership",
      us: "Direct Founder Delivery",
      them: "Outsourced Freelance Pools",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-10 relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>The Standard</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Why We Stand Apart
        </h2>
        <p className="text-slate-400 text-sm">
          Compare our digital engineering standards against legacy web development approaches.
        </p>
      </div>

      {/* Grid Comparison Table */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Table Header Row */}
        <div className="grid grid-cols-12 bg-slate-950/80 border-b border-slate-800 p-4 sm:p-6 text-xs sm:text-sm font-mono font-bold tracking-wider">
          <div className="col-span-5 sm:col-span-4 text-slate-400">ENGINEERING STANDARD</div>
          <div className="col-span-7 sm:col-span-4 text-purple-400 flex items-center gap-2 bg-purple-950/40 -my-4 sm:-my-6 p-4 sm:p-6 border-x border-purple-800/40">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>DESIGNERPAL STUDIO</span>
          </div>
          <div className="hidden sm:block sm:col-span-4 text-slate-500 pl-4">TRADITIONAL AGENCIES</div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
          {comparisons.map((item, idx) => (
            <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-slate-800/30 transition-colors">
              
              {/* Feature Title */}
              <div className="col-span-5 sm:col-span-4 font-semibold text-white">
                {item.feature}
              </div>

              {/* DesignerPal Column */}
              <div className="col-span-7 sm:col-span-4 bg-purple-950/20 -my-4 sm:-my-6 p-4 sm:p-6 border-x border-purple-800/30 flex items-center gap-2 text-emerald-400 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span>{item.us}</span>
              </div>

              {/* Traditional Agencies Column */}
              <div className="col-span-12 sm:col-span-4 pt-3 sm:pt-0 sm:pl-4 flex items-center gap-2 text-rose-400/80">
                <div className="w-5 h-5 rounded-full bg-rose-950 border border-rose-500/40 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-rose-400" />
                </div>
                <span className="text-slate-400">{item.them}</span>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
