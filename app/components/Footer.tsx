"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-black tracking-wider text-obsidian font-serif">
            AETHERIA<span className="text-champagne">.</span>
          </span>
          <p className="text-xs text-slate-500 mt-1">
            Bespoke Web Design, Custom Next.js Engineering & Managed Hosting.
          </p>
        </div>
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Aetheria Digital Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
