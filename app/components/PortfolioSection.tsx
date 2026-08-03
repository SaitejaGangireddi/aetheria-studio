"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, Sparkles, X } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filter: string;
  metric: string;
  loadTime: string;
  bgGradient: string;
  borderColor: string;
  previewHeaderBg: string;
  heroHeadline: string;
  heroSub: string;
  btnText: string;
  btnBg: string;
  description: string;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: "katha",
      title: "Katha Studios",
      category: "Bespoke Architecture & Interior",
      filter: "architecture",
      metric: "+280% High-Ticket Inquiries",
      loadTime: "0.34s Load Speed",
      bgGradient: "from-amber-100/70 via-stone-50/50 to-amber-100/80",
      borderColor: "border-amber-200/80",
      previewHeaderBg: "bg-amber-900",
      heroHeadline: "Elegance Redefined.",
      heroSub: "Luxury Interior Architecture & Spatial Curation",
      btnText: "Explore Portfolio",
      btnBg: "bg-amber-800 text-white",
      description: "Bespoke interior design and architectural showcase platform built with Next.js App Router, featuring interactive floorplan previews and automated consultation routing.",
    },
    {
      id: "annapurna",
      title: "Annapurna Farms & Seeds",
      category: "AgriTech & Modern Agriculture",
      filter: "agritech",
      metric: "+195% Wholesale Inquiries",
      loadTime: "0.39s Load Speed",
      bgGradient: "from-emerald-100/70 via-teal-50/50 to-emerald-100/80",
      borderColor: "border-emerald-200/80",
      previewHeaderBg: "bg-emerald-900",
      heroHeadline: "Nurturing Growth.",
      heroSub: "High-Yield Hybrid Seeds & Sustainable AgriTech",
      btnText: "View Seed Catalog",
      btnBg: "bg-emerald-800 text-white",
      description: "Enterprise AgriTech portal engineered for wholesale hybrid seed distribution, featuring dynamic regional product filtering and sub-second rendering speeds.",
    },
    {
      id: "aveorahs",
      title: "Aveorahs Interior Studios",
      category: "Luxury Residential & Commercial",
      filter: "architecture",
      metric: "100/100 Core Web Vitals",
      loadTime: "0.31s Load Speed",
      bgGradient: "from-purple-100/70 via-indigo-50/50 to-purple-100/80",
      borderColor: "border-purple-200/80",
      previewHeaderBg: "bg-slate-900",
      heroHeadline: "Bespoke Spaces.",
      heroSub: "Commercial & Private Estate Architecture",
      btnText: "Book Design Brief",
      btnBg: "bg-purple-900 text-white",
      description: "High-end interior architecture site built for luxury commercial projects, optimized for 100/100 Core Web Vitals performance and flawless brand authority.",
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-700 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm inline-flex items-center gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          Client Work
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
          Client Showcase & Production Deployments
        </h3>
      </div>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {[
          { id: "all", label: "All Production Deploys" },
          { id: "architecture", label: "Interior & Architecture" },
          { id: "agritech", label: "AgriTech & Agriculture" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeFilter === btn.id
                ? "bg-obsidian text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-champagne"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className={`bg-gradient-to-br ${item.bgGradient} ${item.borderColor} rounded-[2.5rem] border shadow-bento hover:shadow-bentoHover transition-all duration-300 flex flex-col justify-between overflow-hidden group`}
            >
              <div>
                <div className="p-4 pb-0">
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden relative">
                    <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="bg-white border border-slate-200/80 text-[10px] text-slate-500 font-mono px-3 py-0.5 rounded-full">
                        {item.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.com
                      </div>
                      <div className="w-3" />
                    </div>

                    <div className="p-5 min-h-[190px] flex flex-col justify-between text-left relative bg-white">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[11px] font-bold font-serif text-slate-900">{item.title}</span>
                        <div className="flex gap-2 text-[8px] font-semibold text-slate-400">
                          <span>Home</span>
                          <span>About</span>
                          <span>Contact</span>
                        </div>
                      </div>

                      <div className="my-3">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-accent block mb-0.5">
                          Official Homepage
                        </span>
                        <h5 className="text-base font-bold font-serif text-slate-900 leading-tight">
                          {item.heroHeadline}
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-1 leading-snug">
                          {item.heroSub}
                        </p>
                      </div>

                      <div className="pt-2">
                        <span className={`text-[9px] font-extrabold px-3 py-1 rounded-md shadow-sm inline-block ${item.btnBg}`}>
                          {item.btnText}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-serif font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2.5 text-xs font-bold">
                    <span className="text-emerald-accent">{item.metric}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">{item.loadTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModal(item)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300/80 bg-white/90 hover:bg-obsidian hover:text-white text-slate-900 text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
                >
                  <span>Explore Live Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5 text-champagne" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-6 md:p-8 max-w-xl w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-obsidian"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-3">
                {activeModal.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{activeModal.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{activeModal.description}</p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-left space-y-2">
                <p className="text-xs font-bold text-slate-800">Production Specifications:</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>&bull; Built on Next.js 14 App Router &amp; React 18</li>
                  <li>&bull; Custom Figma UI/UX Design Token System</li>
                  <li>&bull; Sub-0.4s Rendering Speed Guarantee</li>
                  <li>&bull; 100/100 Core Web Vitals &amp; JSON-LD Technical SEO</li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-accent">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{activeModal.metric}</span>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-obsidian text-white font-bold text-xs px-6 py-2.5 rounded-full"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
