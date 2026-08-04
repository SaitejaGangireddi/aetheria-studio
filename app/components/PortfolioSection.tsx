"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"all" | "interior" | "agritech">("all");

  const projects = [
    {
      id: "katha",
      category: "interior",
      client: "Katha Studios",
      title: "Elegance Redefined.",
      subtitle: "Luxury Interior Architecture & Spatial Curation",
      url: "https://katha-studios.vercel.app",
      desc: "Bespoke interior design and architectural showcase platform built with Next.js App Router.",
      border: "hover:border-purple-500/50",
    },
    {
      id: "annapurna",
      category: "agritech",
      client: "Annapurna Farms & Seeds",
      title: "Nurturing Growth.",
      subtitle: "High-Yield Hybrid Seeds & Sustainable AgriTech",
      url: "https://annapurna-farms.vercel.app",
      desc: "Enterprise AgriTech portal engineered for wholesale hybrid seed distribution with sub-second rendering.",
      border: "hover:border-emerald-500/50",
    },
    {
      id: "aveorahs",
      category: "interior",
      client: "Aveorahs Interior Studios",
      title: "Bespoke Spaces.",
      subtitle: "Commercial & Private Estate Architecture",
      url: "https://aveorahs-interiors.vercel.app",
      desc: "High-end interior architecture site built for luxury commercial projects, optimized for 100/100 Core Web Vitals.",
      border: "hover:border-amber-500/50",
    },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/80 px-3.5 py-1.5 rounded-full border border-purple-800/80 inline-block mb-2">
          Client Work
        </span>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Client Showcase & Deployments
        </h3>
      </div>

      {/* Filter Pills */}
      <div className="flex justify-center gap-2 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === "all" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"}`}
        >
          All Production Deploys
        </button>
        <button
          onClick={() => setFilter("interior")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === "interior" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"}`}
        >
          Interior & Architecture
        </button>
        <button
          onClick={() => setFilter("agritech")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === "agritech" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"}`}
        >
          AgriTech & Agriculture
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className={`bg-slate-900/60 border border-slate-800 ${p.border} rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
          >
            <div>
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl mb-4">
                <span className="text-[10px] font-bold uppercase text-purple-400 block mb-1">{p.client}</span>
                <h4 className="text-lg font-serif font-bold text-white">{p.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{p.subtitle}</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{p.desc}</p>
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all"
            >
              <span>Explore Deployment</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
