"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Katha Studios",
      category: "Bespoke Interior & Architecture",
      metric: "+280% High-Ticket Inquiries",
      loadTime: "0.34s Load Speed",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Annapurna Farms & Seeds",
      category: "AgriTech & Modern Agriculture",
      metric: "+195% Wholesale Inquiries",
      loadTime: "0.39s Load Speed",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Aveorahs Interior Studios",
      category: "Luxury Residential & Commercial",
      metric: "100/100 Core Web Vitals",
      loadTime: "0.31s Load Speed",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-champagne-dark font-bold mb-3">
          Selected Work
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-serif text-obsidian">
          Client Projects & Live Demonstrations
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:border-champagne/50 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="h-60 relative overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/95 backdrop-blur-md text-champagne-dark text-xs px-3 py-1 rounded-full font-semibold border border-slate-200 shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-obsidian mb-2">{item.title}</h4>
                <div className="flex items-center gap-3 text-xs mb-6">
                  <span className="font-bold text-emerald-accent">{item.metric}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">{item.loadTime}</span>
                </div>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-obsidian bg-ivory hover:bg-obsidian hover:text-white text-obsidian text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
