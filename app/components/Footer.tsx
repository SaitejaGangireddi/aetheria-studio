"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6 md:px-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-white text-[10px]">
              DP
            </div>
          </div>
          <span className="font-serif font-bold text-base text-white">
            Designer<span className="text-purple-400">Pal</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-slate-500">
          © {new Date().getFullYear()} DesignerPal Studio. All rights reserved. High-Performance Digital Solutions.
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
