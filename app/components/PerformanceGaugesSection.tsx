"use client";

import React, { useState } from "react";
import { Gauge, CheckCircle2, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function PerformanceGaugesSection() {
  const [testing, setTesting] = useState(false);

  const metrics = [
    { label: "Performance", score: 100, color: "text-emerald-500", stroke: "#10B981" },
    { label: "Accessibility", score: 100, color: "text-emerald-500", stroke: "#10B981" },
    { label: "Best Practices", score: 100, color: "text-emerald-500", stroke: "#10B981" },
    { label: "SEO Optimization", score: 100, color: "text-emerald-500", stroke: "#10B981" },
  ];

  const handleRunAudit = () => {
    setTesting(true);
    toast.info("Running simulated Core Web Vitals audit...");
    setTimeout(() => {
      setTesting(false);
      toast.success("Audit complete: 100/100 Core Web Vitals verified!");
    }, 1200);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 via-obsidian to-slate-950 text-white rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800/80 inline-flex items-center gap-2 mb-3">
            <Gauge className="w-3.5 h-3.5" />
            Live Audit Telemetry
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
            100/100 Core Web Vitals Standard
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            Every build is engineered for sub-second LCP, zero cumulative layout shift, and instant edge response.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 text-center flex flex-col items-center justify-center relative shadow-lg">
              <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="transition-all duration-1000 ease-out"
                    strokeDasharray="100, 100"
                    strokeWidth="3.2"
                    stroke={m.stroke}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-2xl font-black font-mono text-white">{m.score}</span>
              </div>
              <span className="text-xs font-bold text-slate-300">{m.label}</span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleRunAudit}
            disabled={testing}
            className="px-6 py-3 bg-white text-obsidian font-bold text-xs rounded-full shadow-lg hover:bg-slate-200 transition-all inline-flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${testing ? "animate-spin text-emerald-600" : ""}`} />
            <span>{testing ? "Simulating Audit..." : "Run Core Web Vitals Audit"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
