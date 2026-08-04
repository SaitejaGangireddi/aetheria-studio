"use client";

import React from "react";
import { Zap, ShieldCheck, Code2, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhyChooseUsSection({ onOpenModal }: { onOpenModal: () => void }) {
  const reasons = [
    {
      icon: Zap,
      title: "Sub-Second Performance SLA",
      desc: "We build on zero-runtime Next.js Edge architecture. Every site we deliver loads under 0.4 seconds flat, guaranteed.",
      badge: "0.31s LCP Standard",
      glow: "from-purple-500/20 to-indigo-500/0",
      border: "border-purple-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Zero CMS Security Debt",
      desc: "No WordPress plugins to update, no PHP vulnerabilities, and no database bloat. Your site is completely immune to traditional exploits.",
      badge: "Enterprise Hardened",
      glow: "from-emerald-500/20 to-teal-500/0",
      border: "border-emerald-500/30",
    },
    {
      icon: Code2,
      title: "100% Bespoke Code",
      desc: "No generic templates or drag-and-drop builders. Every single line of React and Tailwind CSS is custom-crafted for your brand.",
      badge: "Figma Fidelity",
      glow: "from-amber-500/20 to-orange-500/0",
      border: "border-amber-500/30",
    },
    {
      icon: Users,
      title: "Direct Senior Architect Access",
      desc: "You deal directly with senior full-stack developers who write the application architecture—no middleman account managers.",
      badge: "White-Glove Support",
      glow: "from-pink-500/20 to-rose-500/0",
      border: "border-pink-500/30",
    },
  ];

  return (
    <section id="why-us" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-800/80 inline-flex items-center gap-1.5 mb-3 shadow-lg">
          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
          The Aetheria Guarantee
        </span>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Why High-Ticket Brands Choose Us
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-2">
          We replace bloated CMS templates with high-converting, 3D interactive Next.js applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r, idx) => {
          const Icon = r.icon;
          return (
            <div
              key={idx}
              className={`bg-slate-900/60 backdrop-blur-xl border ${r.border} rounded-[2rem] p-7 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${r.glow} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform`}/>

              <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-white flex items-center justify-center shadow-lg group-hover:border-purple-500/50 transition-colors">
                  <Icon className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full bg-slate-950/80 text-slate-300 border border-slate-800">
                  {r.badge}
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-white mb-2 relative z-10">{r.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={onOpenModal}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-2xl shadow-2xl inline-flex items-center gap-2.5 border border-purple-400/30 transition-all hover:scale-105"
        >
          <span>Reserve Your Architecture Sprint</span>
          <ArrowRight className="w-4 h-4 text-amber-300" />
        </button>
      </div>
    </section>
  );
}
