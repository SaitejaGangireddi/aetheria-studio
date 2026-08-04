"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Layout } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Agency Headline & Content */}
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

        {/* RIGHT COLUMN: Exact 3D Globe Scene Asset */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[600px] flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

            {/* Direct Render of the 3D Globe Tech Stage Artwork */}
            <img
              src="/hero-3d-globe.jpg"
              alt="Cyberpunk 3D Globe Edge Architecture Platform"
              className="w-full h-auto object-contain rounded-3xl shadow-[0_0_80px_rgba(168,85,247,0.3)] relative z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
