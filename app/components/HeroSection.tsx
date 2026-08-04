"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Globe, Lock, Cpu } from "lucide-react";
import { LOGO_URL } from "../constants/brand";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-950/20 blur-[130px] rounded-full" />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Action CTAs */}
        <div className="lg:col-span-7 space-y-8 z-10">
          
          {/* Location & Studio Badges */}
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

          {/* Headline */}
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

          {/* Trust Metrics Footer */}
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

        {/* Right Column: Original Interactive Graphic & Orbital Rings */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
          
          {/* Outer Rotating Concentric Rings */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '24s' }} />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-indigo-500/25 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
          
          {/* Floating Pill Badge 1 - Top Left: Architecture */}
          <div className="absolute -top-2 left-0 sm:-left-4 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-800/80 flex items-center justify-center text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">ARCHITECTURE</div>
              <div className="text-xs font-bold text-white">Next.js App Router</div>
            </div>
          </div>

          {/* Floating Pill Badge 2 - Top Right: Edge Deployed */}
          <div className="absolute top-12 right-0 sm:-right-4 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/80 flex items-center justify-center text-purple-400">
              <Zap className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">EDGE DEPLOYED</div>
              <div className="text-xs font-mono font-bold text-emerald-400">0.29s LCP Performance</div>
            </div>
          </div>

          {/* Central Glowing Brand Orb */}
          <div className="relative z-10 w-44 h-44 rounded-3xl bg-slate-950/90 border border-purple-500/40 p-5 backdrop-blur-2xl flex flex-col items-center justify-center space-y-2 shadow-[0_0_50px_rgba(168,85,247,0.25)] transform hover:scale-105 transition-transform duration-500">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="DesignerPal Brand Icon"
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="font-serif font-extrabold text-lg text-white tracking-tight">
              Designer<span className="text-purple-400">Pal</span>
            </span>
          </div>

          {/* Floating Pill Badge 3 - Bottom Right: Security */}
          <div className="absolute -bottom-2 right-2 sm:right-6 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-purple-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">SECURITY</div>
              <div className="text-xs font-bold text-white">Zero-Plugin Protected</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
