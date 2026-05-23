import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wilfred Asumboya" },
      { name: "description", content: "Moments from the lab, the field, and the road — research, leadership, and life." },
      { property: "og:title", content: "Gallery — Wilfred Asumboya" },
      { property: "og:description", content: "Visual diary of research, projects, and community work." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

// Placeholder slots — drop image imports here later.
// Example: import lab1 from "@/assets/gallery/lab-1.jpg";
const slots: { caption: string; src?: string }[] = [
  { caption: "INNOGEN — AI department working session" },
  { caption: "GSBE-UG outreach" },
  { caption: "Operation Smile mission · Cape Coast" },
  { caption: "Harvard Health Systems Hackathon · Pre-Works" },
  { caption: "Lab work — Fourier Ptychography rig" },
  { caption: "NSMQ contest day · Notre Dame Seminary" },
  { caption: "Fort Amsterdam fieldwork" },
  { caption: "Bolgatanga Model JHS · volunteer teaching" },
  { caption: "Dean's Honour recognition" },
];

function Gallery() {
  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <h1>Gallery</h1>
          <p className="sub">Lab, field, and community — a visual diary.</p>
        </div>
      </header>

      <section className="section">
        <div className="container-x">
          <div className="gallery-grid">
            {slots.map((s, i) => (
              <Reveal key={i} delay={i * 40}>
                <figure className="gallery-item">
                  {s.src ? (
                    <img src={s.src} alt={s.caption} loading="lazy" />
                  ) : (
                    <div className="gallery-placeholder" aria-hidden>
                      <span>Image coming soon</span>
                    </div>
                  )}
                  <figcaption>{s.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
