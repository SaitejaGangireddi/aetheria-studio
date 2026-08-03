"use client";

import React from "react";
import { Phone, Mail, ShieldCheck } from "lucide-react";

export default function TopHeader() {
  return (
    <div className="bg-obsidian text-white text-xs py-2 px-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6 text-slate-300 font-mono">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-champagne transition-colors">
            <Phone className="w-3.5 h-3.5 text-champagne" />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:architect@aetheriadigital.com" className="flex items-center gap-1.5 hover:text-champagne transition-colors">
            <Mail className="w-3.5 h-3.5 text-champagne" />
            <span>architect@aetheriadigital.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-emerald-accent font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>99.99% Edge SLA Live</span>
        </div>
      </div>
    </div>
  );
}
