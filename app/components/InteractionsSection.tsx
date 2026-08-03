"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, MousePointer, Layers, Smartphone } from "lucide-react";

export default function InteractionsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
          <span>Interactive Visual Magic</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Next-Level Web Interactions & Motion Physics
        </h3>
        <p className="text-slate-600 mt-4 text-base">
          Engage high-ticket clients with liquid-smooth animations, dynamic mouse-tracking visual effects, and zero-lag CSS transitions.
        </p>
      </div>

      {/* Grid Layout inspired by screenshot 1 */}
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left Large Card: Mouse Physics Interaction */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          className="lg:col-span-7 bg-gradient-to-br from-purple-100 via-indigo-50 to-purple-200/60 rounded-[2.5rem] p-8 md:p-12 border border-purple-200/80 shadow-luxury relative overflow-hidden flex flex-col justify-between min-h-[420px] group"
        >
          <div className="relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-900 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-200 shadow-sm inline-block mb-4">
              Mouse Movement Physics
            </span>
            <h4 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
              Dynamic Visual Interactions
            </h4>
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              Craft responsive floating UI elements that react dynamically to user cursor movement with zero layout latency.
            </p>
          </div>

          {/* Interactive Floating Object */}
          <motion.div
            animate={{ x: mousePos.x * 0.15, y: mousePos.y * 0.15 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="absolute right-12 top-1/2 -translate-y-1/2 w-44 h-44 rounded-3xl bg-gradient-to-tr from-purple-500 to-indigo-600 shadow-2xl flex items-center justify-center text-white font-serif font-black text-2xl rotate-12 border-4 border-white/40 pointer-events-none"
          >
            <div className="text-center">
              <MousePointer className="w-8 h-8 mx-auto mb-1 animate-bounce" />
              <span className="text-xs font-sans uppercase font-bold tracking-widest">Interactive</span>
            </div>
          </motion.div>

          <div className="relative z-10 pt-6">
            <button className="bg-slate-900 text-white font-bold text-xs px-6 py-3 rounded-full flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md">
              <span>Explore Interactions</span>
              <ArrowRight className="w-4 h-4 text-champagne" />
            </button>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Card 2: Vibrant Gradients */}
          <div className="bg-gradient-to-br from-amber-100 via-rose-100 to-amber-200/80 rounded-[2.5rem] p-8 border border-amber-200/80 shadow-luxury relative overflow-hidden flex-1 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-200 shadow-sm inline-block mb-3">
                Fluid Mesh Gradients
              </span>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Ambient Mood & Lighting
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Custom CSS mesh gradient backgrounds designed to accentuate brand luxury.
              </p>
            </div>
            
            {/* Glowing Accent Balls */}
            <div className="flex justify-end gap-3 mt-4">
              <div className="w-10 h-10 rounded-full bg-white/80 border-2 border-amber-300 shadow-md animate-pulse" />
              <div className="w-10 h-10 rounded-full bg-rose-400/80 border-2 border-white shadow-md" />
            </div>
          </div>

          {/* Card 3: Smooth Scroll Physics */}
          <div className="bg-gradient-to-br from-teal-100 via-emerald-50 to-teal-200/80 rounded-[2.5rem] p-8 border border-teal-200/80 shadow-luxury relative overflow-hidden flex-1 flex flex-col justify-between group">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-900 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-teal-200 shadow-sm inline-block mb-3">
                Inertial Scroll Engines
              </span>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                Lenis Smooth Momentum
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                60 FPS inertial smooth scrolling for immersive storytelling.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs font-bold text-teal-800">
              <Zap className="w-4 h-4 fill-teal-600 text-teal-600" />
              <span>Sub-Second Frame Rates</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
