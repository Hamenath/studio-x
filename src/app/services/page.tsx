import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { serviceCategories } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Services — Disciplines & Capabilities",
  "Explore Studio X's comprehensive design services across brand identity, web design, digital content, motion graphics, and print media.",
  "/services"
);

export default function ServicesPage() {
  return (
    <div className="bg-sx-white">
      {/* Page Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Practice & Disciplines
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(44px,7vw,96px)] tracking-tight leading-[0.95] text-sx-black mb-8 max-w-4xl">
            DESIGN SERVICES FOR AMBITIOUS BRANDS.
          </h1>
          <p className="text-lg md:text-xl text-sx-dark max-w-[54ch] leading-relaxed">
            We work across brand identity, digital products, social content, motion,
            and print. Each project is tailored to your business objectives with clear
            deliverables and upfront pricing.
          </p>

          {/* Category Quick Links */}
          <div className="mt-12 pt-8 border-t border-sx-light flex flex-wrap gap-3">
            {serviceCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="font-mono text-xs uppercase tracking-wider text-sx-dark hover:text-sx-black bg-sx-off px-4 py-2 border border-sx-light hover:border-sx-mid transition-colors"
              >
                {category.name} ↓
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Full Categories Sections */}
      {serviceCategories.map((category, index) => {
        const isOffWhite = index % 2 === 1;
        const sectionBg = isOffWhite ? "bg-sx-off" : "bg-sx-white";

        return (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 md:py-28 px-6 md:px-12 border-b border-sx-light scroll-mt-[72px] ${sectionBg}`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 border-b border-sx-light/80 mb-12">
                <div className="lg:col-span-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
                    0{index + 1} / SERVICE CATEGORY
                  </span>
                  <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-sx-black mb-4">
                    {category.name}
                  </h2>
                  <p className="font-heading text-lg md:text-xl text-sx-dark font-medium italic">
                    &ldquo;{category.tagline}&rdquo;
                  </p>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between">
                  <p className="text-base md:text-lg text-sx-dark leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-sx-mid mb-3">
                      Core Advantages:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-sx-black">
                      {category.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-sx-black shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-8 bg-sx-white border border-sx-light flex flex-col justify-between hover:-translate-y-0.5 transition-transform duration-300 shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <h4 className="font-heading text-xl font-bold text-sx-black tracking-tight">
                          {item.name}
                        </h4>
                        <span className="font-mono text-xs text-sx-dark bg-sx-off px-2 py-1 border border-sx-light/80 shrink-0">
                          from {item.startingPrice}
                        </span>
                      </div>
                      <p className="text-sm text-sx-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-sx-light/60">
                      <Link
                        href={`/contact?service=${encodeURIComponent(item.name)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sx-black hover:underline"
                      >
                        Request proposal
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Services Bottom CTA */}
      <section className="bg-sx-black text-sx-white py-24 px-6 md:px-12 border-b border-sx-soft">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
              Need a custom bundle?
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-sx-white mb-4">
              READY TO COMMENCE?
            </h2>
            <p className="text-base text-sx-mid max-w-xl leading-relaxed">
              We provide itemized quotations and packaged solutions configured to your
              timeline, release milestones, and production scale.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-4">
            <Button href="/contact" variant="white" size="lg">
              Start a project
            </Button>
            <Button href="/pricing" variant="white-outline" size="lg">
              View packages & pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
