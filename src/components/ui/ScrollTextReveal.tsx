"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export default function ScrollTextReveal({
  text,
  className = "",
  wordClassName = "",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const words = text.split(" ");

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      wordsRef.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        {
          opacity: 0.15,
          y: 4,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 45%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return (
    <p
      ref={containerRef}
      className={`font-heading font-bold text-balance leading-tight ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => {
            if (el) wordsRef.current[i] = el;
          }}
          className={`inline-block mr-[0.25em] transition-colors ${wordClassName}`}
          style={{ opacity: 0.15 }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

