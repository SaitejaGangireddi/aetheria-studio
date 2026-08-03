"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";

export default function PricingSection({ onOpenModal }: { onOpenModal: () => void }) {
  const plans = [
    {
      name: "Bespoke Architecture",
      tier: "Core Engineering Tier",
      description: "Custom UI/UX design systems and Next.js web applications built for high performance.",
      features: [
        "100% Custom React & Next.js Codebase",
        "Sub-Second Page Load Guarantee",
        "Bespoke Figma UI/UX Design System",
        "JSON-LD Technical SEO Schema",
        "Mobile Responsive & Viewport Optimization",
      ],
      popular: false,
    },
    {
      name: "Enterprise Scale",
      tier: "Full Production Tier",
      description: "Full-scale custom engineering for market-dominating brands and large-scale applications.",
      features: [
        "All Bespoke Architecture Features",
        "Multi-Page Custom UI/UX Workflows",
        "Automated Edge CI/CD Deployment",
        "Advanced Core Web Vitals Hardening",
        "Custom Lead Capture & CRM Integration",
        "Dedicated Engineering Support Desk",
      ],
      popular: true,
    },
    {
      name: "White-Glove Managed Care",
      tier: "Enterprise Support Tier",
      description: "Complete full-stack development, continuous updates, and 99.99% SLA edge hosting.",
      features: [
        "Full-Stack Custom Web Architecture",
        "99.99% SLA Uptime Guarantee",
        "Continuous Performance & Security Audits",
        "24/7 Priority Emergency Support",
        "Weekly Content & Infrastructure Updates",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Engineering Tiers</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Project Capabilities & Scope
        </h3>
        <p className="text-slate-600 mt-4 text-base">
          Zero CMS, zero plugin bloat, 100% custom-coded web architecture tailored to your scope.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              plan.popular
                ? "bg-gradient-to-b from-obsidian to-slate-900 text-white shadow-cardHover border-2 border-champagne scale-105"
                : "bg-white border border-slate-200 text-obsidian shadow-luxury hover:shadow-cardHover"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-champagne text-obsidian text-[11px] font-extrabold uppercase px-4 py-1 rounded-full shadow-md">
                Recommended Tier
              </span>
            )}

            <div>
              <h4 className="text-xl font-bold font-serif mb-1">{plan.name}</h4>
              <p className={`text-xs font-semibold mb-3 ${plan.popular ? "text-champagne" : "text-emerald-accent"}`}>
                {plan.tier}
              </p>
              <p className={`text-xs mb-8 ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3.5 text-xs mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-champagne" : "text-emerald-accent"}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenModal}
              className={`w-full py-3.5 rounded-xl font-bold text-xs transition-all ${
                plan.popular
                  ? "bg-champagne hover:bg-gold-600 text-obsidian"
                  : "bg-obsidian hover:bg-slate-800 text-white"
              }`}
            >
              Request Scope Proposal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
