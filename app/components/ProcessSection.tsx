"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Discovery & Architecture",
      desc: "We analyze target audience demographics, competitive positioning, and conversion goals to map structural site architecture.",
      bg: "from-purple-100/70 to-indigo-50/50",
      border: "border-purple-200/60",
    },
    {
      num: "02",
      title: "High-Fidelity Design Curation",
      desc: "Pixel-perfect UI design built in Figma with high-end aesthetic details and interactive micro-animations.",
      bg: "from-teal-100/70 to-emerald-50/50",
      border: "border-teal-200/60",
    },
    {
      num: "03",
      title: "Next.js Engineering & SEO Hardening",
      desc: "Clean Next.js implementation with modern CSS variables, semantic structure, and Core Web Vitals optimizations.",
      bg: "from-amber-100/70 to-yellow-50/50",
      border: "border-amber-200/60",
    },
    {
      num: "04",
      title: "White-Glove Launch & Managed Hosting",
      desc: "Zero-downtime deployment backed by automated daily backups, global edge delivery, and uptime monitoring.",
      bg: "from-rose-100/70 to-pink-50/50",
      border: "border-rose-200/60",
    },
  ];

  return (
    <section id="process" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          Methodology
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
          The 4-Step Path to Launch
        </h3>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((st, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${st.bg} ${st.border} rounded-[2.5rem] p-7 border shadow-bento flex flex-col justify-between`}
          >
            <div>
              <span className="text-3xl font-serif font-black text-slate-900/80 block mb-4">
                {st.num}
              </span>
              <h4 className="text-base font-serif font-bold text-slate-900 mb-2">{st.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
