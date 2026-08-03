"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Send, MousePointer } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Next.js Web App",
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
    <section className="pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Hero Bento Box */}
        <div className="lg:col-span-7 bg-gradient-to-br from-indigo-100/70 via-purple-50/50 to-indigo-100/80 rounded-[2.5rem] p-8 md:p-12 border border-indigo-200/60 shadow-bento flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-900 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-200 shadow-sm inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
              Bespoke Web Architecture • Zero CMS
            </span>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-[1.15] mb-6">
              We Craft High-Converting Digital Masterpieces for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-slate-900">
                High-Ticket Brands.
              </span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-lg mb-8">
              100% custom React and Next.js applications engineered for sub-second rendering, perfect Core Web Vitals, and flawless brand authority.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 pt-6 border-t border-indigo-200/60">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-slate-700 border border-indigo-100 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-accent" />
              <span>100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-slate-700 border border-indigo-100 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-accent" />
              <span>Zero-Plugin Security</span>
            </div>
          </div>
        </div>

        {/* Right Form Bento Box */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-100/70 via-rose-50/50 to-amber-100/80 rounded-[2.5rem] p-8 md:p-10 border border-amber-200/60 shadow-bento flex flex-col justify-between relative overflow-hidden">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-200 shadow-sm inline-block mb-4">
              Start a Project
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">
              Request Proposal
            </h3>
            <p className="text-xs text-slate-600 mb-6">Receive a custom technical brief within 24 hours.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input
                  required
                  type="text"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/90 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/90 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/90 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                  />
                </div>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white/90 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                >
                  <option>Custom Next.js Web App</option>
                  <option>UI/UX Architecture (Figma)</option>
                  <option>White-Glove Managed Hosting</option>
                </select>
                <textarea
                  rows={2}
                  placeholder="Scope Brief..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/90 border border-amber-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-obsidian hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5 text-champagne" />
                  <span>Submit Architecture Brief</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-accent mx-auto" />
                <h4 className="text-lg font-bold font-serif text-slate-900">Brief Received</h4>
                <p className="text-xs text-slate-600">Our architect will contact you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
