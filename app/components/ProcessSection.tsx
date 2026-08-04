"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Discovery & Architecture",
      desc: "We analyze target audience demographics, competitive positioning, and conversion goals to map structural site architecture.",
      glow: "from-purple-500/20 to-indigo-500/0",
      border: "border-purple-500/30",
    },
    {
      num: "02",
      title: "High-Fidelity Design Curation",
      desc: "Pixel-perfect UI design built in Figma with high-end aesthetic details and interactive micro-animations.",
      glow: "from-emerald-500/20 to-teal-500/0",
      border: "border-emerald-500/30",
    },
    {
      num: "03",
      title: "Next.js Engineering & SEO Hardening",
      desc: "Clean Next.js implementation with modern CSS variables, semantic structure, and Core Web Vitals optimizations.",
      glow: "from-amber-500/20 to-orange-500/0",
      border: "border-amber-500/30",
    },
    {
      num: "04",
      title: "White-Glove Launch & Managed Hosting",
      desc: "Zero-downtime deployment backed by automated daily backups, global edge delivery, and uptime monitoring.",
      glow: "from-pink-500/20 to-rose-500/0",
      border: "border-pink-500/30",
    },
  ];

  return (
    <section id="process" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3.5 py-1.5 rounded-full border border-amber-800/80 inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Methodology
        </span>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
          The 4-Step Path to Launch
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-2">
          A structured, transparent engineering pipeline from initial Figma wireframe to live production edge deployment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className={`bg-slate-900/60 border ${s.border} rounded-3xl p-6 shadow-xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.glow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform`} />

            <div>
              <span className="text-3xl font-serif font-black text-white/40 block mb-4 group-hover:text-purple-400 transition-colors">
                {s.num}
              </span>
              <h4 className="text-lg font-serif font-bold text-white mb-2 relative z-10">
                {s.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
