"use client";

import React, { useState } from "react";
import { Sparkles, Check } from "lucide-react";

export default function DesignConfiguratorSection() {
  const [selectedStyle, setSelectedStyle] = useState("Minimalist Dark");

  const styles = ["Minimalist Dark", "Glassmorphic Ambient", "Enterprise Clean"];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-10 relative z-10">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Interactive Preview</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">Design Aesthetic Configurator</h2>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {styles.map((style, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStyle(style)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 ${
                selectedStyle === style
                  ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {selectedStyle === style && <Check className="w-3.5 h-3.5 text-amber-300" />}
              <span>{style}</span>
            </button>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 text-center space-y-2">
          <div className="text-xs font-mono text-purple-400">ACTIVE PREVIEW STATE</div>
          <div className="text-xl font-bold text-white">{selectedStyle} Architecture</div>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Configured for maximum visual impact, zero layout shifts, and instant client conversion.
          </p>
        </div>
      </div>
    </section>
  );
}
