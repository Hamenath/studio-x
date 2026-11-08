"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/animations/useGsapReveal";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="testimonials-heading"
      className="bg-sx-white py-20 md:py-32 px-6 md:px-12 border-b border-sx-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="reveal mb-16 pb-8 border-b border-sx-light">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Endorsements
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-black"
          >
            WHAT CLIENTS SAY.
          </h2>
        </div>

        {/* Authentic Styled Empty State */}
        <div className="reveal border border-dashed border-sx-light p-12 md:p-20 text-center flex flex-col items-center justify-center bg-sx-off/30">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Verification Protocol
          </span>
          <h3 className="font-heading text-xl md:text-2xl font-bold text-sx-black mb-3">
            Client testimonials will appear here.
          </h3>
          <p className="text-sm md:text-base text-sx-dark max-w-[48ch] leading-relaxed">
            We hold an absolute standard of transparency: zero placeholder quotes,
            zero fabricated clients. Direct client reviews and case studies will be
            published here as commissioned engagements complete.
          </p>
        </div>
      </div>
    </section>
  );
}
