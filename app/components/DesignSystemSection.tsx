"use client";

import React from "react";
import { Sparkles, Layout } from "lucide-react";

export default function DesignSystemSection() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-10 relative z-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Foundational Tokens</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Custom Studio Design System</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">#A855F7</div>
          <h3 className="text-base font-bold text-white">Ambient Purple Accent</h3>
          <p className="text-xs text-slate-400">Primary conversion focus token for CTAs and highlighted elements.</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">#10B981</div>
          <h3 className="text-base font-bold text-white">Performance Emerald</h3>
          <p className="text-xs text-slate-400">Status indicators confirming 100/100 Core Web Vitals health.</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-white font-bold text-xs"><Layout className="w-4 h-4 text-indigo-400" /></div>
          <h3 className="text-base font-bold text-white">Deep Obsidian Base</h3>
          <p className="text-xs text-slate-400">Slate-950 dark canvas eliminating eye fatigue and elevating luxury visuals.</p>
        </div>
      </div>
    </section>
  );
}
