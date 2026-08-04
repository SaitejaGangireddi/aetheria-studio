"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import FounderSection from "@/app/components/FounderSection";
import Footer from "@/app/components/Footer";
import ProposalModal from "@/app/components/ProposalModal";

export default function FoundersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="relative z-10 pt-24 pb-16">
        <FounderSection />
      </main>

      <Footer />

      <ProposalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
