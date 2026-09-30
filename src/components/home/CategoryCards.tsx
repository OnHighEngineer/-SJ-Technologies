import Link from "next/link";
import { Battery, MemoryStick, HardDrive, Zap, ArrowRight } from "lucide-react";

const CATEGORIES = [
  { slug: "battery", label: "Batteries", icon: Battery, desc: "Replacement cells for all brands" },
  { slug: "ram", label: "RAM", icon: MemoryStick, desc: "8GB & 16GB DDR4 upgrades" },
  { slug: "ssd", label: "SSD", icon: HardDrive, desc: "NVMe & SATA solid-state drives" },
  { slug: "hdd", label: "HDD", icon: HardDrive, desc: "1TB mass storage drives" },
  { slug: "adapter", label: "Adapters", icon: Zap, desc: "OEM-spec laptop chargers" },
];

export function CategoryCards() {
  return (
    <section className="bg-white border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#111111]">Spares & Parts</h2>
            <p className="text-sm text-[#666666] mt-1">
              Genuine parts for HP, Dell, Lenovo, Asus
            </p>
          </div>
          <Link
            href="/spares"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#111111] hover:text-[#666666] transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(({ slug, label, icon: Icon, desc }) => (
            <Link
              key={slug}
              id={`spare-cat-${slug}`}
              href={`/spares?cat=${slug}`}
              className="group flex flex-col gap-3 p-5 bg-[#F5F5F5] border border-[#E5E5E5] rounded-xl hover:border-[#111111] hover:bg-white transition-all"
            >
              <div className="w-10 h-10 bg-white border border-[#E5E5E5] rounded-lg flex items-center justify-center group-hover:border-[#111111] transition-colors">
                <Icon className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#111111]">{label}</p>
                <p className="text-xs text-[#666666] mt-0.5 leading-snug">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/spares"
          className="sm:hidden flex items-center gap-1 mt-5 text-sm font-medium text-[#111111]"
        >
          View all spares <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
