/**
 * Reveal — scroll-triggered entrance animation.
 *
 * Uses IntersectionObserver to fire the animation only when the element
 * enters the viewport, not immediately on page load.
 *
 * Props:
 *  - delay    : ms before the animation starts after entry
 *  - variant  : entrance direction (fade-up | fade-left | fade-right | fade)
 *  - as       : render as any HTML element (default: div)
 *  - className: additional class names
 *  - style    : additional inline styles
 */
import {
  type ReactNode,
  type ElementType,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
  createElement,
} from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-left" | "fade-right" | "fade";
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/** @public */
export function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  as: As = "div",
  className = "",
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show immediately if user prefers reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes =
    `reveal reveal--${variant}${visible ? " in" : ""} ${className}`.trim();

  const combinedStyle = {
    "--reveal-delay": `${delay}ms`,
    ...style,
  } as CSSProperties;

  // createElement avoids TypeScript's strict ref typing for polymorphic components.
  return createElement(
    As as string,
    { ref, className: classes, style: combinedStyle },
    children
  );
}

/** Page-load progress bar — thin cyan line that sweeps across then fades. */
export function LoadBar() {
  return <div className="load-bar" />;
}
