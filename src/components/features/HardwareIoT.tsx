const HW_JOURNEY = [
  { icon: "🔬", title: "Problem", desc: "Identify a real-world scenario where electronics or automation can help." },
  { icon: "⚡", title: "Circuit / Hardware", desc: "Select components — Arduino, sensors, actuators, displays — and design the circuit." },
  { icon: "💻", title: "Programming", desc: "Write the embedded code: sensor reads, logic, outputs, communication protocols." },
  { icon: "🧪", title: "Testing", desc: "Test on breadboard first — verify readings, fix wiring, debug edge cases." },
  { icon: "🔄", title: "Iteration", desc: "Improve the design: optimize power, improve reliability, add more features." },
  { icon: "✅", title: "Solution", desc: "A working, documented prototype that demonstrates a real idea in hardware." },
];

const HW_COMPONENTS = [
  { name: "Arduino", icon: "🟦", desc: "Primary microcontroller platform for all embedded projects" },
  { name: "Sensors", icon: "📡", desc: "Temperature, humidity, air quality, motion, proximity, gas sensors" },
  { name: "OLED Displays", icon: "🖥️", desc: "Small graphical displays for data visualization on-device" },
  { name: "TFT Displays", icon: "📺", desc: "Color displays for richer UI on embedded systems" },
  { name: "Servo Motors", icon: "⚙️", desc: "Precision actuation for mechanical movement and control" },
  { name: "IoT Modules", icon: "📶", desc: "WiFi/Bluetooth connectivity for data transmission and control" },
  { name: "Tinkercad", icon: "🎨", desc: "Circuit simulation and 3D design before physical build" },
  { name: "Proteus", icon: "🔧", desc: "Advanced circuit simulation and PCB design tool" },
];

const IOT_PROJECTS = [
  {
    title: "Smart Industrial Air Monitoring & Worker Safety",
    desc: "Real-time industrial air-quality monitoring with instant safety alerts — built for the Sairam SDG Ideathon.",
    tags: ["IoT", "Sensors", "React", "SDG Ideathon"],
    link: "https://preview-react-9bh9gh-j3ryrujjnlcyxxdxnrlbtq.onspace.build/?_q=j3RYrUjjnLCyXxDXNRLBtq",
    icon: "🏭",
  },
];

export default function HardwareIoT() {
  return (
    <section id="hardware" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(34,197,94,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="section-label mx-auto w-fit reveal"
            style={{ color: "#22c55e", borderColor: "rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.08)" }}
          >
            Hardware & IoT
          </div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            Hardware & <span style={{ color: "#22c55e", WebkitTextFillColor: "initial" }}>IoT</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            From Arduino breadboards to IoT concepts — hands-on electronics engineering, sensor integration, and embedded systems.
          </p>
        </div>

        {/* Build philosophy - flow */}
        <div className="mb-14">
          <h3 className="text-white font-display font-700 text-lg text-center mb-8 reveal">The Build Philosophy</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0">
            {HW_JOURNEY.map((step, idx) => (
              <div key={step.title} className="flex items-center gap-2 md:gap-0">
                <div
                  className={`glass-card rounded-xl p-4 text-center w-32 md:w-28 border border-white/06 group reveal stagger-${Math.min(idx + 1, 5)}`}
                  style={{ borderTop: `2px solid rgba(34,197,94,0.25)` }}
                >
                  <div className="text-xl mb-2 group-hover:scale-110 transition-transform">{step.icon}</div>
                  <p className="text-white font-semibold text-xs mb-1">{step.title}</p>
                  <p className="text-slate-500 text-[10px] leading-relaxed">{step.desc}</p>
                </div>
                {idx < HW_JOURNEY.length - 1 && (
                  <div className="flex-shrink-0 mx-1 md:mx-2">
                    <svg className="w-4 h-4 text-slate-600 rotate-0 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Components grid */}
        <div className="mb-14">
          <h3 className="text-white font-display font-700 text-lg mb-6 reveal">Components & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {HW_COMPONENTS.map((comp, idx) => (
              <div
                key={comp.name}
                className={`glass-card rounded-xl p-4 border border-white/06 group text-center reveal stagger-${Math.min((idx % 4) + 1, 5)}`}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{comp.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{comp.name}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IoT project */}
        <div>
          <h3 className="text-white font-display font-700 text-lg mb-6 reveal">IoT Projects</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {IOT_PROJECTS.map((proj) => (
              <a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group reveal"
                style={{ borderTop: "2px solid rgba(34,197,94,0.25)" }}
              >
                <div className="card-glow" />
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                    >
                      {proj.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-display font-700 text-sm mb-1 group-hover:text-green-400 transition-colors">{proj.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed mb-3">{proj.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {proj.tags.map((t) => (
                          <span key={t} className="tag-pill text-[10px]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-green-400">
                    View Live Project
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
            {/* More coming placeholder */}
            <div className="project-card opacity-60 reveal stagger-2" style={{ borderTop: "2px solid rgba(255,255,255,0.05)" }}>
              <div className="p-5 flex flex-col items-center justify-center text-center min-h-[160px]">
                <div className="text-3xl mb-3">🔧</div>
                <p className="text-slate-400 font-semibold text-sm">More Hardware Projects</p>
                <p className="text-slate-600 text-xs mt-1">Additional IoT and embedded projects coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
