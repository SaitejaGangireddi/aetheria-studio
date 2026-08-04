"use client";

import React from "react";
import { Layout, Code2, Server, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-5 h-5 text-purple-600" />,
      tag: "UI/UX SYSTEMS",
      title: "Bespoke Web Design & Architecture",
      desc: "Custom design systems tailored in Figma. Distinct visual identities built to establish trust.",
      accent: "hover:border-purple-300 hover:bg-purple-50/40",
      badgeBg: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Code2 className="w-5 h-5 text-teal-600" />,
      tag: "PURE CODE",
      title: "Next.js & React Custom Engineering",
      desc: "Sub-second page speeds engineered with Next.js App Router & React. Clean code without slow plugins.",
      accent: "hover:border-teal-300 hover:bg-teal-50/40",
      badgeBg: "bg-teal-100 text-teal-700",
    },
    {
      icon: <Server className="w-5 h-5 text-amber-600" />,
      tag: "99.99% SLA",
      title: "White-Glove Managed Hosting",
      desc: "Hands-free production hosting backed by 99.99% SLA uptime, automated global CDN routing, and daily backups.",
      accent: "hover:border-amber-300 hover:bg-amber-50/40",
      badgeBg: "bg-amber-100 text-amber-700",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
      tag: "SEARCH DOMINANCE",
      title: "Technical SEO & Schema Optimization",
      desc: "Maximized Core Web Vitals ratings, structured JSON-LD schema markup, and metadata architecture.",
      accent: "hover:border-rose-300 hover:bg-rose-50/40",
      badgeBg: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <section id="services" className="py-12 px-6 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
          End-to-End Digital Engineering Services
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Streamlined architecture solutions engineered for speed, authority, and scale.
        </p>
      </div>

      {/* Compact Top-to-Bottom Stack */}
      <div className="space-y-3">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white border border-slate-200/80 rounded-2xl p-4 md:px-6 md:py-4 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 group ${item.accent}`}
          >
            {/* Left: Icon + Text */}
            <div className="flex items-start md:items-center gap-4 flex-1">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="text-sm font-bold text-slate-900 font-serif">
                    {item.title}
                  </h4>
                  <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md ${item.badgeBg}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-500 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Right: Badge & Arrow */}
            <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Included
              </span>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-obsidian group-hover:text-white transition-all">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
