"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ContactModal from "./components/ContactModal";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white relative overflow-hidden">
      {/* Navigation */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="space-y-12">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <WhyChooseUsSection onOpenModal={() => setIsModalOpen(true)} />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Expandable Quick Action FAB */}
      <FloatingActions onOpenModal={() => setIsModalOpen(true)} />

      {/* Proposal Request Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
