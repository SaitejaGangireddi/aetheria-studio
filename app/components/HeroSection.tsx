"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Lock } from "lucide-react";
import { LOGO_URL } from "../constants/brand";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-16 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-pink-500/20 blur-[130px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-amber-500/20 via-purple-700/20 to-indigo-800/30 blur-[140px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold tracking-tight text-white leading-[1.1]">
            High-Converting Web Applications &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 animate-pulse" style={{ animationDuration: '6s' }}>
              Digital Engineering.
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            We build custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences designed to grow your business for global scale.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center gap-2.5 transition-all hover:scale-105 border border-purple-400/40"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Start Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#work"
              className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-all flex items-center gap-2 hover:border-purple-500/40"
            >
              <span>See Featured Work</span>
            </a>
          </div>

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

        {/* Right Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
          <div className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '22s' }} />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-pink-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Floating Pill Badge 1 */}
          <div className="absolute -top-2 left-0 sm:-left-4 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{ animationDuration: '6s' }}>
            <div className="w-8 h-8 rounded-xl bg-indigo-950 border border-indigo-800/80 flex items-center justify-center text-indigo-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">ARCHITECTURE</div>
              <div className="text-xs font-bold text-white">Next.js App Router</div>
            </div>
          </div>

          {/* Floating Pill Badge 2 */}
          <div className="absolute top-12 right-0 sm:-right-4 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-indigo-500/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{ animationDuration: '7s', animationDelay: '1s' }}>
            <div className="w-8 h-8 rounded-xl bg-purple-950 border border-purple-800/80 flex items-center justify-center text-purple-400">
              <Zap className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">EDGE DEPLOYED</div>
              <div className="text-xs font-mono font-bold text-emerald-400">0.29s LCP Performance</div>
            </div>
          </div>

          {/* Center Brand Orb */}
          <div className="relative z-10 w-48 h-48 rounded-3xl bg-slate-950/90 border border-purple-500/50 p-6 backdrop-blur-2xl flex flex-col items-center justify-center space-y-2 shadow-[0_0_60px_rgba(168,85,247,0.35)] transform hover:scale-105 transition-transform duration-500">
            <div className="w-14 h-14 relative flex items-center justify-center">
              <Image
                src={LOGO_URL}
                alt="DesignerPal Brand Icon"
                width={56}
                height={56}
                priority
                className="w-14 h-14 object-contain drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
              />
            </div>
            <span className="font-serif font-extrabold text-xl text-white tracking-tight">
              Designer<span className="text-purple-400">Pal</span>
            </span>
          </div>

          {/* Floating Pill Badge 3 */}
          <div className="absolute -bottom-2 right-2 sm:right-6 z-20 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce" style={{ animationDuration: '8s', animationDelay: '2s' }}>
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
