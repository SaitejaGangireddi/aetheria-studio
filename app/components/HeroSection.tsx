"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Agency Headline & Pitch */}
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

          {/* Headline */}
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

        {/* RIGHT COLUMN: Pure Futuristic 3D Visual/Video Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[2.5rem] p-1 bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-slate-900 shadow-2xl overflow-hidden group">
            
            {/* Visual Canvas Container */}
            <div className="relative h-[420px] rounded-[2.3rem] bg-slate-950 overflow-hidden flex items-center justify-center">
              
              {/* Autoplay Futuristic 3D Video Loop (with smooth fallback animation) */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-1000"
                poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-data-42838-large.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Glowing Ambient Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-purple-900/20 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)] pointer-events-none" />

              {/* Futuristic Glass Orbital Accent Element */}
              <div className="relative z-10 w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-2xl shadow-purple-500/20 animate-[spin_20s_linear_infinite]">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-purple-400/50 animate-[spin_10s_linear_infinite_reverse]" />
                <div className="absolute w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-300 p-[1.5px] shadow-xl animate-bounce">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-amber-300" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
