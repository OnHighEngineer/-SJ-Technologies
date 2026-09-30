"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { FilterSidebar, type Filters } from "./FilterSidebar";
import { SlidersHorizontal } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  products: Product[];
  showSpareFilter?: boolean;
  title?: string;
}

const DEFAULT_FILTERS: Filters = {
  brands: [],
  maxPrice: 100000,
  condition: "all",
  spareCategory: "",
};

type SortKey = "default" | "price-asc" | "price-desc";

export function ProductGrid({ products, showSpareFilter, title }: Props) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortKey>("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (filters.brands.length > 0) {
      list = list.filter((p) => filters.brands.includes(p.brand));
    }
    if (filters.condition !== "all") {
      list = list.filter((p) => p.condition === filters.condition);
    }
    list = list.filter((p) => p.price <= filters.maxPrice);
    if (filters.spareCategory) {
      list = list.filter((p) => p.spareCategory === filters.spareCategory);
    }

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, filters, sort]);

  return (
    <div>
      {title && (
        <h1 className="text-2xl font-semibold text-[#111111] mb-8">{title}</h1>
      )}

      {/* Mobile filter toggle + sort */}
      <div className="flex items-center justify-between gap-3 mb-6 lg:hidden">
        <button
          id="mobile-filters-toggle"
          onClick={() => setFiltersOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-2 border border-[#E5E5E5] rounded-lg text-sm text-[#111111] hover:bg-[#F5F5F5] transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="flex gap-8 items-start">
        {/* Sidebar — always visible on lg, toggle on mobile */}
        <div className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            showSpareFilter={showSpareFilter}
          />
        </div>

        {/* Grid */}
        <div className="flex-1 min-w-0">
          {/* Sort - desktop */}
          <div className="hidden lg:flex justify-end mb-6">
            <SortSelect value={sort} onChange={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#666666] text-sm">No products match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
          <p className="mt-4 text-xs text-[#999999]">{filtered.length} products</p>
        </div>
      </div>
    </div>
  );
}

function SortSelect({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (v: SortKey) => void;
}) {
  return (
    <select
      id="sort-select"
      value={value}
      onChange={(e) => onChange(e.target.value as SortKey)}
      className="text-sm border border-[#E5E5E5] rounded-lg px-3 py-2 text-[#111111] bg-white focus:outline-none focus:ring-1 focus:ring-[#111111]"
    >
      <option value="default">Sort: Default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  );
}
