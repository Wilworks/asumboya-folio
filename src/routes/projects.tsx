import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import imgNexus from "@/assets/project-nexus.png";
import imgNstp from "@/assets/project-nstp.png";
import imgMind from "@/assets/project-mindmesh.png";
import imgEqui from "@/assets/project-equibase.png";
import imgSglt from "@/assets/project-sglt2.png";
import imgVoice from "@/assets/project-voice.png";
import imgGold from "@/assets/project-gold.png";
import imgDermaUi from "@/assets/project-dermadetect-ui.png";
import imgDermaReport from "@/assets/project-dermadetect-report.png";
import imgMammoUi from "@/assets/project-deepmammo-ui.png";
import imgMammoReport from "@/assets/project-deepmammo-report.png";
import imgWeather from "@/assets/project-weather.jpg";
import imgBems from "@/assets/project-bems-lite.png";
import imgLora from "@/assets/project-llama-lora.jpg";
import imgElectrode from "@/assets/coursework-electrode-cad.jpg";
import imgNeovita from "@/assets/neovita-ghana-incubator.jpg";
import imgOrthosis from "@/assets/mechanical-systems-cad-model.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Wilfred Asumboya" },
      { name: "description", content: "Systems built end-to-end — clinical AI, hardware engineering, web apps, ML models, and tools." },
      { property: "og:title", content: "Projects — Wilfred Asumboya" },
      { property: "og:description", content: "Systems built end-to-end — from architecture to deployment." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Tag = "Clinical AI" | "Engineering Design" | "Web Apps" | "ML Models" | "Tools";

interface Project {
  title: string;
  tag: Tag;
  desc: string;
  tech: string[];
  img: string;
  reportImg?: string;
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    title: "BEMS-Lite", tag: "Web Apps", featured: true,
    desc: "Offline-first desktop application for hospital biomedical engineering departments. Features full-lifecycle equipment management, PM scheduling, and fault ticketing with background Turso cloud sync. Includes role-based access, Chart.js management dashboards, and automated PDF/Excel reporting. Packaged as a standalone Windows executable.",
    tech: ["Flask", "SQLite", "Turso libSQL", "Vanilla CSS", "Chart.js"],
    img: imgBems,
  },
  {
    title: "DermaVision / DermaDetect", tag: "Clinical AI", featured: true,
    desc: "Production Django + DRF inference API wrapping a DINOv2-Base vision model fine-tuned on 31 skin disease classes, exported to ONNX for lightweight CPU deployment. Integrates Groq Llama 3.3 70B for structured dermatology reports and ReportLab-generated PDF handouts. Deployed on Hugging Face Spaces via Docker.",
    tech: ["Django", "DRF", "DINOv2", "ONNX Runtime", "GradCAM", "Groq LLM", "Docker"],
    img: imgDermaUi,
    reportImg: imgDermaReport,
    link: "https://huggingface.co/spaces/WilfredAyine/DermaDetect",
  },
  {
    title: "DeepMammo Inference API", tag: "Clinical AI", featured: true,
    desc: "Full-stack clinical AI inference system wrapping the DeepMammo mammography model as a production REST API. Returns abnormality type, pathology prediction, segmentation mask, GradCAM saliency, structured clinical report, and PDF — from a single POST request. ONNX export cut Docker image size by ~800MB.",
    tech: ["PyTorch", "ONNX", "Django", "DRF", "Groq LLM", "ReportLab", "Docker", "HF Spaces"],
    img: imgMammoUi,
    reportImg: imgMammoReport,
    link: "https://huggingface.co/spaces/WilfredAyine/deepmammo",
  },
  {
    title: "Nexus Intellisense", tag: "Clinical AI",
    desc: "Django-based multi-task disease prediction system for low-resource healthcare. Implements SHAP-based explainability and RAG-powered clinical recommendations. End-to-end from data ingestion to a clinician-facing interface with real-time inference.",
    tech: ["Django", "PyTorch", "SHAP", "RAG", "PostgreSQL", "REST API"],
    img: imgNexus,
  },
  {
    title: "NSTP Chatbot", tag: "Clinical AI",
    desc: "Django chatbot applying CBT principles to identify and challenge negative self-talk. Integrates local (Ollama) and cloud (Perplexity) LLMs with cognitive distortion detection via RAG.",
    tech: ["Django", "Ollama", "Perplexity API", "RAG"],
    img: imgNstp,
  },
  {
    title: "MindMesh", tag: "Web Apps",
    desc: "AI study platform with flashcards, quizzes, RAG-based research summaries, and gamified engagement. Built with user feedback iteration loops.",
    tech: ["Django", "RAG", "LLM", "JavaScript"],
    img: imgMind,
  },
  {
    title: "EquiBase", tag: "Web Apps",
    desc: "Django system with real-time dashboards, automated validation, and lifecycle tracking for medical equipment. Deployed at Komfo Anokye Teaching Hospital.",
    tech: ["Django", "JavaScript", "PostgreSQL", "REST API"],
    img: imgEqui,
  },
  {
    title: "Llama Fine-Tuning Pipeline (LoRA)", tag: "ML Models",
    desc: "Modular, configuration-driven pipeline for parameter-efficient fine-tuning of LLMs (LLaMA, TinyLlama) using Low-Rank Adaptation. Features architecture-aware attention-module selection, activation/gradient checkpointing, dynamic device mapping, and FP16/FP32 mixed precision to minimise GPU VRAM. PyYAML-driven hyperparameters for reproducibility.",
    tech: ["Python", "PyTorch", "LoRA", "Hugging Face", "YAML"],
    img: imgLora,
  },
  {
    title: "Voice-Based Medical Triage Assistant", tag: "Clinical AI",
    desc: "Voice interface for symptom intake in Twi and English. Uses speech recognition, Whisper transcription, and structured NLU classification for rural triage.",
    tech: ["Python", "Whisper", "SpeechRecognition", "FastAPI"],
    img: imgVoice,
  },
  {
    title: "SGLT2i Clinical Decision Support System", tag: "Clinical AI",
    desc: "Evidence-based decision support algorithm for initiating SGLT2 inhibitors in T2D patients with renal/cardiovascular risk. Built from KDIGO guidelines.",
    tech: ["Python", "Streamlit", "Clinical Rules"],
    img: imgSglt,
  },
  {
    title: "Artisanal Gold Assay Prediction Pipeline", tag: "ML Models",
    desc: "Machine learning pipeline predicting gold yield from geological and spectral data to optimize non-destructive field assay workflows.",
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas"],
    img: imgGold,
  },
  {
    title: "Weather Station Telemetry & Dashboard", tag: "Tools",
    desc: "IoT telemetry collector and web dashboard monitoring environmental sensors with real-time alerting and historical trend plots.",
    tech: ["Python", "Flask", "SQLite", "Chart.js"],
    img: imgWeather,
  },
  {
    title: "Sweat-Tolerant Skin Bioelectrode System", tag: "Engineering Design",
    desc: "BMEN 306 design project. Engineered a multi-layer bioelectrode combining a directional Janus wicking membrane, breathable perforated acrylic adhesive, and Ag/AgCl hydrogel to maintain low contact impedance under tropical heat and humidity.",
    tech: ["Biomaterials", "Janus Membrane", "Signal Acquisition", "SolidWorks"],
    img: imgElectrode,
    link: "/coursework",
  },
  {
    title: "NeoVita Ghana — Neonatal Monitor Mechanical Enclosure", tag: "Engineering Design",
    desc: "BMEN 322 design project. Modular, IP54-rated neonatal vital signs monitor enclosure crafted for low-resource district hospitals. Features optical-grade polycarbonate viewing panel, flame-retardant ABS housing, FEA drop-test validation, and passive convection cooling.",
    tech: ["CAD / SolidWorks", "FEA Stress Analysis", "Ashby Material Selection", "Pugh Matrix"],
    img: imgNeovita,
    link: "/coursework",
  },
  {
    title: "Cable-Actuated Wrist-Finger Extension Orthosis", tag: "Engineering Design",
    desc: "BMEN 308 rehabilitation biomechanics project. Wrist-mounted active extension orthosis for PIP joint contracture and post-stroke hand physical therapy, using Bowden cable transmission and micro-ratchet tension adjustment.",
    tech: ["Biomechanics", "Bowden Actuation", "3D Printing PETG", "Physical Therapy"],
    img: imgOrthosis,
    link: "/coursework",
  },
];

const filters = ["All", "Clinical AI", "Engineering Design", "Web Apps", "ML Models", "Tools"] as const;

function ProjectCard({ p }: { p: Project }) {
  const [activeTab, setActiveTab] = useState<"ui" | "report">("ui");
  const currentImg = activeTab === "report" && p.reportImg ? p.reportImg : p.img;

  return (
    <article className={`proj-card${p.featured ? " proj-featured" : ""}`}>
      <div className="proj-media" style={{ position: "relative" }}>
        {p.reportImg && (
          <div className="card-view-switcher">
            <button
              type="button"
              className={`card-view-btn${activeTab === "ui" ? " active" : ""}`}
              onClick={() => setActiveTab("ui")}
            >
              💻 App UI
            </button>
            <button
              type="button"
              className={`card-view-btn${activeTab === "report" ? " active" : ""}`}
              onClick={() => setActiveTab("report")}
            >
              📄 Clinical PDF Report
            </button>
          </div>
        )}
        {p.link ? (
          p.link.startsWith("/") ? (
            <Link to={p.link} style={{ display: "block", height: "100%" }}>
              <img src={currentImg} alt={`${p.title} view`} loading="lazy" />
            </Link>
          ) : (
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "block", height: "100%" }}>
              <img src={currentImg} alt={`${p.title} view`} loading="lazy" />
            </a>
          )
        ) : (
          <img src={currentImg} alt={`${p.title} view`} loading="lazy" />
        )}
        {!p.featured && (
          <div className="proj-overlay">
            <span className="proj-overlay-tag">{p.tag}</span>
          </div>
        )}
      </div>
      <div className="proj-body">
        {p.featured && (
          <span className="proj-featured-badge">★ Featured</span>
        )}
        {!p.featured && <span className="tag">{p.tag}</span>}
        <h3>
          {p.link ? (
            p.link.startsWith("/") ? (
              <Link to={p.link}>{p.title}</Link>
            ) : (
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            )
          ) : (
            p.title
          )}
        </h3>
        <p>{p.desc}</p>
        <div className="tech-row">
          {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16, flexWrap: "wrap" }}>
          {p.link && (
            p.link.startsWith("/") ? (
              <Link to={p.link} className="proj-link">
                View Coursework Details →
              </Link>
            ) : (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-link"
              >
                {p.link.includes("huggingface.co") ? "Interactive Demo on Hugging Face ↗" : "View Live Project ↗"}
              </a>
            )
          )}
          {p.reportImg && (
            <button
              type="button"
              className="read-more"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onClick={() => setActiveTab(activeTab === "ui" ? "report" : "ui")}
            >
              {activeTab === "ui" ? "📄 Toggle Clinical PDF Report" : "💻 Switch to App UI"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <h1>Projects</h1>
          <p className="sub">Systems built end-to-end — from architecture to deployment.</p>
        </div>
      </header>

      <div className="filter-bar" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-pill${active === f ? " active" : ""}`}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container-x">
          <div className="projects-grid" key={active}>
            {shown.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 60}
                style={{ gridColumn: p.featured ? "1 / -1" : undefined }}
              >
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
