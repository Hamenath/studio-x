import type { Metadata } from "next";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { individualPrices, pricingPackages, pricingNote } from "@/data/pricing";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Pricing & Studio Packages — Transparent Rates",
  "Transparent starting price ranges and structured studio packages for brand identity, web design, content, and creative production.",
  "/pricing"
);

export default function PricingPage() {
  return (
    <div className="bg-sx-white">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Transparent Investment
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(44px,7vw,96px)] tracking-tight leading-[0.95] text-sx-black mb-8 max-w-4xl">
            ACCESSIBLE DESIGN. PURE CRAFT.
          </h1>
          <p className="text-lg md:text-xl text-sx-dark max-w-[54ch] leading-relaxed">
            Exceptional design should be accessible to ambitious businesses at every
            stage. We provide clear, indicative ranges and curated packages with no
            hidden charges.
          </p>
        </div>
      </section>

      {/* 4 Packages Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-off border-b border-sx-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
              Curated Bundles
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-sx-black">
              STUDIO PACKAGES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg) => {
              const isHighlight = pkg.highlight;
              return (
                <div
                  key={pkg.id}
                  className={`p-8 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-0.5 ${
                    isHighlight
                      ? "bg-sx-black text-sx-white border-sx-black shadow-lg"
                      : "bg-sx-white text-sx-black border-sx-light shadow-sm"
                  }`}
                >
                  <div>
                    {isHighlight && (
                      <span className="inline-block text-[11px] font-mono uppercase tracking-widest bg-sx-white text-sx-black px-2.5 py-0.5 mb-6">
                        Recommended
                      </span>
                    )}

                    <h3 className="font-heading text-2xl font-bold tracking-tight mb-2">
                      {pkg.name}
                    </h3>

                    <div className="font-heading text-4xl font-extrabold tracking-tight mb-8">
                      {pkg.price}
                      <span className="text-xs font-normal font-mono block mt-1 opacity-70">
                        Starting base estimate
                      </span>
                    </div>

                    <div className="border-t pt-6 mb-8 border-current/20">
                      <span className="font-mono text-xs uppercase tracking-wider block mb-4 opacity-75">
                        Deliverables Include:
                      </span>
                      <ul className="space-y-3 text-xs md:text-sm">
                        {pkg.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                      variant={isHighlight ? "white" : "primary"}
                      size="md"
                      className="w-full"
                    >
                      Choose {pkg.name}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Rates Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-white border-b border-sx-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
              Itemized Menu
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-sx-black">
              STARTING PRICE RANGES.
            </h2>
          </div>

          <div className="border-t border-sx-black">
            {individualPrices.map((item) => (
              <div
                key={item.name}
                className="py-5 flex items-center justify-between border-b border-sx-light hover:bg-sx-off/50 px-2 transition-colors"
              >
                <span className="text-sm md:text-base font-medium text-sx-black">
                  {item.name}
                </span>
                <span className="font-mono text-sm md:text-base font-bold text-sx-black">
                  {item.range}
                  {item.unit && (
                    <span className="text-xs text-sx-mid font-normal ml-1">
                      {item.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Mandatory Notice */}
          <div className="mt-12 p-6 md:p-8 bg-sx-off border-l-4 border-sx-black">
            <p className="text-sm md:text-base text-sx-dark leading-relaxed">
              <strong className="text-sx-black font-semibold">Important Notice: </strong>
              {pricingNote}
            </p>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="bg-sx-black text-sx-white py-24 px-6 md:px-12 border-b border-sx-soft text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Bespoke Architecture
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-sx-white mb-6">
            HAVE A CUSTOM SCOPE?
          </h2>
          <p className="text-base md:text-lg text-sx-mid leading-relaxed mb-10 max-w-xl mx-auto">
            Need an ongoing design retainer, an enterprise application redesign, or a rapid turnaround launch? Talk directly with our founder.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Request a custom quote
          </Button>
        </div>
      </section>
    </div>
  );
}
