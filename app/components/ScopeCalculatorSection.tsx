"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

type ArchTypeId = "landing" | "webapp" | "agritech";

export default function ScopeCalculatorSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [archType, setArchType] = useState<ArchTypeId>("webapp");
  const [addons, setAddons] = useState<string[]>(["seo", "whatsapp"]);

  const archOptions: { id: ArchTypeId; label: string; days: string; price: string }[] = [
    { id: "landing", label: "Single Landing Showcase", days: "10-14 Days", price: "Base" },
    { id: "webapp", label: "Full Next.js Web App", days: "21-30 Days", price: "Pro" },
    { id: "agritech", label: "Enterprise AgriTech Portal", days: "30-45 Days", price: "Enterprise" },
  ];

  const addonOptions = [
    { id: "seo", label: "JSON-LD Technical SEO Schema" },
    { id: "whatsapp", label: "WhatsApp SLA Lead Capture" },
    { id: "tokens", label: "Custom Design Token System" },
    { id: "vitals", label: "Sub-0.4s Core Web Vitals Guarantee" },
  ];

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const selectedArch = archOptions.find((a) => a.id === archType);

  return (
    <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="bg-slate-900/80 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3.5 py-1.5 rounded-full border border-amber-800/80 inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Scope Estimator
          </span>
          <h3 className="text-3xl font-serif font-bold text-white">
            Build Your Project Architecture Scope
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Select your requirements to calculate estimated delivery turnaround.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3">
                1. Select Architecture Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {archOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setArchType(opt.id)}
                    className={`p-3.5 rounded-2xl border text-xs font-bold text-left transition-all ${
                      archType === opt.id
                        ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-600/30"
                        : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <span className="block">{opt.label}</span>
                    <span className="block text-[10px] opacity-70 mt-1">{opt.days}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3">
                2. Select Key Technical Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((add) => {
                  const active = addons.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      onClick={() => toggleAddon(add.id)}
                      className={`p-3.5 rounded-2xl border text-xs font-bold flex items-center justify-between transition-all ${
                        active
                          ? "bg-emerald-950/60 border-emerald-500/60 text-emerald-300"
                          : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-left text-[11px]">{add.label}</span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${active ? "bg-emerald-500 border-emerald-400 text-slate-950" : "border-slate-700"}`}>
                        {active && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Scope Summary Console */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block mb-1">
              Scope Summary
            </span>
            <h4 className="text-xl font-serif font-bold text-white mb-4">
              {selectedArch?.label}
            </h4>

            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Estimated Timeline:</span>
                <span className="text-white font-bold">{selectedArch?.days}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Selected Add-ons:</span>
                <span className="text-emerald-400 font-bold">{addons.length} Selected</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Performance Guarantee:</span>
                <span className="text-purple-400 font-mono font-bold">Sub-0.4s LCP</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-2xl shadow-xl flex items-center justify-center gap-2 border border-purple-400/30 transition-all hover:scale-102"
            >
              <span>Submit Scope Brief</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
