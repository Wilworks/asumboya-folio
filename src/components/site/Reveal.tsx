import { type ReactNode, type ElementType, type CSSProperties } from "react";

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
}) {
  return (
    <As
      className="reveal"
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}

export function LoadBar() {
  return <div className="load-bar" />;
}
