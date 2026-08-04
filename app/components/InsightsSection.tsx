"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function InsightsSection() {
  const articles = [
    {
      title: "Why Sub-Second LCP Speeds Multiply Client Conversions",
      category: "Performance SLA",
      date: "Aug 2026",
      link: "/insights/lcp-conversions",
    },
    {
      title: "Eliminating WordPress Plugin Vulnerabilities with Next.js",
      category: "Security",
      date: "Jul 2026",
      link: "/insights/zero-plugin-security",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-10 relative z-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Engineering Journal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Latest Technical Insights</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((item, idx) => (
          <div key={idx} className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-purple-400 font-bold">{item.category}</span>
              <span className="text-slate-500">{item.date}</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
            <a href={item.link} className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300">
              <span>Read Article</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
