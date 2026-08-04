"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Sparkles, ShieldCheck, Zap, CheckCircle2, ArrowUpRight, Activity } from "lucide-react";
import { toast } from "sonner";

export default function HeroSection({ onOpenModal }: { onOpenModal?: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
    <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Animated Gradient Mesh / Glowing Orbs */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-28 right-10 w-[400px] h-[400px] bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Column - Hero Headlines & Telemetry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 space-y-7"
        >
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-800">
              Bespoke Architecture • Zero CMS
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60">
              Available Q3 2026
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.08] tracking-tight">
            We Craft High-Converting Digital Masterpieces for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent underline decoration-purple-200/60 decoration-wavy decoration-2">
              High-Ticket Brands.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-sm md:text-base max-w-xl font-normal leading-relaxed">
            100% custom React and Next.js applications engineered for sub-second rendering, zero-plugin security, perfect Core Web Vitals, and undeniable brand authority.
          </p>

          {/* Feature Pill Telemetry */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="px-4 py-2 rounded-2xl bg-white/90 border border-emerald-200/80 shadow-sm flex items-center gap-2 backdrop-blur-sm hover:scale-105 transition-transform">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-950">100/100 Core Web Vitals Standard</span>
            </div>

            <div className="px-4 py-2 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm flex items-center gap-2 backdrop-blur-sm hover:scale-105 transition-transform">
              <ShieldCheck className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold text-slate-800">Zero-Plugin Enterprise Security</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-4 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <span className="text-2xl font-serif font-bold text-slate-900">0.31s</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Average LCP Load</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-purple-700">+280%</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Client Lead Lift</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-emerald-600">99.99%</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">Production Uptime</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Premium Glassmorphic Proposal Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="bg-gradient-to-br from-white/95 via-amber-50/70 to-amber-100/60 backdrop-blur-xl rounded-[2.5rem] p-7 md:p-8 border border-amber-200/80 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

            <div className="mb-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-950 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/60 inline-flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Start A Project
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">Request Proposal</h3>
                <p className="text-xs text-slate-500 mt-0.5">Receive a custom technical brief within 24 hours.</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-obsidian text-white flex items-center justify-center shadow-md">
                <Activity className="w-5 h-5 text-champagne" />
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="e.g. Saiteja Gangireddi"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian focus:ring-2 focus:ring-amber-200 shadow-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    name="from_email"
                    placeholder="name@brand.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian focus:ring-2 focus:ring-amber-200 shadow-sm transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Phone *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian focus:ring-2 focus:ring-amber-200 shadow-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Architecture Type</label>
                <select
                  name="project_type"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian focus:ring-2 focus:ring-amber-200 shadow-sm transition-all"
                >
                  <option value="Custom Next.js Web App">Custom Next.js Web App</option>
                  <option value="AgriTech / Multi-Catalog Portal">AgriTech / Multi-Catalog Portal</option>
                  <option value="Bespoke Architecture Showcase">Bespoke Architecture Showcase</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">Scope Brief</label>
                <textarea
                  required
                  rows={2}
                  name="message"
                  placeholder="Outline your goal or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-obsidian focus:ring-2 focus:ring-amber-200 shadow-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-obsidian hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Zap className="w-4 h-4 text-champagne group-hover:scale-110 transition-transform" />
                <span>{loading ? "Submitting Brief..." : "Submit Architecture Brief"}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
