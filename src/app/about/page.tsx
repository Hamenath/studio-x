import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "About — Studio Origins, Mission & Vision",
  "Studio X is an independent creative studio founded by Hamenath B in Tamil Nadu, India. Design beyond limits.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="bg-sx-white">
      {/* Page Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Studio Identity & Philosophy
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(44px,7vw,96px)] tracking-tight leading-[0.95] text-sx-black mb-8 max-w-4xl">
            PURPOSEFUL CRAFT. TIMELESS FORM.
          </h1>
          <p className="text-lg md:text-xl text-sx-dark max-w-[54ch] leading-relaxed">
            Studio X was founded on an unapologetic belief: exceptional design is not
            a luxury reserved for global conglomerates. It is the essential
            foundation for any brand determined to leave an enduring mark.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-off border-b border-sx-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="p-10 md:p-14 bg-sx-white border border-sx-light flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
                Core Purpose
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-sx-black tracking-tight mb-6">
                OUR MISSION
              </h2>
              <p className="text-base md:text-lg text-sx-dark leading-relaxed">
                To engineer uncompromising, world-class design systems, visual identities,
                and digital experiences for startups, ambitious founders, and creators.
                We merge rigorous typographic discipline with direct client collaboration
                and transparent pricing.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-sx-light/80 text-xs font-mono text-sx-mid uppercase">
              Standard: Zero Filler · Total Clarity
            </div>
          </div>

          {/* Vision */}
          <div className="p-10 md:p-14 bg-sx-white border border-sx-light flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
                Long-Term Horizon
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-sx-black tracking-tight mb-6">
                OUR VISION
              </h2>
              <p className="text-base md:text-lg text-sx-dark leading-relaxed">
                To establish an internationally recognized creative studio rooted in
                Tamil Nadu, India, celebrated globally for elevating brand communication,
                digital interfaces, and physical media into works of enduring cultural
                and commercial value.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-sx-light/80 text-xs font-mono text-sx-mid uppercase">
              Horizon: Tamil Nadu to Worldwide Reach
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Studio Team */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-white border-b border-sx-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-sx-light">
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
              Leadership & Studio
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-sx-black">
              THE STUDIO TEAM.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Founder Card - Active */}
            <div className="p-10 md:p-12 bg-sx-off border border-sx-light flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-sx-black text-sx-white flex items-center justify-center font-heading font-extrabold text-xl mb-6">
                  HB
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-sx-black tracking-tight">
                    Hamenath B
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-sx-black text-sx-white px-2 py-0.5">
                    Active
                  </span>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-sx-mid mb-6">
                  Founder & Creative Director
                </p>
                <p className="text-base text-sx-dark leading-relaxed mb-6">
                  Hamenath directs all creative engagements, design systems, and technical
                  architecture at Studio X. With a background spanning graphic design, brand strategy,
                  and software development, he ensures every project meets exacting aesthetic
                  and functional standards.
                </p>
              </div>

              <div className="pt-6 border-t border-sx-light">
                <a
                  href="https://hamenath.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-sx-black hover:text-sx-dark transition-colors group"
                >
                  <span className="underline underline-offset-4">Visit personal website (hamenath.online)</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Planned Team Expansion / Collaborative Network */}
            <div className="p-10 md:p-12 bg-sx-white border border-dashed border-sx-light flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 border border-dashed border-sx-mid text-sx-mid flex items-center justify-center font-heading font-bold text-xl mb-6">
                  +
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading text-2xl font-bold text-sx-black tracking-tight">
                    Studio Network & Expansion
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-sx-off border border-sx-light text-sx-mid px-2 py-0.5">
                    Future
                  </span>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-sx-mid mb-6">
                  Collaborative Collective
                </p>
                <p className="text-base text-sx-dark leading-relaxed mb-4">
                  Studio X operates as an agile, founder-led studio supported by a curated
                  network of specialized 3D artists, type designers, and motion animators.
                </p>
                <p className="text-sm text-sx-mid leading-relaxed">
                  <em>Note:</em> Jo will join the core leadership team at a later date and
                  is not currently listed as active in client operations.
                </p>
              </div>

              <div className="pt-6 border-t border-sx-light/80 text-xs font-mono text-sx-mid">
                Location: Tamil Nadu, India · Collaborators Worldwide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-sx-black text-sx-white py-24 px-6 md:px-12 border-b border-sx-soft">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 pb-8 border-b border-sx-soft">
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-3">
              Studio Creed
            </span>
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight text-sx-white">
              PRINCIPLES WE STAND ON.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-sx-dark/60 bg-sx-soft">
              <span className="font-mono text-xs text-sx-mid block mb-3">01 / DIRECT ACCESS</span>
              <h3 className="font-heading text-xl font-bold text-sx-white mb-3">No Middlemen</h3>
              <p className="text-sm text-sx-mid leading-relaxed">
                You work straight with the designer conceptualizing your project. No account managers playing telephone with your vision.
              </p>
            </div>
            <div className="p-8 border border-sx-dark/60 bg-sx-soft">
              <span className="font-mono text-xs text-sx-mid block mb-3">02 / ENDURING FORM</span>
              <h3 className="font-heading text-xl font-bold text-sx-white mb-3">Anti-Trend Rigor</h3>
              <p className="text-sm text-sx-mid leading-relaxed">
                We design for longevity. Our work outlives ephemeral social media styles and generic algorithm aesthetics.
              </p>
            </div>
            <div className="p-8 border border-sx-dark/60 bg-sx-soft">
              <span className="font-mono text-xs text-sx-mid block mb-3">03 / RADICAL HONESTY</span>
              <h3 className="font-heading text-xl font-bold text-sx-white mb-3">Transparent Delivery</h3>
              <p className="text-sm text-sx-mid leading-relaxed">
                Clear deadlines, fixed scopes, and verified case studies. We value integrity above all creative vanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-sx-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-sx-black mb-6">
            LET&apos;S WORK TOGETHER.
          </h2>
          <p className="text-lg text-sx-dark mb-10 leading-relaxed max-w-xl mx-auto">
            Ready to bring sharp clarity and high execution to your next brand or digital project?
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start a project
          </Button>
        </div>
      </section>
    </div>
  );
}
