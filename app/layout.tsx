import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DesignerPal Studio | High-Converting Web Applications & Digital Engineering",
    template: "%s | DesignerPal Studio",
  },
  description:
    "DesignerPal Studio (Designer Pal) delivers high-performance enterprise web applications, custom Next.js showcase platforms, and digital software engineering.",
  keywords: [
    "DesignerPal",
    "DesignerPal Studio",
    "DesignerPal Studios",
    "Designer Pal Studio",
    "Designer Pal Studios",
    "Designer Pal",
    "DesignerPal Hyderabad",
    "Web Application Architecture",
  ],
  alternates: {
    canonical: "https://www.designerpal.in",
  },
  openGraph: {
    title: "DesignerPal Studio",
    description: "High-Converting Web Applications & Digital Engineering",
    url: "https://www.designerpal.in",
    siteName: "DesignerPal Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DesignerPal Studio",
    "alternateName": [
      "DesignerPal",
      "Designer Pal Studio",
      "Designer Pal Studios",
      "DesignerPal Studios"
    ],
    "url": "https://www.designerpal.in",
    "logo": "https://www.designerpal.in/favicon.ico",
    "sameAs": [
      "https://www.instagram.com/designerpal_studio",
      "https://www.linkedin.com/company/designerpal"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
