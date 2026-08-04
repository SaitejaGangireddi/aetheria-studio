"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Sparkles } from "lucide-react";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import FloatingSocialDock from "./components/FloatingSocialDock";
import HeroSection from "./components/HeroSection";
import PerformanceGaugesSection from "./components/PerformanceGaugesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ScopeCalculatorSection from "./components/ScopeCalculatorSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import SpeedAuditSection from "./components/SpeedAuditSection";
import ComparisonSection from "./components/ComparisonSection";
import ProcessSection from "./components/ProcessSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-purple-500/30 font-sans antialiased overflow-x-hidden relative">
      {/* Background Ambient Mesh Gradients */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Toaster position="bottom-left" theme="dark" />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <FloatingSocialDock />

      <main id="main-content" className="space-y-6">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <PerformanceGaugesSection />
        <WhyChooseUsSection onOpenModal={() => setIsModalOpen(true)} />
        <ScopeCalculatorSection onOpenModal={() => setIsModalOpen(true)} />
        <ServicesSection />
        <PortfolioSection />
        <SpeedAuditSection />
        <ComparisonSection />
        <ProcessSection />
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-purple-400/30 transition-all hover:scale-105"
        aria-label="Get Instant Quote"
      >
        <Sparkles className="w-4 h-4 text-amber-300" />
        <span>Get Instant Quote</span>
      </button>
    </div>
  );
}
