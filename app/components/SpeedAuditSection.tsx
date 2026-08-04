"use client";

import React, { useState } from "react";
import { Zap, Gauge, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function SpeedAuditSection() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="speed-audit" className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/60 inline-flex items-center gap-1.5 mb-2">
          <Zap className="w-3 h-3 text-purple-600" />
          Architecture Benchmark
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
          Legacy CMS vs. Next.js Sub-Second Build
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Drag the slider to compare legacy plugin bloat against zero-runtime Next.js speed.
        </p>
      </div>

      {/* Main Interactive Comparison Box */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-4 md:p-6 shadow-bento relative">
        
        {/* Top Metric Bar */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-xs font-bold border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-rose-600">
            <ShieldAlert className="w-4 h-4" />
            <span>Legacy WordPress / Monolith (3.82s LCP)</span>
          </div>
          <div className="flex items-center justify-end gap-2 text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
            <span>Aetheria Next.js Edge Build (0.31s LCP)</span>
          </div>
        </div>

        {/* Compact Before/After Slider Display */}
        <div 
          className="relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
            setSliderPos((x / rect.width) * 100);
          }}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const touch = e.touches[0];
            const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
            setSliderPos((x / rect.width) * 100);
          }}
        >
          {/* After (Next.js - Right Side) */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-obsidian text-white p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                Next.js App Router
              </span>
              <div className="text-right">
                <span className="text-3xl font-mono font-black text-emerald-400">0.31s</span>
                <span className="block text-[10px] text-emerald-300 font-semibold">LCP Speed • 100/100 Vitals</span>
              </div>
            </div>

            <div className="space-y-1.5 max-w-sm">
              <span className="text-xs font-serif font-bold text-white">Edge Server-Side Rendered</span>
              <p className="text-[11px] text-slate-400 leading-snug">
                Zero third-party script blocking, pre-rendered static HTML at edge CDN nodes, and instant interactivity.
              </p>
            </div>
          </div>

          {/* Before (Legacy CMS - Left Side clipped by slider) */}
          <div 
            className="absolute inset-y-0 left-0 bg-slate-200 text-slate-800 p-6 flex flex-col justify-between overflow-hidden border-r border-slate-400/80 shadow-2xl"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="flex justify-between items-start whitespace-nowrap min-w-[320px]">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
                Legacy Monolithic CMS
              </span>
              <div className="text-right">
                <span className="text-3xl font-mono font-black text-rose-600">3.82s</span>
                <span className="block text-[10px] text-rose-500 font-semibold">Heavy Script Drag • 38/100</span>
              </div>
            </div>

            <div className="space-y-1.5 min-w-[320px]">
              <span className="text-xs font-serif font-bold text-slate-900">Plugin-Bloated Architecture</span>
              <p className="text-[11px] text-slate-600 leading-snug">
                Heavy database lookups, unoptimized image assets, and 40+ render-blocking JS plugins.
              </p>
            </div>
          </div>

          {/* Slider Divider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-xl pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-obsidian border-2 border-white text-white flex items-center justify-center shadow-2xl text-[10px] font-bold">
              &harr;
            </div>
          </div>
        </div>

        {/* Footer Caption */}
        <div className="mt-3 text-center">
          <span className="text-[10px] font-mono text-slate-400">
            Drag left/right to inspect raw performance telemetry
          </span>
        </div>

      </div>
    </section>
  );
}
