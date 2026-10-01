"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const savings = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <TiltCard className="border border-[#E5E5E5] rounded-xl bg-white overflow-hidden shadow-xs hover:border-[#111111] transition-all">
      {/* Product Image */}
      <Link href={`/shop?highlight=${product.id}`} className="block">
        <div className="aspect-[4/3] bg-[#F5F5F5] overflow-hidden relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Body */}
      <div className="p-4">
        {/* Condition + savings */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-[#111111] capitalize px-2 py-0.5 bg-[#F5F5F5] rounded-md border border-[#E5E5E5]">
            {product.condition}
          </span>
          {savings && (
            <span className="text-xs font-semibold text-[#111111]">
              {savings}% off
            </span>
          )}
          {!product.inStock && (
            <span className="text-xs text-[#999999] ml-auto">
              Out of stock
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-[#111111] text-sm leading-snug line-clamp-2 mb-2">
          {product.name}
        </h3>

        {/* Specs */}
        <ul className="mb-4 space-y-0.5 min-h-[36px]">
          {product.specs.slice(0, 3).map((s) => (
            <li key={s} className="text-xs text-[#666666]">
              • {s}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#E5E5E5]">
          <div>
            <p className="font-semibold text-[#111111] text-base">{formatPrice(product.price)}</p>
            {product.originalPrice && (
              <p className="text-xs text-[#999999] line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <button
            id={`add-to-cart-${product.id}`}
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#111111] text-white text-xs font-semibold rounded-lg hover:bg-[#111111]/85 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </TiltCard>
  );
}
