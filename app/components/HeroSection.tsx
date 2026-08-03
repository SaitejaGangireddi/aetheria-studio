"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Send, ArrowUpRight, Monitor, Smartphone, Layers } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Next.js Engineering",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          service_type: formData.service,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Submission failed. Please check EmailJS setup keys.");
        }
      );
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Staggered Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-left flex flex-col items-start"
        >
          {/* Animated Pill Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-champagne/40 shadow-sm text-champagne-dark text-xs md:text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 fill-champagne-dark animate-spin" style={{ animationDuration: '6s' }} />
            <span>Pure Code • Zero CMS • Sub-Second Speed</span>
          </motion.div>

          {/* Kinetic Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-obsidian leading-[1.12] mb-6 tracking-tight">
            Bespoke Digital Architecture for{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-champagne-dark via-amber-600 to-obsidian">
              High-Ticket Brands.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-1 left-0 h-[3px] bg-gradient-to-r from-champagne to-emerald-accent rounded-full"
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            We write 100% custom React and Next.js applications engineered for maximum conversion, perfect 100/100 Core Web Vitals, and zero security vulnerabilities.
          </p>

          {/* Interactive Live Viewport Sandbox Control */}
          <div className="w-full bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-luxury mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-champagne-dark" />
                Live Architecture Preview
              </span>
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setDevice("desktop")}
                  className={`px-3 py-1 text-[11px] font-bold rounded-md flex items-center gap-1 transition-all ${
                    device === "desktop" ? "bg-white text-obsidian shadow-sm" : "text-slate-500"
                  }`}
                >
                  <Monitor className="w-3 h-3" /> Desktop
                </button>
                <button
                  onClick={() => setDevice("mobile")}
                  className={`px-3 py-1 text-[11px] font-bold rounded-md flex items-center gap-1 transition-all ${
                    device === "mobile" ? "bg-white text-obsidian shadow-sm" : "text-slate-500"
                  }`}
                >
                  <Smartphone className="w-3 h-3" /> Mobile View
                </button>
              </div>
            </div>

            {/* Simulated Live Frame */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 h-48 transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={device}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={
                      device === "desktop"
                        ? "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                        : "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                    }
                    alt="Katha Studios Preview"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent p-4 flex flex-col justify-end text-left">
                    <span className="text-[10px] uppercase font-bold text-champagne tracking-widest">
                      Katha Studios Architecture
                    </span>
                    <h4 className="text-sm font-bold text-white">Next.js App Router • 0.31s Speed</h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-4 w-full text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-accent" />
              <span>100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-accent" />
              <span>Zero-Plugin Security</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200">
              <Zap className="w-4 h-4 text-emerald-accent" />
              <span>Sub-0.4s Rendering</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Ticket Lead Form with Floating Glass Physics */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full"
        >
          {/* Floating Pill Graphic */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 z-20 bg-white/95 backdrop-blur-md border border-champagne/40 rounded-2xl px-4 py-2.5 shadow-luxury flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-accent animate-ping" />
            <span className="text-xs font-bold text-obsidian">Taking New Client Projects</span>
          </motion.div>

          <div className="bg-gradient-to-br from-white/95 via-amber-50/40 to-white/95 backdrop-blur-xl border border-champagne/40 rounded-3xl p-6 md:p-8 shadow-cardHover relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-serif text-obsidian">
                Start a Custom Project
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Receive a tailored technical architecture proposal within 24 hours.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    required
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  />
                </motion.div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  />
                </div>
                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  >
                    <option>Custom Next.js Web App</option>
                    <option>UI/UX Architecture (Figma)</option>
                    <option>White-Glove Managed Hosting</option>
                    <option>Technical SEO Schema Hardening</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Project Scope Notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/90 border border-slate-200/90 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-obsidian hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  {loading ? (
                    <span>Processing Architecture Brief...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-champagne" />
                      <span>Request Technical Proposal</span>
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-accent mx-auto" />
                <h4 className="text-xl font-bold font-serif text-obsidian">Proposal Request Received</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you, {formData.name}. Our principal architect will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Infinite Client Logo Marquee Strip */}
      <div className="mt-20 pt-8 border-t border-slate-200/80 w-full overflow-hidden">
        <p className="text-[11px] uppercase tracking-widest text-slate-400 mb-6 font-bold text-center">
          Active Client Work & Production Deployments
        </p>
        <div className="flex whitespace-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex animate-marquee gap-16 text-slate-700 text-sm font-serif font-extrabold uppercase items-center">
            <span>KATHA STUDIOS</span>
            <span>•</span>
            <span>ANNAPURNA FARMS & SEEDS</span>
            <span>•</span>
            <span>AVEORAHS INTERIOR STUDIOS</span>
            <span>•</span>
            <span>KATHA STUDIOS</span>
            <span>•</span>
            <span>ANNAPURNA FARMS & SEEDS</span>
            <span>•</span>
            <span>AVEORAHS INTERIOR STUDIOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
