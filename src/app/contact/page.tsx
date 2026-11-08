import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Contact — Start a Collaboration",
  "Inquire about brand identity, web design, social content, motion graphics, or bespoke creative design engagements with Studio X.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="bg-sx-white">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Start a Collaboration
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(44px,7vw,96px)] tracking-tight leading-[0.95] text-sx-black mb-8 max-w-4xl">
            LET&apos;S TALK DESIGN.
          </h1>
          <p className="text-lg md:text-xl text-sx-dark max-w-[54ch] leading-relaxed">
            Tell us about your brand, your goals, and what you need designed. We review
            every brief directly and reply within one to two business days.
          </p>
        </div>
      </section>

      {/* Main Form + Details Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8">
            <div className="mb-8 pb-4 border-b border-sx-light">
              <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight">
                Project Inquiry Brief
              </h2>
              <p className="text-xs text-sx-mid mt-1 font-mono uppercase">
                All fields marked with an asterisk (*) are required
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Studio Sidebar Info */}
          <div className="lg:col-span-4 bg-sx-off border border-sx-light p-8 md:p-10 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-2">
                Studio Location
              </span>
              <p className="font-heading text-lg font-bold text-sx-black">
                Tamil Nadu, India
              </p>
              <p className="text-xs text-sx-dark mt-1 leading-relaxed">
                Operating remotely across India and internationally.
              </p>
            </div>

            <div className="pt-6 border-t border-sx-light">
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-2">
                Founder
              </span>
              <p className="font-heading text-lg font-bold text-sx-black">
                Hamenath B
              </p>
              <a
                href="https://hamenath.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sx-black hover:underline mt-1 block"
              >
                hamenath.online ↗
              </a>
            </div>

            <div className="pt-6 border-t border-sx-light">
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-2">
                Direct Inquiries
              </span>
              <p className="text-sm font-mono text-sx-black">
                hello@studioxdesign.space.example
              </p>
            </div>

            <div className="pt-6 border-t border-sx-light">
              <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-2">
                Channels Notice
              </span>
              <p className="text-xs text-sx-mid leading-relaxed">
                Direct WhatsApp and business phone lines will be published following
                telecommunication registration verification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
