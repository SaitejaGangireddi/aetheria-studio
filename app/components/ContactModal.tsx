"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { X, CheckCircle2, ChevronRight, Send } from "lucide-react";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    timeline: "Immediate",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          business_name: formData.businessName,
          reply_to: formData.email,
          project_timeline: formData.timeline,
          message: formData.notes,
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
          console.error("EmailJS Submission Error:", error);
          alert("Submission failed. Please check EmailJS setup keys.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-obsidian"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold font-serif text-obsidian">
                  Start a Project
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Step {step} of 2 - Let's build your custom web architecture.
                </p>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-ivory border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business / Brand Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className="w-full bg-ivory border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-100 text-obsidian focus:outline-none focus:border-champagne"
                      placeholder="e.g. Sharma Capital"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-ivory border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                      placeholder="rahul@sharmacapital.in"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-obsidian text-white font-semibold py-3 rounded-xl text-sm mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4 text-champagne" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full bg-ivory border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                    >
                      <option>Immediate (Within 30 Days)</option>
                      <option>1-2 Months</option>
                      <option>Flexible / Planning Phase</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Scope Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-ivory border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-obsidian focus:outline-none focus:border-champagne"
                      placeholder="Briefly describe your objectives..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl text-sm"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-2/3 bg-emerald-accent hover:bg-emerald-hover text-white font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Proposal</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-accent mx-auto" />
              <h3 className="text-2xl font-bold font-serif text-obsidian">
                Proposal Received
              </h3>
              <p className="text-slate-600 text-sm max-w-xs mx-auto">
                Thank you, {formData.name}. Our principal architect will review
                your project scope and respond within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-obsidian text-white font-semibold px-6 py-2.5 rounded-full text-sm mt-4"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
