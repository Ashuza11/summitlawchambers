import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Initialize fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Summit Law Chambers | Advocates",
  description: "Guidance. Reliable Counsel.",
  icons: {
    icon: '/images/web-app-manifest-192x192.png',
    apple: '/images/web-app-manifest-512x512.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-cream text-brand-blue antialiased`}>
        {children}
      </body>
    </html>
  );
}