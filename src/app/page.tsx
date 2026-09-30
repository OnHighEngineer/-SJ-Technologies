import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustStrip } from "@/components/home/TrustStrip";

export const metadata: Metadata = {
  title: "Elite Laptops — Better Devices, Greater Possibilities",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <TrustStrip />
    </>
  );
}
