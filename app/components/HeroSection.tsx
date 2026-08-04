"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Activity, Zap, Layers } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[550px] h-[550px] bg-purple-600/25 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Agency Headline & Core Pitch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-7"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
              Bespoke Web Architecture • Zero CMS
            </span>
          </div>

          {/* High-Contrast Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            We Engineer Next-Gen{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              3D & High-Converting
            </span>{" "}
            Digital Masterpieces.
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
              href="#why-us"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Explore Architecture</span>
            </a>
          </div>

          {/* Badges */}
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

        {/* RIGHT COLUMN: Solid 3D Moving Mesh & Interactive Telemetry Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          {/* Main 3D Stage Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden group">
            
            {/* Fake Chrome Top Bar */}
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between mb-6 backdrop-blur-sm relative z-20">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-950 text-[10px] text-purple-300 font-mono px-3.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-purple-400" />
                <span>aetheria-engine://3d-webgpu-render.active</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                0.29s LCP
              </span>
            </div>

            {/* Solid 3D Animated Viewport Stage */}
            <div className="relative h-[340px] rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              
              {/* Rotating 3D Mesh Geometry & Orbiting Particle Field */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Glowing Ring */}
                <div className="w-64 h-64 rounded-full border border-purple-500/20 bg-purple-600/10 blur-xl animate-pulse" />
                
                {/* Orbiting Ring 1 */}
                <div className="absolute w-52 h-52 rounded-full border-2 border-dashed border-purple-500/40 animate-[spin_12s_linear_infinite]" />
                
                {/* Orbiting Ring 2 */}
                <div className="absolute w-40 h-40 rounded-full border-2 border-amber-400/30 animate-[spin_8s_linear_infinite_reverse]" />

                {/* Central 3D Floating Glass Core */}
                <div className="w-28 h-28 rounded-3xl border-2 border-purple-400/40 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-pink-500/30 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-purple-500/30 transform rotate-45 animate-bounce">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/80 border border-purple-400/50 flex items-center justify-center text-amber-300 shadow-lg">
                    <Activity className="w-7 h-7 text-amber-300 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Top Telemetry Widget */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/40 bg-purple-950/80 text-purple-300 shadow-md">
                  WebGPU 60 FPS Render
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-slate-950/90 px-2.5 py-1 rounded-md border border-slate-800">
                  Vitals: 100/100 Verified
                </span>
              </div>

              {/* Floating Bottom Telemetry Widget */}
              <div className="relative z-10 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-serif font-bold text-white">Next.js Edge Architecture</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Zero-runtime React hydration, sub-second LCP, and edge server-side streaming.
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
