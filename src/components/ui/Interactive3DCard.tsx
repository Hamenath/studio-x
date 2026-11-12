"use client";

import React, { useRef, useState, useCallback } from "react";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // degrees
  depth?: number; // px for child elements
}

export default function Interactive3DCard({
  children,
  className = "",
  maxRotation = 10,
  depth = 24,
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rX = (0.5 - y) * maxRotation;
      const rY = (x - 0.5) * maxRotation;

      setRotX(rX);
      setRotY(rY);
      setGlarePos({
        x: x * 100,
        y: y * 100,
        opacity: 0.35,
      });
    },
    [maxRotation]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
          : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* 3D Depth Content Layer */}
      <div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? `translateZ(${depth}px)` : "translateZ(0px)",
          transition: "transform 0.3s ease-out",
        }}
      >
        {children}
      </div>

      {/* Apple-style Interactive Glass Specular Glare */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-inherit"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.2), transparent 70%)`,
        }}
      />
    </div>
  );
}

