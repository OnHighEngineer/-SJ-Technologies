import Link from "next/link";
import { Phone, MapPin, Globe, MessageCircle } from "lucide-react";
import { EliteLogo } from "@/components/common/Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Laptops" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#222222] pb-28 pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <EliteLogo className="w-10 h-10 shrink-0" />
              <div>
                <span className="font-bold text-white text-base block tracking-tight">
                  Elite Laptops &amp; Solutions
                </span>
                <span className="text-[11px] text-[#888888] font-mono">
                  GSTIN: 29NHTPS4793B1Z9
                </span>
              </div>
            </div>
            <p className="text-sm text-[#999999] leading-relaxed max-w-sm mb-5">
              Karnataka&apos;s premier destination for high quality new and certified refurbished laptops. Best prices, expert guidance, and fast support.
            </p>
            <a
              href="https://wa.me/917676459688"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#111111] text-xs font-semibold rounded-lg hover:bg-[#F5F5F5] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666] mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#999999] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#666666] mb-4">
              Store Location
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:7676459688"
                  className="flex items-start gap-2.5 text-sm text-[#999999] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                  <span>7676459688</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.elitelaptops.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-[#999999] hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                  <span>www.elitelaptops.in</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-[#999999] leading-relaxed">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white" />
                <span>
                  #224, Near Standard School, Kannada Kasturi Road, T. Dasarahalli, Bangalore - 560057
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555555]">
            &copy; {new Date().getFullYear()} Elite Laptops &amp; Solutions. All rights reserved.
          </p>
          <p className="text-xs text-[#555555]">Bangalore, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
