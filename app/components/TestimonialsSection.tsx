"use client";

import React from "react";
import { Sparkles, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  client: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mahadev Suthar",
    role: "Founder & Creative Director",
    client: "Katha Interiors",
    quote:
      "The portfolio response speed is incredible. Our clients frequently compliment the smooth floorplan lightboxes and luxury visual presentation.",
  },
  {
    name: "Tejaswini Boda",
    role: "Lead Spatial Architect",
    client: "Katha Interiors",
    quote:
      "They translated our Figma designs into pixel-perfect Next.js architecture without sacrificing a single animation detail or mobile layout speed.",
  },
  {
    name: "Anshul Angara",
    role: "Head of Operations",
    client: "Katha Interiors",
    quote:
      "Direct engineer communication with zero agency bloat. Our client brief intake and consultation requests doubled within weeks of launch.",
  },
  {
    name: "Nithya Chandupatla",
    role: "Managing Director",
    client: "Annapurna Seeds & Farms",
    quote:
      "Our multi-region seed catalog handles high-concurrency inventory searches seamlessly. Sub-second response times changed our distributor experience.",
  },
  {
    name: "Veena Reddy",
    role: "Principal Interior Designer",
    client: "Aveorahs Interior Studios",
    quote:
      "The zero-layout-shift portfolio presentation gives our commercial architecture projects the elite digital presence they deserve.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 overflow-hidden relative z-10 border-y border-slate-800/80 bg-slate-950/50 backdrop-blur-md">
      <div className="text-center max-w-2xl mx-auto mb-10 px-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800 text-purple-300 text-[10px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>Client Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex group">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="flex shrink-0 gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-purple-500/40 transition-colors shadow-lg"
            >
              <div className="space-y-3">
                <Quote className="w-5 h-5 text-purple-400/60" />
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-white text-xs">{item.name}</h3>
                  <p className="text-[10px] text-slate-400">{item.role}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-800/80 text-purple-300 text-[9px] font-mono font-semibold">
                  {item.client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
