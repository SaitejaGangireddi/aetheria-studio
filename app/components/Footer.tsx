"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12 px-6 md:px-12 relative overflow-hidden mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Left */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </div>
            <span className="font-serif font-black text-xl text-white tracking-tight">
              AETHERIA<span className="text-purple-500">.</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Bespoke Web Design, Custom Next.js Engineering & Managed Edge Hosting.
          </p>
        </div>

        {/* Quick Links Center */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
          <a href="#why-us" className="hover:text-purple-400 transition-colors">Why Us</a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="#process" className="hover:text-purple-400 transition-colors">Process</a>
        </div>

        {/* Copyright & Live Status Right */}
        <div className="text-center md:text-right space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Edge Infrastructure Active</span>
          </div>
          <p className="text-[11px] text-slate-400">
            © 2026 Aetheria Digital Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
