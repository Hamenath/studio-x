import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

export interface ServiceCardProps {
  category: {
    id: string;
    name: string;
    tagline?: string;
    description?: string;
  };
  items: ServiceItem[];
  index: number;
}

export default function ServiceCard({ category, items, index }: ServiceCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative border-b border-sx-light pb-10 pt-8 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left column: Index and category name */}
        <div className="md:w-1/3">
          <span className="font-mono text-xs text-sx-mid tracking-widest block mb-3">
            {formattedIndex} / CATEGORY
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-sx-black group-hover:text-sx-dark transition-colors">
            {category.name}
          </h3>
          {category.tagline && (
            <p className="mt-2 text-sm text-sx-mid leading-relaxed">
              {category.tagline}
            </p>
          )}
          <Link
            href={`/services#${category.id}`}
            className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium uppercase tracking-wider text-sx-black hover:text-sx-dark transition-colors"
          >
            Explore category
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Right column: Items listed */}
        <div className="md:w-2/3">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item.name}
                className="p-4 bg-sx-off/60 border border-sx-light/50 hover:border-sx-light transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-medium text-sm text-sx-black">
                    {item.name}
                  </h4>
                  {item.startingPrice && (
                    <span className="text-xs font-mono text-sx-mid">
                      from {item.startingPrice}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="mt-1.5 text-xs text-sx-dark leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
