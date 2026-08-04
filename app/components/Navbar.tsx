"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";
import { LOGO_URL } from "../constants/brand";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Custom Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Image
              src={LOGO_URL} 
              alt="DesignerPal Logo"
              width={36}
              height={36}
              className="object-contain w-auto h-auto max-h-9 transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
            Designer<span className="text-purple-400">Pal</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-2 transition-all hover:scale-105 border border-purple-400/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 border-t border-slate-800/80 mt-4 flex flex-col gap-4 text-sm font-semibold text-slate-200">
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Start a Project</span>
          </button>
        </div>
      )}
    </header>
  );
}
