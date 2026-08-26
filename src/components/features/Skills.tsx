import { useState } from "react";
import { SKILLS } from "@/constants/data";

const CATEGORY_ICONS: Record<string, string> = {
  "Software & Development": "💻",
  "Cybersecurity": "🔒",
  "AI & Automation": "🤖",
  "Hardware & IoT": "⚡",
  "Tools & Platforms": "🛠️",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Software & Development": "#00c4f5",
  "Cybersecurity": "#ef4444",
  "AI & Automation": "#a855f7",
  "Hardware & IoT": "#22c55e",
  "Tools & Platforms": "#f59e0b",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit reveal">Technical Skills</div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Skills & <span className="gradient-text-blue">Expertise</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            A diverse, hands-on skill set built through real projects — from web development to cybersecurity, AI, and embedded hardware.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal stagger-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${
              activeCategory === null
                ? "bg-electric-400/10 border-electric-400/30 text-electric-400"
                : "border-white/08 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            All Skills
          </button>
          {Object.keys(SKILLS).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 ${
                activeCategory === cat
                  ? "text-white border-white/30"
                  : "border-white/08 text-slate-400 hover:text-white hover:border-white/20"
              }`}
              style={
                activeCategory === cat
                  ? { backgroundColor: `${CATEGORY_COLORS[cat]}18`, borderColor: `${CATEGORY_COLORS[cat]}40`, color: CATEGORY_COLORS[cat] }
                  : {}
              }
            >
              {CATEGORY_ICONS[cat]} {cat.split(" & ")[0].split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS)
            .filter(([cat]) => activeCategory === null || cat === activeCategory)
            .map(([category, skills], catIdx) => {
              const color = CATEGORY_COLORS[category];
              const icon = CATEGORY_ICONS[category];
              return (
                <div
                  key={category}
                  className={`glass-card rounded-2xl p-6 border border-white/06 reveal stagger-${Math.min(catIdx + 1, 5)} group`}
                  style={{
                    borderTop: `2px solid ${color}30`,
                  }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${color}12`, border: `1px solid ${color}25` }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-white font-display font-700 text-sm">{category}</h3>
                      <p className="text-slate-500 text-xs">{skills.length} skills</p>
                    </div>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span
                        key={skill}
                        className="skill-badge"
                        style={{
                          transitionDelay: `${i * 20}ms`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: color, opacity: 0.7 }}
                        />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center reveal">
          <p className="text-slate-500 text-sm">
            Skills built through real projects, hands-on experiments, and continuous learning —
            <span className="text-slate-400"> not just theory.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
