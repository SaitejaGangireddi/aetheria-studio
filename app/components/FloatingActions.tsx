"use client";

import React from "react";

export default function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-1/2 translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917989919631"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-white text-emerald-600 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-emerald-500 hover:text-white transition-all duration-300 border border-slate-200"
        aria-label="WhatsApp"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          WHATSAPP
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="tel:+917075863940"
        className="group relative w-12 h-12 rounded-full bg-white text-indigo-600 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-indigo-600 hover:text-white transition-all duration-300 border border-slate-200"
        aria-label="Call Us"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          CALL US
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      {/* Instagram Floating Button */}
      <a
        href="https://instagram.com/designerpalstudios"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-white text-pink-600 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-pink-600 hover:text-white transition-all duration-300 border border-slate-200"
        aria-label="Instagram"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          INSTAGRAM
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* Gmail / Email Floating Button */}
      <a
        href="mailto:saitejagangireddi@designerpal.in"
        className="group relative w-12 h-12 rounded-full bg-white text-rose-600 shadow-xl flex items-center justify-center hover:scale-110 hover:bg-rose-600 hover:text-white transition-all duration-300 border border-slate-200"
        aria-label="Email Us"
      >
        <span className="absolute right-14 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          EMAIL US
        </span>
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </a>
    </div>
  );
}
