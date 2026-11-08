"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/animations/useGsapReveal";

const reasons = [
  {
    number: "01",
    title: "Creative thinking",
    text: "We approach every brief fresh. No recycled templates, no copy-paste solutions.",
  },
  {
    number: "02",
    title: "Quality-focused execution",
    text: "Every detail matters. We stay with a project until it is meticulously refined.",
  },
  {
    number: "03",
    title: "Accessible pricing",
    text: "High-quality design for businesses at every budget — not just the well-funded.",
  },
  {
    number: "04",
    title: "Clear communication",
    text: "You speak directly to the designer doing the work. No middlemen, no ambiguity.",
  },
  {
    number: "05",
    title: "Reliable delivery",
    text: "We agree on realistic timelines upfront and hold to them with strict discipline.",
  },
  {
    number: "06",
    title: "Attention to detail",
    text: "Micro-interactions, kerning, color contrast, and structure — we notice the subtleties so you don't have to.",
  },
];

export default function WhySection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="why-heading"
      className="bg-sx-white py-20 md:py-32 px-6 md:px-12 border-b border-sx-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="reveal mb-16 pb-8 border-b border-sx-light">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Studio Standards
          </span>
          <h2
            id="why-heading"
            className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-black max-w-2xl"
          >
            GOOD DESIGN CHANGES EVERYTHING.
          </h2>
        </div>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sx-light border border-sx-light">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="reveal p-8 flex flex-col justify-between bg-sx-white hover:bg-sx-off transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-sx-mid tracking-widest block mb-4">
                  {reason.number} / COMMITMENT
                </span>
                <h3 className="font-heading text-xl font-bold tracking-tight text-sx-black mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-sx-dark leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
