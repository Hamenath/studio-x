import { Metadata } from "next";
import Link from "next/link";
import PortfolioClient from "./PortfolioClient";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Portfolio",
  "Explore creative design projects and concept studies by Studio X across branding, web design, motion, social and print."
);

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section
        style={{
          background: "#FFFFFF",
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div className="wrap">
          <p
            style={{
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#9A9A9A",
              marginBottom: "20px",
              fontFamily: "var(--font-inter)",
            }}
          >
            Archive & Case Studies
          </p>
          <h1
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 800,
              fontSize: "clamp(44px, 6vw, 96px)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#0A0A0A",
              maxWidth: "16ch",
              marginBottom: "24px",
            }}
          >
            SELECTED WORK.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 1.4vw, 20px)",
              color: "#4A4A4A",
              fontFamily: "var(--font-inter)",
              maxWidth: "52ch",
              lineHeight: 1.6,
            }}
          >
            A curated collection of concept explorations, design systems and demonstration
            projects developed at Studio X.
          </p>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section
        style={{
          background: "#FFFFFF",
          paddingTop: "clamp(48px, 6vw, 80px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div className="wrap">
          <PortfolioClient />

          {/* Verification Notice */}
          <div
            style={{
              marginTop: "48px",
              padding: "20px 24px",
              background: "#F5F5F5",
              border: "1px solid #E5E5E5",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#9A9A9A",
                fontFamily: "var(--font-inter)",
                fontStyle: "italic",
              }}
            >
              Note: Work displayed represents design concepts and studio demonstration projects
              illustrating our aesthetic standards and scope of capability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0A0A0A",
          color: "#FFFFFF",
          paddingTop: "clamp(80px, 10vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
          textAlign: "center",
        }}
      >
        <div className="wrap">
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              color: "#FFFFFF",
            }}
          >
            HAVE A PROJECT IN MIND?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#9A9A9A",
              maxWidth: "48ch",
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Let&apos;s build something distinctive together. Discuss your scope, goals and timeline.
          </p>
          <Link href="/contact" className="btn btn-white btn-lg">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
