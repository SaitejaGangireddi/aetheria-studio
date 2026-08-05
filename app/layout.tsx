import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/app/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.designerpal.in"),
  title: {
    default: "DesignerPal Studio | High-Performance Digital Engineering & Web Development",
    template: "%s | DesignerPal Studio",
  },
  description:
    "Custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences engineered for global scale.",
  verification: {
    google: "FPEcDpLm7MqFdZJThx5CNx8xiF0BQ4qKcBV6YbzmsuI",
  },
  keywords: [
    "Next.js Development Agency",
    "High Performance Web Engineering",
    "Zero Plugin Web Architecture",
    "Custom Web Application Development",
    "Core Web Vitals Optimization",
    "DesignerPal Studio",
  ],
  authors: [{ name: "Saiteja Gangireddi", url: "https://www.designerpal.in" }],
  creator: "DesignerPal Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.designerpal.in",
    title: "DesignerPal Studio | High-Performance Digital Engineering",
    description:
      "Custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences engineered for global scale.",
    siteName: "DesignerPal Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignerPal Studio | High-Performance Digital Engineering",
    description:
      "Custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences engineered for global scale.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DesignerPal Studio",
    url: "https://www.designerpal.in",
    logo: "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785855698/ChatGPT_Image_Aug_4_2026_08_30_13_PM_obda5y.png",
    description:
      "High-Performance Web Applications & Custom Digital Engineering Studio.",
    telephone: "+917989919631",
    email: "saitejagangireddi@designerpal.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    sameAs: [
      "https://instagram.com/designerpalstudios",
      "https://github.com/SaitejaGangireddi",
    ],
  };

  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-purple-500 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
