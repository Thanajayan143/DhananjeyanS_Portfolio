import { useState } from "react";
import { PROJECTS } from "@/constants/data";

const ALL_CATEGORIES = ["All", "Web", "Mobile", "AI", "Cybersecurity", "IoT", "Hardware", "Automation", "Academic Systems"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(c.toLowerCase())));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit reveal">Portfolio</div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Live <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            8 verified, deployed projects — click any card to view the live project in a new tab.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal stagger-2">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-electric-400/10 border-electric-400/30 text-electric-400"
                  : "border-white/08 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project, idx) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card reveal stagger-${Math.min((idx % 4) + 1, 5)} group`}
              aria-label={`View live project: ${project.title}`}
            >
              <div className="card-glow" />

              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }} />

              {/* Card content */}
              <div className="p-5">
                {/* Icon + badges */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}25` }}
                  >
                    {project.icon}
                  </div>
                  {project.isFeatured && (
                    <span className="tag-pill text-[10px]">⭐ Featured</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-white font-display font-700 text-sm leading-snug mb-2 group-hover:text-electric-400 transition-colors line-clamp-2">
                  {project.shortTitle}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                  ))}
                </div>

                {/* Category chips */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded"
                      style={{ background: `${project.accent}10`, color: project.accent }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-2 pt-3 border-t border-white/05">
                  <span
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 rounded-lg transition-all duration-200 group-hover:scale-105"
                    style={{
                      background: `${project.accent}15`,
                      color: project.accent,
                      border: `1px solid ${project.accent}25`,
                    }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live
                  </span>
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-lg border border-white/08 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                      aria-label={`View ${project.repoName} on GitHub`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg">No projects in this category yet.</p>
            <p className="text-sm mt-2">More coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
