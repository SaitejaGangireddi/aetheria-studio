"use client";

import React, { useState } from "react";
import { X, Sparkles, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// --- SECONDARY EMAILJS CREDENTIALS ---
const SERVICE_ID = "service_hvyq506";
const TEMPLATE_ID = "template_jgxh0lt";
const PUBLIC_KEY = "KiNR_lemkHKZP5aU5";

export default function ProposalModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const templateParams = {
      from_name: name,
      from_email: email,
      message: scope,
      to_name: "DesignerPal Studio",
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitted(true);
      } else {
        throw new Error(`EmailJS responded with status ${response.status}`);
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      const text = err?.text || err?.message || "Failed to dispatch email brief";
      setErrorMsg(`Dispatch Error: ${text}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setScope("");
    setErrorMsg("");
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-slate-950/50 border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Brief Dispatched!
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-purple-300">{name}</span>. Your brief has been sent directly to our inbox. We will review your scope and reply to <span className="font-semibold text-purple-300">{email}</span> within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
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

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Project Scope</label>
                <textarea
                  rows={3}
                  required
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  placeholder="Describe your vision, timeline, or required integrations..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                    <span>Dispatching Brief...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Brief & Schedule Call</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
