import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import imgMulti from "@/assets/research-multilabel.jpg";
import imgMammo from "@/assets/research-deepmammo.jpg";
import imgAirway from "@/assets/research-airway.jpg";
import imgShap from "@/assets/research-shap.jpg";
import imgNaa from "@/assets/research-naa.jpg";
import imgFourier from "@/assets/research-fourier.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Wilfred Asumboya" },
      { name: "description", content: "Active and completed research in biomedical AI: multi-label prediction, mammography, airway segmentation, Fourier ptychography." },
      { property: "og:title", content: "Research — Wilfred Asumboya" },
      { property: "og:description", content: "Pushing the boundary of clinical AI in under-resourced settings." },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: Research,
});

type Status = "Ongoing" | "Preprint" | "Completed";

const projects: {
  status: Status; pillClass: string; title: string; supervisor: string;
  meta: string; desc: string; key: string; img: string;
}[] = [
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Multi-Label Disease Complication Prediction",
    supervisor: "Supervisor: Dr. Cletus Fiifi Adams",
    meta: "Type 2 Diabetes · Myocardial Infarction · 5 data fractions · 7 seeds",
    desc: "Designed a controlled experiment comparing six output-layer interaction mechanisms (symmetric CRF, multiplicative gating, bilinear attention, rank-one factorised, residual MLP) for multi-label clinical prediction. Evaluated across five data fractions and seven random seeds. Introduced a reverse inference framework treating the winning mechanism's identity as a biological instrument for characterising disease co-occurrence structure.",
    key: "Consistently negative CRF interaction parameter — evidence that shared biological signal is already captured in backbone features.",
    img: imgMulti,
  },
  {
    status: "Preprint", pillClass: "pill-dark",
    title: "DeepMammo: Multi-Task Mammography AI",
    supervisor: "Supervisor: Dr. Cletus Fiifi Adams",
    meta: "INbreast · CBIS-DDSM · EfficientNet + FPN + U-Net",
    desc: "Co-authored a preprint proposing a unified multi-task learning framework for simultaneous lesion segmentation, abnormality classification, and pathology prediction. Shared EfficientNet encoder with FPN, U-Net decoder, and dual classification heads. Preprint released March 2026.",
    key: "Dice 0.87 · AUC 0.98 · Accuracy 93.39%",
    img: imgMammo,
  },
  {
    status: "Completed", pillClass: "pill-outline",
    title: "Airway Segmentation using Deep Learning",
    supervisor: "Supervisor: Dr. Cletus Fiifi Adams",
    meta: "3D U-Net · CT volumes · 26 patients · 2025",
    desc: "Developed an automated deep learning pipeline for 3D nasal airway segmentation from CT volumes using a 3D U-Net. Incorporated comprehensive preprocessing, combined Dice + BCE loss, learning rate scheduling, early stopping, and mixed precision training across 26 patient volumes.",
    key: "Dice 0.8855 · IoU 0.7982 · Sensitivity 89.06% · Specificity 99.73%",
    img: imgAirway,
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Diabetes Complications — Explainable MTL + RAG",
    supervisor: "Supervisors: Prof. Kwabena Kan-Dapaah & Dr. Cletus Fiifi Adams",
    meta: "5 vascular complications · SHAP · RAG over clinical guidelines",
    desc: "Developing a multi-task deep learning framework jointly predicting five Type 2 diabetes vascular complications within a unified architecture. Integrates SHAP-based feature attribution and a RAG module grounded in clinical guidelines for evidence-based management recommendations.",
    key: "Target: AUROC ≥ 0.85 across all complication heads.",
    img: imgShap,
  },
  {
    status: "Completed", pillClass: "pill-outline",
    title: "Fort Amsterdam Ceramic Analysis (NAA)",
    supervisor: "Supervisor: Prof. Elvis Tiburu Kwason",
    meta: "Neutron Activation Analysis · Python · ImageJ · 3D Slicer · Jan 2026",
    desc: "Conducted elemental analysis of 17th-century colonial ceramic specimens from Fort Amsterdam using Neutron Activation Analysis. Processed NAA data in Python and used ImageJ and 3D Slicer to confirm artifact shapes.",
    key: "Identified one anomalous sample; main group confirmed a shared coastal clay signature.",
    img: imgNaa,
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Fourier Ptychography Microscopy",
    supervisor: "Supervisor: Prof. Elsie Effah Kaufmann",
    meta: "Computational imaging · LED array · phase retrieval",
    desc: "Leading development of a low-cost computational microscopy system using Fourier Ptychographic imaging principles. Sits at the intersection of optical engineering, signal processing, and computational imaging for diagnostics in low-resource settings.",
    key: "Designing a sub-$500 reference build for African teaching hospitals.",
    img: imgFourier,
  },
];

const filters = ["All", "Ongoing", "Preprint", "Completed"] as const;

function Research() {
  const [active, setActive] = useState<typeof filters[number]>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.status === active);

  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <h1>Research</h1>
          <p className="sub">Pushing the boundary of clinical AI in under-resourced settings.</p>
        </div>
      </header>

      <div className="filter-bar" role="group" aria-label="Filter research by status">
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
          <div className="research-grid">
            {shown.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className="res-card">
                  <span className={`pill ${p.pillClass}`}>{p.status}</span>
                  <h3>{p.title}</h3>
                  <div className="supervisor">{p.supervisor}</div>
                  <div className="dataset">{p.meta}</div>
                  <p className="desc">{p.desc}</p>
                  <div className="key">{p.key}</div>
                  <img src={p.img} alt={`${p.title} — research illustration`} loading="lazy" width={768} height={512} />
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
