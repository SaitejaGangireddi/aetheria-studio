"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Eye, CheckCircle2, Sparkles, X } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeModal, setActiveModal] = useState<any>(null);

  const projects = [
    {
      id: "katha",
      title: "Katha Studios",
      category: "Architecture & Interior",
      filter: "architecture",
      metric: "+280% High-Ticket Inquiries",
      loadTime: "0.34s Load Speed",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      description: "Custom Next.js architecture built for luxury interior design, featuring high-resolution image galleries and automated consultation scheduling.",
    },
    {
      id: "annapurna",
      title: "Annapurna Farms & Seeds",
      category: "AgriTech & Agriculture",
      filter: "agritech",
      metric: "+195% Wholesale Inquiries",
      loadTime: "0.39s Load Speed",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      description: "Enterprise AgriTech portal engineered for wholesale seed distribution with dynamic catalog filtering and real-time inquiry management.",
    },
    {
      id: "aveorahs",
      title: "Aveorahs Interior Studios",
      category: "Luxury Residential & Commercial",
      filter: "architecture",
      metric: "100/100 Core Web Vitals",
      loadTime: "0.31s Load Speed",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-fast Next.js portfolio showcasing high-end commercial spaces, custom interactive floorplan previews, and sub-second rendering.",
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
          <span>Selected Work</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Client Showcases & Live Demos
        </h3>
      </div>

      {/* Interactive Filter Pills */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {[
          { id: "all", label: "All Masterpieces" },
          { id: "architecture", label: "Interior & Architecture" },
          { id: "agritech", label: "AgriTech & Enterprise" },
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

      {/* Animated Project Grid */}
      <motion.div layout className="grid md:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:border-champagne/60 hover:shadow-cardHover transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-obsidian/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveModal(item)}
                      className="p-3 bg-white text-obsidian rounded-full shadow-lg hover:scale-110 transition-transform"
                      aria-label="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/95 backdrop-blur-md text-champagne-dark text-[11px] px-3 py-1 rounded-full font-bold border border-slate-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold font-serif text-obsidian mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs mb-6">
                    <span className="font-bold text-emerald-accent">{item.metric}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-medium">{item.loadTime}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModal(item)}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-obsidian bg-ivory hover:bg-obsidian hover:text-white text-obsidian text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>Explore Live Architecture</span>
                  <ExternalLink className="w-3.5 h-3.5 text-champagne" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Quick View Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-obsidian"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 rounded-2xl overflow-hidden mb-6 relative">
                <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-champagne-dark">
                {activeModal.category}
              </span>
              <h3 className="text-2xl font-bold font-serif text-obsidian mt-1 mb-3">{activeModal.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{activeModal.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
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
