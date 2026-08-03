"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Discovery & Architecture",
      desc: "We analyze target audience demographics, competitive positioning, and conversion goals to map structural site architecture.",
      accent: "from-amber-50 to-white",
    },
    {
      num: "02",
      title: "High-Fidelity Design Curation",
      desc: "Pixel-perfect UI design built in Figma with high-end aesthetic details, visual hierarchy, and interactive micro-animations.",
      accent: "from-teal-50 to-white",
    },
    {
      num: "03",
      title: "Next.js Engineering & SEO Hardening",
      desc: "Clean Next.js implementation with modern CSS variables, semantic structure, and Core Web Vitals optimizations.",
      accent: "from-emerald-50 to-white",
    },
    {
      num: "04",
      title: "White-Glove Launch & Managed Hosting",
      desc: "Zero-downtime deployment backed by automated daily backups, global edge delivery, and 24/7 uptime monitoring.",
      accent: "from-yellow-50 to-white",
    },
  ];

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Methodology</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          The 4-Step Path to Launch
        </h3>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${step.accent} border border-amber-200/60 p-8 rounded-3xl shadow-luxury hover:shadow-cardHover hover:border-champagne transition-all duration-300 flex flex-col justify-between group`}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-4xl font-serif font-black text-champagne-dark/80 group-hover:scale-110 transition-transform">
                  {step.num}
                </span>
                <div className="w-2 h-2 rounded-full bg-champagne" />
              </div>
              <h4 className="text-lg font-bold text-obsidian mb-3 group-hover:text-champagne-dark transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
