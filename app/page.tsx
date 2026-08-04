"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyUsSection from "@/app/components/WhyUsSection";
import WorkSection from "@/app/components/WorkSection";
import FounderSection from "@/app/components/FounderSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProcessSection from "@/app/components/ProcessSection";
import ComparisonSection from "@/app/components/ComparisonSection";
import DesignSystemSection from "@/app/components/DesignSystemSection";
import InsightsSection from "@/app/components/InsightsSection";
import PricingSection from "@/app/components/PricingSection";
import Footer from "@/app/components/Footer";
import ProposalModal from "@/app/components/ProposalModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="relative z-10 space-y-12 pt-24 pb-16">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <WhyUsSection />
        <WorkSection />
        <FounderSection />
        <ComparisonSection />
        <DesignSystemSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection onOpenModal={() => setIsModalOpen(true)} />
        <InsightsSection />
      </main>

      <Footer />

      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
