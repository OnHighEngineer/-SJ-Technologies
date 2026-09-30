import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShapeGrid } from "@/components/motion/ShapeGrid";

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-white border-b border-[#E5E5E5] overflow-hidden flex flex-col justify-center items-center">
      {/* Full-bleed ShapeGrid Canvas Background filling entire viewport */}
      <ShapeGrid
        speed={0.5}
        squareSize={52}
        direction="diagonal"
        borderColor="#E5E5E5"
        hoverFillColor="#111111"
        shape="square"
        hoverTrailAmount={6}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />

      {/* Hero Content Stack */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          {/* Eyebrow Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#E5E5E5] rounded-full mb-8 bg-white/95 backdrop-blur-md shadow-xs">
            <span className="px-2 py-0.5 bg-[#111111] text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
              NEW
            </span>
            <span className="text-xs font-medium text-[#666666]">
              Karnataka&apos;s Trusted Laptop Store
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111111] tracking-tight leading-[1.1] mb-6 max-w-3xl">
            Better devices,
            <br />
            greater possibilities
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#666666] mb-10 max-w-xl leading-relaxed">
            Discover top-brand new and certified refurbished laptops. Guaranteed quality, warranty protection, and fast delivery across Karnataka.
          </p>

          {/* Action Pill Button: Shop Laptops only */}
          <div className="flex items-center justify-center">
            <Link
              id="hero-shop-now"
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111111] text-white text-sm font-semibold rounded-full hover:bg-[#111111]/85 transition-all shadow-sm hover:scale-[1.02] active:scale-100"
            >
              Shop Laptops
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
