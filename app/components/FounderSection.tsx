"use client";

import React from "react";
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  Terminal, 
  ArrowUpRight, 
  Zap,
  Globe,
  Database,
  Building2
} from "lucide-react";

export default function FounderSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section id="founder" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative z-10 space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Engineering Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Meet the Architect Behind DesignerPal
        </h2>
        <p className="text-slate-400 text-sm">
          Bridging enterprise Java & Spring Boot architecture with high-converting, sub-second edge experiences.
        </p>
      </div>

      {/* Founder Interactive Showcase Card */}
      <div className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Avatar & Socials */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative group/avatar">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-amber-400 opacity-70 blur-md animate-spin" style={{ animationDuration: '12s' }} />
              
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-slate-950 p-2 border border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dmkjnuolr/image/upload/v1785855698/ChatGPT_Image_Aug_4_2026_08_30_13_PM_obda5y.png"
                  alt="Saiteja Gangireddi"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 transform group-hover/avatar:scale-105"
                />
                
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/90 border border-emerald-500/50 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Inline Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 transition-all hover:-translate-y-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 transition-all hover:-translate-y-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 transition-all hover:-translate-y-0.5">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Profile Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Saiteja Gangireddi
                </h3>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800 text-xs font-mono font-bold">
                  Founder & Lead Architect
                </span>
              </div>
              <p className="text-xs font-mono text-purple-400 mt-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Based in Hyderabad, Telangana, India</span>
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Enterprise Software Engineer with 4+ years of technical leadership specializing in high-concurrency Java Spring Boot infrastructure and zero-plugin React / Next.js web application architecture.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Solo Architecture</div>
                  <div className="text-[10px] text-slate-400">End-to-End System Design</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Sub-Second LCP</div>
                  <div className="text-[10px] text-slate-400">Zero-Plugin Optimization</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-[0_0_25px_rgba(168,85,247,0.3)] flex items-center gap-2 transition-all hover:scale-105 border border-purple-400/30"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Work Directly With the Founder</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
