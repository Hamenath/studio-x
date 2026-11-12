"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for dynamic liquid glass depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Lock body scroll when side drawer menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-white focus:text-sx-black text-xs uppercase tracking-wider focus:outline-none"
      >
        Skip to content
      </a>

      {/* Transparent Minimalist Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 h-18 z-50 transition-all duration-300 bg-transparent ${
          scrolled ? "backdrop-blur-md border-b border-black/5" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Studio X Approved Transparent Vector Logo with Adaptive Tone */}
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity hover:opacity-85"
            aria-label="Studio X — Return to Homepage"
          >
            <Image
              src="/brand/horizontal-white-on-black.svg"
              alt="Studio X"
              width={140}
              height={34}
              priority
              className={`h-7 md:h-8 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0" : ""
              }`}
            />
          </Link>

          {/* Right Action: Adaptive Three-Line Menu Toggle Button */}
          <div className="flex items-center">
            {/* Three-Line Menu Icon Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="side-navigation-drawer"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`group relative flex items-center gap-3 h-10 px-4 border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "border-black/30 hover:border-black bg-black/5 text-black"
                  : "border-white/30 hover:border-white bg-black/20 text-white"
              }`}
            >
              <span
                className={`hidden md:inline text-xs uppercase tracking-widest font-semibold transition-colors ${
                  scrolled
                    ? "text-black group-hover:text-black"
                    : "text-neutral-200 group-hover:text-white"
                }`}
              >
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col justify-center items-end gap-1.25 w-5 h-4">
                <span
                  className={`h-[1.75px] transition-all duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  } ${isOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`}
                />
                <span
                  className={`h-[1.75px] transition-all duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  } ${isOpen ? "opacity-0" : "w-3.5 group-hover:w-5"}`}
                />
                <span
                  className={`h-[1.75px] transition-all duration-300 ${
                    scrolled ? "bg-black" : "bg-white"
                  } ${isOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Screen Backdrop Overlay (Closes drawer on click) */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-55 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Staggered Side Navigation Drawer (Slides from Right to Left, 1/4 Horizontal Size on Desktop) */}
      <aside
        id="side-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        className={`fixed top-0 right-0 bottom-0 h-screen w-full sm:w-[380px] lg:w-1/4 min-w-[320px] max-w-full z-60 bg-sx-black/95 backdrop-blur-2xl border-l border-white/15 flex flex-col justify-between p-6 sm:p-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-x-0 shadow-[-20px_0_60px_rgba(0,0,0,0.85)] pointer-events-auto"
            : "translate-x-full shadow-none pointer-events-none"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
              Navigation // Menu
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 border border-white/20 text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Staggered Navigation Links */}
        <nav
          aria-label="Drawer links"
          className="flex-1 flex flex-col justify-center py-6 space-y-2 overflow-y-auto"
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            const itemNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={link.href}
                className={`transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 55 + 100}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-baseline justify-between py-2 px-3 rounded-sm transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 text-white font-bold"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isActive
                          ? "text-white font-bold"
                          : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`text-sm transition-all duration-200 ${
                      isActive
                        ? "text-white translate-x-0 opacity-100"
                        : "text-neutral-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2"
                    }`}
                  >
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer CTA & Meta */}
        <div
          className={`pt-6 border-t border-white/10 flex flex-col gap-4 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{
            transitionDelay: isOpen ? `${navLinks.length * 55 + 120}ms` : "0ms",
          }}
        >
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 h-12 bg-white text-sx-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Start a project
            <span aria-hidden="true">→</span>
          </Link>

          <div className="flex items-center justify-between text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">
            <span>Tamil Nadu, India</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600" />
            <span>Studio X</span>
          </div>
        </div>
      </aside>
    </>
  );
}
