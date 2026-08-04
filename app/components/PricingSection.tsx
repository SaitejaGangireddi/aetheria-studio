"use client";

import React from "react";
import { Sparkles, Check, ArrowRight, Zap, Layers, Cpu } from "lucide-react";

export default function PricingSection({ onOpenModal }: { onOpenModal: () => void }) {
  const plans = [
    {
      name: "Boutique MVP",
      price: "Starter Scope",
      popular: false,
      badge: "FAST TURNAROUND",
      badgeColor: "bg-slate-950 text-slate-400 border-slate-800",
      desc: "Perfect for single-page showcases, landing pages, and early-stage brand launches.",
      features: [
        "Single-Page Next.js Architecture",
        "Responsive Mobile-First UI/UX",
        "Sub-Second Page Load Optimization",
        "Basic Lead Capture Form",
        "1-Week Delivery SLA",
      ],
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      ctaGradient: "from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-slate-200 border-slate-700",
    },
    {
      name: "Custom Showcase Build",
      price: "Fixed Quote",
      popular: true,
      badge: "MOST POPULAR",
      badgeColor: "bg-purple-950/90 text-purple-300 border-purple-500/50",
      desc: "For luxury architectural studios, interior designers, and commercial portfolios.",
      features: [
        "100% Custom Next.js App Router",
        "Zero-Shift Lightbox Floorplans",
        "Sub-Second LCP Performance SLA",
        "100/100 Core Web Vitals SLA",
        "Custom Brief Intake Funnels",
      ],
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      ctaGradient: "from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    },
    {
      name: "Enterprise Platform",
      price: "Custom Scope",
      popular: false,
      badge: "EXTREME SCALE",
      badgeColor: "bg-indigo-950/90 text-indigo-300 border-indigo-500/50",
      desc: "For high-concurrency ordering portals, seed catalogs, and real-time inventory systems.",
      features: [
        "React 19 & Spring Boot Integration",
        "Prisma ORM & Database Clustering",
        "Multi-Region Edge CDN Delivery",
        "Automated Telemetry & Backups",
        "Direct Lead Engineer SLA",
      ],
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      ctaGradient: "from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white border-indigo-400/40",
    },
  ];

  return (
    <section className="py-14 px-6 md:px-12 max-w-7xl mx-auto space-y-8 relative z-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Transparent Delivery</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Engagement Models
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Tailored engineering partnerships built for speed, scale, and budget requirements.
        </p>
      </div>

      {/* Compact 3-Column Grid */}
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`group relative bg-slate-900/60 border rounded-2xl p-5 backdrop-blur-xl flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 ${
              plan.popular
                ? "border-purple-500/60 shadow-[0_10px_30px_rgba(168,85,247,0.15)] bg-slate-900/80"
                : "border-slate-800/80 hover:border-slate-700"
            }`}
          >
            {/* Top Accent Bar */}
            <div className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${
              plan.popular ? "from-purple-500 via-pink-400 to-indigo-500" : "from-slate-800 via-slate-700 to-slate-800"
            }`} />

            <div className="space-y-4">
              {/* Badge Header */}
              <div className="flex items-center justify-between gap-2">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {plan.icon}
                </div>
                <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-mono font-bold tracking-wider uppercase ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
              </div>

              {/* Title & Pricing */}
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                  {plan.name}
                </h3>
                <div className="text-xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300">
                  {plan.price}
                </div>
                <p className="text-[11px] text-slate-400 leading-normal pt-0.5">
                  {plan.desc}
                </p>
              </div>

              <div className="h-[1px] bg-slate-800/60" />

              {/* Feature Checklist */}
              <ul className="space-y-2">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="text-[11px] text-slate-300 flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compact CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className={`w-full py-2.5 px-4 bg-gradient-to-r ${plan.ctaGradient} border font-bold text-[11px] rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02]`}
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
