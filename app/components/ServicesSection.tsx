"use client";

import React from "react";
import { Layout, Code2, Server, TrendingUp, Sparkles, ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-7 h-7 text-champagne-dark" />,
      title: "Bespoke Web Design & Architecture",
      description:
        "Custom design systems tailored in Figma. We craft distinct visual identities and ultra-luxury interfaces built to build trust and capture high-ticket leads.",
      tag: "UI/UX & Figma Systems",
      bgGradient: "from-amber-50/80 via-white to-amber-50/20",
    },
    {
      icon: <Code2 className="w-7 h-7 text-emerald-accent" />,
      title: "Next.js & React Custom Engineering",
      description:
        "Sub-second page loading speeds engineered with Next.js App Router and React. Clean code without slow, bloated plugins or third-party page builders.",
      tag: "100/100 Speed Code",
      bgGradient: "from-teal-50/80 via-white to-emerald-50/20",
    },
    {
      icon: <Server className="w-7 h-7 text-champagne-dark" />,
      title: "White-Glove Managed Hosting & SLA Care",
      description:
        "Hands-free production hosting backed by 99.99% SLA uptime, automated global CDN routing, daily backups, and continuous performance tuning.",
      tag: "99.99% SLA Uptime",
      bgGradient: "from-yellow-50/80 via-white to-amber-50/20",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-emerald-accent" />,
      title: "Technical SEO & Schema Optimization",
      description:
        "Maximized Core Web Vitals ratings, structured JSON-LD schema markup, and metadata architecture engineered to secure top Google search rankings.",
      tag: "Rank Dominance",
      bgGradient: "from-emerald-50/80 via-white to-teal-50/20",
    },
  ];

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Our Capabilities</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          End-to-End Digital Engineering Services
        </h3>
        <p className="text-slate-600 mt-4 text-base md:text-lg">
          We combine world-class aesthetic design with enterprise Next.js engineering to give high-ticket brands an unfair market advantage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.bgGradient} border border-amber-200/60 p-8 md:p-10 rounded-3xl shadow-luxury hover:shadow-cardHover hover:border-champagne/80 hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 shadow-sm">
                  {service.tag}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-obsidian mb-4 group-hover:text-champagne-dark transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-obsidian group-hover:text-champagne-dark">
              <span>Includes Architecture & Support</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
