"use client";

import React from "react";
import { ArrowRight, MessageSquare, Headphones, HelpCircle } from "lucide-react";

export default function SupportSection({ onOpenModal }: { onOpenModal: () => void }) {
  const supportOptions = [
    {
      title: "Hire a Lead Web Architect",
      desc: "Connect directly with our senior full-stack team to map out your custom Next.js project brief.",
      icon: <Headphones className="w-6 h-6 text-champagne" />,
    },
    {
      title: "Instant Strategy Chat",
      desc: "Speak with our technical leads via WhatsApp or live chat for immediate architecture reviews.",
      icon: <MessageSquare className="w-6 h-6 text-emerald-accent" />,
    },
    {
      title: "Technical Knowledge Center",
      desc: "Browse our documentation on Next.js Core Web Vitals, JSON-LD Schema, and white-glove SLA hosting.",
      icon: <HelpCircle className="w-6 h-6 text-champagne" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-obsidian text-white rounded-[2.5rem] p-8 md:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-champagne bg-white/10 px-4 py-1.5 rounded-full border border-white/20 inline-block mb-4">
            Dedicated Technical Service
          </span>
          <h3 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
            White-Glove Architecture Support 24/7
          </h3>
          <p className="text-slate-400 mt-3 text-base">
            Continuous performance monitoring, direct engineering channels, and instant response SLA care.
          </p>
        </div>

        <div className="space-y-4">
          {supportOptions.map((opt, idx) => (
            <div
              key={idx}
              onClick={onOpenModal}
              className="bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-champagne/50 p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-5">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">{opt.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-champagne transition-colors">
                    {opt.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1 max-w-xl">{opt.desc}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-champagne group-hover:translate-x-2 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
