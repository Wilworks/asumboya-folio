import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";
import imgMulti from "@/assets/code-debugging-perfect.jpg";
import imgMammo from "@/assets/project-deepmammo-ui.png";
import imgFourier from "@/assets/fourier-arduino-setup.jpg";
import imgFieldTest from "@/assets/field-test-dr-cletus.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Wilfred Asumboya" },
      { name: "description", content: "Active and completed research in biomedical AI: multi-label prediction, mammography, edge vision, Fourier ptychography." },
      { property: "og:title", content: "Research — Wilfred Asumboya" },
      { property: "og:description", content: "Pushing the boundary of clinical AI and physiological sensing in under-resourced settings." },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: Research,
});

type Status = "Ongoing" | "Under Review" | "Completed";

const projects: {
  status: Status; pillClass: string; title: string; supervisor: string;
  meta: string; desc: string; key: string; img?: string; caption?: string;
}[] = [
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Comorbidity-Aware Output-Layer Design for Multi-Label Clinical Prediction",
    supervisor: "Lead Researcher · Supervisor: Dr. Cletus Fiifi Adams · Correspondence: Prof. Rama Ramakrishnan (MIT Sloan)",
    meta: "Clinical Machine Learning · Output-Head Architecture · 20 Seeds · CRF Ablations · 2025 – Present",
    desc: "Studies whether modeling comorbidity structure in the output layer improves multi-label prediction of diabetes complications. The question began as how a model could handle interacting diseases such as malaria and typhoid without jointly labeled patient data, and was sharpened by guidance from Prof. Rama Ramakrishnan (MIT Sloan) on when an inductive bias helps. Compared six output-head designs (independent, additive, multiplicative, symmetric CRF, residual MLP, and combined) across five training-data fractions, with backbone initialization matched within conditions for paired comparison. Extended the study to 20 seeds and added three CRF ablations (frozen-random, fixed to empirical co-occurrence, and a deliberately incorrect asymmetric prior) following Prof. Ramakrishnan’s review. The CRF advantage seen at seven seeds did not survive 20, and the ablations showed no consistent ordering between the biologically motivated and incorrect priors.",
    key: "CRF advantage seen at 7 seeds did not survive 20, and ablations showed no consistent ordering between biologically motivated and incorrect priors — framing inductive bias as an empirical test.",
    img: imgMulti,
    caption: "Wilfred with friend Perfect Agbenorhevi during a machine learning debugging session in the lab",
  },
  {
    status: "Under Review", pillClass: "pill-dark",
    title: "DeepMammo: Multi-Task Mammography Segmentation & Classification",
    supervisor: "Co-Author (software, data curation, visualization, methodology) · Supervisor: Dr. Cletus Fiifi Adams",
    meta: "INbreast (segmentation) · CBIS-DDSM (classification) · EfficientNet-B4 + FPN + Attention U-Net · Manuscript 2026",
    desc: "Co-authored a unified multi-task learning framework that simultaneously segments lesions and predicts abnormality type and pathology. A shared EfficientNet-B4 encoder and FPN feed an attention U-Net-style decoder and two classification heads, trained jointly on two unpaired datasets. Built the Django/DRF inference service with ONNX Runtime and LLM-assisted PDF reports, reducing the Docker image by ~800 MB.",
    key: "Dice 0.870 · IoU 0.786 · Abnormality AUC 0.977 · Pathology AUC 0.983 · Sensitivity 93.5% · Specificity 93.1%",
    img: imgMammo,
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "GDHS Maternal Health Risk — Epidemiological Analysis",
    supervisor: "Project Lead & Second Author · INNOGEN AI Research",
    meta: "Ghana DHS 2008 · 2014 · 2022 · 29,326 women · Composite risk index · WHO-validated criteria · Manuscript in preparation",
    desc: "Led a student team analyzing three pooled Ghana Demographic and Health Survey waves (2008, 2014, 2022; 29,326 women) using a composite risk index built from eight WHO-validated clinical criteria. Composite maternal risk fell from 68.9% to 32.0%, while anaemia stalled near 20.7% after 2014 and recorded low birth weight rose from 3.63% to 5.43% — a ceiling that expanded facility access alone does not address. Multi-morbidity (three or more risk criteria) fell from 20.8% to 2.4%, while newly created regions in the ecological transition belt (Bono East, Savannah, and Oti) emerged as the highest-risk areas in 2022.",
    key: "Composite risk: 68.9% → 32.0%. Low birth weight: 3.63% → 5.43% — structural ceiling not addressable by facility access alone.",
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "GDHS Maternal Health Risk — Machine Learning Prediction",
    supervisor: "Project Lead & Second Author · INNOGEN AI Research",
    meta: "83 non-invasive features · XGBoost · LightGBM · Logistic Regression · SHAP · 5-fold stratified CV · Manuscript in preparation",
    desc: "Led benchmarking of logistic regression against LightGBM and XGBoost for predicting maternal risk at first antenatal booking from 83 non-invasive features. The team's automated leakage scanner removed every variable derived from the outcome criteria, and SHAP analysis surfaced clinically interpretable drivers — including a sharp rise in risk below 45 kg maternal weight. Designed for rural clinics without laboratory equipment: 83 inputs come from a ~10-minute questionnaire and can run as offline inference on tablets already deployed in Ghana.",
    key: "XGBoost AUC-ROC 0.853 ±0.003 (5-fold stratified CV) vs. 0.801 logistic regression. Offline-capable on tablets already deployed in Ghana.",
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Edge Computer Vision & 3D Depth Gating Field System",
    supervisor: "Lead Developer · Supervisor: Dr. Cletus Fiifi Adams",
    meta: "Frontal depth gating · Real-time multi-target tracking · Jetson / Edge CV · 9.8 FPS · Field Test 2026",
    desc: "Developed and field-tested an edge computer vision pipeline for real-time 3D depth gating and livestock chute passage tracking with Dr. Cletus Fiifi Adams. Integrates frontal Z-plane thresholding (3.0 m gate cut-off), automated human suppression/filtering (0.88 confidence filtering), and continuous multi-target tracking under challenging agricultural conditions with dust and variable lighting.",
    key: "Real-time edge execution at 9.8 FPS with 3D depth gate filtering and multi-object trajectory tracking in the field.",
    img: imgFieldTest,
  },
  {
    status: "Completed", pillClass: "pill-outline",
    title: "Airway Segmentation using Deep Learning",
    supervisor: "Supervisor: Dr. Cletus Fiifi Adams",
    meta: "3D U-Net · CT volumes · 26 patients · 2025",
    desc: "Developed an automated deep learning pipeline for 3D nasal airway segmentation from CT volumes using a 3D U-Net. Incorporated comprehensive preprocessing, combined Dice + BCE loss, learning rate scheduling, early stopping, and mixed precision training across 26 patient volumes.",
    key: "Dice 0.8855 · IoU 0.7982 · Sensitivity 89.06% · Specificity 99.73%",
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Diabetes Complications — Explainable MTL + RAG",
    supervisor: "Supervisors: Prof. Kwabena Kan-Dapaah & Dr. Cletus Fiifi Adams",
    meta: "5 vascular complications · SHAP · RAG over clinical guidelines",
    desc: "Developing a multi-task deep learning framework jointly predicting five Type 2 diabetes vascular complications within a unified architecture. Integrates SHAP-based feature attribution and a RAG module grounded in clinical guidelines for evidence-based management recommendations.",
    key: "Target: AUROC ≥ 0.85 across all complication heads.",
  },
  {
    status: "Completed", pillClass: "pill-outline",
    title: "Nasal High Flow Therapy & End-tidal CO₂ During Hypercarbia",
    supervisor: "Co-Author · Lead Author: Dr. Cletus Fiifi Adams · In-vitro study · Manuscript in preparation",
    meta: "3D-printed adult upper-airway model · Piston-driven breathing · Simulated apnea 10–40 s · NHF 10–60 L/min · Jan 2026",
    desc: "In-vitro study using a 3D-printed adult upper-airway model with piston-driven breathing and simulated apnea of 10 to 40 seconds, testing nasal high flow from 10 to 60 L/min. Raising flow lowered end-tidal CO₂ by about 0.15 mmHg per L/min up to 40 L/min with little further change to 60 L/min. Peak CO₂ after 40 seconds of apnea fell from 8.2% to 7.0% (v/v) at 60 L/min.",
    key: "At 60 L/min: end-tidal CO₂ fell 18% after 40 s apnea. Peak (v/v): 8.2% → 7.0% at 60 L/min.",
  },
  {
    status: "Completed", pillClass: "pill-outline",
    title: "Fort Amsterdam Ceramic Analysis (NAA)",
    supervisor: "Supervisor: Prof. Elvis Tiburu Kwason",
    meta: "Neutron Activation Analysis · Python · ImageJ · 3D Slicer · Jan 2026",
    desc: "Conducted elemental analysis of 17th-century colonial ceramic specimens from Fort Amsterdam using Neutron Activation Analysis. Processed NAA data in Python and used ImageJ and 3D Slicer to confirm artifact shapes.",
    key: "Identified one anomalous sample; main group confirmed a shared coastal clay signature.",
  },
  {
    status: "Ongoing", pillClass: "pill-cyan",
    title: "Fourier Ptychography Microscopy",
    supervisor: "Supervisor: Prof. Elsie Effah Kaufmann · Fieldwork: Optica Amplify Immersion 2026",
    meta: "Computational imaging · LED array · Phase retrieval · Sub-$500 reference build",
    desc: "Leading development of a low-cost computational microscopy system using Fourier Ptychographic imaging principles for the Medirevs team, supervised by Prof. Elsie Effah Kaufmann. Following technical dialogues at the Optica Amplify Immersion Program (Rochester, NY) with Prof. Hong Hua (Univ. of Arizona) and Prof. Kimani Toussaint (Brown Univ.), the design incorporates physical spatial-frequency verification (2NA cutoff), tolerance for LED matrix misalignment, and bounded latency budgets for downstream CNN classification.",
    key: "Sub-$500 reference build guided by Hong Hua's decision rule & Kimani Toussaint's physical-first framework.",
    img: imgFourier,
  },
];

const filters = ["All", "Ongoing", "Under Review", "Completed"] as const;

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
          <p className="sub">Pushing the boundary of clinical AI and physiological sensing in under-resourced settings.</p>
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
                  {p.img && (
                    <div style={{ marginTop: 16 }}>
                      <img src={p.img} alt={p.caption || p.title} loading="lazy" width={768} height={512} style={{ width: "100%", borderRadius: 10 }} />
                      {p.caption && (
                        <p style={{ fontSize: "0.8rem", color: "var(--muted-color)", marginTop: 8, fontStyle: "italic", lineHeight: 1.4 }}>
                          {p.caption}
                        </p>
                      )}
                    </div>
                  )}
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
