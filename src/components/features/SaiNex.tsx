import { PHOTOS, SAINEX_SERVICES, PROJECTS } from "@/constants/data";

export default function SaiNex() {
  return (
    <section id="sainex" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,119,182,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit reveal">Company</div>
          <div className="flex justify-center mb-4 reveal stagger-1">
            <img
              src={PHOTOS.logoFull}
              alt="SaiNex Technologies Logo"
              className="h-20 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 20px rgba(0,196,245,0.35))" }}
            />
          </div>
          <h2 className="section-heading mt-2 reveal stagger-2">
            <span className="gradient-text-blue">SaiNex Technologies</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-3">
            A technology-focused initiative transforming practical problems into digital and engineering solutions.
          </p>
        </div>

        {/* Vision / Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {[
            {
              label: "Vision",
              icon: "🔭",
              content: "To be a recognized technology brand that consistently delivers practical, innovative digital solutions — bridging the gap between emerging technology and real-world application across web, mobile, AI, cybersecurity, IoT, and hardware domains.",
            },
            {
              label: "Mission",
              icon: "🚀",
              content: "Learn continuously, build responsibly, experiment with emerging technologies, and create solutions that have practical value. SaiNex Technologies exists to transform technical ideas into working products — however big or small.",
            },
          ].map(({ label, icon, content }) => (
            <div key={label} className={`glass-card rounded-2xl p-6 border border-white/06 reveal ${label === "Vision" ? "reveal-left" : "reveal-right"}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-white font-display font-700 text-lg">{label}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <p className="text-slate-400 leading-relaxed text-base">
            SaiNex Technologies brings together <span className="text-white">web development, mobile applications, AI, automation, cybersecurity, IoT, electronics, and hardware integration</span> under one evolving technology brand. The vision is simple: learn continuously, build responsibly, experiment with emerging technologies, and create solutions that have practical value.
          </p>
        </div>

        {/* Services grid */}
        <div className="mb-14">
          <h3 className="text-white font-display font-700 text-xl text-center mb-8 reveal">Services & Domains</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SAINEX_SERVICES.map((service, idx) => (
              <div
                key={service.title}
                className={`glass-card rounded-xl p-4 border border-white/06 text-center group reveal stagger-${Math.min((idx % 4) + 1, 5)}`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{service.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects cross-link */}
        <div className="mb-14">
          <h3 className="text-white font-display font-700 text-xl text-center mb-8 reveal">Products & Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.slice(0, 4).map((proj, idx) => (
              <a
                key={proj.id}
                href={proj.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-4 border border-white/06 group cursor-pointer reveal stagger-${Math.min(idx + 1, 5)}`}
              >
                <div className="text-xl mb-2">{proj.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-electric-400 transition-colors line-clamp-2">{proj.shortTitle}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {proj.category.slice(0, 2).map((c) => (
                    <span key={c} className="tag-pill text-[10px]">{c}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              View All Projects →
            </button>
          </div>
        </div>

        {/* Founder card */}
        <div
          className="glass-card rounded-2xl border border-white/06 p-6 sm:p-8 reveal"
          style={{ borderTop: "2px solid rgba(0,196,245,0.2)" }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Portrait */}
            <div className="flex-shrink-0">
              <div
                className="overflow-hidden rounded-xl border border-white/10"
                style={{
                  width: "140px",
                  height: "160px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={PHOTOS.founder}
                  alt="Dhananjeyan S — Founder & CEO, SaiNex Technologies"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <span className="section-label text-[11px] mb-3 inline-flex">Meet the Founder</span>
              <h3 className="text-white font-display font-700 text-xl mb-1">Dhananjeyan S</h3>
              <p className="text-electric-400 font-semibold text-sm mb-3">Founder & CEO · SaiNex Technologies</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                A 2nd Year ECE student at Sri Sairam Engineering College, Chennai, who founded SaiNex Technologies as a platform to build, experiment, and ship real technology products. The company brings together everything he learns and builds — web, mobile, AI, cybersecurity, IoT, and hardware — under one professional technology brand.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["ECE Student", "Full-Stack Developer", "Cybersecurity Enthusiast", "AI Builder", "Hardware & IoT"].map((t) => (
                  <span key={t} className="tag-pill text-[11px]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration CTA */}
        <div
          className="mt-12 text-center glass rounded-2xl p-8 border border-electric-400/10 reveal"
          style={{ background: "rgba(0,196,245,0.03)" }}
        >
          <h3 className="text-white font-display font-700 text-2xl mb-3">
            Collaborate with SaiNex Technologies
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Open to collaborations, academic partnerships, project contributions, and technology discussions. If you have an idea that needs building, let's talk.
          </p>
          <button
            onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
