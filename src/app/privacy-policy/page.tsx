import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Privacy Policy — Studio X",
  "Privacy Policy for Studio X. How we collect, handle and protect client project information and communication.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-sx-white">
      {/* Header */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-sx-light bg-sx-white">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
            Legal & Compliance
          </span>
          <h1 className="font-heading font-extrabold text-[clamp(40px,6vw,84px)] tracking-tight leading-[0.95] text-sx-black mb-6">
            PRIVACY POLICY
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
              1. Overview & Studio Commitment
            </h2>
            <p>
              Studio X (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is an independent creative design studio founded by Hamenath B, operating in Tamil Nadu, India. We respect your privacy and are committed to safeguarding any personal or business information you provide when using our website (<code className="font-mono text-xs text-sx-black bg-sx-off px-1.5 py-0.5">studioxdesign.space</code>) or initiating project discussions with us.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you voluntarily submit when filling out our project inquiry brief, requesting quotations, or contacting us directly via email:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sx-dark text-sm">
              <li><strong className="text-sx-black">Contact Details:</strong> Full name, email address, phone number or WhatsApp handle.</li>
              <li><strong className="text-sx-black">Organization Details:</strong> Business name, current website URL, industry sector, and company scale.</li>
              <li><strong className="text-sx-black">Project Requirements:</strong> Scope description, preferred timelines, target deliverables, and reference links.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              3. Purpose & Utilization of Data
            </h2>
            <p className="mb-3">The information collected is used strictly for:</p>
            <ul className="list-disc pl-6 space-y-2 text-sx-dark text-sm">
              <li>Reviewing creative briefs and producing itemized project proposals.</li>
              <li>Executing commissioned client design, web development, and motion deliverables.</li>
              <li>Issuing commercial invoices, milestones receipts, and asset handovers.</li>
            </ul>
            <p className="mt-4">
              We never sell, lease, or monetize your contact information or project briefs with third-party advertisers or data brokers.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              4. Confidentiality & Non-Disclosure
            </h2>
            <p>
              All proprietary business assets, unpublished product designs, trade secrets, and pitch decks shared with Studio X are handled under strict professional confidentiality. We never publish commissioned client work in our public portfolio without explicit written authorization.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-sx-black tracking-tight mb-4">
              5. Inquiries & Corrections
            </h2>
            <p>
              If you have inquiries regarding our data handling or wish to request data updates or removal, please contact us directly via our{" "}
              <Link href="/contact" className="text-sx-black underline underline-offset-4 hover:text-sx-dark">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
