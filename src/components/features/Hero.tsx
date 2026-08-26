import { useEffect, useRef, useState } from "react";
import { PHOTOS } from "@/constants/data";

const ROLES = [
  "ECE Student & Technology Builder",
  "Full-Stack Developer",
  "Cybersecurity Enthusiast",
  "AI & Automation Builder",
  "Founder & CEO of SaiNex Technologies",
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1700);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; opacity: number }> = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,196,245,${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,196,245,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />

      {/* Aurora/grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 aurora-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0,196,245,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div
              className="section-label mb-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "all 0.6s ease 0.1s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              Available for collaboration & projects
            </div>

            {/* Name */}
            <h1
              className="font-display font-800 mb-4"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: "1.05",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              <span className="text-white">Dhananjeyan</span>{" "}
              <span className="gradient-text">S</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="mb-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s",
              }}
            >
              <p className="text-lg sm:text-xl font-semibold text-electric-400 font-display min-h-[1.75rem]">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-electric-400 ml-0.5 animate-pulse align-middle" />
              </p>
            </div>

            {/* Description */}
            <p
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s",
              }}
            >
              Building Technology. Exploring Cybersecurity. Creating the Future.{" "}
              <span className="text-slate-300">
                An ECE student at Sri Sairam Engineering College, Founder & CEO of SaiNex Technologies — turning ideas into practical digital, AI, cybersecurity, IoT, and hardware solutions.
              </span>
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s",
              }}
            >
              <button onClick={() => scrollTo("projects")} className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Explore My Work
              </button>
              <button onClick={() => scrollTo("about")} className="btn-outline">
                About Me
              </button>
              <button onClick={() => scrollTo("sainex")} className="btn-ghost">
                SaiNex Technologies →
              </button>
            </div>

            {/* Social quick links */}
            <div
              className="flex items-center gap-4 mt-8"
              style={{
                opacity: visible ? 1 : 0,
                transition: "all 0.7s ease 0.85s",
              }}
            >
              {[
                {
                  href: "https://github.com/Thanajayan143",
                  label: "GitHub",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.instagram.com/sainex_technologies",
                  label: "Instagram",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/dhananjeyan-s",
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:sec25ec477@sairamtap.edu.in",
                  label: "Email",
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-400 hover:text-electric-400 hover:border-electric-400/30 transition-all duration-200 hover:scale-110 hover:bg-electric-400/5"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
              <span className="text-slate-600 text-xs ml-2">/ Connect with me</span>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s",
            }}
          >
            <div className="relative">
              {/* Glow rings */}
              <div
                className="absolute -inset-4 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(0,196,245,0.3) 0%, transparent 70%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
              <div
                className="absolute -inset-2 rounded-full border border-electric-400/15 animate-pulse-slow"
                style={{ borderRadius: "50%" }}
              />

              {/* Photo container */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "clamp(260px, 38vw, 380px)",
                  height: "clamp(300px, 44vw, 440px)",
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(0,196,245,0.15)",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,196,245,0.1)",
                }}
              >
                <img
                  src={PHOTOS.hero}
                  alt="Dhananjeyan S — Founder & CEO of SaiNex Technologies"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  style={{ filter: "brightness(0.95) contrast(1.05)" }}
                />
                {/* Subtle overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(9,9,15,0.5) 0%, transparent 50%)",
                  }}
                />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="glass rounded-xl px-3 py-2">
                    <p className="text-white font-semibold text-sm">Dhananjeyan S</p>
                    <p className="text-electric-400 text-xs">Founder & CEO · SaiNex Technologies</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: ECE */}
              <div
                className="absolute -top-3 -left-4 glass rounded-xl px-3 py-2 border border-white/10 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-white font-bold text-xs">🎓 ECE Student</p>
                <p className="text-slate-400 text-[10px]">Sri Sairam Engineering</p>
              </div>

              {/* Floating badge: projects */}
              <div
                className="absolute -bottom-3 -right-4 glass rounded-xl px-3 py-2 border border-white/10 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <p className="text-electric-400 font-bold text-xs">8+ Live Projects</p>
                <p className="text-slate-400 text-[10px]">All verified & deployed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 1.2s",
          }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
