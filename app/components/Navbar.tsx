"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider text-obsidian font-serif">
            AETHERIA<span className="text-champagne">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-champagne transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-champagne transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-champagne transition-colors">
            Process
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="border border-obsidian text-obsidian hover:bg-obsidian hover:text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
          >
            Start a Project
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-obsidian focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-4 text-center shadow-lg"
        >
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-700">
            Services
          </a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-700">
            Work
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="py-2 text-slate-700">
            Process
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="bg-obsidian text-white font-semibold py-3 rounded-full mt-2"
          >
            Start a Project
          </button>
        </motion.div>
      )}
    </header>
  );
}
