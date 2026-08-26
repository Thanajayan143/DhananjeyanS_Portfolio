const EVENTS = [
  {
    type: "Hackathon / Ideathon",
    title: "Sairam SDG Ideathon",
    description: "Participated in the Sairam SDG Ideathon, building the Smart Industrial Air Monitoring & Worker Safety System — an IoT-powered concept for real-time air-quality monitoring and safety alerts aligned with Sustainable Development Goals.",
    role: "Builder / Developer",
    idea: "IoT-powered industrial air quality monitoring with real-time worker safety alerts",
    outcome: "Live project deployed and verified",
    projectLink: "https://preview-react-9bh9gh-j3ryrujjnlcyxxdxnrlbtq.onspace.build/?_q=j3RYrUjjnLCyXxDXNRLBtq",
    tags: ["IoT", "SDG", "Sairam", "Innovation"],
    icon: "🏆",
    color: "#f59e0b",
  },
];

const CERT_NOTE = "Certificates and proof documents will be added here as they are confirmed and available. No certificates have been fabricated — only verified information is displayed.";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(245,158,11,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="section-label mx-auto w-fit reveal"
            style={{ color: "#f59e0b", borderColor: "rgba(245,158,11,0.3)", background: "rgba(245,158,11,0.08)" }}
          >
            Innovation
          </div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Hackathons & <span style={{ color: "#f59e0b", WebkitTextFillColor: "initial" }}>Innovation</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            Competing, building under pressure, and learning what happens when an idea meets a deadline.
          </p>
        </div>

        {/* Innovation arc */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-14">
          {[
            { label: "Challenge", icon: "🎯" },
            { label: "Role", icon: "👤" },
            { label: "Idea", icon: "💡" },
            { label: "Prototype", icon: "🔨" },
            { label: "Learning", icon: "📚" },
            { label: "Outcome", icon: "✨" },
          ].map((step, idx) => (
            <div key={step.label} className={`text-center reveal stagger-${Math.min(idx + 1, 5)}`}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mx-auto mb-2"
                style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)" }}
              >
                {step.icon}
              </div>
              <p className="text-slate-400 text-xs font-medium">{step.label}</p>
            </div>
          ))}
        </div>

        {/* Events */}
        <div className="space-y-6 mb-12">
          {EVENTS.map((event, idx) => (
            <div
              key={event.title}
              className={`glass-card rounded-2xl border border-white/06 overflow-hidden reveal stagger-${Math.min(idx + 1, 5)}`}
              style={{ borderTop: `2px solid ${event.color}40` }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${event.color}12`, border: `1px solid ${event.color}25` }}
                  >
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-1"
                          style={{ background: `${event.color}12`, color: event.color }}
                        >
                          {event.type}
                        </span>
                        <h3 className="text-white font-display font-700 text-base">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{event.description}</p>

                    <div className="grid sm:grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "Role", value: event.role },
                        { label: "Idea", value: event.idea },
                        { label: "Outcome", value: event.outcome },
                      ].map(({ label, value }) => (
                        <div key={label} className="glass rounded-lg p-3 border border-white/05">
                          <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">{label}</p>
                          <p className="text-slate-300 text-xs leading-relaxed">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.map((t) => (
                        <span key={t} className="tag-pill text-[10px]">{t}</span>
                      ))}
                    </div>

                    <a
                      href={event.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs"
                      style={{ color: event.color }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications placeholder */}
        <div
          className="rounded-2xl p-6 border reveal"
          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              📜
            </div>
            <div>
              <h4 className="text-white font-semibold text-base mb-1">Certifications</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{CERT_NOTE}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
