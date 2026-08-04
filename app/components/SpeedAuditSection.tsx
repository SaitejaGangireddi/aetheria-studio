"use client";

import React, { useState } from "react";
import { Sparkles, Gauge, ArrowRight } from "lucide-react";

export default function SpeedAuditSection() {
  const [url, setUrl] = useState("");
  const [audited, setAudited] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) setAudited(true);
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-10 relative z-10">
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl max-w-4xl mx-auto text-center space-y-6 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-xs font-bold uppercase">
          <Gauge className="w-3.5 h-3.5 text-amber-300" />
          <span>Free Speed Benchmark</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Instant Core Web Vitals Audit</h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Enter your current URL to see your target LCP speed bottlenecks and zero-plugin migration path.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shrink-0"
          >
            <span>Run Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {audited && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold animate-pulse">
            Audit Request Queued! Our lead engineer will email your full PageSpeed diagnosis shortly.
          </div>
        )}
      </div>
    </section>
  );
}
