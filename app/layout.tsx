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
  title: "DesignerPal | High-Converting Web Engineering Studio in Hyderabad",
  description:
    "DesignerPal engineers high-performing web platforms, custom Next.js applications, sub-second edge builds, and bespoke digital experiences in Hyderabad, India.",
  keywords: [
    "DesignerPal",
    "designerpal.in",
    "website designer hyderabad",
    "web development studio hyderabad",
    "next.js app router developer",
    "custom web application development",
    "high speed web platforms",
  ],
  authors: [{ name: "DesignerPal Studio" }],
  creator: "DesignerPal",
  publisher: "DesignerPal",
  metadataBase: new URL("https://designerpal.in"),
  alternates: {
    canonical: "https://designerpal.in",
  },
  openGraph: {
    title: "DesignerPal | High-Converting Web Engineering Studio",
    description:
      "Bespoke web platforms, zero-plugin Next.js architecture, and sub-second edge performance by DesignerPal.",
    url: "https://designerpal.in",
    siteName: "DesignerPal",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DesignerPal",
    "url": "https://designerpal.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "Website Design",
      "Next.js App Development",
      "Core Web Vitals",
      "Web Applications"
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
