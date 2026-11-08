"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Gsap3DTiltOptions {
  maxRotation?: number; // max degrees e.g. 15
  perspective?: number; // default 1000
  speed?: number; // duration in seconds
}

export function useGsap3DTilt<T extends HTMLElement>(
  options: Gsap3DTiltOptions = {}
) {
  const elementRef = useRef<T | null>(null);
  const { maxRotation = 14, perspective = 1000, speed = 0.4 } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el || typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.set(el, {
      transformPerspective: perspective,
      transformStyle: "preserve-3d",
    });

    const setRotateX = gsap.quickTo(el, "rotateX", {
      duration: speed,
      ease: "power2.out",
    });
    const setRotateY = gsap.quickTo(el, "rotateY", {
      duration: speed,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setRotateY(x * maxRotation);
      setRotateX(-y * maxRotation);
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxRotation, perspective, speed]);

  return elementRef;
}

