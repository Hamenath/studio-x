"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGsapReveal } from "@/animations/useGsapReveal";
import { serviceCategories } from "@/data/services";

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="services-heading"
      className="bg-sx-white py-20 md:py-32 px-6 md:px-12 border-b border-sx-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sx-light">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
              Disciplines & Offerings
            </span>
            <h2
              id="services-heading"
              className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-black"
            >
              WHAT WE CREATE.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sx-black hover:text-sx-dark transition-colors pb-1 border-b border-sx-black"
          >
            See all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-sx-light border border-sx-light">
          {serviceCategories.map((category, idx) => (
            <Link
              key={category.id}
              href={`/services#${category.id}`}
              className={`reveal group flex flex-col justify-between p-6 xl:p-8 bg-sx-white hover:bg-sx-off transition-all duration-300 hover:-translate-y-0.5 ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <span className="font-mono text-xs text-sx-mid tracking-widest block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-heading text-lg lg:text-xl font-bold tracking-tight text-sx-black group-hover:text-sx-dark transition-colors mb-3">
                  {category.name}
                </h3>
                <p className="text-xs text-sx-mid mb-6 font-mono">
                  {category.items.length} specialized services
                </p>
                <ul className="space-y-2 text-xs text-sx-dark">
                  {category.items.slice(0, 4).map((item) => (
                    <li key={item.name} className="truncate">
                      — {item.name}
                    </li>
                  ))}
                  {category.items.length > 4 && (
                    <li className="text-sx-mid font-mono text-[11px] pt-1">
                      +{category.items.length - 4} more
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-sx-light flex items-center justify-between text-xs font-medium text-sx-black group-hover:underline">
                <span>View details</span>
                <span className="font-mono">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
