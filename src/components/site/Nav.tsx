import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/leadership", label: "Leadership" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav${dark ? " nav--dark" : ""}${scrolled ? " nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="monogram">W<span className="dot">·</span>A</Link>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`nav-link${pathname === l.to ? " active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="cv-btn" href="/cv.pdf" download="Wilfred-Asumboya-CV.pdf">Download CV</a>
          <button
            type="button"
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? " open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
