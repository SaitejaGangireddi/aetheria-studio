"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Layout, Zap, Lock } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[170px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[600px] h-[600px] bg-indigo-600/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Agency Headline */}
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

          {/* Headline */}
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
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2.5 transition-all hover:scale-105 border border-purple-400/30 group"
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

        {/* RIGHT COLUMN: Pure CSS Cyberpunk 3D Globe Scene */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[550px] h-[480px] flex items-center justify-center">
            
            {/* Base Glowing Pedestal */}
            <div className="absolute bottom-6 w-[360px] h-[160px] bg-gradient-to-tr from-purple-900/80 via-slate-950 to-indigo-950 border-2 border-purple-500/60 rounded-[3rem] shadow-[0_0_80px_rgba(168,85,247,0.5)] transform -rotate-12 backdrop-blur-xl flex flex-col items-center justify-center">
              
              {/* Rotating Orbit Rings */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-purple-400/50 animate-[spin_16s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] rounded-full border-2 border-dashed border-pink-400/50 animate-[spin_10s_linear_infinite_reverse] pointer-events-none" />

              {/* Glowing Globe Sphere */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-300 p-[2px] shadow-[0_0_50px_rgba(236,72,153,0.6)] animate-bounce">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-amber-300">
                  <Sparkles className="w-12 h-12 text-amber-300" />
                </div>
              </div>

            </div>

            {/* FLOATING BADGE 1: Edge Deployed */}
            <div className="absolute top-8 right-2 z-20 bg-slate-950/90 border border-purple-500/50 px-4 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl flex items-center gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-purple-300">
                <Zap className="w-4 h-4 text-purple-300" />
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-slate-400">Edge Deployed</span>
                <span className="block text-xs font-mono font-bold text-emerald-400">99.99% SLA Uptime</span>
              </div>
            </div>

            {/* FLOATING BADGE 2: Next.js App Router */}
            <div className="absolute top-16 left-0 z-20 bg-slate-950/90 border border-indigo-500/40 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-400/50 flex items-center justify-center font-mono text-xs text-indigo-300 font-bold">
                ⚡
              </div>
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-slate-400">Framework</span>
                <span className="block text-xs font-bold text-white">Next.js App Router</span>
              </div>
            </div>

            {/* FLOATING BADGE 3: Security */}
            <div className="absolute bottom-4 right-2 z-20 bg-slate-950/90 border border-pink-500/40 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-pink-400" />
              <div>
                <span className="block text-[10px] font-extrabold uppercase text-slate-400">Security</span>
                <span className="block text-xs font-bold text-white">Zero-Plugin Protected</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
