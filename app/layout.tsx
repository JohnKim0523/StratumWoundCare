import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stratum Wound Care - Advanced Wound Healing in Pennsylvania",
  description: "Providing advanced wound healing and limb preservation to help patients stay safe, healthy, and home. Specialized care for diabetic wounds, pressure ulcers, and more.",
  keywords: "wound care, Pennsylvania, diabetic wounds, pressure ulcers, surgical wounds, limb preservation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
