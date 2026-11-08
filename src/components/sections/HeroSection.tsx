"use client";

import Link from "next/link";
import { ShaderBackground } from "@/components/ui/purp-wave-shader";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full min-h-screen overflow-hidden bg-sx-black text-white flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-14"
    >
      {/* 21st.dev Purp Wave Shader Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShaderBackground className="w-full h-full" cursorEnabled={false} />
        {/* Optical gradient shade for maximum text legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-sx-black via-sx-black/40 to-sx-black/30 pointer-events-none" />
      </div>

      {/* Hero Centered Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Eyebrow Pill */}
        <div className="mb-6 animate-fade-in max-w-full px-2">
          <span className="inline-flex items-center gap-2.5 h-7 md:h-8 px-3.5 md:px-4 bg-black/60 border border-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
            <span className="hidden sm:inline">Studio X / Independent Creative Agency / Tamil Nadu, India</span>
            <span className="sm:hidden">Studio X / Creative Agency / India</span>
          </span>
        </div>

        {/* Massive Centered Editorial Headline */}
        <h1
          id="hero-title"
          className="font-bold tracking-tight text-white select-none text-[clamp(44px,8.5vw,118px)] leading-[0.92] max-w-4xl mx-auto mb-6 uppercase"
        >
          <span className="block">DESIGN BEYOND</span>
          <span className="block">LIMITS.</span>
        </h1>

        {/* Centered Subhead */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed font-semibold mb-8 md:mb-10 text-balance px-2">
          We create meaningful digital experiences and visual identities for
          businesses, creators and ambitious brands worldwide.
        </p>

        {/* Centered Dual Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors duration-200 active:translate-y-px shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
          >
            Explore Our Work
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 h-12 px-7 bg-black/50 text-white border border-white/30 backdrop-blur-md font-semibold uppercase tracking-wider text-sm hover:bg-white/15 hover:border-white transition-colors duration-200 active:translate-y-px shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <span className="grid place-items-center w-5 h-5 bg-white text-black -ml-1 text-[9px] font-bold">
              ▶
            </span>
            Start a Project
          </Link>
        </div>

        {/* Centered Meta Bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/15 w-full max-w-lg mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-neutral-400 uppercase tracking-widest font-semibold px-4">
          <span>Tamil Nadu, India</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Design Beyond Limits</span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span>Est. 2026</span>
        </div>
      </div>
    </section>
  );
}
