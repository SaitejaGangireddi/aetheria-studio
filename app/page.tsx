"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Sparkles } from "lucide-react";

import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InteractionsSection from "./components/InteractionsSection";
import TemplateGallerySection from "./components/TemplateGallerySection";
import DesignSystemSection from "./components/DesignSystemSection";
import ComparisonSection from "./components/ComparisonSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";
import SupportSection from "./components/SupportSection";
import InsightsSection from "./components/InsightsSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebDesignAgency",
  name: "Aetheria Digital Studio",
  url: "https://aetheriadigital.com",
  logo: "https://aetheriadigital.com/logo.png",
  description:
    "Ultra-luxury web design, custom Next.js engineering, and white-glove managed hosting for high-ticket brands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "TS",
    addressCountry: "IN",
  },
  priceRange: "₹₹₹₹",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <TopHeader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main id="main-content">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <InteractionsSection />
        <TemplateGallerySection />
        <DesignSystemSection />
        <ComparisonSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection onOpenModal={() => setIsModalOpen(true)} />
        <ProcessSection />
        <SupportSection onOpenModal={() => setIsModalOpen(true)} />
        <InsightsSection />
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
