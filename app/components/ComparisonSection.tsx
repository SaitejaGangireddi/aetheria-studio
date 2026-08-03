"use client";

import React from "react";
import { CheckCircle2, XCircle, Zap, ShieldCheck } from "lucide-react";

export default function ComparisonSection() {
  const points = [
    {
      metric: "Lighthouse Speed Score",
      custom: "100 / 100 Guaranteed",
      legacy: "35 - 55 / 100 Average (Slow)",
    },
    {
      metric: "Security & Vulnerabilities",
      custom: "Zero Attack Surface",
      legacy: "High Risk (Frequent Exploits)",
    },
    {
      metric: "Design Architecture",
      custom: "100% Custom Bespoke UI",
      legacy: "Generic Pre-built Templates",
    },
    {
      metric: "Google Core Web Vitals",
      custom: "Sub-Second Load Times",
      legacy: "Layout Shifts & Laggy Render",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-emerald-100/60 via-teal-50/40 to-emerald-100/70 rounded-[2.5rem] p-8 md:p-12 border border-emerald-200/60 shadow-bento">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-900 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-200 shadow-sm inline-flex items-center gap-1.5 mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            The Engineering Advantage
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Why Custom Next.js Outperforms Legacy CMS
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">{pt.metric}</p>
                <div className="flex items-center gap-2 text-emerald-accent font-extrabold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-accent shrink-0" />
                  <span>{pt.custom}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-xs">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{pt.legacy}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
