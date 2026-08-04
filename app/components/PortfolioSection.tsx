"use client";

import React from "react";
import SpotlightCard from "./SpotlightCard";
import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Katha Studios",
      category: "Luxury Architecture & Spatial Curation",
      description:
        "100% custom Next.js showcase platform engineered with zero-shift floorplan lightboxes, sub-second response times, and high-converting brief request funnels.",
      url: "https://katha-studios.vercel.app",
      vitals: "0.29s LCP",
      tags: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
      gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      accentBorder: "hover:border-purple-500/50",
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-800",
    },
    {
      title: "Annapurna Farms & Seeds",
      category: "Enterprise AgriTech & Hybrid Catalog Portal",
      description:
        "Multi-region hybrid seed ordering platform built for high-concurrency inventory searches, real-time telemetry, and instant regional catalog filters.",
      url: "https://annapurna-farms.vercel.app",
      vitals: "0.31s LCP",
      tags: ["React 19", "TypeScript", "Prisma Database", "Tailwind CSS"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      accentBorder: "hover:border-emerald-500/50",
      badgeColor: "bg-emerald-950/80 text-emerald-300 border-emerald-800",
    },
    {
      title: "Aveorahs Interior Studios",
      category: "Commercial Architecture & Estate Portfolio",
      description:
        "Ultra-high resolution portfolio platform optimized for zero layout shifts, smooth ambient dark mode transitions, and direct client consultation scheduling.",
      url: "https://aveorahs-interiors.vercel.app",
      vitals: "0.34s LCP",
      tags: ["Next.js", "Server Components", "Lucide Icons", "Zero-Plugin Security"],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      accentBorder: "hover:border-amber-500/50",
      badgeColor: "bg-amber-950/80 text-amber-300 border-amber-800",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-purple-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>PROVEN DIGITAL PLATFORMS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Featured Web Engineering Work
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Custom digital platforms and enterprise applications engineered for market leaders. Every build guarantees 100/100 Core Web Vitals and zero security debt.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <SpotlightCard key={idx} className={`flex flex-col justify-between ${project.accentBorder}`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${project.badgeColor}`}>
                  {project.vitals}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  100/100
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-purple-400 mb-4">
                {project.category}
              </p>

              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-purple-600/20 border border-slate-800 hover:border-purple-500/50 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group/btn shadow-md"
              >
                <span>Launch Production Platform</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
