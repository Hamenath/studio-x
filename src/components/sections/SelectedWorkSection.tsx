"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useGsapReveal } from "@/animations/useGsapReveal";
import { projects } from "@/data/projects";
import ProjectVisualPreview from "@/components/ui/ProjectVisualPreview";
import Interactive3DCard from "@/components/ui/Interactive3DCard";

export default function SelectedWorkSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef);

  // Show 6 sample projects
  const sampleProjects = projects.slice(0, 6);

  return (
    <section
      ref={containerRef}
      aria-labelledby="work-heading"
      className="bg-sx-black text-sx-white py-20 md:py-32 px-6 md:px-12 border-b border-sx-soft"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-sx-soft">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
              Curated Portfolio
            </span>
            <h2
              id="work-heading"
              className="font-heading font-extrabold text-[clamp(40px,4vw,64px)] tracking-tight leading-none text-sx-white"
            >
              SELECTED WORK.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-sx-white hover:text-sx-mid transition-colors pb-1 border-b border-sx-white"
          >
            View all work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Projects Grid with Apple-Style Interactive 3D Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((project, idx) => (
            <Interactive3DCard key={project.id} className="reveal h-full" maxRotation={8} depth={20}>
              <Link
                href={`/portfolio/${project.slug}`}
                data-concept="true"
                data-is-sample="true"
                className="group flex flex-col justify-between h-full p-6 md:p-8 bg-sx-soft border border-sx-dark/60 hover:border-sx-mid transition-all duration-300"
              >
                <div>
                  {/* Visual Preview Mockup */}
                  <ProjectVisualPreview
                    category={project.category}
                    title={project.title}
                  />

                  {/* Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold tracking-tight text-sx-mid group-hover:text-sx-white transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-sx-light border border-sx-dark px-2.5 py-1">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-sx-white group-hover:text-sx-light transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-sx-mid leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-sx-mid bg-sx-black px-2 py-0.5 border border-sx-dark/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-sx-dark/60 flex items-center justify-between text-xs font-mono text-sx-mid">
                  <span className="text-sx-light">CONCEPT / SAMPLE WORK</span>
                  <ArrowUpRight className="w-4 h-4 text-sx-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </Interactive3DCard>
          ))}
        </div>

        {/* Concept note */}
        <div className="reveal mt-12 text-center">
          <p className="text-xs text-sx-mid font-mono uppercase tracking-wider">
            All featured projects represent internal concept designs and architectural explorations.
          </p>
        </div>
      </div>
    </section>
  );
}
