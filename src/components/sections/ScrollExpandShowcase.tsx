"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTextReveal from "@/components/ui/ScrollTextReveal";

export default function ScrollExpandShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const expandContainerRef = useRef<HTMLDivElement>(null);
  const scene3DRef = useRef<HTMLDivElement>(null);
  const floatingCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Scroll-To-Expand Animation
      if (expandContainerRef.current) {
        gsap.fromTo(
          expandContainerRef.current,
          {
            scale: 0.88,
            borderRadius: 24,
            opacity: 0.9,
          },
          {
            scale: 1,
            borderRadius: 0,
            opacity: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              end: "center 50%",
              scrub: 1,
            },
          }
        );
      }

      // 2. 3D Elements Scroll Rotation & Depth Expansion
      if (scene3DRef.current) {
        gsap.to(scene3DRef.current, {
          rotateY: 45,
          rotateX: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 3. Floating 3D Cards Staggered Depth Scrub
      floatingCardsRef.current.forEach((card, index) => {
        if (!card) return;
        const depth = (index + 1) * 35;
        gsap.to(card, {
          z: depth,
          y: -20 * (index + 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 30%",
            scrub: 1,
          },
        });
      });

      // 4. Interactive 3D Mouse Parallax Tilt
      const handleMouseMove = (e: MouseEvent) => {
        if (!expandContainerRef.current || !scene3DRef.current) return;
        const rect = expandContainerRef.current.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          return;
        }

        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(scene3DRef.current, {
          rotationY: normX * 24,
          rotationX: -normY * 20,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        if (!scene3DRef.current) return;
        gsap.to(scene3DRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      const container = expandContainerRef.current;
      if (container) {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (container) {
          container.removeEventListener("mousemove", handleMouseMove);
          container.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="expand-showcase-title"
      className="relative w-full bg-sx-black text-white py-20 md:py-32 overflow-hidden border-b border-sx-soft"
    >
      {/* Scroll-Triggered Text Reveal Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
            02 // Dimensional Engineering
          </span>
        </div>

        <ScrollTextReveal
          text="WE DESIGN IMMERSIVE DIGITAL WORLDS THAT REWRITE EXPECTATIONS. BOLD TYPOGRAPHY, PRECISION 3D INTERACTION, AND PERFORMANCE WITHOUT COMPROMISE."
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white tracking-tight"
        />
      </div>

      {/* Scroll-To-Expand Container */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-0">
        <div
          ref={expandContainerRef}
          className="w-full max-w-7xl bg-[#111111] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative transition-shadow duration-300"
          style={{
            transformOrigin: "center center",
            willChange: "transform, border-radius",
          }}
        >
          {/* Subtle Ambient Grid Background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top Industrial Readout Bar */}
          <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="uppercase tracking-wider">
                GSAP 3D Spatial Engine // v2.6
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 uppercase tracking-wider">
              <span>Perspective: 1200px</span>
              <span>Scrub: Smooth Sync</span>
              <span className="text-white font-semibold">Status: Active</span>
            </div>
          </div>

          {/* 3D Spatial Interactive Stage */}
          <div
            className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] flex items-center justify-center overflow-hidden p-6"
            style={{ perspective: 1200 }}
          >
            {/* GSAP 3D Scene Container */}
            <div
              ref={scene3DRef}
              className="relative w-full max-w-lg h-72 sm:h-80 flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {/* Central 3D Geometric Core Cube */}
              <div
                className="relative w-36 h-36 sm:w-44 sm:h-44"
                style={{
                  transformStyle: "preserve-3d",
                  animation: "spin3d 24s linear infinite",
                }}
              >
                {/* 3D Cube Faces */}
                <div
                  className="absolute inset-0 border border-white/40 bg-white/5 backdrop-blur-xs flex items-center justify-center font-mono text-xs text-white uppercase tracking-widest"
                  style={{ transform: "translateZ(72px)" }}
                >
                  <span className="text-2xl font-bold font-heading">X</span>
                </div>
                <div
                  className="absolute inset-0 border border-white/30 bg-black/40 flex items-center justify-center font-mono text-xs text-neutral-400 uppercase"
                  style={{ transform: "rotateY(180deg) translateZ(72px)" }}
                >
                  STUDIO
                </div>
                <div
                  className="absolute inset-0 border border-white/30 bg-white/5 flex items-center justify-center font-mono text-xs text-neutral-400"
                  style={{ transform: "rotateY(-90deg) translateZ(72px)" }}
                >
                  3D ENGINE
                </div>
                <div
                  className="absolute inset-0 border border-white/30 bg-black/40 flex items-center justify-center font-mono text-xs text-neutral-400"
                  style={{ transform: "rotateY(90deg) translateZ(72px)" }}
                >
                  GSAP // CORE
                </div>
                <div
                  className="absolute inset-0 border border-white/20 bg-white/5"
                  style={{ transform: "rotateX(90deg) translateZ(72px)" }}
                />
                <div
                  className="absolute inset-0 border border-white/20 bg-black/60"
                  style={{ transform: "rotateX(-90deg) translateZ(72px)" }}
                />
              </div>

              {/* Floating 3D Capability Cards Around the Core */}
              {/* Card 1: Left Foreground */}
              <div
                ref={(el) => {
                  if (el) floatingCardsRef.current[0] = el;
                }}
                className="absolute -left-4 sm:-left-12 -top-8 sm:-top-10 p-4 sm:p-5 bg-black/85 border border-white/25 backdrop-blur-md max-w-[200px] sm:max-w-[240px] shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                style={{
                  transform: "translateZ(60px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  01 // Craft
                </span>
                <h4 className="font-heading text-sm sm:text-base font-bold uppercase text-white mb-1">
                  Kinetic Geometry
                </h4>
                <p className="text-[11px] text-neutral-300 leading-normal">
                  Smooth 3D transformations driven by GPU-accelerated GSAP pipelines.
                </p>
              </div>

              {/* Card 2: Right Background */}
              <div
                ref={(el) => {
                  if (el) floatingCardsRef.current[1] = el;
                }}
                className="absolute -right-4 sm:-right-12 -bottom-6 sm:-bottom-8 p-4 sm:p-5 bg-black/85 border border-white/25 backdrop-blur-md max-w-[200px] sm:max-w-[240px] shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
                style={{
                  transform: "translateZ(85px)",
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  02 // Precision
                </span>
                <h4 className="font-heading text-sm sm:text-base font-bold uppercase text-white mb-1">
                  Scroll Orchestration
                </h4>
                <p className="text-[11px] text-neutral-300 leading-normal">
                  Zero jitter, sub-millisecond scroll scrub synchronized to viewport.
                </p>
              </div>

              {/* Card 3: Top Right Floating Chip */}
              <div
                ref={(el) => {
                  if (el) floatingCardsRef.current[2] = el;
                }}
                className="hidden md:flex items-center gap-3 absolute right-4 top-2 px-4 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
                style={{
                  transform: "translateZ(110px)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                Real-Time 3D Parallax
              </div>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-8 py-5 border-t border-white/10 bg-black/60 backdrop-blur-md">
            <div className="text-xs text-neutral-400 font-mono flex items-center gap-3">
              <span className="text-white font-semibold uppercase">Explore</span>
              <span>•</span>
              <span>Interactive Mouse & Scroll Spatial Engine</span>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors pb-1 border-b border-white"
            >
              See our projects in action →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin3d {
          0% {
            transform: rotateX(15deg) rotateY(0deg);
          }
          50% {
            transform: rotateX(-15deg) rotateY(180deg);
          }
          100% {
            transform: rotateX(15deg) rotateY(360deg);
          }
        }
      `}</style>
    </section>
  );
}
