const CASE_STEPS = [
  {
    num: "01",
    title: "The Problem",
    content: "Mentor-mentee record keeping at Sri Sairam Engineering College was manual and fragmented — data spread across spreadsheets, documents, and disconnected tools. Mentors couldn't easily track student progress, and admins had no unified view.",
  },
  {
    num: "02",
    title: "The Idea",
    content: "Build one unified portal where students, mentors, and administrators all operate from the same platform with role-specific views — eliminating fragmentation and manual overhead.",
  },
  {
    num: "03",
    title: "The Solution",
    content: "A React web application on the Onspace platform, also packaged as an Android APK — giving faculty and students access on any device, from any browser, or via native mobile install.",
  },
  {
    num: "04",
    title: "How It Works",
    content: "Role-based login separates student, mentor, and admin experiences. Google Sign-In is integrated for secure, easy authentication. Each role sees only what is relevant to them.",
  },
  {
    num: "05",
    title: "Technology Used",
    content: "React (frontend), Onspace (backend platform), Google OAuth 2.0 (authentication), cross-device session management, Android APK packaging for mobile distribution.",
  },
  {
    num: "06",
    title: "Key Features",
    content: "Auto-registration for new Google users entering the system, bulk user data management for administrators, cross-device session handling, and separate dashboard flows per role.",
  },
  {
    num: "07",
    title: "Challenges Solved",
    content: "The most demanding challenge was diagnosing authentication mismatches — where data was being stored in local browser storage instead of the backend database, causing session breaks across devices. Google Sign-In redirect and popup flow issues required systematic debugging.",
  },
  {
    num: "08",
    title: "Learning",
    content: "Real production-style debugging across web and mobile authentication flows. Deepened understanding of OAuth handshakes, local vs. backend session persistence, and cross-environment testing strategies.",
  },
  {
    num: "09",
    title: "Result",
    content: "A fully deployed, working ERP system for mentor-mentee management — live as a web app and available as an Android APK. The platform is operational and accessible via the live link.",
  },
  {
    num: "10",
    title: "Live Project",
    content: "Available now at the verified live link below. The project is actively deployed on the Onspace platform.",
  },
];

export default function FeaturedProject() {
  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,196,245,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mx-auto w-fit reveal">Featured Case Study</div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Sairam Mentor Mentees<br />
            <span className="gradient-text-blue">Smart ERP System</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            The most complete, end-to-end build — a React web app packaged as an Android APK with real authentication debugging, Google Sign-In, and multi-role academic management.
          </p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal stagger-2">
          {["Academic Systems", "Web App", "Android APK", "React", "Google OAuth", "Role-Based Auth"].map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        {/* Case study steps */}
        <div
          className="glass-card rounded-2xl border border-white/06 overflow-hidden reveal"
          style={{ borderTop: "2px solid rgba(0,196,245,0.3)" }}
        >
          {/* Header bar */}
          <div
            className="px-6 py-4 border-b border-white/06 flex items-center justify-between"
            style={{ background: "rgba(0,196,245,0.04)" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <div>
                <h3 className="text-white font-display font-700 text-base">Sairam Mentor Mentees Smart ERP System</h3>
                <p className="text-slate-500 text-xs">Sri Sairam Engineering College · React + Onspace + Android APK</p>
              </div>
            </div>
            <span className="tag-pill hidden sm:inline-flex">⭐ Featured</span>
          </div>

          {/* Steps */}
          <div className="p-6 space-y-1">
            {CASE_STEPS.map((step, idx) => (
              <div key={step.num} className={`case-step reveal stagger-${Math.min(idx % 3 + 1, 5)}`}>
                <div className="case-step-num">{step.num}</div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-0.5">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-5 border-t border-white/06 flex flex-col sm:flex-row gap-3">
            <a
              href="https://preview-react-9b5xjm-kyqbscftqy2nynapzi9gp8.onspace.build/?_q=KYQBSCFtqy2NynApZi9GP8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live ERP System
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline sm:w-auto"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
