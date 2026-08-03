"use client";

import React from "react";
import { CheckCircle2, XCircle, Zap, ShieldCheck, Sparkles } from "lucide-react";

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
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Zap className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>The Engineering Advantage</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Why Custom Next.js Outperforms Legacy CMS
        </h3>
      </div>

      <div className="bg-gradient-to-b from-white to-amber-50/30 rounded-3xl border border-champagne/30 p-4 md:p-6 shadow-luxury overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-6 px-6 text-slate-500 font-bold text-sm">Engine Metric</th>
                <th className="py-6 px-8 text-obsidian font-black text-lg bg-gradient-to-r from-amber-100 to-amber-50 rounded-t-2xl border-t-2 border-champagne flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-champagne-dark fill-champagne-dark" />
                  Aetheria Next.js Custom
                </th>
                <th className="py-6 px-6 text-slate-400 font-medium text-sm">
                  Traditional WordPress / Wix
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-white transition-colors">
                  <td className="py-6 px-6 font-bold text-slate-800 text-sm md:text-base">{item.metric}</td>
                  <td className="py-6 px-8 bg-amber-50/60 text-emerald-accent font-extrabold text-sm md:text-base border-x border-amber-100/80">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-accent shrink-0 fill-emerald-light" />
                      <span>{item.custom}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-slate-500 text-sm">
                    <div className="flex items-center gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{item.legacy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
