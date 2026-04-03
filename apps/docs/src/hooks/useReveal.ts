"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-triggered reveal animation.
 * Adds `data-visible="true"` when element enters viewport.
 * Use with CSS: [data-visible] { opacity: 0; transform: translateY(20px); }
 *               [data-visible="true"] { opacity: 1; transform: none; }
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
