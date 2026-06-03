import { type ReactNode, type ElementType, type CSSProperties } from "react";

export function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  as: As = "div",
  className = "",
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  variant?: "fade-up" | "fade-left" | "fade-right";
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <As
      className={`reveal reveal--${variant} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </As>
  );
}

export function LoadBar() {
  return <div className="load-bar" />;
}
