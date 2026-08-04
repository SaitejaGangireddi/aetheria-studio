"use client";

import React from "react";
import { Layout, Code, Server, Search, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Layout,
      title: "Bespoke Web Design & Architecture",
      desc: "Custom design systems tailored in Figma. Distinct visual identities built to establish trust.",
      badge: "UI/UX Systems",
      color: "text-purple-400",
    },
    {
      icon: Code,
      title: "Next.js & React Custom Engineering",
      desc: "Sub-second page speeds engineered with Next.js App Router & React. Clean code without slow plugins.",
      badge: "Pure Code",
      color: "text-emerald-400",
    },
    {
      icon: Server,
      title: "White-Glove Managed Hosting",
      desc: "Hands-free production hosting backed by 99.99% SLA uptime, automated global CDN routing, and daily backups.",
      badge: "99.99% SLA",
      color: "text-amber-400",
    },
    {
      icon: Search,
      title: "Technical SEO & Schema Optimization",
      desc: "Maximized Core Web Vitals ratings, structured JSON-LD schema markup, and metadata architecture.",
      badge: "Search Dominance",
      color: "text-pink-400",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
          End-to-End Digital Engineering Services
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-2">
          Streamlined architecture solutions engineered for speed, authority, and scale.
        </p>
      </div>

      <div className="space-y-4">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-5 shadow-xl transition-all duration-300 hover:translate-x-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-serif font-bold text-white">{s.title}</h4>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {s.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold shrink-0 self-end sm:self-center">
                <CheckCircle2 className="w-4 h-4" />
                <span>Included</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
