import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "DesignerPal | Best Website Designer in Hyderabad & High-Converting Web Engineering Studio",
  description:
    "DesignerPal is the premier web development & digital engineering studio in Hyderabad. Specializing in Next.js, 100/100 Core Web Vitals, high-converting platforms, and 3D web experiences.",
  keywords: [
    "DesignerPal",
    "best website designer in hyderabad",
    "best website designer near me",
    "best website designer",
    "web design agency hyderabad",
    "next.js developer hyderabad",
    "custom web engineering studio",
    "high converting web platforms",
  ],
  authors: [{ name: "DesignerPal Studio" }],
  creator: "DesignerPal",
  publisher: "DesignerPal",
  metadataBase: new URL("https://workspace-alpha-drab.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DesignerPal | Best Website Designer in Hyderabad",
    description:
      "Bespoke web platforms, zero-plugin Next.js architecture, and sub-second edge performance by DesignerPal.",
    url: "https://workspace-alpha-drab.vercel.app",
    siteName: "DesignerPal",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured Data Schema for Local Search & Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DesignerPal",
    "image": "https://workspace-alpha-drab.vercel.app/hero-3d-globe.jpg",
    "@id": "https://workspace-alpha-drab.vercel.app",
    "url": "https://workspace-alpha-drab.vercel.app",
    "telephone": "+910000000000",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hyderabad Tech Corridor",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4486,
      "longitude": 78.3808
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://github.com/SaitejaGangireddi",
      "https://instagram.com"
    ],
    "knowsAbout": [
      "Website Design",
      "Next.js Development",
      "React Architecture",
      "Web Development in Hyderabad",
      "Core Web Vitals Optimization"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Hyderabad"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
