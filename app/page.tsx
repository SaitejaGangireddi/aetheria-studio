"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Sparkles } from "lucide-react";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar";
import FloatingSocialDock from "./components/FloatingSocialDock";
import HeroSection from "./components/HeroSection";
import SpeedAuditSection from "./components/SpeedAuditSection";
import PerformanceGaugesSection from "./components/PerformanceGaugesSection";
import DesignConfiguratorSection from "./components/DesignConfiguratorSection";
import ScopeCalculatorSection from "./components/ScopeCalculatorSection";
import ComparisonSection from "./components/ComparisonSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
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
    <div className="bg-ivory text-obsidian min-h-screen selection:bg-champagne/20 font-sans antialiased overflow-x-hidden">
      <Toaster position="bottom-left" theme="dark" />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <FloatingSocialDock />

      <main id="main-content">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <SpeedAuditSection />
        <PerformanceGaugesSection />
        <DesignConfiguratorSection />
        <ScopeCalculatorSection onOpenModal={() => setIsModalOpen(true)} />
        <ComparisonSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-obsidian hover:bg-slate-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-champagne/40 transition-all hover:scale-105"
        aria-label="Get Instant Quote"
      >
        <Sparkles className="w-4 h-4 text-champagne" />
        <span>Get Instant Quote</span>
      </button>
    </div>
  );
}
