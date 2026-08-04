"use client";

import React from "react";
import { X, Sparkles, Send } from "lucide-react";

export default function ProposalModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950/50 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Start a Project</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Let’s Build Something Exceptional
          </h3>
          <p className="text-xs text-slate-400">
            Tell us about your target SLAs and custom feature requirements.
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Work Email</label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Project Scope</label>
            <textarea
              rows={3}
              placeholder="Describe your vision, timeline, or required integrations..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            <Send className="w-4 h-4" />
            <span>Submit Brief & Schedule Call</span>
          </button>
        </form>
      </div>
    </div>
  );
}
