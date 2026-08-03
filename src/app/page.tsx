"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import emailjs from "@emailjs/browser";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Globe,
  Layout,
  Server,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
  Menu,
  Star,
  ChevronRight,
  Send,
  Sliders,
  DollarSign,
  Users,
} from "lucide-react";

// ==========================================
// 1. JSON-LD STRUCTURED DATA
// ==========================================
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
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://twitter.com/aetheriadigital",
    "https://linkedin.com/company/aetheriadigital",
  ],
  priceRange: "$$$$",
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
    <div className="bg-obsidian text-slate-100 min-h-screen selection:bg-champagne selection:text-obsidian font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main id="main-content">
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <RoiCalculator />
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
        className="fixed bottom-6 right-6 z-40 bg-emerald-accent hover:bg-emerald-hover text-obsidian font-bold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 border border-emerald-accent/50 focus:outline-none"
        aria-label="Get Instant Quote"
      >
        <Sparkles className="w-4 h-4 fill-obsidian" />
        <span>Get Instant Quote</span>
      </button>
    </div>
  );
}

function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-md border-b border-champagne/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl font-black tracking-wider text-slate-100 font-serif">
            AETHERIA<span className="text-champagne">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-platinum">
          <a href="#services" className="hover:text-champagne transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-champagne transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-champagne transition-colors">
            Process
          </a>
          <a href="#calculator" className="hover:text-champagne transition-colors">
            ROI Calculator
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenModal}
            className="border border-champagne text-champagne hover:bg-champagne hover:text-obsidian px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-champagne/20"
          >
            Start a Project
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-100 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-charcoal border-b border-champagne/10 px-6 py-6 flex flex-col gap-4 text-center"
        >
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-platinum hover:text-champagne py-2"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-platinum hover:text-champagne py-2"
          >
            Work
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-platinum hover:text-champagne py-2"
          >
            Process
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="bg-champagne text-obsidian font-bold py-3 rounded-full mt-2"
          >
            Start a Project
          </button>
        </motion.div>
      )}
    </header>
  );
}

function HeroSection({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal border border-champagne/30 text-champagne text-xs md:text-sm font-medium mb-8"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Peak Web Architecture & Engineering</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-slate-100 max-w-5xl leading-tight tracking-tight mb-8"
      >
        We Craft High-Converting Digital Masterpieces for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne via-champagne-light to-champagne-dark">
          High-Ticket Brands.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-platinum max-w-3xl mb-10 leading-relaxed font-light"
      >
        Bespoke web architecture, lightning-fast Next.js engineering, and
        hands-free white-glove hosting built to dominate search rankings and
        maximize revenue.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <a
          href="#work"
          className="w-full sm:w-auto bg-champagne hover:bg-champagne-light text-obsidian font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-champagne/10 flex items-center justify-center gap-2"
        >
          <span>Explore Our Work</span>
          <ChevronRight className="w-4 h-4" />
        </a>
        <button
          onClick={onOpenModal}
          className="w-full sm:w-auto bg-charcoal hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-8 py-4 rounded-full transition-all duration-300"
        >
          Book Strategy Call
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 pt-10 border-t border-slate-800/80 w-full"
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-semibold">
          Trusted by Global Enterprises & Ultra-Luxury Studios
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-slate-400 text-sm font-serif">
          <span>AURA REAL ESTATE</span>
          <span>VALENTINE & CO.</span>
          <span>LUMEN HEALTHCARE</span>
          <span>APEX ARCHITECTS</span>
        </div>
      </motion.div>
    </section>
  );
}

function RoiCalculator() {
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(10000);
  const [avgTicket, setAvgTicket] = useState<number>(2500);
  const [currentConversion, setCurrentConversion] = useState<number>(1.0);

  const projectedConversion = currentConversion * 2.2;
  const currentMonthlyRevenue =
    monthlyTraffic * (currentConversion / 100) * avgTicket;
  const projectedMonthlyRevenue =
    monthlyTraffic * (projectedConversion / 100) * avgTicket;
  const monthlyGain = projectedMonthlyRevenue - currentMonthlyRevenue;

  return (
    <section id="calculator" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-charcoal border border-champagne/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-3">
            Interactive Growth Engine
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-100">
            Client Revenue Growth Estimator
          </h3>
          <p className="text-platinum mt-3 text-sm md:text-base">
            See the financial impact of upgrading from standard page builders to
            our high-speed Next.js web application architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Monthly Visitors</span>
                <span className="text-champagne font-bold">
                  {monthlyTraffic.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full h-2 bg-obsidian rounded-lg appearance-none cursor-pointer accent-champagne"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Average Deal / Ticket Size</span>
                <span className="text-champagne font-bold">
                  ${avgTicket.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-2 bg-obsidian rounded-lg appearance-none cursor-pointer accent-champagne"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <span className="text-slate-300">Current Conversion Rate</span>
                <span className="text-champagne font-bold">
                  {currentConversion.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full h-2 bg-obsidian rounded-lg appearance-none cursor-pointer accent-champagne"
              />
            </div>
          </div>

          <div className="bg-obsidian border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-center relative">
            <span className="text-xs uppercase tracking-wider text-emerald-accent font-semibold mb-2 flex items-center justify-center gap-1">
              <TrendingUp className="w-4 h-4" /> Projected Conversion Uplift
            </span>
            <div className="my-4">
              <p className="text-xs text-slate-400">Estimated Additional Monthly Revenue</p>
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-accent to-emerald-hover mt-1">
                +${Math.round(monthlyGain).toLocaleString()}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p>
                Projected New Rate:{" "}
                <span className="text-slate-200 font-bold">
                  {projectedConversion.toFixed(1)}%
                </span>
              </p>
              <p>
                Estimated Annual Impact:{" "}
                <span className="text-champagne font-bold">
                  +${Math.round(monthlyGain * 12).toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const points = [
    {
      metric: "Lighthouse Performance Score",
      custom: "100 / 100 Guaranteed",
      legacy: "35 - 55 / 100 Average",
    },
    {
      metric: "Security & Vulnerabilities",
      custom: "Zero Plugin Attack Surfaces",
      legacy: "High Risk (Frequent Plugin Exploits)",
    },
    {
      metric: "Design & UX Architecture",
      custom: "100% Bespoke & Brand-Tailored",
      legacy: "Generic Pre-built Templates",
    },
    {
      metric: "SEO & Google Core Web Vitals",
      custom: "Sub-Second Load Times (Rank Boost)",
      legacy: "Slow Rendering & Layout Shifts",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-3">
          The Engineering Advantage
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-100">
          Why Custom Next.js Outperforms Legacy CMS
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="py-4 px-6 text-slate-400 font-medium text-sm">Feature Comparison</th>
              <th className="py-4 px-6 text-champagne font-bold text-lg bg-charcoal/50 rounded-t-xl">
                Aetheria Next.js Custom
              </th>
              <th className="py-4 px-6 text-slate-400 font-medium text-sm">
                Traditional WordPress / Wix
              </th>
            </tr>
          </thead>
          <tbody>
            {points.map((item, idx) => (
              <tr key={idx} className="border-b border-slate-800/50 hover:bg-charcoal/20">
                <td className="py-5 px-6 font-medium text-slate-200">{item.metric}</td>
                <td className="py-5 px-6 bg-charcoal/30 text-emerald-accent font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {item.custom}
                </td>
                <td className="py-5 px-6 text-slate-400 font-normal">{item.legacy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-champagne" />,
      title: "Bespoke Web Design & UX",
      description:
        "Custom design systems engineered in Figma. We craft distinct visual identities that accentuate brand authority.",
    },
    {
      icon: <Zap className="w-8 h-8 text-champagne" />,
      title: "Next.js Custom Engineering",
      description:
        "Clean React code with sub-second page loads. No bloated code or unnecessary plugins.",
    },
    {
      icon: <Server className="w-8 h-8 text-champagne" />,
      title: "White-Glove Managed Hosting",
      description:
        "99.99% SLA uptime, automated global edge CDN routing, weekly security audits, and continuous optimization.",
    },
    {
      icon: <Search className="w-8 h-8 text-champagne" />,
      title: "Core Web Vitals & SEO Hardening",
      description:
        "Full structured metadata schemas, dynamic OpenGraph assets, and speed metrics tuned for top search rankings.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-3">
          Core Capabilities
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-100">
          Services Tailored for Exceptional Brands
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-charcoal/40 border border-slate-800 p-8 rounded-2xl hover:border-champagne/40 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="mb-6 p-3 bg-obsidian rounded-xl w-fit border border-slate-800 group-hover:border-champagne/30">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h4>
            <p className="text-platinum text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  const projects = [
    {
      title: "Aura Private Estates",
      category: "Ultra-Luxury Real Estate",
      metric: "+310% Lead Conversion Rate",
      loadTime: "0.38s Load Speed",
      imageColor: "from-slate-900 to-amber-950",
    },
    {
      title: "Lumen Aesthetic Surgery",
      category: "High-End Medical Clinic",
      metric: "100/100 Lighthouse Rating",
      loadTime: "0.42s Load Speed",
      imageColor: "from-slate-900 to-emerald-950",
    },
    {
      title: "Vanguard Architectural Firm",
      category: "Commercial Architecture",
      metric: "+180% Organic Search Traffic",
      loadTime: "0.35s Load Speed",
      imageColor: "from-slate-900 to-slate-800",
    },
  ];

  return (
    <section id="work" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-3">
          Selected Portfolio
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-100">
          Proof in Performance & Aesthetics
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((item, idx) => (
          <div
            key={idx}
            className="bg-charcoal border border-slate-800 rounded-2xl overflow-hidden group hover:border-champagne/40 transition-all duration-300"
          >
            <div
              className={`h-56 bg-gradient-to-br ${item.imageColor} p-6 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="flex justify-between items-start z-10">
                <span className="bg-obsidian/80 backdrop-blur-md text-champagne text-xs px-3 py-1 rounded-full font-medium border border-champagne/20">
                  {item.category}
                </span>
              </div>
              <div className="z-10">
                <p className="text-xs font-semibold text-emerald-accent">{item.metric}</p>
                <p className="text-xs text-slate-400">{item.loadTime}</p>
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h4>
              <button className="text-xs text-champagne font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Case Study <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Discovery & Architecture",
      desc: "We analyze target audience demographics, competitive positioning, and conversion goals to map structural site architecture.",
    },
    {
      num: "02",
      title: "High-Fidelity Design Curation",
      desc: "Pixel-perfect UI design built in Figma with high-end aesthetic details and interactive micro-animations.",
    },
    {
      num: "03",
      title: "Next.js Engineering & SEO Hardening",
      desc: "Clean Next.js implementation with modern CSS variables, semantic structure, and Core Web Vitals optimizations.",
    },
    {
      num: "04",
      title: "White-Glove Launch & Managed Hosting",
      desc: "Zero-downtime deployment backed by automated daily backups, global edge delivery, and uptime monitoring.",
    },
  ];

  return (
    <section id="process" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-3">
          Methodology
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-100">
          The Path to Digital Dominance
        </h3>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-charcoal/30 border border-slate-800/80 p-6 rounded-2xl relative flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl font-serif font-black text-champagne/30 block mb-4">
                {step.num}
              </span>
              <h4 className="text-lg font-bold text-slate-100 mb-2">{step.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    budget: "$10k - $25k",
    timeline: "Immediate",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          business_name: formData.businessName,
          reply_to: formData.email,
          budget_range: formData.budget,
          project_timeline: formData.timeline,
          message: formData.notes,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Submission Error:", error);
          alert("Submission failed. Please check EmailJS setup keys.");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-charcoal border border-champagne/30 rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-100"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold font-serif text-slate-100">
                  Start a Project
                </h3>
                <p className="text-xs text-platinum mt-1">
                  Step {step} of 2 - Let's build your custom web architecture.
                </p>
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                      placeholder="e.g. Eleanor Vance"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Business / Brand Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                      placeholder="e.g. Vance Capital"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                      placeholder="eleanor@vancecapital.com"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-champagne text-obsidian font-bold py-3 rounded-lg text-sm mt-2 flex items-center justify-center gap-2"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                    >
                      <option>Immediate (Within 30 Days)</option>
                      <option>1-2 Months</option>
                      <option>Flexible / Planning Phase</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Project Goals / Scope Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-obsidian border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-champagne"
                      placeholder="Briefly describe your objectives..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 border border-slate-700 text-slate-300 font-semibold py-3 rounded-lg text-sm"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-2/3 bg-emerald-accent hover:bg-emerald-hover text-obsidian font-bold py-3 rounded-lg text-sm flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Proposal Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-accent mx-auto" />
              <h3 className="text-2xl font-bold font-serif text-slate-100">
                Proposal Request Received
              </h3>
              <p className="text-slate-300 text-sm max-w-xs mx-auto">
                Thank you, {formData.name}. Our principal architect will review
                your project details and respond within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-champagne text-obsidian font-bold px-6 py-2.5 rounded-full text-sm mt-4"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-obsidian py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-black tracking-wider text-slate-100 font-serif">
            AETHERIA<span className="text-champagne">.</span>
          </span>
          <p className="text-xs text-slate-500 mt-1">
            Bespoke Web Design, Custom Next.js Engineering & Managed Hosting.
          </p>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Aetheria Digital Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
