"use client";

import React, { useState } from "react";
import { Palette, Sliders, Layout, Sparkles, Check } from "lucide-react";

export default function DesignConfiguratorSection() {
  const [accent, setAccent] = useState("gold");
  const [radius, setRadius] = useState("rounded-3xl");
  const [font, setFont] = useState("font-serif");

  const accentStyles = {
    gold: { bg: "bg-[#D4AF37]", text: "text-[#B8860B]", border: "border-[#D4AF37]" },
    emerald: { bg: "bg-[#0D9488]", text: "text-[#0D9488]", border: "border-[#0D9488]" },
    purple: { bg: "bg-purple-600", text: "text-purple-600", border: "border-purple-600" },
  };

  const activeAccent = accentStyles[accent as keyof typeof accentStyles];

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-amber-100/60 via-stone-50/40 to-amber-100/70 rounded-[2.5rem] p-8 md:p-12 border border-amber-200/80 shadow-bento">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-white px-4 py-1.5 rounded-full border border-amber-200 shadow-sm inline-flex items-center gap-2 mb-3">
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            Live Custom Token Engine
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Interactive Design System Configurator
          </h3>
          <p className="text-xs text-slate-600 mt-2">
            Test custom theme tokens, typography pairings, and layout geometries in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-5 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-amber-100 shadow-sm">
            
            {/* Accent Color Tokens */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Brand Palette Token
              </label>
              <div className="flex gap-3">
                {[
                  { id: "gold", label: "Champagne Gold" },
                  { id: "emerald", label: "AgriTech Emerald" },
                  { id: "purple", label: "Obsidian Purple" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAccent(item.id)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      accent === item.id ? "border-slate-900 bg-slate-900 text-white shadow-md" : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {item.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Geometry / Radius Tokens */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Geometry & Border Radius
              </label>
              <div className="flex gap-3">
                {[
                  { id: "rounded-lg", label: "Sharp Modern" },
                  { id: "rounded-3xl", label: "Bespoke Bento" },
                  { id: "rounded-full", label: "Pill Geometry" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRadius(item.id)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      radius === item.id ? "border-slate-900 bg-slate-900 text-white shadow-md" : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {item.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Tokens */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Typography Scale
              </label>
              <div className="flex gap-3">
                {[
                  { id: "font-serif", label: "Luxury Playfair Serif" },
                  { id: "font-sans", label: "Clean Inter Sans" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFont(item.id)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      font === item.id ? "border-slate-900 bg-slate-900 text-white shadow-md" : "border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {item.label.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live Preview Canvas */}
          <div className="lg:col-span-7 bg-white p-8 border border-slate-200 shadow-xl rounded-3xl relative min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Live Token Preview Component</span>
              <span className={`text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full text-white ${activeAccent.bg}`}>
                Token Active
              </span>
            </div>

            <div className="my-6">
              <h4 className={`text-2xl md:text-3xl font-bold text-slate-900 mb-2 ${font}`}>
                Bespoke Digital Identity
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                This preview dynamically updates CSS variables and geometry tokens based on your selections above.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <button className={`px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all ${radius} ${activeAccent.bg}`}>
                Custom Primary Action
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
