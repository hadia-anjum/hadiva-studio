import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadiva Studio — Luxury Digital Wedding Invitations & Event Microsites",
  description:
    "Hadiva Studio crafts timeless digital wedding experiences — interactive invitation websites with live RSVP, countdowns, galleries, and music. Trusted by 500+ couples worldwide.",
  keywords: ["digital wedding invitation","interactive wedding website","undangan digital pernikahan","luxury wedding website","RSVP website","Hadiva Studio"],
  openGraph: {
    title: "Hadiva Studio — Luxury Digital Wedding Invitations",
    description: "Interactive wedding websites with live RSVP, countdowns, galleries & music. Crafted for couples who want more.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-mocha font-jost antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
