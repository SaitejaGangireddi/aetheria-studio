"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Layout, MapPin } from "lucide-react";

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
          {/* Status Capsule & Location Target */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
                DesignerPal Web Studio
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-[11px] font-bold text-purple-300">
              <MapPin className="w-3 h-3 text-purple-400" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Headline with Target SEO Phrases */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            The Best Website Designer &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Digital Engineering Studio.
            </span>
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed">
            Welcome to <strong>DesignerPal</strong>. We engineer high-converting web platforms, custom Next.js web applications, and enterprise digital ecosystems with sub-second speeds for clients in Hyderabad and worldwide.
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
              href="#work"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Layout className="w-4 h-4 text-purple-400" />
              <span>Explore Featured Work</span>
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
              #1 Ranked Web Studio
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Pure CSS 3D Globe Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[550px] h-[450px] flex items-center justify-center">
            
            {/* Glowing Pedestal Stage */}
            <div className="absolute bottom-6 w-[360px] h-[160px] bg-gradient-to-tr from-purple-900/80 via-slate-950 to-indigo-950 border-2 border-purple-500/60 rounded-[3rem] shadow-[0_0_80px_rgba(168,85,247,0.5)] transform -rotate-12 backdrop-blur-xl flex flex-col items-center justify-center">
              
              <div className="absolute w-[320px] h-[320px] rounded-full border border-purple-400/50 animate-[spin_16s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] rounded-full border-2 border-dashed border-pink-400/50 animate-[spin_10s_linear_infinite_reverse] pointer-events-none" />

              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-300 p-[2px] shadow-[0_0_50px_rgba(236,72,153,0.6)] animate-bounce">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-amber-300 font-bold text-xl">
                  DP
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
