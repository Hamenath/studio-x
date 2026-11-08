"use client";

import { useRef } from "react";
import Button from "@/components/ui/Button";
import { useGsapReveal } from "@/animations/useGsapReveal";

export default function CtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  return (
    <section
      ref={containerRef}
      aria-labelledby="cta-heading"
      className="bg-sx-black text-sx-white py-24 md:py-32 px-6 md:px-12 border-b border-sx-soft"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-5xl">
          <span className="reveal font-mono text-xs uppercase tracking-widest text-sx-mid block mb-6">
            Initiate Engagement
          </span>

          <h2
            id="cta-heading"
            className="reveal font-heading font-extrabold text-[clamp(48px,7vw,110px)] tracking-[-0.03em] leading-[0.95] text-sx-white mb-10 max-w-4xl"
          >
            HAVE AN IDEA?
            <br />
            LET&apos;S MAKE IT REAL.
          </h2>

          <p className="reveal text-lg md:text-xl text-sx-mid max-w-[50ch] leading-relaxed mb-12">
            Whether launching a new company, redefining an existing brand, or building
            a custom web application, we bring disciplined craft to your ambition.
          </p>

          <div className="reveal flex flex-wrap items-center gap-5">
            <Button href="/contact" variant="white" size="lg">
              Start your project
            </Button>
            <Button href="/services" variant="white-outline" size="lg">
              View all services
            </Button>
          </div>

          <div className="reveal mt-16 pt-8 border-t border-sx-dark/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-sx-mid">
            <span>Direct contact: hello@studioxdesign.space.example</span>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
