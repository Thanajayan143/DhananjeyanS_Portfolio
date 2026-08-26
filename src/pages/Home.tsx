import { useEffect } from "react";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Journey from "@/components/features/Journey";
import Skills from "@/components/features/Skills";
import Projects from "@/components/features/Projects";
import FeaturedProject from "@/components/features/FeaturedProject";
import GitHub from "@/components/features/GitHub";
import SaiNex from "@/components/features/SaiNex";
import Cybersecurity from "@/components/features/Cybersecurity";
import AIInnovation from "@/components/features/AIInnovation";
import HardwareIoT from "@/components/features/HardwareIoT";
import Hackathons from "@/components/features/Hackathons";
import Connect from "@/components/features/Connect";
import Footer from "@/components/layout/Footer";
import { useRevealOnScroll } from "@/hooks/useScrollReveal";

export default function Home() {
  useRevealOnScroll();

  // Re-run reveal observer when content changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
        observer.observe(el);
      });
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <FeaturedProject />
      <SaiNex />
      <Cybersecurity />
      <AIInnovation />
      <HardwareIoT />
      <Hackathons />
      <GitHub />
      <Connect />
      <Footer />
    </main>
  );
}
