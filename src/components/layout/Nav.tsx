"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

  // Close mobile menu on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Lock body scroll when mobile menu is open
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

      {/* Liquid Glassmorphism Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 h-18 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]"
            : "bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          {/* Studio X Approved White-on-Black Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Studio X — Return to Homepage"
          >
            <Image
              src="/brand/horizontal-white-on-black.svg"
              alt="Studio X"
              width={140}
              height={34}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links (Visible on lg >= 1024px) */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[15px] font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA and Mobile Hamburger Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center h-10.5 px-6 text-xs uppercase tracking-wider bg-white text-sx-black border border-white hover:bg-sx-off transition-all duration-200 active:translate-y-px font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
            >
              Start a project
            </Link>

            {/* Mobile / Tablet Hamburger Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="lg:hidden flex items-center justify-center w-11 h-11 border border-white/20 text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Sheet */}
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 top-18 bg-black/95 backdrop-blur-2xl z-40 flex flex-col justify-between p-6 md:p-12 lg:hidden overflow-y-auto border-t border-white/10 text-white"
        >
          <div className="flex flex-col pt-4">
            <span className="text-xs uppercase tracking-widest text-sx-mid mb-6 font-semibold">
              Navigation
            </span>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-3xl md:text-4xl font-bold tracking-tight pb-3 border-b border-white/10 transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 pb-6 flex flex-col gap-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center h-13 bg-white text-sx-black text-xs uppercase tracking-wider hover:bg-sx-off transition-colors font-semibold"
            >
              Start a project
            </Link>

            <div className="flex flex-col text-xs text-sx-mid">
              <span>Tamil Nadu, India</span>
              <span className="mt-1">Design Beyond Limits.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
