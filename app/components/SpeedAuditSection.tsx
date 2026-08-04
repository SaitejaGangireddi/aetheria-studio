"use client";

import React, { useState } from "react";
import { Play, RefreshCw, AlertTriangle, CheckCircle2, Zap, Clock, ShieldCheck } from "lucide-react";

export default function SpeedAuditSection() {
  const [isTesting, setIsTesting] = useState(false);
  const [testKey, setTestKey] = useState(0);

  const handleRunTest = () => {
    setIsTesting(true);
    setTestKey((prev) => prev + 1);
    setTimeout(() => {
      setIsTesting(false);
    }, 3800);
  };

  return (
    <section id="speed-audit" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/60 inline-flex items-center gap-1.5 mb-2">
          <Zap className="w-3 h-3 text-purple-600" />
          Real-Time Rendering Telemetry
        </span>
        <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">
          Browser Painting & Load Sequence Comparison
        </h3>
        <p className="text-xs text-slate-500 mt-1.5">
          Observe how traditional monolithic plugins delay initial paint compared to edge-rendered Next.js architecture.
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleRunTest}
          disabled={isTesting}
          className="px-6 py-3 bg-obsidian hover:bg-slate-800 text-white font-bold text-xs rounded-full shadow-lg transition-all flex items-center gap-2 border border-champagne/30"
        >
          {isTesting ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-champagne" />
              <span>Simulating Network Request Waterfall...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-champagne fill-champagne" />
              <span>Run Live Browser Render Test</span>
            </>
          )}
        </button>
      </div>

      {/* Side-by-Side Browser Visualizers */}
      <div className="grid md:grid-cols-2 gap-6" key={testKey}>
        
        {/* LEFT: Legacy CMS Simulation */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between">
          <div>
            {/* Fake Chrome Address Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-900 text-[10px] text-slate-400 font-mono px-3 py-1 rounded-md border border-slate-800 flex items-center gap-1.5 w-64 justify-center">
                <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" />
                <span className="truncate">https://legacy-cms-monolith.com</span>
              </div>
              <div className="w-3" />
            </div>

            {/* Viewport Render Area */}
            <div className="p-6 min-h-[260px] bg-slate-950/60 relative flex flex-col justify-between">
              
              {/* Animated Loading States */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-rose-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Legacy WordPress / Monolith
                  </span>
                  <span className="font-mono text-rose-500 font-bold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/60">
                    3.82s LCP
                  </span>
                </div>

                {/* Simulated Step Paint Visual */}
                <div className="border border-slate-800 rounded-xl p-4 bg-slate-900/50 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                    <span>Rendering Timeline</span>
                    <span className="text-amber-400 font-mono font-bold animate-pulse">
                      {isTesting ? "Executing 42 JS Plugins..." : "Render Complete (Slow Paint)"}
                    </span>
                  </div>

                  {/* Waterfall Latency Graphic */}
                  <div className="space-y-2 pt-1">
                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>DNS & DB Lookups</span>
                        <span className="text-slate-500">850ms</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Render-Blocking Plugins</span>
                        <span className="text-rose-400">1820ms</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Unoptimized Image Reflash (CLS)</span>
                        <span className="text-rose-400">1150ms</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-rose-600 h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Warning */}
          <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-rose-400">
              <AlertTriangle className="w-3.5 h-3.5" /> Core Web Vitals Failure
            </span>
            <span className="font-mono font-bold text-slate-500">Score: 38 / 100</span>
          </div>
        </div>

        {/* RIGHT: Next.js Edge Simulation */}
        <div className="bg-slate-900 border border-emerald-900/50 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Fake Chrome Address Bar */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-900 text-[10px] text-emerald-400 font-mono px-3 py-1 rounded-md border border-emerald-900/60 flex items-center gap-1.5 w-64 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">https://aetheria-nextjs.app</span>
              </div>
              <div className="w-3" />
            </div>

            {/* Viewport Render Area */}
            <div className="p-6 min-h-[260px] bg-slate-950/60 relative flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Aetheria Next.js Edge Architecture
                  </span>
                  <span className="font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    0.31s LCP
                  </span>
                </div>

                {/* Simulated Instant Paint Visual */}
                <div className="border border-emerald-900/40 rounded-xl p-4 bg-emerald-950/10 space-y-3 relative">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 border-b border-emerald-900/40 pb-2">
                    <span>Edge Response Stream</span>
                    <span className="text-emerald-400 font-mono font-bold">
                      Sub-0.4s Instant First Contentful Paint
                    </span>
                  </div>

                  {/* Single Edge Request Waterfall */}
                  <div className="space-y-2 pt-1">
                    <div>
                      <div className="flex justify-between text-[9px] text-emerald-300 mb-1">
                        <span>Global Edge CDN Cache Hit</span>
                        <span className="text-emerald-400">180ms</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-emerald-300 mb-1">
                        <span>Zero-Runtime React Hydration</span>
                        <span className="text-emerald-400">130ms</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Layout Shift (CLS)</span>
                        <span className="text-emerald-400 font-mono font-bold">0.0 (Perfect)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Verified Score */}
          <div className="p-4 bg-slate-950 border-t border-emerald-900/40 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100/100 Core Web Vitals Verified
            </span>
            <span className="font-mono font-black text-emerald-400">Score: 100 / 100</span>
          </div>
        </div>

      </div>
    </section>
  );
}
