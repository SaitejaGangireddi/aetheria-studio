"use client";

import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProposalModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    architectureType: "Custom Showcase Build",
    projectBrief: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Failed to send email");
      }
    } catch {
      // Direct Mailto Fallback
      const mailtoUrl = `mailto:saitejagangireddi@designerpal.in?subject=${encodeURIComponent(
        `Project Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nType: ${formData.architectureType}\nBrief:\n${formData.projectBrief}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus("success");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 md:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {status === "success" ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received</h3>
            <p className="text-xs text-slate-300">
              Thank you! Saiteja will review your requirements and reach out shortly.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
              className="px-6 py-2.5 bg-purple-600 text-white font-bold text-xs rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-[10px] font-bold uppercase">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Start a Project</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">
                Project Scope Inquiry
              </h2>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full Name
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Mahadev Suthar"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Architecture Type
              </label>
              <select
                value={formData.architectureType}
                onChange={(e) =>
                  setFormData({ ...formData, architectureType: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              >
                <option value="Custom Showcase Build">Custom Next.js Showcase Platform</option>
                <option value="Enterprise Web App">Enterprise AgriTech / Web App</option>
                <option value="Performance Audit">0.29s LCP Performance & Security Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Brief & Timeline
              </label>
              <textarea
                required
                rows={3}
                value={formData.projectBrief}
                onChange={(e) =>
                  setFormData({ ...formData, projectBrief: e.target.value })
                }
                placeholder="Briefly describe your objectives..."
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:from-purple-500 hover:to-indigo-500 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>{status === "loading" ? "Submitting..." : "Send Proposal Brief"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
