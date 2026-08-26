import { GITHUB_REPOS, CONTACT } from "@/constants/data";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export default function GitHub() {
  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,119,182,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit reveal">Open Source</div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            GitHub <span className="gradient-text-blue">Profile</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            Building in public — repositories spanning full-stack apps, AI tools, and academic systems.
          </p>
        </div>

        {/* Profile card */}
        <div
          className="glass-card rounded-2xl border border-white/06 p-6 sm:p-8 mb-10 reveal"
          style={{ borderTop: "2px solid rgba(0,196,245,0.2)" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: "rgba(0,196,245,0.08)", border: "1px solid rgba(0,196,245,0.15)" }}
            >
              <svg className="w-8 h-8 text-electric-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-white font-display font-700 text-lg">Dhananjeyan S</h3>
                  <p className="text-electric-400 text-sm font-medium">@Thanajayan143</p>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
                    Founder & CEO @SaiNex Technologies · Cybersecurity Enthusiast · AI & Automation · Full Stack Developer · Mobile Apps · Tech Innovator · ECE
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-center">
                  <div>
                    <p className="text-electric-400 font-bold text-xl font-display">13</p>
                    <p className="text-slate-500 text-xs">Repositories</p>
                  </div>
                  <div>
                    <p className="text-electric-400 font-bold text-xl font-display">3</p>
                    <p className="text-slate-500 text-xs">Stars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View Full GitHub Profile
            </a>
          </div>
        </div>

        {/* Repos grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GITHUB_REPOS.map((repo, idx) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`repo-card reveal stagger-${Math.min(idx + 1, 5)}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <h4 className="text-electric-400 font-semibold text-sm hover:underline">{repo.name}</h4>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{repo.description}</p>
              <div className="flex items-center gap-1.5 mt-auto">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: LANG_COLORS[repo.language] || "#8b949e" }}
                />
                <span className="text-slate-400 text-xs">{repo.language}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
