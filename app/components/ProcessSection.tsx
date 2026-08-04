"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Discovery & Architecture",
      desc: "We analyze target audience demographics, competitive positioning, and conversion goals to map structural site architecture.",
    },
    {
      num: "02",
      title: "High-Fidelity Design Curation",
      desc: "Pixel-perfect UI design built in Figma with high-end aesthetic details and interactive micro-animations.",
    },
    {
      num: "03",
      title: "Next.js Engineering & SEO Hardening",
      desc: "Clean Next.js implementation with modern CSS variables, semantic structure, and Core Web Vitals optimization.",
    },
    {
      num: "04",
      title: "White-Glove Launch & Managed Hosting",
      desc: "Zero-downtime deployment backed by automated daily backups, global edge delivery, and uptime monitoring.",
    },
  ];

  return (
    <section id="process" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Methodology</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          The 4-Step Path to Launch
        </h2>
        <p className="text-slate-400 text-sm">
          A structured, transparent engineering pipeline from initial Figma wireframe to live production edge deployment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 space-y-4 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-3xl font-serif font-bold text-purple-400">{step.num}</span>
              <h3 className="text-base font-serif font-bold text-white">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
