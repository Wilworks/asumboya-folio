import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-x footer-grid">
        <div>
          <Link to="/" className="monogram">W<span className="dot">·</span>A</Link>
          <p className="footer-bio">
            Biomedical AI researcher building intelligent clinical systems for low-resource healthcare settings in Africa.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Elsewhere</h4>
          <div className="socials">
            <a className="social-btn" href="mailto:wilfredasumboya@gmail.com" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="m4 6 8 7 8-7"/></svg>
            </a>
            <a className="social-btn" href="https://linkedin.com/in/asumboya-wilfred-573321283" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06A4.16 4.16 0 0 1 17.6 8.7c4 0 4.74 2.63 4.74 6.05V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21h-4V9Z"/></svg>
            </a>
            <a className="social-btn" href="https://github.com/Wilworks" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container-x footer-bottom">
        © 2025 Wilfred Asumboya · Accra, Ghana
      </div>
    </footer>
  );
}
