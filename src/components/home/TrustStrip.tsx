import { ShieldCheck, Wrench, Clock, ThumbsUp } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Every laptop tested and certified before sale.",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    desc: "In-house technicians for repairs and upgrades.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    desc: "Most repairs completed same day.",
  },
  {
    icon: ThumbsUp,
    title: "Warranty Included",
    desc: "6 months warranty, 1 year service support.",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-[#F5F5F5] border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-[#111111] mb-2">
            Why choose Elite Laptops?
          </h2>
          <p className="text-sm text-[#666666]">
            Trusted by hundreds of customers across Karnataka.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-xs"
            >
              <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center mb-4 border border-[#E5E5E5]">
                <Icon className="w-5 h-5 text-[#111111]" />
              </div>
              <h3 className="font-semibold text-[#111111] text-sm mb-1">{title}</h3>
              <p className="text-sm text-[#666666] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
