"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Monitor, Smartphone, Tablet, ExternalLink, Activity } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeProject, setActiveProject] = useState<"katha" | "annapurna" | "aveorahs">("katha");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const projectData = {
    katha: {
      client: "Katha Studios",
      category: "Luxury Architecture & Spatial Curation",
      url: "https://katha-studios.vercel.app",
      lcp: "0.29s LCP",
      gradient: "from-purple-600/30 via-indigo-600/20 to-pink-500/30",
      headline: "Elegance Redefined.",
      subtext: "100% Custom Next.js Architecture Showcase with Dynamic Floorplan Lightboxes.",
      badgeColor: "text-purple-400 border-purple-500/40 bg-purple-950/60",
    },
    annapurna: {
      client: "Annapurna Farms & Seeds",
      category: "Enterprise AgriTech & Hybrid Catalog",
      url: "https://annapurna-farms.vercel.app",
      lcp: "0.31s LCP",
      gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-500/30",
      headline: "Nurturing Growth.",
      subtext: "Multi-Region Hybrid Seed Catalog Portal with Real-Time Inventory Telemetry.",
      badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-950/60",
    },
    aveorahs: {
      client: "Aveorahs Interior Studios",
      category: "High-Ticket Commercial & Estate Design",
      url: "https://aveorahs-interiors.vercel.app",
      lcp: "0.34s LCP",
      gradient: "from-amber-600/30 via-orange-600/20 to-yellow-500/30",
      headline: "Bespoke Spaces.",
      subtext: "Ultra-High Resolution Portfolio Engineered for Zero-Shift Image Rendering.",
      badgeColor: "text-amber-400 border-amber-500/40 bg-amber-950/60",
    },
  };

  const current = projectData[activeProject];

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Agency Headline & Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-7"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
              Bespoke Web Architecture • Zero CMS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            We Engineer Next-Gen{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Sub-Second Digital
            </span>{" "}
            Masterpieces.
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed">
            100% custom React and Next.js applications engineered for high-ticket brands. Sub-second response times, zero-plugin security, and undeniable market authority.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="px-7 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 border border-purple-400/30 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Request Proposal Brief</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Activity className="w-4 h-4 text-purple-400" />
              <span>Explore Deploys</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100/100 Core Web Vitals
            </span>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Zero-Plugin Security
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Live Interactive Production Canvas Visualizer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          {/* Project Switcher Bar */}
          <div className="flex justify-center gap-2 mb-4 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md max-w-md mx-auto">
            <button
              onClick={() => setActiveProject("katha")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeProject === "katha"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Katha Studios
            </button>
            <button
              onClick={() => setActiveProject("annapurna")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeProject === "annapurna"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annapurna Farms
            </button>
            <button
              onClick={() => setActiveProject("aveorahs")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeProject === "aveorahs"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Aveorahs Interiors
            </button>
          </div>

          {/* Interactive Browser Stage Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden group">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 bg-gradient-to-tr ${current.gradient} animate-pulse pointer-events-none`}/>

            {/* Fake Chrome Address Bar + Viewport Toggles */}
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between mb-5 backdrop-blur-sm relative z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Viewport Scale Toggles */}
              <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`p-1 rounded ${deviceView === "desktop" ? "bg-purple-600 text-white" : "text-slate-500 hover:text-slate-300"}`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView("tablet")}
                  className={`p-1 rounded ${deviceView === "tablet" ? "bg-purple-600 text-white" : "text-slate-500 hover:text-slate-300"}`}
                  title="Tablet View"
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`p-1 rounded ${deviceView === "mobile" ? "bg-purple-600 text-white" : "text-slate-500 hover:text-slate-300"}`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                {current.lcp}
              </span>
            </div>

            {/* Live Interactive UI Showcase Card */}
            <div className="relative min-h-[300px] rounded-2xl border border-slate-800 bg-slate-900/70 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all">
              
              {/* Header Info */}
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${current.badgeColor}`}>
                    {current.client}
                  </span>
                  <span className="block text-[11px] text-slate-400 mt-2 font-medium">
                    {current.category}
                  </span>
                </div>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white text-[10px] font-bold flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>Launch Live</span>
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </a>
              </div>

              {/* Central Web Application Visual Mockup */}
              <div className="relative z-10 my-6 bg-slate-950/90 border border-slate-800/80 rounded-xl p-5 shadow-2xl">
                <h4 className="text-2xl font-serif font-bold text-white mb-1">
                  {current.headline}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.subtext}
                </p>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                <span>Next.js App Router</span>
                <span className="text-emerald-400 font-bold">100/100 Core Web Vitals SLA</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
