"use client";

import React, { useState } from "react";
import { Sparkles, Palette, Sliders, Layout, Layers } from "lucide-react";

export default function DesignSystemSection() {
  const [activeTheme, setActiveTheme] = useState("champagne");

  const themes = {
    champagne: { name: "Champagne Luxury", primary: "bg-[#D4AF37]", border: "border-[#D4AF37]" },
    emerald: { name: "Emerald AgriTech", primary: "bg-[#0D9488]", border: "border-[#0D9488]" },
    obsidian: { name: "Obsidian Architecture", primary: "bg-[#0F172A]", border: "border-[#0F172A]" },
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs font-bold uppercase tracking-widest mb-4">
          <Palette className="w-3.5 h-3.5 text-champagne-dark" />
          <span>Bespoke Design Token Engine</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold font-serif text-obsidian tracking-tight">
          Tailored Visual Systems for Every Brand
        </h3>
        <p className="text-slate-600 mt-4 text-base">
          From custom typography hierarchies to hand-crafted CSS theme tokens—we design unique digital identities with zero pre-built templates.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-white via-amber-50/20 to-white rounded-3xl border border-champagne/30 p-8 shadow-luxury">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Interactive Brand Palette Selector
            </span>
            <div className="flex gap-3">
              {Object.keys(themes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTheme(key)}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                    activeTheme === key
                      ? "border-obsidian bg-obsidian text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {themes[key as keyof typeof themes].name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200/80">
              <span className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-champagne-dark" />
                Dynamic Layout Grids
              </span>
              <span className="text-emerald-accent font-bold">Fluid CSS Grid</span>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-slate-200/80">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-champagne-dark" />
                Typography Scale
              </span>
              <span className="text-emerald-accent font-bold">Playfair & Inter Variable</span>
            </div>
          </div>
        </div>

        {/* Live Canvas Preview Column */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-inner relative overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <span className="text-[11px] font-mono text-slate-400">Design System Token Active</span>
          </div>

          <div className="my-6 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-obsidian">
              Active Brand Identity
            </div>
            <h4 className="text-2xl md:text-3xl font-bold font-serif text-obsidian">
              Custom Architectural Interface
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              Clean React components powered by Next.js 14 App Router and Framer Motion micro-interactions.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div className={`w-8 h-8 rounded-full ${themes[activeTheme as keyof typeof themes].primary}`} />
            <div className="text-xs">
              <p className="font-bold text-obsidian">{themes[activeTheme as keyof typeof themes].name}</p>
              <p className="text-[10px] text-slate-400">Custom CSS Variable Token</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
