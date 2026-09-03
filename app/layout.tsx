import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadiva Studio — Bespoke Pinterest-Inspired Packaging | Pakistan",
  description:
    "Hadiva Studio crafts luxury, Pinterest-inspired bespoke packaging — gift boxes, wedding hampers, corporate kits & custom branding. Based in Pakistan.",
  keywords: ["custom packaging Pakistan", "Pinterest packaging", "luxury gift boxes Pakistan", "bespoke packaging", "wedding hampers", "Hadiva Studio"],
  openGraph: {
    title: "Hadiva Studio — Bespoke Pinterest-Inspired Packaging",
    description: "Aesthetic bespoke packaging for every occasion. Gift boxes, hampers, wedding packaging & more. Based in Pakistan.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blush text-charcoal font-jost antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
