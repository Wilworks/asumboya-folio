/**
 * useCountUp — animates a number from 0 → target when the element
 * enters the viewport. Uses IntersectionObserver + requestAnimationFrame
 * with an easeOutExpo curve.
 *
 * Usage:
 *   const { count, ref } = useCountUp(10);
 *   <div ref={ref as React.RefObject<HTMLDivElement>}>
 *     {count}+
 *   </div>
 */
import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // Respect reduced motion — jump straight to the target value.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          observer.disconnect();

          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased =
              progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { rootMargin: "-60px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref } as const;
}
