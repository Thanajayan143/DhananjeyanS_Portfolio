import { useEffect, useRef } from "react";
import { TIMELINE_EVENTS } from "@/constants/data";

export default function Journey() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const line = lineRef.current;
            if (line) {
              line.style.height = "100%";
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    if (lineRef.current?.parentElement) {
      observer.observe(lineRef.current.parentElement);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,196,245,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mx-auto w-fit reveal">My Story</div>
          <h2 className="section-heading mt-3 reveal stagger-1">
            The Technology <span className="gradient-text-blue">Journey</span>
          </h2>
          <p className="section-subheading mx-auto mt-3 text-center reveal stagger-2">
            From early curiosity to founding a technology company — every step shaped by building, experimenting, and learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 w-px overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,196,245,0.3) 10%, rgba(0,196,245,0.3) 90%, transparent)",
              height: "100%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              ref={lineRef}
              style={{
                height: "0%",
                width: "100%",
                background: "linear-gradient(to bottom, #00c4f5, #0077b6)",
                transition: "height 2s ease",
              }}
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {TIMELINE_EVENTS.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 md:gap-0 pl-10 md:pl-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } reveal stagger-${Math.min(idx % 3 + 1, 5)}`}
                  style={{ marginBottom: "2.5rem" }}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] glass-card rounded-xl p-4 border border-white/06 group cursor-default ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <span
                          className="inline-block text-[10px] font-bold uppercase tracking-widest mb-1 px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(0,196,245,0.1)",
                            color: "#00c4f5",
                            border: "1px solid rgba(0,196,245,0.2)",
                          }}
                        >
                          {event.year}
                        </span>
                        <h3 className="text-white font-display font-700 text-base group-hover:text-electric-400 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Node */}
                  <div
                    className="absolute left-4 md:left-1/2 top-4 timeline-node hidden md:flex"
                    style={{ transform: "translate(-50%, -50%)" }}
                  />
                  {/* Mobile node */}
                  <div
                    className="absolute left-3 top-4 w-3 h-3 rounded-full bg-electric-400 border-2 border-[#09090f] md:hidden flex-shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(0,196,245,0.5)" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
