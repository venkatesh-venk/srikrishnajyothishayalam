import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Sri Krishna Sai Jyothishalayam - Expert Astrology & Vastu Services",
  description: "Qualified Indian Astrologer & Vastu Consultant offering horoscope readings, marriage compatibility, career guidance, and Vastu consultations by T. Bhaskaraiah Sindhanthi.",
  keywords: "astrology, jyotish, horoscope, vastu, marriage compatibility, career guidance, Indian astrologer, Nellore",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
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

