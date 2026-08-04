"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`w-full px-6 md:px-12 py-4 transition-all duration-300 flex items-center justify-between border-b ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl text-white py-3.5"
            : "bg-transparent border-transparent text-white"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-amber-400 p-[1.5px] shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
          </div>
          <span className="font-serif font-black text-xl tracking-tight text-white">
            AETHERIA<span className="text-purple-500">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold uppercase tracking-widest text-slate-300">
          <a href="#why-us" className="transition-colors hover:text-purple-400">Why Us</a>
          <a href="#portfolio" className="transition-colors hover:text-purple-400">Work</a>
          <a href="#services" className="transition-colors hover:text-purple-400">Services</a>
          <a href="#process" className="transition-colors hover:text-purple-400">Process</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-extrabold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Q3 Booking Open</span>
          </div>

          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 transition-all hover:scale-105 border border-purple-400/30"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-sm"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-3 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl space-y-3 text-center">
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-slate-300 py-2">Why Us</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-slate-300 py-2">Work</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-slate-300 py-2">Services</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenModal(); }} className="w-full py-3 bg-purple-600 text-white font-bold rounded-2xl text-xs">
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
}
