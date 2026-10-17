import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import wilfred from "@/assets/wilfred-lab.jpg";
import wilfredPortrait from "@/assets/wilfred.png";
import imgDebugging from "@/assets/code-debugging-perfect.jpg";
import researchMammo from "@/assets/project-deepmammo-ui.png";
import imgWilfredKimani from "@/assets/wilfred-kimani-toussaint.jpg";
import imgWilfredHongHua from "@/assets/wilfred-hong-hua.png";
import imgWilfredBrambilla from "@/assets/wilfred-gilberto-brambilla.jpg";
import imgAmplifyAward from "@/assets/amplify-group2-winners.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilfred Asumboya — Biomedical AI Researcher & ML Engineer" },
      { name: "description", content: "Biomedical Engineering undergraduate at University of Ghana researching comorbidity-aware neural architectures, edge clinical AI, and physiological sensing." },
      { property: "og:title", content: "Wilfred Asumboya — Biomedical AI Researcher & ML Engineer" },
      { property: "og:description", content: "Biomedical AI researcher · Co-Founder & Head of AI at INNOGEN · Multi-paper co-author · Maternal health, comorbidity modelling, medical imaging." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const marqueeItems = [
  "AI / ML Engineering", "PyTorch", "scikit-learn", "Multi-Task Learning",
  "RAG", "LLM Integration", "Explainable AI", "SHAP", "Django",
  "Computer Vision", "Clinical Decision Support", "DeepMammo",
  "Maternal Health AI", "GDHS Analysis", "Multi-Label Prediction",
  "Fourier Ptychography", "XGBoost", "LightGBM",
];

const affiliations = [
  "University of Ghana", "INNOGEN",
  "Innovate for Global Health", "Optica Foundation", "Harvard Health Systems Hackathon", "UGAANA Scholar",
  "SRC · UG", "GSBE-UG",
];

/** Stat card for academic and research credentials */
function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="stat-card">
      <span className="stat-card-num">{value}</span>
      <span className="stat-card-label">{label}</span>
      {sub && <span style={{ fontSize: "0.75rem", color: "var(--cyan)", marginTop: 6, display: "block", lineHeight: 1.3 }}>{sub}</span>}
    </div>
  );
}

function Index() {
  return (
    <>
      <LoadBar />
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="dot-grid" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="container-x hero-grid">
          <div>
            <Reveal>
              <div className="hero-badge">
                <span className="badge-dot" /> Open to opportunities
              </div>
            </Reveal>
            <Reveal delay={80}><div className="eyebrow">// Biomedical AI Researcher · ML Engineer</div></Reveal>
            <Reveal delay={160}>
              <h1 className="hero-name">
                WILFRED<br />
                <span>AS<span className="underline-cyan">U</span>MBOYA</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="hero-subtitle">Biomedical Engineering · Clinical Machine Learning · University of Ghana</p>
            </Reveal>
            <Reveal delay={320}>
              <p className="hero-para">
                I research comorbidity-aware output-layer architectures, physiological sensing, and edge clinical machine learning for under-resourced healthcare. Co-Founder &amp; Head of AI at INNOGEN. Optica Amplify Optics 2026 Best Presentation Award Winner.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="cta-row">
                <Link to="/research" className="btn btn-primary" data-magnetic>Explore Research →</Link>
                <Link to="/projects" className="btn btn-outline" data-magnetic>Engineered Systems</Link>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="hero-stats">
                <div className="stat-item"><span className="stat-num">1st</span><span className="stat-label">Class · Distinction</span></div>
                <div className="stat-divider">·</div>
                <div className="stat-item"><span className="stat-num">5</span><span className="stat-label">Research Studies</span></div>
                <div className="stat-divider">·</div>
                <div className="stat-item"><span className="stat-num">2026</span><span className="stat-label">Optica Award Winner</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="hero-visual">
              <div className="photo-wrap">
                <div className="deco-arc" />
                <div className="photo-circle">
                  <img src={wilfredPortrait} alt="Wilfred Ayine Asumboya — Biomedical AI Researcher" />
                </div>
                <div className="float-card top-left">
                  <span className="label">Academic Standing</span>
                  First Class Distinction
                </div>
                <div className="float-card float-card--alt bottom-right">
                  <span className="label">Global Recognition</span>
                  Optica 2026 Award Winner
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((x, i) => (
            <span key={i}>{x} ·</span>
          ))}
        </div>
      </div>

      {/* AFFILIATIONS */}
      <section className="affiliations">
        <div className="container-x">
          <div className="section-label">Affiliated with &amp; recognised by</div>
          <div className="aff-row">
            {affiliations.map((a) => (
              <Reveal key={a}><span className="aff-badge">{a}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: 60 }}>
        <div className="container-x">
          <div className="stats-strip">
            <Reveal><StatCard value="1st Class" label="Academic Distinction" sub="Dean's Honour List L100–L300" /></Reveal>
            <Reveal delay={100}><StatCard value="5" label="Research Studies" sub="Clinical AI, Imaging &amp; Maternal Health" /></Reveal>
            <Reveal delay={200}><StatCard value="20" label="Seeds Experimental Rigor" sub="CRF Ablations · Prof. Ramakrishnan (MIT)" /></Reveal>
            <Reveal delay={300}><StatCard value="1 of 25" label="Optica Global Scholars" sub="2026 Best Presentation Award" /></Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="section-heading">Current Research</h2></Reveal>
          <Reveal><p className="section-sub">Controlled empirical studies in clinical deep learning, comorbidity structure, and multi-task diagnostics.</p></Reveal>
          <div className="feat-grid">
            <Reveal>
              <article className="feat-card" data-tilt>
                <span className="pill pill-cyan">Ongoing Study</span>
                <h3>Comorbidity-Aware Output-Layer Design</h3>
                <p>Studies whether modeling comorbidity structure in the output layer improves multi-label prediction across 6 output architectures, 20 random seeds, and 3 CRF ablations with guidance from Prof. Rama Ramakrishnan (MIT Sloan).</p>
                <img src={imgDebugging} alt="Wilfred with friend Perfect Agbenorhevi during a machine learning debugging session in the lab" width={768} height={512} loading="lazy" style={{ width: "100%", borderRadius: 10, marginBottom: 8 }} />
                <p style={{ fontSize: "0.78rem", color: "var(--muted-color)", fontStyle: "italic", marginBottom: 14 }}>Wilfred with friend Perfect Agbenorhevi during a machine learning debugging session in the lab</p>
                <Link to="/research" className="read-more">Read Research Details →</Link>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="feat-card" data-tilt>
                <span className="pill pill-dark">Under Review · 2026</span>
                <h3>DeepMammo: Multi-Task Mammography AI</h3>
                <p>Co-authored unified multi-task deep learning framework for joint lesion segmentation and hierarchical classification with an ONNX inference microservice and automated clinical reports.</p>
                <img src={researchMammo} alt="DeepMammo multi-task UI" width={768} height={512} loading="lazy" style={{ width: "100%", borderRadius: 10, marginBottom: 18 }} />
                <Link to="/research" className="read-more">Read Research Details →</Link>
              </article>
            </Reveal>
          </div>
          <div className="center-cta">
            <Link to="/research" className="btn btn-outline">View All Research &amp; Field Studies →</Link>
          </div>
        </div>
      </section>

      {/* OPTICA AMPLIFY SPOTLIGHT ON HOMEPAGE */}
      <section className="section" style={{ background: "rgba(0, 196, 214, 0.04)", borderTop: "1px solid rgba(0, 196, 214, 0.15)", borderBottom: "1px solid rgba(0, 196, 214, 0.15)", padding: "70px 0" }}>
        <div className="container-x">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
            <div>
              <span className="tag" style={{ marginBottom: 12, display: "inline-block" }}>International Immersion &amp; Mentorship</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3.2vw, 2.8rem)", margin: "0 0 10px 0" }}>Optica Amplify Optics Immersion · Rochester, NY</h2>
              <p style={{ color: "var(--muted-color)", maxWidth: 680, margin: 0, lineHeight: 1.6 }}>
                Selected as one of 25 rising scholars globally for the 2026 Amplify Optics Immersion. Winner of the <strong>2026 Best Presentation Award</strong>. Mentored by leading faculty from Brown, Arizona, and Southampton on optical physics, computational imaging limits, and sensing bottlenecks.
              </p>
            </div>
            <Link to="/leadership" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
              Read Full Field Report →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <Reveal>
              <div className="gallery-card has-image" style={{ margin: 0 }}>
                <div className="gallery-media-wrapper">
                  <img src={imgWilfredKimani} alt="With Prof. Kimani Toussaint (Brown University)" loading="lazy" />
                  <span className="gallery-cat-tag">Brown Univ.</span>
                </div>
                <div className="gallery-caption">
                  <h3 style={{ fontSize: "1.05rem" }}>Prof. Kimani Toussaint</h3>
                  <p>Dialogue on pulse oximetry, tissue scattering &amp; why physical assumptions precede ML corrections.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="gallery-card has-image" style={{ margin: 0 }}>
                <div className="gallery-media-wrapper">
                  <img src={imgWilfredHongHua} alt="With Prof. Hong Hua (University of Arizona)" loading="lazy" />
                  <span className="gallery-cat-tag">Univ. of Arizona</span>
                </div>
                <div className="gallery-caption">
                  <h3 style={{ fontSize: "1.05rem" }}>Prof. Hong Hua</h3>
                  <p>3D Microscopy pioneer on the decision rule: physical frequency support vs. compute latency.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="gallery-card has-image" style={{ margin: 0 }}>
                <div className="gallery-media-wrapper">
                  <img src={imgWilfredBrambilla} alt="With Prof. Gilberto Brambilla (University of Southampton)" loading="lazy" />
                  <span className="gallery-cat-tag">Southampton</span>
                </div>
                <div className="gallery-caption">
                  <h3 style={{ fontSize: "1.05rem" }}>Prof. Gilberto Brambilla</h3>
                  <p>Sensing lead on data speed bottlenecks (~1 GB/s) &amp; budgeting ML pipelines for future edge compute.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="gallery-card has-image" style={{ margin: 0 }}>
                <div className="gallery-media-wrapper">
                  <img src={imgAmplifyAward} alt="Group 2 Best Presentation Award Winners" loading="lazy" />
                  <span className="gallery-cat-tag">Award Winner</span>
                </div>
                <div className="gallery-caption">
                  <h3 style={{ fontSize: "1.05rem" }}>2026 Best Presentation</h3>
                  <p>Group 2 awarded top honors at the Amplify Optics Immersion among 25 international researchers.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PERSONAL STATEMENT */}
      <section className="section" style={{ background: "var(--cyan-tint)" }}>
        <div className="container-x">
          <Reveal>
            <blockquote className="quote">
              &ldquo;I grew up in northern Ghana — the first in my family to receive formal education.
              That shapes everything I build.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={120}>
            <p className="quote-para">
              My work sits at the intersection of clinical realities and modern AI. The hospitals I&apos;ve seen
              in Bolgatanga don&apos;t need bleeding-edge novelty — they need systems that survive low bandwidth,
              imperfect data, and the long arc of deployment.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="quote-para">
              I&apos;m building toward a long-term vision: an open, evidence-grounded clinical decision support
              infrastructure that meets African healthcare where it actually is.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
