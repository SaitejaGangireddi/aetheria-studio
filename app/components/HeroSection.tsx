"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
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
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 text-left flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/60 border border-champagne/30 text-champagne-dark text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 fill-champagne-dark" />
            <span>Pure Code • Zero CMS • Sub-Second Speed</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-obsidian leading-[1.15] mb-6">
            Bespoke Web Architecture for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-dark via-amber-600 to-obsidian">
              High-Ticket Brands.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
            We write 100% custom React and Next.js applications engineered for maximum conversion, perfect 100/100 Lighthouse performance, and zero security vulnerabilities.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-accent" />
              <span>100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-accent" />
              <span>Zero-Plugin Security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-emerald-accent" />
              <span>Sub-0.4s Rendering</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Embedded Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative w-full"
        >
          <div className="bg-gradient-to-br from-white via-amber-50/30 to-white border border-champagne/40 rounded-3xl p-6 md:p-8 shadow-luxury relative overflow-hidden">
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-serif text-obsidian">
                Start a Custom Project
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Get a technical architecture proposal within 24 hours.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                  />
                </div>
                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
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
                    placeholder="Project Brief / Scope Details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-obsidian hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-champagne" />
                      <span>Request Technical Proposal</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-accent mx-auto" />
                <h4 className="text-xl font-bold font-serif text-obsidian">Proposal Request Sent</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you, {formData.name}. Our principal architect will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-200/80 w-full">
        <p className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold text-center">
          Active Production Deployments
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 text-slate-700 text-sm font-serif font-bold">
          <span>KATHA STUDIOS</span>
          <span>ANNAPURNA FARMS & SEEDS</span>
          <span>AVEORAHS INTERIOR STUDIOS</span>
        </div>
      </div>
    </section>
  );
}
