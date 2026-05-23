import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import wilfred from "@/assets/wilfred.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wilfred Asumboya" },
      { name: "description", content: "Researcher, engineer, and builder — Wilfred's path from northern Ghana to biomedical AI at the University of Ghana." },
      { property: "og:title", content: "About — Wilfred Asumboya" },
      { property: "og:description", content: "From Bolgatanga to biomedical AI — the path, the people, and the long view." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const mentors = [
  { name: "Dr. Cletus Fiifi Adams", inst: "University of Ghana", desc: "Primary research supervisor across multi-label prediction, DeepMammo, and airway segmentation work." },
  { name: "Prof. Elvis Tiburu Kwason", inst: "University of Ghana", desc: "Supervisor on the Fort Amsterdam Neutron Activation Analysis project and ongoing scientific correspondence." },
  { name: "Prof. Elsie Effah Kaufmann", inst: "University of Ghana", desc: "Mentor on the Fourier Ptychography microscopy project. Featured Wilfred in the NSMQ Superstar Spotlight." },
  { name: "Prof. Samuel Kojo Kwofie", inst: "University of Ghana", desc: "Research Assistant supervisor at IAST on medical imaging and digital mental health AI." },
  { name: "Prof. Kwabena Kan-Dapaah", inst: "University of Ghana", desc: "Co-supervisor on the explainable multi-task diabetes complications framework." },
];

const courses = [
  { code: "BMEN 305", title: "Biomedical Signal Processing", note: "Filtering, spectral analysis, ECG/EEG pipelines." },
  { code: "BMEN 311", title: "Medical Imaging Systems", note: "CT, MRI, ultrasound physics and reconstruction." },
  { code: "BMEN 401", title: "Machine Learning for Biomedicine", note: "Classical ML and deep learning on clinical data." },
  { code: "BMEN 322", title: "Biostatistics & Experimental Design", note: "Hypothesis testing, study power, controlled comparisons." },
  { code: "BMEN 308", title: "Physiological Modelling", note: "Compartmental models of disease dynamics." },
  { code: "BMEN 412", title: "Computational Imaging", note: "Phase retrieval, Fourier ptychography, inverse problems." },
  { code: "MATH 226", title: "Linear Algebra & Numerical Methods", note: "Foundations for deep learning and optimisation." },
  { code: "CSEN 204", title: "Data Structures & Algorithms", note: "Engineering rigour behind production ML systems." },
];

const awards = [
  ["Dean's Honour List", "University of Ghana", "L100 – L300"],
  ["UGAANA Scholarship", "University of Ghana Alumni", "Ongoing"],
  ["Harvard Health Systems Hackathon — Participant", "Harvard University", "2025"],
  ["NSMQ Upper East Regional Winner", "Notre Dame Seminary SHS", "2022"],
  ["NSMQ National 1/8 Finalist", "National Science & Maths Quiz", "2022"],
  ["WASSCE Aggregate 7", "Notre Dame Seminary SHS", "2023"],
];

function About() {
  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <h1>About</h1>
          <p className="sub">Researcher. Engineer. Builder.</p>
        </div>
      </header>

      {/* NARRATIVE */}
      <section className="section">
        <div className="container-x narrative-grid">
          <Reveal>
            <div className="narrative-photo">
              <img src={wilfred} alt="Wilfred Asumboya" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="narrative-text">
              <p>
                I was born and raised in northern Ghana, in Bolgatanga — the first in my family to
                receive formal education. That fact has never been background; it&apos;s been
                load-bearing. Every project I take on is measured against the question of whether it
                would have meant anything to the people I grew up with.
              </p>
              <p>
                Before university I took a gap year. I played the organ in church, taught at a local
                JHS, and played football. I needed time to figure out what kind of work would deserve
                a life. I landed on biomedical engineering — and specifically biomedical AI — because
                it sits where rigorous engineering and direct human consequence meet.
              </p>
              <p>
                Now I&apos;m at the University of Ghana studying Biomedical Engineering, on the
                Dean&apos;s Honour List from Level 100 through Level 300, and leading AI work at
                INNOGEN — shipping multi-task models, RAG pipelines, and explainable systems
                that are built to actually deploy.
              </p>
              <p className="pull-quote">
                The infrastructure I want to build won&apos;t be flashy. It will be the kind of
                quiet system that a nurse in a regional hospital reaches for without thinking.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" style={{ background: "var(--cyan-tint)", paddingTop: 80, paddingBottom: 80 }}>
        <div className="container-x">
          <Reveal><h2 className="section-heading">Education</h2></Reveal>
          <div className="two-col">
            <Reveal>
              <div className="bordered-card">
                <h3>University of Ghana</h3>
                <div className="meta">BSc. Biomedical Engineering · Level 300</div>
                <ul>
                  <li>Expected January 2028</li>
                  <li>UGAANA Scholar</li>
                  <li>Dean&apos;s Honour List — L100 through L300</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bordered-card">
                <h3>Notre Dame Seminary SHS</h3>
                <div className="meta">General Science · WASSCE Grade 7</div>
                <ul>
                  <li>NSMQ 2022 Contestant</li>
                  <li>Won Upper East Regional Round</li>
                  <li>Reached National 1/8th Stage</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="section-heading">Mentors &amp; Correspondence</h2></Reveal>
          <Reveal><p className="section-sub">The people whose questions and standards have shaped how I work.</p></Reveal>
          <div className="three-col" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {mentors.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <div className="mentor-card">
                  <h3>{m.name}</h3>
                  <div className="inst">{m.inst}</div>
                  <p>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEERING */}
      <section className="section" style={{ background: "var(--cyan-tint)" }}>
        <div className="container-x">
          <Reveal><h2 className="section-heading">Volunteering &amp; Community</h2></Reveal>
          <div className="two-col">
            <Reveal>
              <div className="bordered-card">
                <h3>Operation Smile Volunteer</h3>
                <div className="meta">Cape Coast · Jun – Jul 2025</div>
                <ul>
                  <li>Supported cleft-surgery mission logistics</li>
                  <li>Patient intake and family coordination</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="bordered-card">
                <h3>Volunteer Teacher</h3>
                <div className="meta">Bolgatanga Model JHS · 2019 – 2024</div>
                <ul>
                  <li>Taught mathematics and integrated science</li>
                  <li>Five-year continuous commitment to home community</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="section-heading">Awards &amp; Recognition</h2></Reveal>
          <Reveal>
            <table className="awards-table">
              <thead>
                <tr><th>Award</th><th>Institution</th><th>Year</th></tr>
              </thead>
              <tbody>
                {awards.map((row) => (
                  <tr key={row[0]}>
                    <td style={{ fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ color: "var(--muted-color)" }}>{row[1]}</td>
                    <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
