import { type ReactNode, type ElementType, type CSSProperties } from "react";

export function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-left" | "fade-right";
  as?: ElementType;
}) {
  return (
    <As
      className={`reveal reveal--${variant}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}

export function LoadBar() {
  return <div className="load-bar" />;
}
