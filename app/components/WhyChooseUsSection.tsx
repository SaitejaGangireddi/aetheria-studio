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
      color: "from-purple-500/20 to-indigo-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Zero CMS Security Debt",
      desc: "No WordPress plugins to update, no PHP vulnerabilities, and no database bloat. Your site is completely immune to traditional exploits.",
      badge: "Enterprise Hardened",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Code2,
      title: "100% Bespoke Code",
      desc: "No generic templates or drag-and-drop builders. Every single line of React and Tailwind CSS is custom-crafted for your brand.",
      badge: "Figma Fidelity",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Direct Senior Architect Access",
      desc: "You deal directly with senior full-stack developers who write the application architecture—no middleman account managers.",
      badge: "White-Glove Support",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section id="why-us" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200/60 inline-flex items-center gap-1.5 mb-2">
          <CheckCircle2 className="w-3 h-3 text-purple-600" />
          The Aetheria Guarantee
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
          Why High-Ticket Brands Choose Us
        </h3>
        <p className="text-xs text-slate-500 mt-1.5">
          We replace bloated CMS templates with high-converting custom Next.js applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reasons.map((r, idx) => {
          const Icon = r.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-bento hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${r.color} rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform`}/>

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {r.badge}
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">{r.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{r.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onOpenModal}
          className="px-8 py-4 bg-obsidian hover:bg-slate-800 text-white font-bold text-xs rounded-2xl shadow-xl inline-flex items-center gap-2 border border-champagne/30 transition-all hover:scale-105"
        >
          <span>Reserve Your Architecture Sprint</span>
          <ArrowRight className="w-4 h-4 text-champagne" />
        </button>
      </div>
    </section>
  );
}
