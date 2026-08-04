"use client";

import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";

export default function TemplateGallerySection() {
  const templates = [
    {
      title: "Katha Studios",
      category: "Bespoke Interior & Architecture",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      height: "h-80",
    },
    {
      title: "Annapurna Farms & Seeds",
      category: "AgriTech & Modern Agriculture",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      height: "h-64",
    },
    {
      title: "Aveorahs Interior Studios",
      category: "Luxury Residential & Commercial",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      height: "h-96",
    },
    {
      title: "Apex Architectural Firm",
      category: "Commercial Architecture",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      height: "h-72",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Designed on Aetheria</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Explore Custom Web Architectures
        </h3>
        <p className="text-slate-600 mt-4 text-base">
          Distinct layout styles hand-crafted for high-ticket clients across industries.
        </p>
      </div>

      {/* Asymmetric Masonry Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {templates.map((tpl, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-luxury hover:shadow-cardHover hover:border-champagne transition-all duration-500 group flex flex-col justify-between"
          >
            <div className={`relative ${tpl.height} overflow-hidden bg-slate-100`}>
              <img
                src={tpl.image}
                alt={tpl.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/95 backdrop-blur-md text-obsidian text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {tpl.category}
                </span>
              </div>
            </div>

            <div className="p-5 flex items-center justify-between">
              <h4 className="text-base font-bold font-serif text-obsidian">{tpl.title}</h4>
              <a
                href="#work"
                className="p-2 rounded-full bg-ivory border border-slate-200 group-hover:bg-obsidian group-hover:text-white transition-colors"
                aria-label="View Project"
              >
                <ExternalLink className="w-4 h-4 text-champagne" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
