"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { StudioXGlassReveal } from "@/components/ui/liquid-glass-logo-reveal";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  if (typeof window === "undefined") return false;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return false;
  return true; // Always show intro glass animation on page load and refresh
}

function getServerSnapshot() {
  return false;
}

export default function StudioXIntroOverlay() {
  const shouldShow = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);
  const [fading, setFading] = useState(false);

  // Clear any legacy session storage key
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem("studiox_intro_seen");
      } catch {
        // Ignore storage errors in private browsing
      }
    }
  }, []);

  const dismiss = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setDismissed(true);
    }, 700);
  }, []);

  useEffect(() => {
    if (!shouldShow || dismissed) return;

    // Fallback auto-dismiss timer in case WebGL context is slow
    const timer = setTimeout(() => {
      dismiss();
    }, 3600);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shouldShow, dismissed, dismiss]);

  if (!shouldShow || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Studio X Intro Animation"
      onClick={dismiss}
      className={`fixed inset-0 z-100 bg-sx-black flex flex-col items-center justify-between p-6 md:p-12 transition-opacity duration-700 cursor-pointer ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center text-xs font-mono uppercase tracking-widest text-sx-mid/60 pt-2">
        <span>Studio X / 2026</span>
        <span>Tamil Nadu, India</span>
      </div>

      <div className="flex flex-col items-center justify-center my-auto w-full max-w-md">
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
          <StudioXGlassReveal
            theme="dark"
            loop={false}
            hold={0.8}
            speed={1.0}
            onComplete={dismiss}
            className="w-full h-full"
          />
        </div>
        <div className="mt-8 text-center">
          <span className="font-heading font-extrabold tracking-widest text-2xl md:text-3xl text-sx-white block">
            STUDIO X
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sx-mid mt-2 block">
            Design Beyond Limits.
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center pb-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="text-xs font-mono uppercase tracking-widest text-sx-mid hover:text-sx-white border-b border-sx-dark pb-0.5 transition-colors cursor-pointer"
        >
          Skip Intro [ESC]
        </button>
      </div>
    </div>
  );
}
