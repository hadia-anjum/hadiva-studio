import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadiva Studio — Pinterest-Inspired Custom Packaging | Pakistan",
  description:
    "Hadiva Studio creates aesthetic, Pinterest-inspired custom packaging — gift boxes, hampers, wedding packaging & more. Based in Pakistan. DM to order!",
  keywords: ["custom packaging Pakistan", "Pinterest packaging", "gift boxes Pakistan", "aesthetic packaging", "wedding hampers", "Hadiva Studio", "custom gift boxes Lahore"],
  openGraph: {
    title: "Hadiva Studio — Pinterest-Inspired Custom Packaging",
    description: "Aesthetic custom packaging for every occasion. Gift boxes, hampers, wedding packaging & more. Based in Pakistan 🇵🇰",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blush text-charcoal font-poppins antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
