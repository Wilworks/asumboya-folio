import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import imgAiPanel from "@/assets/ai-panel-discussion.jpg";
import imgProfKaufmann from "@/assets/prof-kaufmann-smock.jpg";
import imgOpSmile from "@/assets/operation-smile-frame.jpg";
import imgWilfredKimani from "@/assets/wilfred-kimani-toussaint.jpg";
import imgWilfredHongHua from "@/assets/wilfred-hong-hua.png";
import imgWilfredBrambilla from "@/assets/wilfred-gilberto-brambilla.jpg";
import imgWilfredBurrow from "@/assets/wilfred-joshua-burrow.jpg";
import imgAmplifyAward from "@/assets/amplify-group2-winners.jpg";
import imgWilfredSarahMoore from "@/assets/wilfred-sarah-moore.jpg";

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
    title: "Co-Founder & Head, AI Department — INNOGEN", meta: "2025 – Present",
    desc: "Co-founded and lead a research team building intelligent systems for West Africa. Overseeing projects in maternal health risk stratification, flood risk mapping, galamsey detection, and water pollution monitoring.",
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
    title: "Optica Amplify Optics Immersion Program", meta: "Sep 2026",
    desc: "Selected as one of 25 students worldwide for work on a low-cost Fourier Ptychography microscope. Group 2 received the 2026 Best Presentation Award.",
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

      {/* OPTICA AMPLIFY OPTICS IMMERSION SPOTLIGHT */}
      <section className="section" style={{ background: "var(--navy)", color: "#ffffff", padding: "80px 0" }}>
        <div className="container-x">
          <Reveal>
            <span className="tag" style={{ background: "rgba(0, 196, 214, 0.2)", color: "var(--cyan)", border: "1px solid rgba(0, 196, 214, 0.4)", marginBottom: 16, display: "inline-block" }}>
              Rochester, New York · Sep 2026
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#FFFFFF", marginBottom: 16 }}>
              Amplify Optics Immersion: Global Mentorship &amp; Lessons on Optics
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.05rem", maxWidth: 840, lineHeight: 1.7, marginBottom: 40 }}>
              Selected by Optica as one of 25 rising scholars worldwide for the Amplify Optics Immersion Program at the Rochester Riverside Convention Center.
              Beyond technical sessions on optical theories from ray to quantum regimes, the experience centered on deep one-on-one dialogues with world-leading pioneers in biomedical optics, computational imaging, and high-throughput sensing — shaping the foundational engineering philosophy for our Fourier ptychography and clinical ML pipelines.
            </p>
          </Reveal>

          {/* Mentorship Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            <Reveal delay={60}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgWilfredKimani} alt="Wilfred with Prof. Kimani Toussaint" />
                  <span className="amplify-badge">Brown University</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Prof. Kimani Toussaint</h3>
                  <p className="amplify-role">Professor of Engineering · Keynote Lecturer</p>
                  <blockquote className="amplify-quote">
                    &ldquo;A model that corrects a measurement can hide a measurement that was wrong from the start. Return to the physical assumptions first.&rdquo;
                  </blockquote>
                  <p className="amplify-desc">
                    Examined whether clinical sensor failure (such as pulse oximetry discrepancies in dark skin tones) is an engineering or scientific flaw. Key takeaway: the Beer-Lambert law breaks down from tissue scattering before machine learning can help — always interrogate physical assumptions before building computational models.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgWilfredHongHua} alt="Wilfred with Prof. Hong Hua" />
                  <span className="amplify-badge">University of Arizona</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Prof. Hong Hua</h3>
                  <p className="amplify-role">Pioneer in 3D Microscopy &amp; Surgical Endoscopy</p>
                  <blockquote className="amplify-quote">
                    &ldquo;Check the physics: computation only recovers what the measurements captured. Then check the application: can it afford the processing?&rdquo;
                  </blockquote>
                  <p className="amplify-desc">
                    Posed the central trade-off of our Fourier ptychography project: when to choose computational reconstruction over physical optics. Her decision rule: if numerical aperture limits the raw measurements, algorithms cannot invent missing detail without hallucination; for surgery, real-time latency required pure optics, while offline diagnostics can leverage computation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgWilfredBurrow} alt="Wilfred with Dr. Joshua Burrow" />
                  <span className="amplify-badge">Morgan State University</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Dr. Joshua Burrow</h3>
                  <p className="amplify-role">Assistant Professor · Meta-Optics &amp; Optoelectronics</p>
                  <blockquote className="amplify-quote">
                    &ldquo;Active beam steering and meta-optics bring the speed of light to wearable diagnostic biophotonics.&rdquo;
                  </blockquote>
                  <p className="amplify-desc">
                    Former mentee of Prof. Kimani Toussaint, recognized for pioneering meta-optics and wearable sensors. Discussed how active optoelectronic switching and metasurfaces can be translated from high-end nanolithography into accessible, scalable diagnostic platforms for low-resource clinics.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgWilfredBrambilla} alt="Wilfred with Prof. Gilberto Brambilla" />
                  <span className="amplify-badge">Univ. of Southampton</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Prof. Gilberto Brambilla</h3>
                  <p className="amplify-role">Optoelectronics Research Centre · Sensing Lead</p>
                  <blockquote className="amplify-quote">
                    &ldquo;Estimate the computing power your ML needs today, and build the tools ready for the hardware of tomorrow.&rdquo;
                  </blockquote>
                  <p className="amplify-desc">
                    Discussed high-throughput optical fiber sensing where data rates reach ~1 GB/s (for sub-minute earthquake and tsunami warning). Advised that data processing speed is the principal bottleneck, and urged planning ML architectures with future edge compute capacity in mind.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Group 2 & Sarah Moore Showcase */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }}>
            <Reveal delay={100}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgAmplifyAward} alt="Group 2 Best Presentation Award Winners" />
                  <span className="amplify-badge" style={{ background: "var(--cyan)", color: "#040F1E", fontWeight: 700 }}>2026 Best Presentation Award</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Group 2 — Award-Winning Presentation Team</h3>
                  <p className="amplify-role">Joseph, Abigail, Solomon, Victoria, and Wilfred</p>
                  <p className="amplify-desc">
                    Honored with the 2026 Best Presentation Award among all 25 international participant groups at the Amplify Optics Immersion for translating computational optics and Fourier ptychography principles to accessible clinical tools.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="amplify-card">
                <div className="amplify-card-media">
                  <img src={imgWilfredSarahMoore} alt="Wilfred with Sarah Moore" />
                  <span className="amplify-badge">Optica Foundation</span>
                </div>
                <div className="amplify-card-body">
                  <h3>Sarah Moore &amp; Optica Leadership</h3>
                  <p className="amplify-role">Senior Program Manager · Optica Foundation</p>
                  <p className="amplify-desc">
                    End-to-end guidance from program selection through travel coordination. The Amplify Optics Immersion convenes underrepresented researchers globally to accelerate leadership in optical science and engineering.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LEADERSHIP IN ACTION */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="section-heading">Leadership &amp; Global Health Initiatives</h2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <Reveal>
              <div className="gallery-card has-image">
                <div className="gallery-media-wrapper">
                  <img src={imgAiPanel} alt="Wilfred on AI panel discussion at WACCIP" loading="lazy" />
                  <span className="gallery-cat-tag">Pan-African AI Panel</span>
                </div>
                <div className="gallery-caption">
                  <h3>Digital Ubuntu AI &amp; Cybersecurity Panel</h3>
                  <p>Panelist at the WACCIP workshop with Nelson Mandela University delegation speaking on AI policy &amp; opportunities in Africa.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="gallery-card has-image">
                <div className="gallery-media-wrapper">
                  <img src={imgProfKaufmann} alt="Wilfred with Prof. Elsie Effah Kaufmann" loading="lazy" />
                  <span className="gallery-cat-tag">Academic Leadership</span>
                </div>
                <div className="gallery-caption">
                  <h3>Faculty &amp; Student Guidance</h3>
                  <p>Working closely with ING. Prof. Elsie Effah Kaufmann on departmental initiatives and research mentorship.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="gallery-card has-image">
                <div className="gallery-media-wrapper">
                  <img src={imgOpSmile} alt="Wilfred Operation Smile photo frame" loading="lazy" />
                  <span className="gallery-cat-tag">Operation Smile Mission</span>
                </div>
                <div className="gallery-caption">
                  <h3>Cleft Surgery Volunteer Mission</h3>
                  <p>Supporting medical teams and patient care during Operation Smile Ghana mission in Cape Coast.</p>
                </div>
              </div>
            </Reveal>
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
              <div style={{ background: "rgba(0, 196, 214, 0.05)", border: "1px solid rgba(0, 196, 214, 0.2)", borderRadius: 16, padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: "2.2rem" }}>🏆</span>
                  <div>
                    <h4 style={{ margin: 0, fontSize: "1.25rem", color: "#E8EFF6" }}>Upper East Regional Champions</h4>
                    <span style={{ fontSize: "0.85rem", color: "var(--cyan)", fontFamily: "var(--font-mono)" }}>Notre Dame Seminary Senior High School</span>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.5)", display: "block", marginBottom: 4 }}>Competition</span>
                    <strong style={{ fontSize: "0.95rem", color: "#ffffff" }}>National Science &amp; Maths Quiz</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cyan)", display: "block", marginBottom: 4 }}>Stage Reached</span>
                    <strong style={{ fontSize: "0.95rem", color: "var(--cyan)" }}>National 1/8th Stage</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
