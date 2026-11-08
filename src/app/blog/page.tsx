import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Journal & Perspectives — Design Essays",
  "Observations, technical notes, and critical essays on design systems, typography, branding, and digital craft from Studio X.",
  "/blog"
);

const blogCategories = [
  "All Articles",
  "Design Systems",
  "Typography",
  "Brand Identity",
  "Web Design",
  "Creative Direction",
  "Studio Notes",
];

export default function BlogPage() {
  return (
    <div className="bg-sx-white">
      {/* Page Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Studio Journal & Essays
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(44px,7vw,96px)] tracking-tight leading-[0.95] text-sx-black mb-8 max-w-4xl">
            CRITICAL DESIGN PERSPECTIVES.
          </h1>
          <p className="text-lg md:text-xl text-sx-dark max-w-[54ch] leading-relaxed">
            Essays on visual culture, typography theory, brand systems, and the
            intersection of technology and aesthetics.
          </p>

          {/* 6 Categories Filter Tabs */}
          <div className="mt-12 pt-8 border-t border-sx-light flex flex-wrap gap-2">
            {blogCategories.map((category, idx) => (
              <span
                key={category}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 border ${
                  idx === 0
                    ? "bg-sx-black text-sx-white border-sx-black"
                    : "bg-sx-off text-sx-dark border-sx-light"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section: Styled Empty State (No Fake Articles) */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-sx-off/50">
        <div className="max-w-3xl mx-auto text-center border border-dashed border-sx-light p-12 md:p-20 bg-sx-white">
          <div className="w-12 h-12 rounded-full border border-sx-light flex items-center justify-center mx-auto mb-6 bg-sx-off">
            <BookOpen className="w-5 h-5 text-sx-dark" />
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
            Editorial Schedule
          </span>

          <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-sx-black mb-4">
            Articles coming soon.
          </h2>

          <p className="text-sm md:text-base text-sx-dark leading-relaxed mb-8 max-w-md mx-auto">
            We are currently drafting long-form essays on typography hierarchy, modern
            grid frameworks, and brand longevity. In alignment with our studio standards,
            we do not publish simulated or AI-generated filler articles.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/portfolio" variant="primary" size="md">
              View portfolio work
            </Button>
            <Button href="/" variant="secondary" size="md">
              Return to home
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
