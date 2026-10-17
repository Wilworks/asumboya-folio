/**
 * useTheme — manages light/dark mode for the portfolio.
 *
 * - Reads localStorage on mount; falls back to prefers-color-scheme.
 * - Applies / removes the `.dark` class on <html>.
 * - Persists preference to localStorage on change.
 */
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "wa-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    return "dark"; // Default to dark mode
  } catch {
    return "dark";
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Silently ignore if localStorage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme } as const;
}
