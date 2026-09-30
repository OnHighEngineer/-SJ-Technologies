import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FloatingDock } from "@/components/layout/FloatingDock";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Elite Laptops — Sales, Service & Upgrades in Karnataka",
    template: "%s | Elite Laptops",
  },
  description:
    "Buy new and refurbished laptops online. Genuine spare parts — batteries, RAM, SSD, HDD, adapters. Expert service. Karnataka, India.",
  keywords: ["laptops", "refurbished laptops", "laptop spares", "Karnataka", "Elite Laptops"],
  openGraph: {
    siteName: "Elite Laptops",
    url: "https://www.elitelaptops.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <FloatingDock />
        </CartProvider>
      </body>
    </html>
  );
}
