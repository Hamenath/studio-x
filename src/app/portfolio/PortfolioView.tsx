"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ProjectVisualPreview from "@/components/ui/ProjectVisualPreview";

export default function PortfolioView() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-sx-light">
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
            selectedCategory === "All"
              ? "bg-sx-black text-sx-white"
              : "bg-sx-off text-sx-dark hover:bg-sx-light"
          }`}
        >
          All Projects ({projects.length})
        </button>
        {projectCategories.map((category) => {
          const count = projects.filter((p) => p.category === category).length;
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                isSelected
                  ? "bg-sx-black text-sx-white"
                  : "bg-sx-off text-sx-dark hover:bg-sx-light"
              }`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            data-concept="true"
            data-is-sample="true"
            className="group flex flex-col justify-between p-6 md:p-8 bg-sx-off/70 border border-sx-light hover:border-sx-black transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              {/* Visual Preview */}
              <ProjectVisualPreview
                category={project.category}
                title={project.title}
              />

              {/* Card Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-sx-mid group-hover:text-sx-black transition-colors">
                  {project.id}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider bg-sx-white border border-sx-light px-2.5 py-1 text-sx-dark">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-2xl font-bold tracking-tight text-sx-black group-hover:text-sx-dark transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-sx-dark leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-sx-mid bg-sx-white/80 px-2 py-0.5 border border-sx-light/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Disclaimer & Link indicator */}
            <div className="pt-6 border-t border-sx-light/80 flex items-center justify-between text-xs font-mono text-sx-mid">
              <span className="flex items-center gap-1 text-[11px] text-sx-dark">
                <Sparkles className="w-3 h-3 text-sx-mid" />
                Concept Work ({project.year})
              </span>
              <div className="flex items-center gap-1 text-sx-black group-hover:underline">
                <span>View case</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 border border-dashed border-sx-light">
          <p className="font-heading text-lg font-bold text-sx-black">
            No projects found in this category.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className="mt-4 text-xs font-mono uppercase underline text-sx-dark hover:text-sx-black"
          >
            Reset filter
          </button>
        </div>
      )}
    </div>
  );
}
