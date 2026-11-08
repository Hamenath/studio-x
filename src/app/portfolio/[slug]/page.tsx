import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata("Project Not Found", "The requested project could not be found.");
  }

  return createMetadata(
    project.title,
    project.description,
    `/portfolio/${project.slug}`
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Project Header */}
      <section
        style={{
          background: "#FFFFFF",
          paddingTop: "clamp(64px, 8vw, 100px)",
          paddingBottom: "clamp(48px, 6vw, 64px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div className="wrap">
          <div style={{ marginBottom: "24px" }}>
            <Link
              href="/portfolio"
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#9A9A9A",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← Back to Selected Work
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: "#0A0A0A",
                color: "#FFFFFF",
                padding: "3px 8px",
                borderRadius: "2px",
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#9A9A9A",
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              {project.year}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontStyle: "italic",
                color: "#9A9A9A",
              }}
            >
              (Demonstration Concept)
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 72px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#0A0A0A",
              maxWidth: "18ch",
              marginBottom: "24px",
            }}
          >
            {project.title}
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
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Hero Visual Area */}
      <section style={{ background: "#F5F5F5", borderBottom: "1px solid #E5E5E5" }}>
        <div className="wrap" style={{ padding: "clamp(48px, 6vw, 96px) 0" }}>
          <div
            style={{
              aspectRatio: "16/9",
              background: project.placeholderColor,
              border: "1px solid #E5E5E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "clamp(80px, 14vw, 180px)",
                fontWeight: 800,
                color:
                  project.placeholderColor === "#0A0A0A" ||
                  project.placeholderColor === "#1A1A1A" ||
                  project.placeholderColor === "#4A4A4A"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.06)",
                letterSpacing: "-0.04em",
                userSelect: "none",
              }}
            >
              {project.id}
            </span>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section
        style={{
          background: "#FFFFFF",
          paddingTop: "clamp(64px, 8vw, 96px)",
          paddingBottom: "clamp(64px, 8vw, 96px)",
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "48px",
            }}
            className="case-study-grid"
          >
            {/* Meta Sidebar */}
            <div>
              <div style={{ marginBottom: "32px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9A9A9A",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Deliverables
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "13px",
                        background: "#F5F5F5",
                        color: "#0A0A0A",
                        padding: "4px 10px",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9A9A9A",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Project Status
                </span>
                <p style={{ fontSize: "14px", color: "#4A4A4A" }}>
                  Demonstration Case Study
                </p>
              </div>

              <Link href="/contact" className="btn btn-primary" style={{ width: "100%" }}>
                Inquire about this style
              </Link>
            </div>

            {/* Narrative */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  color: "#0A0A0A",
                }}
              >
                Project Overview & Design Approach
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#4A4A4A",
                  marginBottom: "28px",
                }}
              >
                {project.longDescription}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#4A4A4A",
                  marginBottom: "40px",
                }}
              >
                At Studio X, our methodology emphasizes reduction, legibility, and high-contrast
                typographic balance. By stripping away extraneous decorative embellishments,
                the core content and brand message operate with maximum clarity.
              </p>

              {/* Secondary visual demonstration */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    aspectRatio: "1/1",
                    background: "#F5F5F5",
                    border: "1px solid #E5E5E5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#9A9A9A",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 600,
                  }}
                >
                  SYSTEM 01
                </div>
                <div
                  style={{
                    aspectRatio: "1/1",
                    background: "#0A0A0A",
                    border: "1px solid #1A1A1A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-space-grotesk)",
                    fontWeight: 600,
                  }}
                >
                  SYSTEM 02
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E5E5E5" }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "36px 0",
            }}
          >
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9A9A9A",
                  }}
                >
                  ← Previous Project
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                  }}
                >
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9A9A9A",
                  }}
                >
                  Next Project →
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0A0A0A",
                  }}
                >
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .case-study-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
