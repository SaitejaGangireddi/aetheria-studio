"use client";

import React from "react";
import { ExternalLink, Zap, CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  lcp: string;
  vitals: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "Katha Studios",
    category: "Luxury Architecture & Spatial Curation",
    description:
      "100% custom Next.js showcase platform engineered with zero-shift floorplan lightboxes, sub-second response times, and high-converting brief request funnels.",
    lcp: "0.29s LCP",
    vitals: "100/100",
    tags: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    imageUrl:
      "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785856193/Screenshot_2026-08-04_203429_dmqlwu.png",
    liveUrl: "https://www.kathainteriors.in/",
  },
  {
    title: "Annapurna Farms & Seeds",
    category: "Enterprise AgriTech & Hybrid Catalog Portal",
    description:
      "Multi-region hybrid seed ordering platform built for high-concurrency inventory searches, real-time telemetry, and instant regional catalog filters.",
    lcp: "0.31s LCP",
    vitals: "100/100",
    tags: ["React 19", "TypeScript", "Prisma Database", "Tailwind CSS"],
    imageUrl:
      "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785856192/Screenshot_2026-08-04_203921_szrblv.png",
    liveUrl: "https://stackblitz-starters-ua4suytn.vercel.app/",
  },
  {
    title: "Aveorahs Interior Studios",
    category: "Commercial Architecture & Estate Portfolio",
    description:
      "Ultra-high resolution portfolio platform optimized for zero layout shifts, smooth ambient dark mode transitions, and direct client consultation scheduling.",
    lcp: "0.34s LCP",
    vitals: "100/100",
    tags: ["Next.js", "Server Components", "Lucide Icons", "Zero-Plugin Security"],
    imageUrl:
      "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785856192/Screenshot_2026-08-04_203803_ghhdrl.png",
    liveUrl: "https://mwc946-3000.csb.app/",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-amber-300" />
          <span>Proven Production Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-slate-400 text-sm">
          Explore production platforms engineered for maximum client engagement and sub-second speed SLAs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
          >
            {/* Top Preview Image Container */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-52 bg-slate-950 overflow-hidden block border-b border-slate-800/80 group/img shrink-0"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </a>

            {/* Content Body */}
            <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/80 text-[10px] font-mono font-bold">
                    {project.lcp}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 text-[10px] font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {project.vitals}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-0.5">
                    {project.category}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 text-slate-400 text-[10px] font-medium border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-slate-950 hover:bg-purple-900/40 text-slate-200 hover:text-white font-serif font-bold text-xs rounded-xl border border-slate-800 hover:border-purple-500/50 flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <span>Launch Production Platform</span>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
