/**
 * useTiltMagnetic — global mouse-motion effects.
 *
 * - `[data-tilt]`     → subtle 3D card tilt on mousemove
 * - `[data-magnetic]` → magnetic pull on mousemove (button float)
 *
 * Only activates on devices with a fine pointer (mouse) and when
 * prefers-reduced-motion is not set.
 *
 * Mount once at the root level via useEffect.
 */
import { useEffect } from "react";

export function useTiltMagnetic() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Tilt ───────────────────────────────────────────────────────────
    const handleTilt = (e: MouseEvent, el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transition = "transform 0.1s ease";
      el.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const resetTilt = (el: HTMLElement) => {
      el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      el.style.transform = "";
    };

    // ── Magnetic ───────────────────────────────────────────────────────
    const handleMagnetic = (e: MouseEvent, el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transition = "transform 0.15s ease";
      el.style.transform = `translate(${dx * 10}px, ${dy * 6}px)`;
    };

    const resetMagnetic = (el: HTMLElement) => {
      el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      el.style.transform = "";
    };

    // ── Bind ───────────────────────────────────────────────────────────
    const tiltEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]")
    );
    const magnetEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );

    type Handler = { el: HTMLElement; mm: (e: MouseEvent) => void; ml: () => void };

    const tiltHandlers: Handler[] = tiltEls.map((el) => {
      const mm = (e: MouseEvent) => handleTilt(e, el);
      const ml = () => resetTilt(el);
      el.addEventListener("mousemove", mm);
      el.addEventListener("mouseleave", ml);
      return { el, mm, ml };
    });

    const magnetHandlers: Handler[] = magnetEls.map((el) => {
      const mm = (e: MouseEvent) => handleMagnetic(e, el);
      const ml = () => resetMagnetic(el);
      el.addEventListener("mousemove", mm);
      el.addEventListener("mouseleave", ml);
      return { el, mm, ml };
    });

    return () => {
      [...tiltHandlers, ...magnetHandlers].forEach(({ el, mm, ml }) => {
        el.removeEventListener("mousemove", mm);
        el.removeEventListener("mouseleave", ml);
      });
    };
  }, []);
}
