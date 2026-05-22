import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import nsmqImg from "@/assets/nsmq-illustration.jpg";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Wilfred Asumboya" },
      { name: "description", content: "Leadership across INNOGEN, GSBE-UG, SRC, and community organisations — building infrastructure for ideas." },
      { property: "og:title", content: "Leadership — Wilfred Asumboya" },
      { property: "og:description", content: "Building communities as deliberately as I build systems." },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: Leadership,
});

const items = [
  {
    title: "Head, AI Department — INNOGEN", meta: "2025 – Present",
    desc: "Leading a research team building intelligent systems for West Africa. Overseeing projects in maternal health, flood risk mapping, galamsey detection, and water pollution monitoring.",
  },
  {
    title: "Campus-to-Country Lead — Innovate for Global Health, UG Chapter", meta: "2026 – Present",
    desc: "Connecting campus innovation to national health challenges. Building pipelines between student researchers and applied health programmes.",
  },
  {
    title: "Vice President — GSBE-UG", meta: "2025 – 2026",
    desc: "Organised educational outreach and academic guidance for biomedical engineering students.",
  },
  {
    title: "Head, Academic Committee — GSBE-UG", meta: "2024 – 2025",
    desc: "Coordinated tutoring, exam-prep sessions, and faculty liaison.",
  },
  {
    title: "Deputy Head, IT Committee — SRC, University of Ghana", meta: "2025 – Present",
    desc: "Leading AI features of the official SRC mobile app — RAG pipelines and LLM API integration for student services.",
  },
  {
    title: "Level 100 President — Bonaboto Union, UoG", meta: "2024 – 2025",
    desc: "Led the freshman cohort of the northern Ghana students association at UG.",
  },
  {
    title: "Peer-to-Peer Mentorship Facilitator", meta: "2024 – 2026",
    desc: "Facilitated mentorship matching and study circles across the biomedical engineering programme.",
  },
];

function Leadership() {
  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <h1>Leadership</h1>
          <p className="sub">Building communities as deliberately as I build systems.</p>
        </div>
      </header>

      <section className="section">
        <div className="container-x">
          <Reveal>
            <blockquote className="quote">
              &ldquo;Leadership, for me, is the infrastructure that lets good ideas travel.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <p className="quote-para">
              Most of the technical work I&apos;m proud of only happened because someone else had
              already built the room I walked into — the committee, the union, the lab group. So when
              I take on a leadership role, I treat it as engineering: design for the people who&apos;ll
              show up after me.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "var(--cyan-tint)", padding: "60px 0" }}>
        <div className="container-x">
          <div className="timeline">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 60}>
                <div className="tl-item">
                  <div className="tl-node" />
                  <div className="tl-content">
                    <h3>{it.title}</h3>
                    <div className="tl-meta">{it.meta}</div>
                    <p>{it.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NSMQ */}
      <section className="section">
        <div className="container-x">
          <div className="narrative-grid">
            <Reveal>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "2.6rem", marginBottom: 20 }}>NSMQ 2022</h2>
                <p style={{ color: "var(--text)", lineHeight: 1.75, marginBottom: 16 }}>
                  Representing Notre Dame Seminary SHS at the National Science &amp; Maths Quiz in 2022.
                  Won the Upper East Regional Round and advanced to the National 1/8th stage.
                </p>
                <p style={{ color: "var(--muted-color)", lineHeight: 1.7 }}>
                  More than a competition — NSMQ was the first time I felt the difference between
                  knowing a topic and being able to retrieve it under pressure. That instinct still
                  shapes how I build clinical decision systems today.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <img src={nsmqImg} alt="" loading="lazy" width={960} height={640} style={{ width: "100%", borderRadius: 16, boxShadow: "var(--shadow-card)" }} />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
