"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Play, Pause } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Clean High-Converting Pitch */}
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
              Bespoke Web Design Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            Get high-converting{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              landing pages
            </span>{" "}
            built in 2 weeks.
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed">
            Custom Next.js & React web development for ambitious startups and high-ticket brands. Sub-second speed, 3D interactive canvases, and zero CMS bloat.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-xs rounded-2xl shadow-2xl flex items-center gap-2.5 transition-all hover:scale-105 border border-sky-400/30 group"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
              <span>Start Subscription</span>
              <ArrowRight className="w-4 h-4 text-slate-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <span>Explore Work</span>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Sub-Second Load SLA
            </span>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-900/80 text-slate-300 border border-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              100% Bespoke Code
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3D Chrome Sphere Visual Stage (Matching Video Design) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-b from-sky-500/30 via-purple-500/20 to-slate-900 shadow-2xl overflow-hidden group">
            
            {/* Visual Canvas Container */}
            <div className="relative h-[440px] rounded-[2.3rem] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/80 overflow-hidden flex items-center justify-center">
              
              {/* Dynamic Metallic Glow Ring */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-sky-400/30 bg-sky-500/10 blur-2xl animate-pulse pointer-events-none" />

              {/* 3D Track Ramp Visual Element */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-[420px] h-[180px] border-2 border-sky-400/40 rounded-full transform -rotate-12 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-transparent blur-[1px]" />
              </div>

              {/* Floating Metallic Chrome Orb with Mirror Sheen */}
              <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-tr from-slate-300 via-slate-100 to-sky-200 shadow-[0_0_60px_rgba(56,189,248,0.4)] border-2 border-white/60 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                {/* Internal Chrome Mirror Reflections */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-transparent via-slate-900/40 to-slate-950/80 backdrop-blur-sm" />
                <div className="relative z-20 w-16 h-16 rounded-2xl bg-slate-950/90 border border-sky-400/50 shadow-2xl flex items-center justify-center text-sky-300 animate-bounce">
                  <Sparkles className="w-8 h-8 text-sky-300" />
                </div>
              </div>

              {/* Video Style Interactive Play/Pause Timeline Pill */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 border border-slate-800/80 p-3 rounded-2xl backdrop-blur-md flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-xl bg-sky-500 text-slate-950 flex items-center justify-center font-bold shrink-0 hover:bg-sky-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-slate-950" /> : <Play className="w-4 h-4 fill-slate-950" />}
                </button>

                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className={`bg-gradient-to-r from-sky-400 to-purple-500 h-full transition-all duration-1000 ${isPlaying ? "w-3/4" : "w-1/2"}`} />
                </div>

                <span className="text-[10px] font-mono text-slate-400 shrink-0">
                  3D Render Active
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
