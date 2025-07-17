import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PureDry - Premium Dehydrated Food Products",
  description: "Leading manufacturer of premium dehydrated vegetables, fruits, herbs, and spices. Quality assured, farm-fresh products for food manufacturers, restaurants, and premium consumers worldwide.",
  keywords: "dehydrated vegetables, dehydrated fruits, dried herbs, spices, food manufacturing, bulk ingredients, premium quality, farm fresh",
  authors: [{ name: "PureDry" }],
  creator: "PureDry",
  publisher: "PureDry",
  openGraph: {
    title: "PureDry - Premium Dehydrated Food Products",
    description: "Leading manufacturer of premium dehydrated vegetables, fruits, herbs, and spices.",
    url: "https://puredry.com",
    siteName: "PureDry",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PureDry - Premium Dehydrated Food Products",
    description: "Leading manufacturer of premium dehydrated vegetables, fruits, herbs, and spices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
