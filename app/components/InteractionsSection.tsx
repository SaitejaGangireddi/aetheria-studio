"use client";

import React from "react";
import { Sparkles, Video, MousePointerClick, Zap } from "lucide-react";

export default function InteractionsSection() {
  const capabilities = [
    {
      icon: <MousePointerClick className="w-6 h-6 text-champagne-dark" />,
      title: "Inertial Smooth Scroll & Motion",
      desc: "Powered by Lenis inertial scrolling and Framer Motion spring physics for ultra-smooth rendering.",
    },
    {
      icon: <Video className="w-6 h-6 text-emerald-accent" />,
      title: "Optimized Visual Media",
      desc: "Autoplay background loops and responsive image assets optimized for zero layout shift.",
    },
    {
      icon: <Zap className="w-6 h-6 text-champagne-dark" />,
      title: "Sub-Second Micro-Interactions",
      desc: "Instant feedback animations designed to engage visitors and drive lead conversion.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-obsidian via-slate-900 to-obsidian rounded-3xl p-8 md:p-12 text-white border border-champagne/30 shadow-cardHover">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne/10 border border-champagne/30 text-champagne text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-champagne" />
            <span>Advanced Interactivity</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-white">
            High-Performance Web Motion & Visual Polish
          </h3>
          <p className="text-slate-300 mt-3 text-sm md:text-base">
            We build immersive user experiences without sacrificing speed or SEO authority.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="p-3 bg-white/10 rounded-xl w-fit mb-4">{cap.icon}</div>
              <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
