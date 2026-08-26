import { PHOTOS } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-2xl opacity-10"
                style={{ background: "radial-gradient(circle, #00c4f5, transparent 70%)" }}
              />
              <div
                className="relative overflow-hidden rounded-2xl border border-white/08"
                style={{
                  boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,196,245,0.05)",
                }}
              >
                <img
                  src={PHOTOS.hero}
                  alt="Dhananjeyan S"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "520px", filter: "brightness(0.92) contrast(1.05)" }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,196,245,0.04) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Stat cards */}
              <div className="absolute -right-4 top-8 glass rounded-xl p-3 border border-white/08 reveal-right stagger-2">
                <p className="text-electric-400 font-bold text-xl font-display">8+</p>
                <p className="text-slate-400 text-xs">Live Projects</p>
              </div>
              <div className="absolute -left-4 bottom-12 glass rounded-xl p-3 border border-white/08 reveal-left stagger-3">
                <p className="text-electric-400 font-bold text-xl font-display">13</p>
                <p className="text-slate-400 text-xs">GitHub Repos</p>
              </div>
              <div className="absolute -right-4 bottom-4 glass rounded-xl p-3 border border-white/08 reveal-right stagger-4">
                <p className="text-white font-semibold text-xs">🏢 SaiNex CEO</p>
                <p className="text-slate-400 text-[11px]">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <div className="section-label">About Me</div>
            </div>
            <h2 className="section-heading mb-3 reveal stagger-1">
              A Builder Who Learns<br />
              <span className="gradient-text-blue">By Creating</span>
            </h2>
            <div className="section-divider reveal stagger-2" />

            <div className="space-y-4 text-slate-400 leading-relaxed reveal stagger-2">
              <p>
                I'm <span className="text-white font-semibold">Dhananjeyan S</span>, a 2nd Year Electronics and Communication Engineering student at Sri Sairam Engineering College, Chennai, and the Founder & CEO of SaiNex Technologies. My journey into technology isn't defined by textbooks alone — it's been shaped by curiosity, relentless experimentation, and the drive to build things that actually work.
              </p>
              <p>
                From my school years at GHSS, Ariyalur, I was fascinated by electronics and the idea that circuits and code could solve real problems. When I entered ECE at Sri Sairam, that curiosity turned into action. I started writing code, connecting sensors to Arduino boards, building web applications, and exploring the intersection of hardware and software — all in parallel with my academics.
              </p>
              <p>
                Over the past couple of years, I've built real, deployed projects — from a complete Mentor-Mentee ERP system (shipped as both a web app and Android APK) to AI-powered hiring tools, IoT monitoring concepts, and e-learning platforms. Each project taught me something that no classroom session could — debugging authentication flows, designing role-based systems, wiring sensors for real-time data, or engineering an AI bias-detection concept from scratch.
              </p>
              <p>
                Cybersecurity is another dimension I actively explore — not as a hacker stereotype, but as someone deeply interested in how systems can be secured, how vulnerabilities arise, and how security awareness can be built responsibly. Using tools like Kali Linux and Termux, I study OSINT, threat intelligence, and ethical security research.
              </p>
              <p>
                SaiNex Technologies is the platform I created to give all of this a home — a brand that brings together web, mobile, AI, automation, cybersecurity, IoT, and hardware integration into one evolving technology identity. The mission is simple: learn continuously, build responsibly, and create solutions that have practical value.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 reveal stagger-4">
              {["Full-Stack Developer", "ECE Student", "Cybersecurity", "AI Builder", "Arduino", "IoT", "Founder & CEO", "Open Source"].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3 mt-6 reveal stagger-5">
              {[
                { label: "College", value: "Sri Sairam Engineering College" },
                { label: "Department", value: "Electronics & Communication (ECE)" },
                { label: "School", value: "GHSS, Ariyalur" },
                { label: "Company", value: "SaiNex Technologies (Founder)" },
              ].map(({ label, value }) => (
                <div key={label} className="glass-card p-3 rounded-xl">
                  <p className="text-slate-500 text-[11px] uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
