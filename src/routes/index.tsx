import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import wilfred from "@/assets/wilfred.png";
import researchMulti from "@/assets/research-multilabel.jpg";
import researchMammo from "@/assets/research-deepmammo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilfred Asumboya — Biomedical AI Researcher" },
      { name: "description", content: "Biomedical engineering student at University of Ghana building AI for clinical decision support in low-resource healthcare." },
      { property: "og:title", content: "Wilfred Asumboya — Biomedical AI Researcher" },
      { property: "og:description", content: "Biomedical AI researcher · MIT Sloan correspondent · DeepMammo co-author." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const marqueeItems = [
  "Biomedical AI", "Multi-Label Prediction", "DeepMammo", "University of Ghana",
  "MIT Sloan", "INNOGEN", "Dean's Honour List", "Clinical Decision Support",
  "Fourier Ptychography", "Airway Segmentation",
];

const affiliations = [
  "University of Ghana", "MIT Sloan", "INNOGEN",
  "Innovate for Global Health", "Harvard Health Systems Hackathon", "UGAANA",
];

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
            <Reveal><div className="eyebrow">// Biomedical AI Researcher</div></Reveal>
            <Reveal delay={80}>
              <h1 className="hero-name">
                WILFRED<br />
                <span>AS<span className="underline-cyan">U</span>MBOYA</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-subtitle">Biomedical Engineering · AI &amp; ML · University of Ghana</p>
            </Reveal>
            <Reveal delay={240}>
              <p className="hero-para">
                Building intelligent clinical systems for low-resource healthcare settings in Africa.
                In active research correspondence with MIT Sloan, with a preprint in mammography AI.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="cta-row">
                <Link to="/research" className="btn btn-primary">View My Research →</Link>
                <Link to="/projects" className="btn btn-outline">See My Work</Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="trust-row">
                Dean&apos;s Honour List · MIT Sloan · INNOGEN Head of AI
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="hero-visual">
              <div className="photo-wrap">
                <div className="deco-arc" />
                <div className="photo-circle">
                  <img src={wilfred} alt="Wilfred Asumboya" />
                </div>
                <div className="float-card top-left">
                  <span className="label">Currently</span>
                  University of Ghana · Level 300
                </div>
                <div className="float-card float-card--alt bottom-right">
                  <span className="label">Preprint</span>
                  Co-author · DeepMammo 2026
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

      {/* FEATURED RESEARCH */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="section-heading">Current Research</h2></Reveal>
          <Reveal><p className="section-sub">Two active threads — one a controlled architectural study, one a peer-reviewed preprint.</p></Reveal>
          <div className="feat-grid">
            <Reveal>
              <article className="feat-card">
                <span className="pill pill-cyan">Ongoing</span>
                <h3>Multi-Label Disease Complication Prediction</h3>
                <p>A controlled experiment comparing six output-layer interaction mechanisms for joint clinical prediction across diabetes and myocardial infarction cohorts.</p>
                <img src={researchMulti} alt="" width={768} height={512} loading="lazy" style={{ width: "100%", borderRadius: 10, marginBottom: 18 }} />
                <Link to="/research" className="read-more">Read More →</Link>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="feat-card">
                <span className="pill pill-dark">Preprint · Mar 2026</span>
                <h3>DeepMammo: Multi-Task Mammography AI</h3>
                <p>Co-authored preprint proposing a unified multi-task framework for simultaneous lesion segmentation, classification, and pathology prediction.</p>
                <img src={researchMammo} alt="" width={768} height={512} loading="lazy" style={{ width: "100%", borderRadius: 10, marginBottom: 18 }} />
                <Link to="/research" className="read-more">Read More →</Link>
              </article>
            </Reveal>
          </div>
          <div className="center-cta">
            <Link to="/research" className="btn btn-outline">View All Research →</Link>
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
