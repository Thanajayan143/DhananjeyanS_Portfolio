import { useEffect, useRef } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll<HTMLElement>(
              ".reveal, .reveal-left, .reveal-right, .reveal-scale"
            );
            targets.forEach((t) => {
              t.classList.add("visible");
            });
            // Also reveal the container itself
            if (
              entry.target.classList.contains("reveal") ||
              entry.target.classList.contains("reveal-left") ||
              entry.target.classList.contains("reveal-right") ||
              entry.target.classList.contains("reveal-scale")
            ) {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}

export function useRevealOnScroll() {
  useEffect(() => {
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

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
