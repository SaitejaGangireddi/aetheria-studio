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
  title: "DesignerPal Studio | High-Performance Digital Engineering",
  description:
    "Custom Next.js platforms, zero-plugin web architecture, and sub-second edge experiences engineered locally in Hyderabad for global scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignerPal Studio",
    url: "https://www.designerpal.in",
    logo: "https://res.cloudinary.com/dmkjnuolr/image/upload/v1785855698/ChatGPT_Image_Aug_4_2026_08_30_13_PM_obda5y.png",
    description:
      "High-Performance Web Applications & Custom Digital Engineering Studio.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
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
