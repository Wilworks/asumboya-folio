/**
 * CustomCursor — a two-element trailing cursor for desktop.
 *
 * - `.cursor-dot`  : snaps exactly to the mouse position.
 * - `.cursor-ring` : follows with a spring-eased lag.
 * - Both grow + turn fully cyan when hovering interactive elements.
 * - Hidden via CSS on touch/coarse-pointer devices.
 * - Respects prefers-reduced-motion.
 */
import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [data-magnetic], [data-tilt], input, label, [role='button']";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show cursors only after first mouse move (avoid initial top-left flash).
    dot.style.opacity = "0";
    ring.style.opacity = "0";

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        visible = true;
      }
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animateRing);
    };

    // Hover state: grow and brighten on interactive elements.
    const addHover = () => {
      dot.classList.add("cursor--hover");
      ring.classList.add("cursor--hover");
    };
    const removeHover = () => {
      dot.classList.remove("cursor--hover");
      ring.classList.remove("cursor--hover");
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    // Delegate hover via event delegation — works for dynamically rendered elements.
    const onEnter = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) addHover();
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE_SELECTOR)) removeHover();
    };

    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout", onLeave, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
