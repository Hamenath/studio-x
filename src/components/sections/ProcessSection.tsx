"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/animations/useGsapReveal";

const steps = [
  {
    number: "01",
    name: "Discover",
    description:
      "We immerse in your domain, study your market positioning, and distill core project objectives into an actionable creative brief.",
  },
  {
    number: "02",
    name: "Strategize",
    description:
      "Before drawing a single line, we establish the creative thesis, aesthetic parameters, typography framework, and roadmap.",
  },
  {
    number: "03",
    name: "Design",
    description:
      "We develop comprehensive concept executions and interactive prototypes, testing every visual decision against the strategy.",
  },
  {
    number: "04",
    name: "Refine",
    description:
      "Through structured collaboration rounds, we stress-test and tune all deliverables for maximum clarity and technical precision.",
  },
  {
    number: "05",
    name: "Deliver",
    description:
      "Full design systems, source vector packages, production-ready code, and comprehensive documentation delivered directly to you.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="process-heading"
      className="bg-sx-off py-20 md:py-32 px-6 md:px-12 border-b border-sx-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sx-light">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
              Methodology
            </span>
            <h2
              id="process-heading"
              className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-black"
            >
              HOW WE WORK.
            </h2>
          </div>
          <p className="text-sm md:text-base text-sx-dark max-w-[40ch]">
            A transparent five-stage progression from conceptual thesis to final delivery.
          </p>
        </div>

        {/* Desktop 5-step grid, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-sx-light border border-sx-light">
          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal p-6 md:p-8 flex flex-col justify-between bg-sx-white hover:bg-sx-off/60 transition-colors"
            >
              <div>
                <span className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-sx-mid/60 block mb-6">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold tracking-tight text-sx-black mb-3">
                  {step.name}
                </h3>
                <p className="text-xs md:text-sm text-sx-dark leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-sx-light/50 flex items-center justify-between text-[11px] font-mono text-sx-mid uppercase">
                <span>Phase</span>
                <span>{step.number} of 05</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
