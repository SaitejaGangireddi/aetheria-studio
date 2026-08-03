"use client";

import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function InsightsSection() {
  const articles = [
    {
      title: "Why High-Ticket Brands Are Abandoning Legacy CMS in 2026",
      category: "Performance Engineering",
      bg: "bg-emerald-900 text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mastering Core Web Vitals: The Sub-Second Page Load Playbook",
      category: "Technical SEO Schema",
      bg: "bg-amber-900 text-white",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Building Conversational UI & Next.js Design Systems in Figma",
      category: "UI/UX Architecture",
      bg: "bg-purple-900 text-white",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Engineering Hub</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Dive Deeper Into Web Architecture
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-luxury hover:shadow-cardHover hover:border-champagne transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 relative overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-obsidian/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700">
                    {art.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-serif text-obsidian leading-snug group-hover:text-champagne-dark transition-colors">
                  {art.title}
                </h4>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-obsidian">
              <span>Read Architecture Guide</span>
              <ArrowUpRight className="w-4 h-4 text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
