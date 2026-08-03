"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, SlidersHorizontal, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function SpeedAuditSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedClient, setSelectedClient] = useState("katha");

  const clients = {
    katha: {
      title: "Katha Studios",
      category: "Interior & Spatial Architecture",
      legacySpeed: "3.82s (Slow Paint)",
      legacyScore: "38 / 100",
      customSpeed: "0.31s (Sub-Second)",
      customScore: "100 / 100",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    },
    annapurna: {
      title: "Annapurna Farms & Seeds",
      category: "AgriTech Wholesale Portal",
      legacySpeed: "4.15s (Laggy Render)",
      legacyScore: "42 / 100",
      customSpeed: "0.38s (Sub-Second)",
      customScore: "100 / 100",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    },
    aveorahs: {
      title: "Aveorahs Interior Studios",
      category: "Commercial Architecture Showcase",
      legacySpeed: "3.45s (Layout Shift)",
      legacyScore: "49 / 100",
      customSpeed: "0.29s (Sub-Second)",
      customScore: "100 / 100",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
  };

  const current = clients[selectedClient as keyof typeof clients];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-indigo-100/70 via-slate-50/50 to-purple-100/70 rounded-[2.5rem] p-8 md:p-12 border border-indigo-200/80 shadow-bento relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-900 bg-white px-4 py-1.5 rounded-full border border-indigo-200 shadow-sm inline-flex items-center gap-2 mb-3">
            <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            Interactive Audit Sandbox
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Interactive Speed & Render Comparison
          </h3>
          <p className="text-xs text-slate-600 mt-2">
            Drag the slider to compare legacy CMS load times against our sub-second Next.js architecture.
          </p>
        </div>

        {/* Client Selector Pills */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {Object.keys(clients).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedClient(key)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedClient === key
                  ? "bg-obsidian text-white shadow-md"
                  : "bg-white/80 text-slate-600 border border-slate-200 hover:border-champagne"
              }`}
            >
              {clients[key as keyof typeof clients].title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl select-none">
          
          {/* AFTER SIDE (Aetheria Custom - Full Crisp Render) */}
          <div className="absolute inset-0 bg-slate-900">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-emerald-200 shadow-lg text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-accent block">
                Aetheria Next.js Build
              </span>
              <span className="text-sm font-black text-slate-900">{current.customSpeed}</span>
              <span className="text-[10px] font-bold text-emerald-accent block flex items-center gap-1 justify-end mt-0.5">
                <CheckCircle2 className="w-3 h-3" /> Score: {current.customScore}
              </span>
            </div>
          </div>

          {/* BEFORE SIDE (Legacy CMS - Blurred/Laggy Overlay) */}
          <div
            className="absolute top-0 left-0 bottom-0 overflow-hidden bg-stone-900"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover filter blur-[6px] grayscale contrast-125 opacity-70"
              style={{ width: "100%", maxWidth: "none" }}
            />
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-rose-200 shadow-lg text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-500 block">
                Legacy CMS Build
              </span>
              <span className="text-sm font-black text-slate-900">{current.legacySpeed}</span>
              <span className="text-[10px] font-bold text-rose-500 block flex items-center gap-1 mt-0.5">
                <ShieldAlert className="w-3 h-3" /> Score: {current.legacyScore}
              </span>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-2xl flex items-center justify-center z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-9 h-9 rounded-full bg-obsidian text-champagne border-2 border-white shadow-xl flex items-center justify-center -ml-4">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Invisible Range Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

      </div>
    </section>
  );
}
