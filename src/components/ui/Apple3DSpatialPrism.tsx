"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";

export default function Apple3DSpatialPrism({
  className = "",
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prismRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !prismRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Gentle continuous floating 3D idle animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(prismRef.current, {
      y: -10,
      rotateZ: 4,
      duration: 3.5,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setRotX(-y * 28);
    setRotY(x * 32);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 900,
      }}
      aria-hidden="true"
    >
      <div
        ref={prismRef}
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered
            ? `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.08, 1.08, 1.08)`
            : "rotateX(8deg) rotateY(-8deg) scale3d(1, 1, 1)",
        }}
      >
        {/* Layer 1: Frosted Ambient Glow Base */}
        <div
          className="absolute inset-0 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
          style={{
            transform: "translateZ(0px)",
          }}
        />

        {/* Layer 2: Gloss Specular Rim Reflection */}
        <div
          className="absolute inset-1 rounded-2xl border border-white/30 bg-gradient-to-br from-white/15 via-transparent to-white/5 pointer-events-none"
          style={{
            transform: "translateZ(14px)",
          }}
        />

        {/* Layer 3: Central Apple-style 3D Geometric Studio X Mark */}
        <div
          className="relative flex items-center justify-center w-14 h-14"
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
            fill="none"
          >
            <path
              d="M15 15 L38 50 L15 85 L32 85 L50 58 L68 85 L85 85 L62 50 L85 15 L68 15 L50 42 L32 15 Z"
              fill="url(#prismGrad)"
            />
            <defs>
              <linearGradient id="prismGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#E5E5E5" />
                <stop offset="100%" stopColor="#9A9A9A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 4: Floating Micro Tech Specular Beacon */}
        <div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#FFFFFF] animate-pulse"
          style={{
            transform: "translateZ(44px)",
          }}
        />
      </div>
    </div>
  );
}
