"use client";

import React from "react";
import { CheckCircle2, Zap, ShieldCheck, Gauge, Award } from "lucide-react";

export default function PerformanceGaugesSection() {
  const metrics = [
    { label: "Performance", score: "100" },
    { label: "Accessibility", score: "100" },
    { label: "Best Practices", score: "100" },
    { label: "SEO Optimization", score: "100" },
  ];

  return (
    <section className="py-6 px-6 max-w-6xl mx-auto">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Title Badge Left */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block">
              100/100 Core Web Vitals Standard
            </span>
            <span className="text-xs text-slate-400 font-medium">Verified Lighthouse Benchmark SLA</span>
          </div>
        </div>

        {/* Metric Badges Center */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 text-center flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">{m.label}</span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </span>
              </div>
              <span className="text-xl font-mono font-black text-emerald-400">{m.score}</span>
            </div>
          ))}
        </div>

        {/* SLA Guarantee Right */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-900/90 px-3.5 py-2 rounded-2xl border border-slate-800">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Speed SLA Guaranteed</span>
        </div>
      </div>
    </section>
  );
}
