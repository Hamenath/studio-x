"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/animations/useGsapReveal";
import ScrollTextReveal from "@/components/ui/ScrollTextReveal";

const philosophyPoints = [
  {
    number: "01",
    title: "Radical Clarity",
    text: "Great design removes noise. We distill complex ideas into sharp, memorable identities and interfaces that communicate instantly.",
  },
  {
    number: "02",
    title: "Form Follows Intent",
    text: "We reject superficial trends in favor of disciplined typography, balanced proportions, and structures that serve their core purpose.",
  },
  {
    number: "03",
    title: "Accessible Excellence",
    text: "Exceptional design should not require an enterprise budget. We work directly with founders and teams to deliver world-class craft efficiently.",
  },
];

export default function IntroSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="intro-heading"
      className="bg-sx-off py-20 md:py-32 px-6 md:px-12 border-b border-sx-light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 reveal">
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
              Our Perspective
            </span>
            <h2
              id="intro-heading"
              className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-black mb-8"
            >
              CREATIVITY
              <br />
              MEETS PURPOSE.
            </h2>
            <ScrollTextReveal
              text="Studio X is an independent creative design studio focused on building distinctive brands, digital experiences and visual communication. We collaborate directly with ambitious businesses and creators in India and worldwide to craft work that endures."
              className="text-base md:text-lg text-sx-dark leading-relaxed max-w-[50ch] font-normal"
            />
          </div>

          {/* Right Column: 3 Philosophy Points */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-sx-light">
            {philosophyPoints.map((point) => (
              <div key={point.number} className="reveal py-8 first:pt-0 last:pb-0">
                <span className="font-mono text-xs text-sx-mid tracking-widest block mb-2">
                  {point.number} / PHILOSOPHY
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-sx-black tracking-tight mb-2">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-sx-dark leading-relaxed max-w-[48ch]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
