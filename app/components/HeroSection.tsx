"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Box, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeTab, setActiveTab] = useState<"ecommerce" | "agritech" | "architecture">("ecommerce");

  const tabPreviews = {
    ecommerce: {
      title: "Sub-Second E-Commerce Engine",
      subtitle: "3D Interactive Product Stages & Instant Checkout",
      tag: "Conversion Focused",
      gradient: "from-purple-600 via-indigo-600 to-pink-500",
      accentBg: "bg-purple-500/10",
      accentBorder: "border-purple-500/30",
    },
    agritech: {
      title: "Multi-Catalog AgriTech Portal",
      subtitle: "Real-time Seed Telemetry & Hybrid Ordering",
      tag: "Enterprise Scale",
      gradient: "from-emerald-500 via-teal-600 to-cyan-500",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/30",
    },
    architecture: {
      title: "Bespoke Architectural Showcase",
      subtitle: "Ultra-High Resolution Portfolio & Lightbox Engine",
      tag: "High-Ticket Luxury",
      gradient: "from-amber-500 via-orange-600 to-yellow-500",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/30",
    },
  };

  const current = tabPreviews[activeTab];

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Dynamic Background Glowing Mesh */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-36 right-10 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: High Impact Value Prop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-7"
        >
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-200">
              Bespoke Web Architecture • Zero CMS
            </span>
          </div>

          {/* Main Headline - Fixed Text Contrast (Pure White + Radiant Gradient) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight">
            We Engineer Next-Gen{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              3D & High-Converting
            </span>{" "}
            Digital Masterpieces.
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-lg leading-relaxed font-normal">
            100% custom React and Next.js applications engineered with sub-second response times, 3D interactive canvases, and zero-plugin security.
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
              href="#portfolio"
              className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-2xl border border-slate-800 shadow-md transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Box className="w-4 h-4 text-purple-400" />
              <span>Explore Live 3D Canvas</span>
            </a>
          </div>

          {/* Feature Badges */}
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

        {/* RIGHT COLUMN: Interactive 3D Canvas Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-6 relative"
        >
          {/* Mode Switcher Tabs */}
          <div className="flex justify-center gap-2 mb-4 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("ecommerce")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "ecommerce"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              3D E-Commerce
            </button>
            <button
              onClick={() => setActiveTab("agritech")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "agritech"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              AgriTech Portal
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all ${
                activeTab === "architecture"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Architecture Showcase
            </button>
          </div>

          {/* 3D Glassmorphic Canvas Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-[2.5rem] p-6 shadow-2xl relative overflow-hidden group">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-40 bg-gradient-to-tr ${current.gradient} animate-pulse pointer-events-none`}/>

            {/* Fake Chrome Top Bar */}
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-2xl flex items-center justify-between mb-6 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-950 text-[10px] text-slate-300 font-mono px-3 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5">
                <span>aetheria-edge://3d-stage.live</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                0.31s LCP
              </span>
            </div>

            {/* Stage Body */}
            <div className="relative min-h-[280px] rounded-2xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-44 h-44 rounded-full bg-gradient-to-tr ${current.gradient} opacity-20 blur-xl animate-spin-slow`}/>
                <div className="w-32 h-32 rounded-3xl border-2 border-white/10 bg-white/5 backdrop-blur-md transform rotate-12 flex items-center justify-center shadow-2xl">
                  <Box className="w-12 h-12 text-white/80 animate-bounce" />
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border text-white ${current.accentBg} ${current.accentBorder}`}>
                  {current.tag}
                </span>
                <span className="text-xs font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                  Core Web Vitals: 100/100
                </span>
              </div>

              <div className="relative z-10 pt-16">
                <h4 className="text-xl font-serif font-bold text-white mb-1">
                  {current.title}
                </h4>
                <p className="text-xs text-slate-300 max-w-xs">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Live Telemetry Pill */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                3D
              </div>
              <div>
                <span className="block text-[10px] font-extrabold text-white uppercase tracking-wider">WebGPU Enabled</span>
                <span className="block text-[9px] text-slate-300">60 FPS Smooth Rendering</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
