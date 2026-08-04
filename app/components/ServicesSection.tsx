"use client";

import React from "react";
import { Sparkles, Code2, Layout, Zap, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-purple-400" />,
      title: "Custom Next.js Engineering",
      description: "Full-stack web application development built with Next.js App Router, React Server Components, and zero-shift layouts.",
    },
    {
      icon: <Layout className="w-6 h-6 text-pink-400" />,
      title: "UI/UX & Spatial Curation",
      description: "Bespoke design systems and high-converting user flows designed tailored to showcase your portfolio or luxury products.",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Sub-Second LCP Speed SLAs",
      description: "Extreme performance optimization ensuring sub-second response times, 100/100 Core Web Vitals, and instant global CDN delivery.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Zero-Plugin Web Security",
      description: "Clean, robust codebases free of bloated WordPress/third-party plugins, giving your brand maximum uptime and security.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Services We Provide
        </h2>
        <p className="text-slate-400 text-sm">
          Everything you need to turn initial design concepts into live production edge applications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 space-y-4 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
