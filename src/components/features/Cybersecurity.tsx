const LEARNING_PATH = [
  { step: "01", label: "Foundations", desc: "Security concepts, CIA triad, threat models, security mindset" },
  { step: "02", label: "Linux", desc: "Kali Linux, Termux, command-line security tooling, OS fundamentals" },
  { step: "03", label: "Networking", desc: "Network protocols, traffic analysis, understanding attack surfaces" },
  { step: "04", label: "OSINT", desc: "Open source intelligence gathering, information discovery, digital footprinting" },
  { step: "05", label: "Threat Intelligence", desc: "Understanding threat actors, TTPs, indicators of compromise, defensive research" },
  { step: "06", label: "Web Security", desc: "Web application vulnerabilities, security testing concepts, responsible disclosure" },
  { step: "07", label: "Security Research", desc: "Ethical bug hunting, authorized security research, defensive consulting" },
  { step: "08", label: "Continuous Learning", desc: "Evolving with the threat landscape — cybersecurity is never finished" },
];

const TOOLS = [
  { name: "Kali Linux", icon: "🐉", desc: "Primary security research OS" },
  { name: "Termux", icon: "📱", desc: "Mobile Linux environment" },
  { name: "OSINT Tools", icon: "🔍", desc: "Information gathering & research" },
  { name: "Network Tools", icon: "🌐", desc: "Traffic analysis & monitoring" },
  { name: "Web Security Tools", icon: "🛡️", desc: "Authorized web vulnerability research" },
  { name: "Threat Intel Platforms", icon: "📊", desc: "Indicator tracking & analysis" },
];

export default function Cybersecurity() {
  return (
    <section id="cybersecurity" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(239,68,68,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto w-fit reveal" style={{ color: "#ef4444", borderColor: "rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.08)" }}>
            Cybersecurity
          </div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Security <span style={{ color: "#ef4444", WebkitTextFillColor: "initial" }}>Journey</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            Exploring cybersecurity as a learner and ethical researcher — focused on defense, awareness, and responsible security practices.
          </p>
        </div>

        {/* Responsible note */}
        <div
          className="max-w-3xl mx-auto mb-12 p-4 rounded-xl border reveal"
          style={{
            background: "rgba(239,68,68,0.05)",
            borderColor: "rgba(239,68,68,0.15)",
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">⚠️</span>
            <p className="text-slate-400 text-sm leading-relaxed">
              All security activities described here are pursued through <strong className="text-white">ethical, legal, and authorized channels only</strong>. The focus is on defensive security, educational research, security awareness, and responsible disclosure — never unauthorized access.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Learning path */}
          <div>
            <h3 className="text-white font-display font-700 text-lg mb-6 reveal">Security Learning Path</h3>
            <div className="space-y-3">
              {LEARNING_PATH.map((item, idx) => (
                <div
                  key={item.step}
                  className={`flex items-start gap-4 p-4 rounded-xl border border-white/06 bg-surface-card group hover:border-red-500/20 transition-all duration-200 reveal stagger-${Math.min(idx % 4 + 1, 5)}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200 group-hover:bg-red-500/15"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      color: "#ef4444",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors">{item.label}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: tools + principles */}
          <div>
            <h3 className="text-white font-display font-700 text-lg mb-6 reveal">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {TOOLS.map((tool, idx) => (
                <div
                  key={tool.name}
                  className={`glass-card rounded-xl p-4 border border-white/06 group reveal stagger-${Math.min(idx % 3 + 1, 5)}`}
                >
                  <span className="text-xl block mb-2 group-hover:scale-110 transition-transform">{tool.icon}</span>
                  <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
                  <p className="text-slate-500 text-xs mt-0.5">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* Ethics card */}
            <div
              className="rounded-xl p-5 border reveal"
              style={{
                background: "rgba(239,68,68,0.04)",
                borderColor: "rgba(239,68,68,0.15)",
              }}
            >
              <h4 className="text-white font-display font-700 mb-3">Core Principles</h4>
              {[
                { icon: "✅", text: "Always operate within authorized, legal boundaries" },
                { icon: "✅", text: "Responsible disclosure — never weaponize findings" },
                { icon: "✅", text: "Defensive mindset: protect, not exploit" },
                { icon: "✅", text: "Build security awareness, not fear" },
                { icon: "✅", text: "Continuous learning — the landscape always evolves" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 mb-2">
                  <span className="text-sm">{icon}</span>
                  <p className="text-slate-400 text-sm">{text}</p>
                </div>
              ))}
            </div>

            {/* AI Fraud project link */}
            <div className="mt-6 reveal">
              <p className="text-slate-500 text-xs mb-3 uppercase tracking-wider font-semibold">Related Project</p>
              <a
                href="https://preview-react-9bgzs0-5dqkxjfmxmvos4hthpjyyf.onspace.build/?_q=5dqkxjfmxMvos4HThpjY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/06 glass-card group"
              >
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-electric-400 transition-colors">AI Fraud Early Warning System</p>
                  <p className="text-slate-500 text-xs">Banking security · Anomaly detection concept</p>
                </div>
                <svg className="w-4 h-4 text-slate-500 ml-auto group-hover:text-electric-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
