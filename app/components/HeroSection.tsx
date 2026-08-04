"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Layout, Monitor, Globe, Server, Code2 } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeTab, setActiveTab] = useState<"platform" | "architecture" | "speed">("platform");

  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[550px] h-[550px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Accurate High-Ticket Agency Messaging */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-7"
        >
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
              Custom Next.js & React Digital Engineering
            </span>
          </div>

          {/* Corrected Headline: Full Web Platforms & Enterprise Applications */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            We Engineer Next-Gen{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              High-Converting Web Platforms
            </span>{" "}
            & Digital Ecosystems.
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed">
            From complex multi-catalog portals to bespoke enterprise platforms. Engineered with zero-plugin Next.js architecture, sub-second edge speeds, and custom 3D interactions.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 border border-purple-400/30 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Start Project Brief</span>
              <ArrowRight className="w-4 h-4 text-slate-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#services"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Layout className="w-4 h-4 text-purple-400" />
              <span>View Architecture</span>
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
              Zero-CMS Vulnerability
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Futuristic 3D Multi-Layer Web Platform Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          {/* Interactive Feature Switcher Bar */}
          <div className="flex justify-center gap-2 mb-4 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("platform")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "platform"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Web Applications
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "architecture"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Edge System
            </button>
            <button
              onClick={() => setActiveTab("speed")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "speed"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sub-Second SLA
            </button>
          </div>

          {/* Main 3D Canvas Box */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden group">
            
            {/* Fake Chrome Address Bar */}
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between mb-5 backdrop-blur-sm relative z-20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-950 text-[10px] text-purple-300 font-mono px-3.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-purple-400" />
                <span>aetheria-platform.app/enterprise</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                0.31s LCP
              </span>
            </div>

            {/* Interactive 3D Multi-Layer Visual Stage */}
            <div className="relative min-h-[310px] rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950/40 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Layer 1: Simulated Web App Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-md bg-purple-500" />
                  <span className="text-xs font-serif font-bold text-white">Full-Stack Application Layer</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  Next.js App Router
                </span>
              </div>

              {/* Layer 2: 3D Floating Code-to-UI Cards */}
              <div className="relative z-10 my-4 grid grid-cols-2 gap-3">
                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    <span className="text-[9px] font-mono text-slate-400">SSR / Edge</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">Dynamic Catalog Engine</h4>
                  <p className="text-[10px] text-slate-400 mt-1">Multi-tier product filtering & instant search</p>
                </div>

                <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span className="text-[9px] font-mono text-emerald-400">99.99% SLA</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">Zero-Plugin Security</h4>
                  <p className="text-[10px] text-slate-400 mt-1">Enterprise hardened without PHP bloat</p>
                </div>
              </div>

              {/* Layer 3: Live Telemetry Footer Bar */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <Monitor className="w-3.5 h-3.5" /> Multi-Page Ecosystem
                </span>
                <span className="text-emerald-400 font-bold">100/100 Vitals Verified</span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
