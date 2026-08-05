"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, Mail, Phone, Sparkles } from "lucide-react";
import { LOGO_URL } from "../constants/brand";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-16 px-6 md:px-12 relative z-10 text-slate-400 text-xs">
      
      {/* Quick Action Contact Bar */}
      <div className="max-w-7xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
        <div className="space-y-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
            <span>Direct Client Channels</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Have a project in mind? Let’s talk.
          </h3>
          <p className="text-xs text-slate-400">Reach out directly via your preferred platform for instant inquiry response.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/917989919631"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:saitejagangireddi@designerpal.in"
            className="px-4 py-2.5 rounded-xl bg-purple-950/80 hover:bg-purple-900/80 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Email Us</span>
          </a>

          <a
            href="tel:+917989919631"
            className="px-4 py-2.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-300 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-4 h-4 text-indigo-400" />
            <span>Call Now</span>
          </a>

          <a
            href="https://instagram.com/designerpalstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-pink-950/80 hover:bg-pink-900/80 border border-pink-500/40 text-pink-300 font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative flex items-center justify-center shrink-0">
            <Image
              src={LOGO_URL}
              alt="DesignerPal Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="font-serif font-bold text-base text-white">
            Designer<span className="text-purple-400">Pal</span>
          </span>
        </div>

        <p className="text-slate-500 text-center">
          © {new Date().getFullYear()} DesignerPal Studio. All rights reserved. High-Performance Digital Engineering.
        </p>

        <div className="flex gap-6 font-semibold text-slate-400 text-xs">
          <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="/founders" className="hover:text-purple-400 transition-colors">Founder</a>
        </div>
      </div>
    </footer>
  );
}
