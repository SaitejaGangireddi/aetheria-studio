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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-6 py-3 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-2xl text-white"
            : "bg-white/80 backdrop-blur-md border-slate-200/80 shadow-sm text-slate-900"
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 p-[1.5px] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
          </div>
          <span className="font-serif font-black text-lg tracking-tight">
            AETHERIA<span className="text-amber-500">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <a
            href="#why-us"
            className={`transition-colors hover:text-purple-500 ${scrolled ? "text-slate-300" : "text-slate-600"}`}
          >
            Why Us
          </a>
          <a
            href="#portfolio"
            className={`transition-colors hover:text-purple-500 ${scrolled ? "text-slate-300" : "text-slate-600"}`}
          >
            Work
          </a>
          <a
            href="#services"
            className={`transition-colors hover:text-purple-500 ${scrolled ? "text-slate-300" : "text-slate-600"}`}
          >
            Services
          </a>
          <a
            href="#process"
            className={`transition-colors hover:text-purple-500 ${scrolled ? "text-slate-300" : "text-slate-600"}`}
          >
            Process
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-extrabold text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Q3 Booking Open</span>
          </div>

          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 transition-all hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-slate-100 text-slate-800"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto bg-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-2xl space-y-4 text-center">
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-white"
          >
            Why Us
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-white"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-300 hover:text-white"
          >
            Services
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl text-xs"
          >
            Start a Project
          </button>
        </div>
      )}
    </header>
  );
}
