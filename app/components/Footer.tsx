"use client";

import React from "react";
import { LOGO_URL } from "../constants/brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6 md:px-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Custom Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <img
              src={LOGO_URL} 
              alt="DesignerPal Logo"
              className="w-7 h-7 object-contain"
            />
          </div>
          <span className="font-serif font-bold text-base text-white">
            Designer<span className="text-purple-400">Pal</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500">
          © {new Date().getFullYear()} DesignerPal Studio. All rights reserved. High-Performance Digital Engineering.
        </p>

        {/* Footer Links */}
        <div className="flex gap-6 font-medium text-slate-400">
          <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </div>
      </div>
    </footer>
  );
}
