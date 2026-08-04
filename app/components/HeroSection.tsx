"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Sparkles, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Explicit keys to guarantee valid string evaluation
    const serviceId = "service_osil00r";
    const templateId = "template_jgxh0lt";
    const publicKey = "KiNR_IemkHKZP5aU5";

    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        });
        toast.success("Proposal brief sent! Check your inbox shortly.");
        formRef.current.reset();
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("Failed to send brief. Please check EmailJS setup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-obsidian bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
            Bespoke Web Architecture • Zero CMS
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1]">
            We Craft High-Converting Digital Masterpieces for <span className="text-purple-600">High-Ticket Brands.</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            100% custom React and Next.js applications engineered for sub-second rendering, perfect Core Web Vitals, and flawless brand authority.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100/100 Core Web Vitals
            </span>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              Zero-Plugin Security
            </span>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/60 via-amber-100/40 to-amber-50/80 rounded-[2.5rem] p-6 md:p-8 border border-amber-200/80 shadow-bento">
          <div className="mb-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-900 bg-white px-3 py-1 rounded-full border border-amber-200 inline-block mb-2">
              Start A Project
            </span>
            <h3 className="text-xl font-serif font-bold text-slate-900">Request Proposal</h3>
            <p className="text-xs text-slate-500">Receive a custom technical brief within 24 hours.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              type="text"
              name="from_name"
              placeholder="Your Name *"
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian shadow-sm"
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                required
                type="email"
                name="from_email"
                placeholder="Email *"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian shadow-sm"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian shadow-sm"
              />
            </div>

            <select
              name="project_type"
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian shadow-sm"
            >
              <option value="Custom Next.js Web App">Custom Next.js Web App</option>
              <option value="AgriTech / Multi-Catalog Portal">AgriTech / Multi-Catalog Portal</option>
              <option value="Bespoke Architecture Showcase">Bespoke Architecture Showcase</option>
            </select>

            <textarea
              required
              rows={2}
              name="message"
              placeholder="Scope Brief..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian shadow-sm resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-obsidian hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-champagne" />
              <span>{loading ? "Submitting Brief..." : "Submit Architecture Brief"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
