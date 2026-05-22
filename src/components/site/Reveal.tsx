import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, as: As = "div" }: { children: ReactNode; delay?: number; as?: keyof JSX.IntrinsicElements }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  // @ts-expect-error ref polymorphic
  return <As ref={ref} className="reveal">{children}</As>;
}

export function LoadBar() {
  return <div className="load-bar" />;
}
