const AI_DOMAINS = [
  {
    icon: "⚖️",
    title: "FairHire AI",
    subtitle: "Unbiased Recruitment",
    desc: "An AI-powered hiring concept designed to detect and reduce bias in recruitment — aiming for fairer, more transparent candidate evaluation.",
    link: "https://preview-react-9b6cru-ajhmu63dwjyizqmhsdz5ns.onspace.build/?_q=AJhmu63dwjyizQMHsdz5Ns",
    tag: "AI + HR",
    color: "#a855f7",
  },
  {
    icon: "🛡️",
    title: "AI Fraud Detection",
    subtitle: "Banking Security",
    desc: "An AI-based early-warning concept for detecting internal and privileged-user fraud in banking environments using real-time anomaly detection.",
    link: "https://preview-react-9bgzs0-5dqkxjfmxmvos4hthpjyyf.onspace.build/?_q=5dqkxjfmxMvos4HThpjY",
    tag: "AI + Security",
    color: "#ef4444",
  },
  {
    icon: "🎓",
    title: "EduMate",
    subtitle: "AI-Enhanced Education",
    desc: "A mentoring and document-management platform that streamlines academic interactions — part of a broader AI + education vision.",
    link: "https://preview-react-9b5loa-gq5dby2vz4fvj9mmfxoqqy.onspace.build/?_q=GQ5dBY2vz4FVJ9mmfXoqqy",
    tag: "AI + Education",
    color: "#00c4f5",
  },
  {
    icon: "🏭",
    title: "Smart Air Monitoring",
    subtitle: "AI + IoT Safety",
    desc: "An IoT concept combining sensor data with intelligent alerting for industrial air-quality monitoring and worker safety.",
    link: "https://preview-react-9bh9gh-j3ryrujjnlcyxxdxnrlbtq.onspace.build/?_q=j3RYrUjjnLCyXxDXNRLBtq",
    tag: "AI + IoT",
    color: "#22c55e",
  },
];

const AI_SKILLS = [
  "AI Tools & Assistants",
  "AI-Assisted Development",
  "AI-Powered Product Design",
  "Automation Workflows",
  "Anomaly Detection Concepts",
  "Bias Detection Systems",
  "AI + Cybersecurity",
  "AI + Education",
  "AI + IoT Integration",
  "Prompt Engineering",
];

export default function AIInnovation() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(168,85,247,0.05) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="section-label mx-auto w-fit reveal"
            style={{ color: "#a855f7", borderColor: "rgba(168,85,247,0.3)", background: "rgba(168,85,247,0.08)" }}
          >
            AI & Innovation
          </div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            AI & <span style={{ color: "#a855f7", WebkitTextFillColor: "initial" }}>Innovation</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            Building AI-powered product concepts — from unbiased hiring to fraud detection — as an evolving learning and creation journey.
          </p>
        </div>

        {/* Philosophy */}
        <div
          className="max-w-3xl mx-auto mb-14 p-6 rounded-2xl border reveal"
          style={{ background: "rgba(168,85,247,0.04)", borderColor: "rgba(168,85,247,0.15)" }}
        >
          <p className="text-slate-300 text-center leading-relaxed">
            "I approach AI not as a magic tool to be blindly applied, but as a <strong className="text-white">design ingredient</strong> — something to be shaped with intent, tested with skepticism, and deployed with responsibility. Each AI project I build starts with a real problem and ends with a working concept."
          </p>
        </div>

        {/* AI project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {AI_DOMAINS.map((item, idx) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card group reveal stagger-${Math.min(idx + 1, 5)}`}
              style={{ borderTop: `2px solid ${item.color}30` }}
            >
              <div className="card-glow" />
              <div className="p-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 inline-block"
                  style={{ background: `${item.color}12`, color: item.color }}
                >
                  {item.tag}
                </span>
                <h3 className="text-white font-display font-700 text-sm mb-0.5 group-hover:text-electric-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs mb-3">{item.subtitle}</p>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: item.color }}>
                  View Live Project
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Skills + focus areas */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-display font-700 text-lg mb-5 reveal">AI Skills & Tools</h3>
            <div className="flex flex-wrap gap-2 reveal stagger-1">
              {AI_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge"
                  style={{ borderColor: "rgba(168,85,247,0.2)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#a855f7", opacity: 0.7 }} />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-700 text-lg mb-5 reveal">Future AI Directions</h3>
            <div className="space-y-3">
              {[
                { icon: "🤝", title: "AI + Academic Systems", desc: "Smarter mentor-student matching, progress prediction, learning path optimization." },
                { icon: "🔒", title: "AI + Cybersecurity", desc: "Deeper anomaly detection, intelligent threat intelligence, automated security awareness." },
                { icon: "🏭", title: "AI + IoT", desc: "Predictive maintenance, smart environmental monitoring, real-time decision systems." },
                { icon: "📱", title: "AI + Mobile", desc: "On-device AI features, intelligent user experiences, personalization engines." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-3 rounded-xl border border-white/06 glass-card reveal stagger-2">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
