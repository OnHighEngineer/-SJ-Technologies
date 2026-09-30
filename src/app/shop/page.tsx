import type { Metadata } from "next";
import { laptops } from "@/data/products";
import { ProductGrid } from "@/components/shop/ProductGrid";

export const metadata: Metadata = {
  title: "Shop Laptops — HP, Dell, Lenovo, Asus",
  description: "Browse new and refurbished laptops from top brands. Filter by brand, price, and condition.",
};

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ProductGrid
        products={laptops}
        title="All Laptops"
      />
    </div>
  );
}
