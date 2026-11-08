"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroEntrance(containerRef: React.RefObject<HTMLElement | null>) {
  const hasAnimated = useRef(false);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    if (hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const elements = containerRef.current.querySelectorAll<HTMLElement>(
        ".hero-word, .hero-sub, .hero-cta"
      );
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    hasAnimated.current = true;

    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      const words = containerRef.current?.querySelectorAll(".hero-word");
      const sub = containerRef.current?.querySelector(".hero-sub");
      const cta = containerRef.current?.querySelector(".hero-cta");

      if (words && words.length > 0) {
        tl.fromTo(
          words,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
          }
        );
      }

      if (sub) {
        tl.fromTo(
          sub,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (cta) {
        tl.fromTo(
          cta,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, containerRef);

    return () => {
      ctxRef.current?.revert();
    };
  }, [containerRef]);
}
