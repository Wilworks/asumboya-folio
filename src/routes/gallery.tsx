import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";

// Real Photo Imports
import imgWilfredLab from "@/assets/wilfred-lab.jpg";
import imgElectrodeTitle from "@/assets/coursework-electrode-title.jpg";
import imgElectrodeCad from "@/assets/coursework-electrode-cad.jpg";
import imgElectrodeWorkshop from "@/assets/coursework-electrode-workshop.jpg";
import imgProfKaufmannSmock from "@/assets/prof-kaufmann-smock.jpg";
import imgProfKaufmannGsbe from "@/assets/prof-kaufmann-gsbe.jpg";
import imgAiPanel from "@/assets/ai-panel-discussion.jpg";
import imgProfKwofieCert from "@/assets/prof-kwofie-certificate.jpg";
import imgUgAward from "@/assets/award-handshake-ug.jpg";
import imgSurgicalScrubs from "@/assets/surgical-scrubs-or.jpg";
import imgOpSmileTeam from "@/assets/operation-smile-team.jpg";
import imgOpSmileFrame from "@/assets/operation-smile-frame.jpg";
import imgOrSuite from "@/assets/biomedical-or-suite.jpg";
import imgFootballCaptain from "@/assets/football-captain-trophy.jpg";
import imgFootballSquad from "@/assets/football-team-squad.jpg";
import imgFootballMedals from "@/assets/football-team-medals.jpg";
import imgOrganist from "@/assets/organist-performance.jpg";
import imgGsbeTutoring from "@/assets/gsbe-tutoring-session.jpg";
import imgGsbeLecture from "@/assets/gsbe-lecture-room.jpg";
import imgIntlSeminar from "@/assets/international-seminar-group.jpg";
import imgEntrepreneurshipPanel from "@/assets/entrepreneurship-summit-panel.jpg";
import imgMedicalExpo from "@/assets/medical-expo-2025.jpg";
import imgUgQuadrangle from "@/assets/ug-quadrangle-faculty.jpg";
import imgPreworksDashboard from "@/assets/preworks-dashboard-ui.jpg";
import imgPreworksCourses from "@/assets/preworks-courses-ui.jpg";

// Newly Added Real Hardware & Research Photos
import imgNeovitaIncubator from "@/assets/neovita-ghana-incubator.jpg";
import imgMechanicalCadModel from "@/assets/mechanical-systems-cad-model.jpg";
import imgWilfredDefendingMech from "@/assets/wilfred-defending-mechanical.jpg";
import imgFourierArduino from "@/assets/fourier-arduino-setup.jpg";
import imgFourierTeam from "@/assets/fourier-team-members.jpg";
import imgCodeDebuggingPerfect from "@/assets/code-debugging-perfect.jpg";

// Technical & Project Visuals
import imgMultilabel from "@/assets/research-multilabel.jpg";
import imgAirway from "@/assets/research-airway.jpg";
import imgDeepMammoUi from "@/assets/project-deepmammo-ui.png";
import imgDeepMammoReport from "@/assets/project-deepmammo-report.png";
import imgFourier from "@/assets/research-fourier.jpg";
import imgNaa from "@/assets/research-naa.jpg";
import imgShap from "@/assets/research-shap.jpg";
import imgDermaUi from "@/assets/project-dermadetect-ui.png";
import imgDermaReport from "@/assets/project-dermadetect-report.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wilfred Asumboya" },
      {
        name: "description",
        content:
          "Visual archive: Research lab, CAD presentations, FEA stress analysis defenses, NeoVita incubator design, AI panels, Operation Smile missions, mentorship, and sports.",
      },
      { property: "og:title", content: "Gallery — Wilfred Asumboya" },
      { property: "og:description", content: "Visual diary of research, projects, and community work." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Category =
  | "All"
  | "Hardware & Design"
  | "Research"
  | "Clinical AI & Web"
  | "Leadership & Outreach"
  | "Personal & Sports";

interface GalleryItem {
  id: string;
  caption: string;
  category: Category;
  src: string;
  tagline: string;
}

const items: GalleryItem[] = [
  // ── Hardware & Design ──
  {
    id: "neovita-incubator",
    caption: "NeoVita Ghana — Neonatal Incubator Design",
    category: "Hardware & Design",
    src: imgNeovitaIncubator,
    tagline: "BMEN 322 · 3D mechanical enclosure design for neonatal care in low-resource hospitals",
  },
  {
    id: "mechanical-cad-model",
    caption: "Cable-Actuated PIP Extension Orthosis CAD Exploded View",
    category: "Hardware & Design",
    src: imgMechanicalCadModel,
    tagline: "BMEN 308 · Detailed exploded assembly model with numbered component materials table",
  },
  {
    id: "wilfred-defending-mech",
    caption: "FEA Stress Analysis & Cable Redesign Defense",
    category: "Hardware & Design",
    src: imgWilfredDefendingMech,
    tagline: "Wilfred presenting SolidWorks FEA displacement & stress analysis results to faculty jury",
  },
  {
    id: "electrode-cad",
    caption: "Sweat-Tolerant Electrode CAD Assembly & Exploded View",
    category: "Hardware & Design",
    src: imgElectrodeCad,
    tagline: "BMEN 306 · SolidWorks CAD models of the multi-layer bioelectrode attachment",
  },
  {
    id: "electrode-title",
    caption: "Bioelectrode Engineering Design Defense",
    category: "Hardware & Design",
    src: imgElectrodeTitle,
    tagline: "Team Cosmic-75 presentation: Sweat-resistant skin bioelectrode for tropical climates",
  },
  {
    id: "electrode-workshop",
    caption: "BMEN 306 Engineering Design Workshop",
    category: "Hardware & Design",
    src: imgElectrodeWorkshop,
    tagline: "Collaborative design iteration, morphological charts & materials evaluation session",
  },
  {
    id: "or-suite",
    caption: "Biomedical Operating Suite Inspection",
    category: "Hardware & Design",
    src: imgOrSuite,
    tagline: "Field evaluation of surgical lamps, patient monitors & clinical equipment infrastructure",
  },

  // ── Research ──
  {
    id: "code-debugging-perfect",
    caption: "ML Pipeline & BioRxiv Code Debugging Session",
    category: "Research",
    src: imgCodeDebuggingPerfect,
    tagline: "Wilfred in lab coat with co-author Perfect Agbenorhevi debugging multi-label clinical AI models",
  },
  {
    id: "fourier-arduino-setup",
    caption: "Fourier Ptychography Micro-LED Matrix & Arduino Setup",
    category: "Research",
    src: imgFourierArduino,
    tagline: "Lab team configuring the computational microscopy LED array and optical sensor rig",
  },
  {
    id: "fourier-team-members",
    caption: "Fourier Ptychography Computational Microscopy Team",
    category: "Research",
    src: imgFourierTeam,
    tagline: "Research team under the banner: 'Biomedical Engineers Are The Architects Of Modern Medicine'",
  },
  {
    id: "wilfred-lab",
    caption: "Biomedical AI & Signal Processing Research Lab",
    category: "Research",
    src: imgWilfredLab,
    tagline: "Wilfred developing machine learning models and evaluating clinical data pipelines",
  },
  {
    id: "kwofie-cert",
    caption: "Research Recognition with Prof. Samuel Kojo Kwofie",
    category: "Research",
    src: imgProfKwofieCert,
    tagline: "Certificate presentation with Prof. Kwofie & senior faculty at UG IAST Research Unit",
  },
  {
    id: "multilabel-arch",
    caption: "Multi-Label Disease Complication Architecture",
    category: "Research",
    src: imgMultilabel,
    tagline: "First-author bioRxiv study · 350-run evaluation of CRF vs Attention heads",
  },
  {
    id: "airway-seg",
    caption: "3D Airway Volumetric Segmentation (CT)",
    category: "Research",
    src: imgAirway,
    tagline: "3D U-Net pipeline with combined Dice + BCE loss across 26 validation CT volumes",
  },
  {
    id: "fourier-rig",
    caption: "Fourier Ptychography Computational Microscopy Scheme",
    category: "Research",
    src: imgFourier,
    tagline: "Low-cost computational imaging rig led under Prof. Elsie Effah Kaufmann",
  },
  {
    id: "naa-ceramics",
    caption: "Fort Amsterdam NAA Ceramic Provenance Analysis",
    category: "Research",
    src: imgNaa,
    tagline: "Neutron Activation Analysis of 17th-century colonial ceramics under Prof. Elvis Tiburu",
  },
  {
    id: "shap-rag",
    caption: "SHAP Explainability & RAG Clinical Framework",
    category: "Research",
    src: imgShap,
    tagline: "Explainable multi-task AI targeting AUROC ≥ 0.85 across 5 vascular complications",
  },

  // ── Clinical AI & Web ──
  {
    id: "preworks-dashboard",
    caption: "PreWorks GSBE UG — Student Dashboard & Learning Portal",
    category: "Clinical AI & Web",
    src: imgPreworksDashboard,
    tagline: "Full-stack academic platform built for biomedical engineering students (Award Winner)",
  },
  {
    id: "preworks-courses",
    caption: "PreWorks GSBE UG — Course Materials Platform",
    category: "Clinical AI & Web",
    src: imgPreworksCourses,
    tagline: "Centralized repository for Level 100–400 biomedical engineering study materials",
  },
  {
    id: "dermavision-ui",
    caption: "DermaDetect Clinical Diagnostics — Web App Playground",
    category: "Clinical AI & Web",
    src: imgDermaUi,
    tagline: "Interactive assessment interface showing primary medical findings, lesion frame & AI saliency heatmap",
  },
  {
    id: "dermavision-report",
    caption: "DermaDetect Clinical Referral Note PDF Report",
    category: "Clinical AI & Web",
    src: imgDermaReport,
    tagline: "Automated ReportLab-generated clinical referral note with urgent triage and recommended treatment protocol",
  },
  {
    id: "deepmammo-ui",
    caption: "DeepMammo Breast Cancer Triage — Multi-Task Web App UI",
    category: "Clinical AI & Web",
    src: imgDeepMammoUi,
    tagline: "4-panel specimen matrix displaying mammography scan, GradCAM saliency heatmap, segmentation mask & overlay",
  },
  {
    id: "deepmammo-report",
    caption: "DeepMammo Mammography Analysis Report PDF",
    category: "Clinical AI & Web",
    src: imgDeepMammoReport,
    tagline: "Automated diagnostic PDF report with calcification coverage, malignancy classification & specialist referral",
  },

  // ── Leadership & Outreach ──
  {
    id: "ug-award",
    caption: "UGAANA Scholar Award Presentation",
    category: "Leadership & Outreach",
    src: imgUgAward,
    tagline: "Official award handshake receiving scholarship certificate in front of UG crest",
  },
  {
    id: "ai-panel",
    caption: "Pan-African AI & Cybersecurity Panelist",
    category: "Leadership & Outreach",
    src: imgAiPanel,
    tagline: "Speaker on Digital Ubuntu panel at WACCIP with Nelson Mandela University delegation",
  },
  {
    id: "kaufmann-smock",
    caption: "With ING. Prof. Elsie Effah Kaufmann",
    category: "Leadership & Outreach",
    src: imgProfKaufmannSmock,
    tagline: "Academic guidance & research discussion with Dean & NSMQ Quizmistress",
  },
  {
    id: "kaufmann-gsbe",
    caption: "GSBE-UG Executive Committee & Faculty Leadership",
    category: "Leadership & Outreach",
    src: imgProfKaufmannGsbe,
    tagline: "Vice President & student executive team with Prof. Elsie Effah Kaufmann",
  },
  {
    id: "surgical-scrubs",
    caption: "Clinical Shadowing in Surgical Scrubs",
    category: "Leadership & Outreach",
    src: imgSurgicalScrubs,
    tagline: "Supporting surgical teams inside the operating theatre during medical missions",
  },
  {
    id: "opsmile-team",
    caption: "Operation Smile Volunteer Mission · Cape Coast",
    category: "Leadership & Outreach",
    src: imgOpSmileTeam,
    tagline: "Volunteering with the medical care team for free cleft lip & palate surgeries",
  },
  {
    id: "opsmile-frame",
    caption: "Operation Smile — 'Until We Heal' Initiative",
    category: "Leadership & Outreach",
    src: imgOpSmileFrame,
    tagline: "Community outreach advocate creating smiles for children in low-resource settings",
  },
  {
    id: "gsbe-tutoring",
    caption: "Learning Spaces Saturday Mentorship & Tutoring",
    category: "Leadership & Outreach",
    src: imgGsbeTutoring,
    tagline: "Wilfred tutoring coursemates & junior students in programming and engineering math",
  },
  {
    id: "gsbe-lecture",
    caption: "GSBE Academic Committee Review Session",
    category: "Leadership & Outreach",
    src: imgGsbeLecture,
    tagline: "Leading exam preparation & tutorial sessions for biomedical engineering students",
  },
  {
    id: "intl-seminar",
    caption: "International Biomedical Engineering Academic Exchange",
    category: "Leadership & Outreach",
    src: imgIntlSeminar,
    tagline: "Departmental reception and academic discussion with international visiting professors",
  },
  {
    id: "entrepreneurship-panel",
    caption: "GSBE Entrepreneurship Summit Panel",
    category: "Leadership & Outreach",
    src: imgEntrepreneurshipPanel,
    tagline: "Panel session with faculty experts on innovation and health tech startups in Africa",
  },
  {
    id: "medical-expo",
    caption: "Medical Innovation Expo 2025",
    category: "Leadership & Outreach",
    src: imgMedicalExpo,
    tagline: "Participating in national health technology showcase at Academic City University",
  },
  {
    id: "ug-quadrangle",
    caption: "University of Ghana Engineering Quadrangle",
    category: "Leadership & Outreach",
    src: imgUgQuadrangle,
    tagline: "School of Engineering Sciences faculty & student leaders gathering",
  },

  // ── Personal & Sports ──
  {
    id: "football-captain",
    caption: "Inter-Departmental Football Champion & Captain",
    category: "Personal & Sports",
    src: imgFootballCaptain,
    tagline: "Wilfred as team captain holding the championship trophy on the pitch",
  },
  {
    id: "football-squad",
    caption: "Championship Victory Squad",
    category: "Personal & Sports",
    src: imgFootballSquad,
    tagline: "Team victory celebration around the trophy after winning the tournament",
  },
  {
    id: "football-medals",
    caption: "Gold Medal Winners — Departmental Tournament",
    category: "Personal & Sports",
    src: imgFootballMedals,
    tagline: "Celebrating championship medals with teammates",
  },
  {
    id: "organist",
    caption: "Organist & Keyboard Performance",
    category: "Personal & Sports",
    src: imgOrganist,
    tagline: "Beyond engineering: Performing on keyboard / organ at university concert",
  },
];

const categories: Category[] = [
  "All",
  "Hardware & Design",
  "Research",
  "Clinical AI & Web",
  "Leadership & Outreach",
  "Personal & Sports",
];

function Gallery() {
  const [activeCat, setActiveCat] = useState<Category>("All");
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  const filtered =
    activeCat === "All" ? items : items.filter((item) => item.category === activeCat);

  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <span className="tag" style={{ marginBottom: 12, display: "inline-block" }}>
            Visual Archive
          </span>
          <h1>Gallery</h1>
          <p className="sub">
            Research lab, hardware CAD defenses, NeoVita incubator design, AI panels, Operation Smile missions, sports, and music.
          </p>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="filter-bar" role="group" aria-label="Filter gallery items">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-pill${activeCat === cat ? " active" : ""}`}
            aria-pressed={activeCat === cat}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container-x">
          <div className="gallery-grid" key={activeCat}>
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 35}>
                <figure
                  className="gallery-card has-image"
                  onClick={() => setSelectedImg(item)}
                >
                  <div className="gallery-media-wrapper">
                    <img src={item.src} alt={item.caption} loading="lazy" />
                    <span className="gallery-cat-tag">{item.category}</span>
                  </div>
                  <figcaption className="gallery-caption">
                    <h3>{item.caption}</h3>
                    <p>{item.tagline}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="lightbox-backdrop"
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged view"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedImg(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedImg.src} alt={selectedImg.caption} />
            <div className="lightbox-meta">
              <span className="gallery-cat-tag">{selectedImg.category}</span>
              <h3>{selectedImg.caption}</h3>
              <p>{selectedImg.tagline}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
