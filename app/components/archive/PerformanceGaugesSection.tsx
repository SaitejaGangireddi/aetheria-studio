"use client";

import React from "react";
import { CheckCircle2, Gauge, Award } from "lucide-react";

export default function PerformanceGaugesSection() {
  const metrics = [
    { label: "Performance", score: "100" },
    { label: "Accessibility", score: "100" },
    { label: "Best Practices", score: "100" },
    { label: "SEO Optimization", score: "100" },
  ];

  return (
    <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-purple-50/60 via-amber-50/40 to-emerald-50/60 border border-purple-100/80 rounded-[2.5rem] p-6 md:p-8 shadow-bento flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-md">
        
        {/* Title Left */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-white border border-purple-200 shadow-sm flex items-center justify-center text-purple-600">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-900 bg-purple-100/80 px-3 py-1 rounded-full border border-purple-200 inline-block mb-1">
              Verified Benchmark SLA
            </span>
            <h4 className="text-base font-serif font-bold text-slate-900">100/100 Core Web Vitals Standard</h4>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white/90 border border-slate-200/80 rounded-2xl p-3.5 text-center flex items-center justify-between shadow-sm">
              <div className="text-left">
                <span className="block text-[9px] font-extrabold text-slate-500 uppercase tracking-wider">{m.label}</span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified
                </span>
              </div>
              <span className="text-xl font-mono font-black text-slate-900">{m.score}</span>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="hidden xl:flex items-center gap-2 text-xs font-bold text-slate-800 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-sm">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Sub-Second SLA</span>
        </div>
      </div>
    </section>
  );
}
