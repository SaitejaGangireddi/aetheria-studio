"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { X, Send, Sparkles } from "lucide-react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      toast.error("EmailJS keys missing. Please verify .env.local variables.");
      setLoading(false);
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        });
        toast.success("Proposal brief sent successfully! We will get back to you shortly.");
        onClose();
      }
    } catch (err) {
      console.error("EmailJS Submission Error:", err);
      toast.error("Failed to deliver proposal. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md">
      <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-obsidian transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5 mb-2">
            <Sparkles className="w-3 h-3 text-amber-600" />
            Request Proposal
          </span>
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            Submit Your Technical Brief
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Receive a detailed architectural proposal within 24 hours.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1 uppercase">
              Full Name *
            </label>
            <input
              required
              type="text"
              name="from_name"
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500 block mb-1 uppercase">
                Email *
              </label>
              <input
                required
                type="email"
                name="from_email"
                placeholder="alex@brand.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-900"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500 block mb-1 uppercase">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1 uppercase">
              Architecture Type
            </label>
            <select
              name="project_type"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-900"
            >
              <option value="Custom Next.js Web App">Custom Next.js Web App</option>
              <option value="AgriTech / Multi-Catalog Portal">AgriTech / Multi-Catalog Portal</option>
              <option value="Bespoke Architecture Showcase">Bespoke Architecture Showcase</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 block mb-1 uppercase">
              Scope Brief & Timeline
            </label>
            <textarea
              required
              rows={3}
              name="message"
              placeholder="Tell us about your brand goals and requirements..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-slate-900 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-obsidian hover:bg-slate-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>{loading ? "Sending Brief..." : "Submit Proposal Brief"}</span>
            <Send className="w-3.5 h-3.5 text-champagne" />
          </button>
        </form>
      </div>
    </div>
  );
}
