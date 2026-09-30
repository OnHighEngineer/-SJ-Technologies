"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { EliteLogo } from "@/components/common/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Laptops" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count, openCart } = useCart();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
      <nav className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md border border-[#E5E5E5] rounded-full px-5 py-2 flex items-center justify-between shadow-sm pointer-events-auto transition-all">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <EliteLogo className="w-9 h-9 shrink-0" />
          <span className="font-bold text-[#111111] text-sm tracking-tight">
            Elite Laptops
          </span>
        </Link>

        {/* Center Nav Links */}
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#111111] bg-[#F5F5F5]"
                    : "text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Action: Cart icon only */}
        <button
          id="cart-button"
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-[#F5F5F5] transition-colors"
          aria-label="Open cart"
        >
          <ShoppingCart className="w-4.5 h-4.5 text-[#111111]" />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#111111] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
