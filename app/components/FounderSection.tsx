"use client";

import React from "react";
import { Sparkles, Shield, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FounderSection() {
  const NEW_IMAGE_URL = "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785860263/WhatsApp_Image_2026-08-04_at_9.47.20_PM_jxei16.jpg"\;

  return (
    <section id="founder" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Leadership & Vision</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Executive Leadership
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Driving engineering excellence and bespoke digital craftsmanship for global enterprises.
        </p>
      </div>

      {/* Formal Founder Card */}
      <div className="relative bg-slate-900/80 border border-slate-800/90 rounded-3xl p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Portrait & Official Profiles */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-6">
            <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl bg-slate-950 p-2 border border-slate-800/90 shadow-2xl overflow-hidden group">
              <img
                src={NEW_IMAGE_URL}
                alt="Saiteja Gangireddi"
                className="w-full h-full object-cover rounded-xl grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Official Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current text-purple-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/50 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current text-purple-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Corporate Bio & Commitments */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Saiteja Gangireddi
                </h3>
                <span className="px-3 py-1 rounded-md bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-mono font-semibold">
                  Founder
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-1">
                DesignerPal Studio • High-Performance Web Engineering
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              DesignerPal Studio was established to bridge the gap between high-end digital design and enterprise software reliability. We partner with forward-thinking organizations to deliver tailored web platforms engineered for speed, conversion, and long-term scalability.
            </p>

            <p className="text-slate-400 text-xs leading-relaxed">
              Every engagement is executed under strict quality assurance frameworks—combining modern Next.js edge architecture with zero-plugin security protocols to guarantee uninterrupted reliability for our global partners.
            </p>

            {/* Structured Corporate Standards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Institutional Quality</div>
                  <div className="text-[11px] text-slate-400">Strict SLAs & zero security debt.</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Full Lifecycle Delivery</div>
                  <div className="text-[11px] text-slate-400">From initial wireframe to live edge deployment.</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
