import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import imgNexus from "@/assets/project-nexus.jpg";
import imgNstp from "@/assets/project-nstp.jpg";
import imgMind from "@/assets/project-mindmesh.jpg";
import imgEqui from "@/assets/project-equibase.jpg";
import imgSglt from "@/assets/project-sglt2.jpg";
import imgVoice from "@/assets/project-voice.jpg";
import imgGold from "@/assets/project-gold.jpg";
import imgDerma from "@/assets/project-dermavision.jpg";
import imgMammoApi from "@/assets/project-deepmammo-api.jpg";
import imgWeather from "@/assets/project-weather.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Wilfred Asumboya" },
      { name: "description", content: "Systems built end-to-end — clinical AI, web apps, ML models, and tools." },
      { property: "og:title", content: "Projects — Wilfred Asumboya" },
      { property: "og:description", content: "Systems built end-to-end — from architecture to deployment." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Tag = "Clinical AI" | "Web Apps" | "ML Models" | "Tools";

const projects: {
  title: string; tag: Tag; desc: string; tech: string[]; img: string; featured?: boolean; link?: string;
}[] = [
  {
    title: "DermaVision", tag: "Clinical AI", featured: true,
    desc: "Production Django + DRF inference API wrapping a DINOv2-Base vision model fine-tuned on 31 skin disease classes, exported to ONNX for lightweight CPU deployment. Integrates Groq Llama 3.3 70B for structured dermatology reports and ReportLab-generated PDF handouts. Deployed on Hugging Face Spaces via Docker.",
    tech: ["Django", "DRF", "DINOv2", "ONNX Runtime", "GradCAM", "Groq LLM", "Docker"],
    img: imgDerma,
    link: "https://huggingface.co/spaces/WilfredAyine/DermaDetect",
  },
  {
    title: "DeepMammo Inference API", tag: "Clinical AI", featured: true,
    desc: "Full-stack clinical AI inference system wrapping the DeepMammo mammography model as a production REST API. Returns abnormality type, pathology prediction, segmentation mask, GradCAM saliency, structured clinical report, and PDF — from a single POST request. ONNX export cut Docker image size by ~800MB.",
    tech: ["PyTorch", "ONNX", "Django", "DRF", "Groq LLM", "ReportLab", "Docker", "HF Spaces"],
    img: imgMammoApi,
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
    title: "SGLT2 Compound Classification", tag: "ML Models",
    desc: "ML classification models predicting compound activity in SGLT2 inhibition using cheminformatics datasets.",
    tech: ["Python", "Scikit-learn", "RDKit", "Pandas"],
    img: imgSglt,
  },
  {
    title: "Voice Cloning", tag: "ML Models",
    desc: "Deep learning models trained to replicate voice patterns from audio datasets. Full pipeline from data curation through training and quality evaluation.",
    tech: ["Python", "TensorFlow", "Audio Processing"],
    img: imgVoice,
  },
  {
    title: "GoldManager", tag: "Tools",
    desc: "Django inventory management system with Excel logging, real-time dashboards, secure deletion, automated statistics, and Ghana Cedis support.",
    tech: ["Django", "Excel", "JavaScript", "Chart.js"],
    img: imgGold,
  },
  {
    title: "Weather Tracking App", tag: "Tools",
    desc: "Mobile app integrating live API feeds to track and visualize weather forecasts with interactive temperature graphs and forecast cards.",
    tech: ["JavaScript", "REST API", "Mobile"],
    img: imgWeather,
  },
];

const filters = ["All", "Clinical AI", "Web Apps", "ML Models", "Tools"] as const;

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
          <div className="projects-grid">
            {shown.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className={`proj-card${p.featured ? " proj-featured" : ""}`}>
                  <img src={p.img} alt={`${p.title} project screenshot`} loading="lazy" />
                  <div className="proj-body">
                    <span className="tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tech-row">
                      {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link"
                      >
                        View on Hugging Face →
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
