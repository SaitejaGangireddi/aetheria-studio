"use client";

import React, { useState } from "react";
import { X, Sparkles, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ProposalModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fallbackMode, setFallbackMode] = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    project_type: "Custom Showcase Build",
    message: "",
  });

  if (!isOpen) return null;

  const SERVICE_ID = "service_osil00r";
  const TEMPLATE_ID = "template_jgxh0lt";
  const PUBLIC_KEY = "KiNR_lemkHKZP5aU5";

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Brief: ${formData.project_type} - ${formData.from_name}`);
    const body = encodeURIComponent(
      `Full Name: ${formData.from_name}\n` +
      `Email: ${formData.from_email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Architecture Type: ${formData.project_type}\n\n` +
      `Project Brief:\n${formData.message}`
    );
    window.location.href = `mailto:saitejagangireddi@designerpal.in?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      phone: formData.phone || "Not Provided",
      project_type: formData.project_type,
      title: `${formData.project_type} - ${formData.from_name}`,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err: unknown) {
      console.warn("EmailJS API error. Triggering mailto fallback...", err);
      setFallbackMode(true);
      triggerMailtoFallback();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFallbackMode(false);
        onClose();
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-[10px] font-bold uppercase">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>Start a Project</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Project Brief Request</h3>
          <p className="text-xs text-slate-400">
            Fill out your requirements and our lead engineer will respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold text-center animate-pulse space-y-1">
            <div>Brief Request Dispatched Successfully!</div>
            {fallbackMode && (
              <div className="text-[10px] text-emerald-400/80 font-normal">
                (Opened in direct mail client)
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.from_email}
                  onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Architecture Type</label>
              <select
                value={formData.project_type}
                onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Boutique MVP">Boutique MVP (Starter Scope)</option>
                <option value="Custom Showcase Build">Custom Showcase Build (Fixed Quote)</option>
                <option value="Enterprise Platform">Enterprise Platform (Custom Scope)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Project Scope & Brief *</label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your timeline, scope, or design goals..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Dispatching Brief...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Brief</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
