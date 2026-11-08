import Link from "next/link";
import Image from "next/image";
import {
  footerNavLinks,
  footerServiceLinks,
  footerLegalLinks,
} from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-sx-black text-sx-white pt-24 pb-12 border-t border-sx-soft">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Row 1: Studio X Logo, Tagline, Description */}
        <div className="pb-16 border-b border-sx-soft/80">
          <Link href="/" className="inline-block mb-6" aria-label="Studio X — Return to Homepage">
            <Image
              src="/brand/horizontal-white-on-black.svg"
              alt="Studio X logo"
              width={160}
              height={38}
              className="h-9 w-auto"
            />
          </Link>
          <div className="max-w-2xl">
            <p className="font-heading text-xl md:text-2xl font-bold tracking-tight text-sx-white mb-3">
              Design Beyond Limits.
            </p>
            <p className="text-sm md:text-base text-sx-mid leading-relaxed max-w-xl">
              An independent creative design studio focused on building distinctive
              brands, digital experiences, and visual communication that endure.
            </p>
          </div>
        </div>

        {/* Row 2: 3 Column Links (Navigation, Services, Connect) */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border-b border-sx-soft/80">
          {/* Column 1: Navigation */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-6">
              Navigation
            </span>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sx-light/80 hover:text-sx-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-6">
              Services
            </span>
            <ul className="space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sx-light/80 hover:text-sx-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-6">
              Connect
            </span>
            <div className="space-y-4 text-sm text-sx-light/80">
              <div>
                <span className="block text-xs text-sx-mid font-mono uppercase">Inquiries</span>
                <Link
                  href="/contact"
                  className="hover:text-sx-white transition-colors text-sx-white underline underline-offset-4"
                >
                  Start a project
                </Link>
              </div>
              <div>
                <span className="block text-xs text-sx-mid font-mono uppercase">Founder</span>
                <a
                  href="https://hamenath.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sx-white transition-colors"
                >
                  Hamenath B (hamenath.online) ↗
                </a>
              </div>
              <div>
                <span className="block text-xs text-sx-mid font-mono uppercase">Location</span>
                <span className="text-sx-mid">Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Copyright, Privacy Policy, Terms & Conditions, Hamenath B */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-sx-dark">
          <p>© 2024 Studio X. Tamil Nadu, India. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-sx-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://hamenath.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sx-light transition-colors"
            >
              Founder: Hamenath B
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
