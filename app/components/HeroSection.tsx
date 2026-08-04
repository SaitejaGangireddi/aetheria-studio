"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Globe } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Soft & Clean Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-950/30 blur-[120px] rounded-full" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Location & Brand Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DESIGNERPAL STUDIO
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/80 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              Hyderabad, India
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.1]">
            High-Converting Web Applications &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300">
              Digital Engineering.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            We build custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences designed to grow your business—engineered locally in Hyderabad for global scale.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.3)] flex items-center gap-2.5 transition-all hover:scale-105 border border-purple-400/30"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Start Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#work"
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-all flex items-center gap-2"
            >
              <span>See Featured Work</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>0.29s LCP SLA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Zero-Plugin Core</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Code2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Next.js App Router</span>
            </div>
          </div>

        </div>

        {/* Right Interactive Card Preview */}
        <div className="lg:col-span-5 relative">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl relative space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/80 flex items-center justify-center text-purple-300 font-bold">
              <Code2 className="w-6 h-6 text-purple-400" />
            </div>

            <div>
              <div className="text-xs font-mono text-purple-400">ARCHITECTURE</div>
              <h3 className="text-xl font-bold text-white mt-1">High-Performance Core</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Clean TypeScript implementation with zero layout shifts and optimized edge distribution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Target Core Vitals</span>
              <span className="text-emerald-400 font-bold">100 / 100</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
