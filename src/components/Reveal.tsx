import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// Content stays visible if IntersectionObserver is unavailable or motion is reduced.
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !element ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    )
      return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add("reveal-pending");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
