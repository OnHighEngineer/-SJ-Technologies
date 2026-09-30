"use client";

import { useRouter } from "next/navigation";
import { Laptop, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Dock, { type DockItemData } from "@/components/motion/Dock";

export function FloatingDock() {
  const router = useRouter();
  const { count, openCart } = useCart();

  const dockItems: DockItemData[] = [
    {
      icon: <Laptop className="w-4 h-4" />,
      label: "Laptops",
      onClick: () => router.push("/shop"),
    },
    {
      icon: <ShoppingBag className="w-4 h-4" />,
      label: `Cart (${count})`,
      onClick: openCart,
      badge: count,
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      label: "WhatsApp Chat",
      onClick: () => window.open("https://wa.me/917676459688", "_blank"),
      className: "dark-item",
    },
  ];

  return <Dock items={dockItems} baseItemSize={44} magnification={58} panelHeight={56} />;
}
