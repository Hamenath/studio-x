"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories, ProjectCategory } from "@/data/projects";

export default function PortfolioClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Category Filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "48px",
        }}
      >
        <button
          onClick={() => setSelectedCategory("All")}
          className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`}
        >
          All Works ({projects.length})
        </button>
        {projectCategories.map((cat) => {
          const count = projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
        className="portfolio-grid"
      >
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="card-hover"
            style={{
              display: "block",
              border: "1px solid #E5E5E5",
              background: "#FFFFFF",
              textDecoration: "none",
              color: "inherit",
              overflow: "hidden",
            }}
          >
            {/* Project Preview Tile */}
            <div
              style={{
                aspectRatio: "16/10",
                background: project.placeholderColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "clamp(60px, 8vw, 100px)",
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
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontSize: "11px",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  background: "rgba(0,0,0,0.6)",
                  color: "#FFFFFF",
                  padding: "4px 8px",
                  borderRadius: "2px",
                }}
              >
                Sample Concept
              </span>
            </div>

            {/* Info */}
            <div style={{ padding: "28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
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
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  color: "#4A4A4A",
                  lineHeight: 1.5,
                  marginBottom: "16px",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "12px",
                      background: "#F5F5F5",
                      color: "#4A4A4A",
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
