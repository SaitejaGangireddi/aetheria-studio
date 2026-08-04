"use client";

import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingSocialDock() {
  const links = [
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]/10" />,
      href: "https://wa.me/",
    },
    {
      name: "Call Us",
      icon: <Phone className="w-5 h-5 text-[#2563EB]" />,
      href: "tel:",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "https://instagram.com/",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5 text-[#EF4444]" />,
      href: "mailto:",
    },
  ];

  return (
    <div className="fixed right-6 bottom-8 z-50 flex flex-col gap-3 items-center">
      {links.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          className="w-14 h-14 bg-white rounded-full shadow-2xl border border-slate-200/80 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
        >
          {item.icon}
          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}
