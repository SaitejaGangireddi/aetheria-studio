import React from "react";
import Metadata from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const title = resolvedParams.slug.replace(/-/g, " ").toUpperCase();
  
  return {
    title: `${title} | Aetheria Architecture Insights`,
    description: "Deep dive into sub-second Next.js web performance, design tokens, and high-converting enterprise web applications.",
    openGraph: {
      title: `${title} | Aetheria Insights`,
      description: "Technical engineering breakdown for sub-second web architecture.",
      url: `https://workspace-alpha-drab.vercel.app/insights/${resolvedParams.slug}`,
      siteName: "Aetheria Digital",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aetheria Insights`,
      description: "Technical engineering breakdown for sub-second web architecture.",
    },
    alternates: {
      canonical: `https://workspace-alpha-drab.vercel.app/insights/${resolvedParams.slug}`,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const titleFormatted = resolvedParams.slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // JSON-LD Structured Data Schema for Search Dominance
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": titleFormatted,
    "description": "Enterprise technical insight on building zero-CMS sub-second web applications.",
    "author": {
      "@type": "Organization",
      "name": "Aetheria Digital",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aetheria Digital",
      "url": "https://workspace-alpha-drab.vercel.app",
    },
  };

  return (
    <div className="min-h-screen bg-ivory text-obsidian px-6 py-16 max-w-4xl mx-auto">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-obsidian mb-8 transition-all">
        <ArrowLeft className="w-4 h-4" />
        Back to Architecture Portfolio
      </Link>

      <div className="space-y-4 mb-8">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
          Technical Architecture Insight
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
          {titleFormatted}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-200 pb-6">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5 Min Read</span>
          <span>•</span>
          <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Core Web Vitals Standard</span>
        </div>
      </div>

      <article className="prose prose-slate max-w-none space-y-6 text-sm text-slate-700 leading-relaxed">
        <p className="text-base font-medium text-slate-900">
          Building high-ticket digital platforms requires moving beyond heavy monolithic CMS setups. By pairing Next.js App Router with server-side rendering and edge deployment, applications achieve sub-0.4s Largest Contentful Paint (LCP).
        </p>
        <h2 className="text-xl font-bold font-serif text-slate-900 pt-4">1. Zero-Plugin Speed Architecture</h2>
        <p>
          Traditional platforms suffer from script bloat and unoptimized database queries. Custom Next.js builds eliminate third-party plugin drag, resulting in flat 100/100 Core Web Vitals across all viewports.
        </p>
        <h2 className="text-xl font-bold font-serif text-slate-900 pt-4">2. Programmatic Schema Dominance</h2>
        <p>
          Injecting granular JSON-LD schemas allows search engines to immediately understand entity relationships, pricing tiers, and service capabilities, driving higher click-through rates on organic search engine result pages (SERPs).
        </p>
      </article>
    </div>
  );
}
