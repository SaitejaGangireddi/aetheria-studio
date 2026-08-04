"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, Mail, X, Sparkles, Share2 } from "lucide-react";

export default function FloatingActions({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      label: "WhatsApp Quick Chat",
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
      href: "https://wa.me/",
      color: "hover:border-emerald-500/50 hover:bg-emerald-950/40",
    },
    {
      label: "Direct Line Call",
      icon: <Phone className="w-4 h-4 text-sky-400" />,
      href: "tel:+910000000000",
      color: "hover:border-sky-500/50 hover:bg-sky-950/40",
    },
    {
      label: "Social Channels",
      icon: <Share2 className="w-4 h-4 text-pink-400" />,
      href: "https://instagram.com",
      color: "hover:border-pink-500/50 hover:bg-pink-950/40",
    },
    {
      label: "Send Project Brief",
      icon: <Mail className="w-4 h-4 text-purple-400" />,
      action: onOpenModal,
      color: "hover:border-purple-500/50 hover:bg-purple-950/40",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Actions Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 bg-slate-950/95 border border-slate-800 p-3 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300 min-w-[200px]">
          <div className="px-2 py-1 border-b border-slate-800 mb-1">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Instant Contact Options
            </span>
          </div>

          {actions.map((act, i) => (
            <React.Fragment key={i}>
              {act.href ? (
                <a
                  href={act.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 border border-slate-800/80 transition-all ${act.color}`}
                >
                  {act.icon}
                  <span>{act.label}</span>
                </a>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    act.action?.();
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 border border-slate-800/80 transition-all w-full text-left ${act.color}`}
                >
                  {act.icon}
                  <span>{act.label}</span>
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Main Glassmorphic Trigger FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-xs shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-400/40 flex items-center gap-2.5 transition-all hover:scale-105 group"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4 text-purple-200" />
            <span>Close Menu</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>Get Instant Proposal</span>
          </>
        )}
      </button>
    </div>
  );
}
