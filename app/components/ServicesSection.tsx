"use client";

import React from "react";
import { Layout, Code2, Server, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-6 h-6 text-purple-700" />,
      title: "Bespoke Web Design & Architecture",
      desc: "Custom design systems tailored in Figma. Distinct visual identities built to build trust.",
      badge: "UI/UX Systems",
      bg: "from-purple-100/70 via-indigo-50/40 to-purple-100/60",
      border: "border-purple-200/80",
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-700" />,
      title: "Next.js & React Custom Engineering",
      desc: "Sub-second page loading speeds engineered with Next.js App Router and React. Clean code without slow plugins.",
      badge: "Pure Code",
      bg: "from-teal-100/70 via-emerald-50/40 to-teal-100/60",
      border: "border-teal-200/80",
    },
    {
      icon: <Server className="w-6 h-6 text-amber-700" />,
      title: "White-Glove Managed Hosting",
      desc: "Hands-free production hosting backed by 99.99% SLA uptime, automated global CDN routing, and daily backups.",
      badge: "99.99% SLA",
      bg: "from-amber-100/70 via-orange-50/40 to-amber-100/60",
      border: "border-amber-200/80",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-rose-700" />,
      title: "Technical SEO & Schema Optimization",
      desc: "Maximized Core Web Vitals ratings, structured JSON-LD schema markup, and metadata architecture.",
      badge: "Search Dominance",
      bg: "from-rose-100/70 via-pink-50/40 to-rose-100/60",
      border: "border-rose-200/80",
    },
  ];

  return (
    <section id="services" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          Core Capabilities
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
          End-to-End Digital Engineering Services
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${srv.bg} ${srv.border} rounded-[2.5rem] p-8 border shadow-bento hover:shadow-bentoHover transition-all duration-300 flex flex-col justify-between min-h-[260px]`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-sm">{srv.icon}</div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 text-slate-700 shadow-sm">
                  {srv.badge}
                </span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">{srv.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{srv.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
              <span>Next.js Engineering Included</span>
              <ArrowRight className="w-4 h-4 text-champagne-dark" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
