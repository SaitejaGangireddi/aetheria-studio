"use client";

import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function ScopeCalculatorSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [projectType, setProjectType] = useState("app");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["seo", "whatsapp"]);

  const projectTypes = [
    { id: "landing", label: "Single Landing Showcase", time: "10-14 Days" },
    { id: "app", label: "Full Next.js Web App", time: "21-30 Days" },
    { id: "portal", label: "Enterprise AgriTech / Multi-Catalog", time: "30-45 Days" },
  ];

  const addons = [
    { id: "seo", label: "JSON-LD Technical SEO Schema" },
    { id: "whatsapp", label: "WhatsApp SLA Lead Capture" },
    { id: "design", label: "Custom Design Token System" },
    { id: "speed", label: "Sub-0.4s Core Web Vitals Guarantee" },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    toast.success("Scope saved! Complete your contact brief.");
    onOpenModal();
  };

  const currentType = projectTypes.find((p) => p.id === projectType);

  return (
    <section id="calculator" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50/80 via-white to-amber-100/60 rounded-[2.5rem] p-8 md:p-12 border border-amber-200/80 shadow-bento">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-white px-4 py-1.5 rounded-full border border-amber-200 shadow-sm inline-flex items-center gap-2 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Interactive Scope Estimator
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Build Your Project Architecture Scope
          </h3>
          <p className="text-xs text-slate-600 mt-2">
            Select your project requirements to calculate estimated delivery turnaround.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                1. Select Architecture Type
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                      projectType === type.id
                        ? "border-obsidian bg-obsidian text-white shadow-md"
                        : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
                    }`}
                  >
                    <span>{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                2. Select Key Technical Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {addons.map((addon) => {
                  const active = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        active
                          ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <span>{addon.label}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${active ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-300"}`}>
                        {active && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Summary Box */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                Scope Summary
              </span>
              <h4 className="text-xl font-bold font-serif text-slate-900 mb-4">
                {currentType?.label}
              </h4>
              <div className="space-y-3 border-t border-b border-slate-100 py-4 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Estimated Timeline:</span>
                  <span className="font-bold text-slate-900">{currentType?.time}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Selected Add-ons:</span>
                  <span className="font-bold text-slate-900">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Performance Guarantee:</span>
                  <span className="font-bold text-emerald-600">Sub-0.4s LCP</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="w-full py-3.5 bg-obsidian hover:bg-slate-800 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Submit Scope Brief</span>
              <ArrowRight className="w-4 h-4 text-champagne" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
