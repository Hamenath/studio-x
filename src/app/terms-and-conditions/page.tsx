import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Terms & Conditions — Studio X",
  "Terms and conditions for creative design engagements, intellectual property rights, and deliverables with Studio X.",
  "/terms-and-conditions"
);

export default function TermsPage() {
  return (
    <div className="bg-sx-white">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Engagement Standards
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(40px,6vw,84px)] tracking-tight leading-[0.95] text-sx-black mb-6">
            TERMS & CONDITIONS
          </h1>
          <p className="text-sm font-mono text-sx-mid">
            Last Updated: November 2024 · Studio X, Tamil Nadu, India
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-sx-white">
        <div className="max-w-3xl mx-auto space-y-12 text-sx-dark text-base leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              1. Project Scope & Binding Quotations
            </h2>
            <p>
              All rates and package pricing published on <code className="font-mono text-xs text-sx-black bg-sx-off px-1.5 py-0.5">studioxdesign.space</code> represent indicative starting parameters. Formal commercial engagements initiate exclusively upon written acceptance of an itemized statement of work, milestone schedule, and quotation agreed between Studio X and the client.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              2. Iteration Cycles & Revisions
            </h2>
            <p>
              Each studio proposal delineates explicit review gates and revision rounds for concepts and production deliverables. Structural redesigns or scope additions requested subsequent to milestone sign-off will be quoted as separate work packages or billed at agreed hourly rates.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              3. Intellectual Property Transfer
            </h2>
            <p>
              Full intellectual property rights for approved deliverables (vector marks, type specifications, identity kits, source website code, and print artwork) transfer comprehensively to the client upon receipt of final invoice settlement. Studio X retains the standard right to showcase non-confidential deliverables for portfolio and studio archival purposes unless restricted by prior non-disclosure agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              4. Client Materials & Warranties
            </h2>
            <p>
              Clients warrant that all reference imagery, brand assets, photography, and text copy supplied to Studio X are either owned by them or appropriately licensed. Clients are responsible for timely provision of feedback to preserve agreed milestone schedules.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              5. Governing Jurisdiction
            </h2>
            <p>
              These engagement terms are governed by the legal framework of Tamil Nadu, India. For inquiries or tailored contract terms, please connect through our{" "}
              <Link href="/contact" className="text-sx-black underline underline-offset-4 hover:text-sx-dark">
                contact channel
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
