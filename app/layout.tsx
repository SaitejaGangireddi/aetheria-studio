import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignerPal Studio | High-Converting Web Applications",
  description:
    "Enterprise software architecture and custom Next.js web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignerPal Studio",
    url: "https://www.designerpal.in",
    logo: "https://www.designerpal.in/favicon.ico",
    sameAs: ["https://www.instagram.com/designerpalstudios"],
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
