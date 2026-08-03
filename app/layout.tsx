import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Aetheria | Bespoke Next.js Web Architecture",
  description: "High-converting digital masterpieces engineered for high-ticket brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={`${jakarta.className} antialiased text-obsidian bg-ivory`}>
        {children}
      </body>
    </html>
  );
}
