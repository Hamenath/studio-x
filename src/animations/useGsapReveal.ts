"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapReveal(containerRef: React.RefObject<HTMLElement | null>) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Ensure all reveal elements are visible immediately
      const elements = containerRef.current.querySelectorAll<HTMLElement>(".reveal");
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    ctxRef.current = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll<HTMLElement>(".reveal");
      if (!elements || elements.length === 0) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            elements,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.05,
            }
          );
        },
      });
    }, containerRef);

    // Refresh triggers after fonts are ready
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      ctxRef.current?.revert();
    };
  }, [containerRef]);
}
