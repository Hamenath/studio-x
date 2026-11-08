"use client";

import Link from "next/link";
import { ShaderBackground } from "@/components/ui/purp-wave-shader";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full min-h-screen overflow-hidden bg-sx-black text-white flex flex-col justify-between pt-24 pb-8 md:pt-28 md:pb-12 px-6 md:px-12"
    >
      {/* 21st.dev Purp Wave Shader Canvas (hover interaction disabled) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShaderBackground className="w-full h-full" cursorEnabled={false} />
        {/* Optical gradient shade for maximum text legibility */}
        <div className="absolute inset-0 bg-linear-to-t from-sx-black via-sx-black/40 to-sx-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between">
        {/* Eyebrow Pill */}
        <div className="pt-2 animate-fade-in">
          <span className="inline-flex items-center gap-2.5 h-8 px-3.5 bg-black/60 border border-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Studio X / Independent Creative Agency / Tamil Nadu, India
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="my-auto py-6">
          <h1
            id="hero-title"
            className="font-bold tracking-tight text-white select-none text-[clamp(54px,10vw,140px)] leading-[0.88]"
          >
            <span className="block">DESIGN</span>
            <span className="block">BEYOND</span>
            <span className="block">LIMITS.</span>
          </h1>
        </div>

        {/* Subhead, Actions & Location Caption */}
        <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[48ch]">
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed font-semibold">
              We create meaningful digital experiences and visual identities for
              businesses, creators and ambitious brands.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 h-12 px-6 bg-white text-black font-semibold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors duration-200 active:translate-y-px shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
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
              className="inline-flex items-center gap-2.5 h-12 px-6 bg-black/50 text-white border border-white/30 backdrop-blur-md font-semibold uppercase tracking-wider text-sm hover:bg-white/15 hover:border-white transition-colors duration-200 active:translate-y-px"
            >
              <span className="grid place-items-center w-5 h-5 bg-white text-black -ml-1 text-[9px] font-bold">
                ▶
              </span>
              Start a Project
            </Link>
          </div>

          <div className="hidden lg:block text-right text-xs text-neutral-400 uppercase tracking-widest font-semibold leading-relaxed">
            <span>Studio X</span>
            <br />
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
