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

// Real Hardware, Research & Fieldwork Photos
import imgNeovitaIncubator from "@/assets/neovita-ghana-incubator.jpg";
import imgMechanicalCadModel from "@/assets/mechanical-systems-cad-model.jpg";
import imgWilfredDefendingMech from "@/assets/wilfred-defending-mechanical.jpg";
import imgFourierArduino from "@/assets/fourier-arduino-setup.jpg";
import imgFourierTeam from "@/assets/fourier-team-members.jpg";
import imgCodeDebuggingPerfect from "@/assets/code-debugging-perfect.jpg";
import imgFieldTestCletus from "@/assets/field-test-dr-cletus.jpg";

// Real Amplify Optics Immersion (Rochester, NY) Photos
import imgWilfredHongHua from "@/assets/wilfred-hong-hua.png";
import imgWilfredBrambilla from "@/assets/wilfred-gilberto-brambilla.jpg";
import imgWilfredKimani from "@/assets/wilfred-kimani-toussaint.jpg";
import imgWilfredBurrow from "@/assets/wilfred-joshua-burrow.jpg";
import imgAmplifyGroup2 from "@/assets/amplify-group2-winners.jpg";
import imgWilfredSarahMoore from "@/assets/wilfred-sarah-moore.jpg";
import imgWilfredAnoopoma from "@/assets/wilfred-anoopoma-bhowmik.jpg";
import imgOpticaNametag from "@/assets/optica-nametag-wilfred.jpg";
import imgWilfredRochester from "@/assets/wilfred-rochester-city.jpg";

// Real Web App & Diagnostic Artifacts
import imgDeepMammoUi from "@/assets/project-deepmammo-ui.png";
import imgDeepMammoReport from "@/assets/project-deepmammo-report.png";
import imgDermaUi from "@/assets/project-dermadetect-ui.png";
import imgDermaReport from "@/assets/project-dermadetect-report.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Wilfred Asumboya" },
      {
        name: "description",
        content:
          "Visual archive: Optica Amplify Immersion (Rochester NY), hardware CAD defenses, NeoVita incubator design, AI panels, Operation Smile missions, sports, and field research.",
      },
      { property: "og:title", content: "Gallery — Wilfred Asumboya" },
      { property: "og:description", content: "Visual diary of research, fieldwork, and community leadership." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

type Category =
  | "All"
  | "Amplify Optics (NY)"
  | "Hardware & Design"
  | "Research"
  | "Clinical AI & Web"
  | "Leadership & Outreach"
  | "Personal & Sports";

interface GalleryQuote {
  text: string;
  author: string;
}

interface GalleryItem {
  id: string;
  caption: string;
  category: Category;
  src: string;
  tagline: string;
  quote?: GalleryQuote;
  details?: string;
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
    caption: "Clinical ML Pipeline Debugging Session",
    category: "Research",
    src: imgCodeDebuggingPerfect,
    tagline: "Wilfred with friend Perfect Agbenorhevi during a machine learning debugging session in the lab",
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
  // ── Amplify Optics Immersion (Rochester, NY) ──
  {
    id: "wilfred-hong-hua",
    caption: "With Prof. Hong Hua (University of Arizona)",
    category: "Amplify Optics (NY)",
    src: imgWilfredHongHua,
    tagline: "3D Surgical Displays & Microscopy pioneer · Dialogue on computational imaging vs. physical optics",
    quote: {
      text: "Check whether the resolution you want is actually carried by your measurements. If the numerical aperture limits what you capture, no reconstruction can give you information the data never held.",
      author: "Prof. Hong Hua · University of Arizona",
    },
    details:
      "Discussed the central design dilemma of our Fourier ptychography project with Prof. Hong Hua during the Amplify Optics Immersion in Rochester, NY. Her two-step decision rule: (1) Check the physics — computation only recovers spatial frequencies supported by the measurements; (2) Check the time budget — surgical endoscopes require zero latency and optical zoom, whereas offline clinical diagnostics can afford computational phase retrieval.",
  },
  {
    id: "wilfred-gilberto-brambilla",
    caption: "With Prof. Gilberto Brambilla (University of Southampton)",
    category: "Amplify Optics (NY)",
    src: imgWilfredBrambilla,
    tagline: "Optoelectronics Research Centre · Sensing, tsunami detection & compute bottlenecks",
    quote: {
      text: "Pick a project you care about, estimate how much computing power the machine learning needs to solve it, and build the tools today for the hardware of tomorrow.",
      author: "Prof. Gilberto Brambilla · University of Southampton",
    },
    details:
      "Discussed sensing architectures with Prof. Gilberto Brambilla. In optical fiber sensing for earthquake and tsunami early warning, data rates reach ~1 GB/s, making data processing speed the primary bottleneck. His advice: design ML pipelines with future edge hardware capabilities in mind and convert raw high-speed sensor streams into structured representations for rapid inference.",
  },
  {
    id: "wilfred-kimani-toussaint",
    caption: "With Prof. Kimani Toussaint (Brown University)",
    category: "Amplify Optics (NY)",
    src: imgWilfredKimani,
    tagline: "Optics fundamentals keynote & 1-on-1 dialogue on physical assumptions and device failure (Dr. Joshua Burrow in background)",
    quote: {
      text: "A model that corrects a measurement can hide a measurement that was wrong from the start. Return to the physical assumptions first.",
      author: "Prof. Kimani Toussaint · Brown University",
    },
    details:
      "Engaged with Prof. Kimani Toussaint following his comprehensive lecture on optics from ray optics to quantum electrodynamics. In our one-on-one discussion on pulse oximetry and clinical sensor discrepancies in dark skin tones, Dr. Kimani emphasized that Beer-Lambert assumptions break down under tissue scattering before any ML correction can help — instilling our principle of verifying physical assumptions before training models.",
  },
  {
    id: "wilfred-joshua-burrow",
    caption: "With Dr. Joshua Burrow (Morgan State University)",
    category: "Amplify Optics (NY)",
    src: imgWilfredBurrow,
    tagline: "Meta-optics, active beam steering & accessible wearable biophotonic sensors",
    quote: {
      text: "Bringing together beam steering and active switching with the speed of light to revolutionize wearable biophotonics.",
      author: "Dr. Joshua Burrow · Morgan State University",
    },
    details:
      "Mentorship discussion with Dr. Joshua Burrow, Assistant Professor at Morgan State University and former PhD mentee of Prof. Kimani Toussaint. Dr. Burrow shared strategies for designing metasurface optics and optoelectronic switching, exploring how advanced biophotonic sensors can be manufactured for low-cost clinical applications.",
  },
  {
    id: "amplify-group2-winners",
    caption: "Group 2 — 2026 Best Presentation Award Winners",
    category: "Amplify Optics (NY)",
    src: imgAmplifyGroup2,
    tagline: "Wilfred with teammates Joseph, Abigail, Solomon, and Victoria receiving the top honors at Amplify Optics",
    quote: {
      text: "Awarded Best Presentation among 25 international scholars for computational optics translation in global healthcare.",
      author: "Amplify Optics Immersion 2026 · Optica",
    },
    details:
      "Group 2 presentation team awarded the 2026 Best Presentation Award at the Amplify Optics Immersion Program in Rochester, NY. The team presented on translating computational microscopy and Fourier ptychography to resource-limited healthcare environments.",
  },
  {
    id: "wilfred-sarah-moore",
    caption: "With Sarah Moore (Optica Foundation)",
    category: "Amplify Optics (NY)",
    src: imgWilfredSarahMoore,
    tagline: "Program Manager guidance & international research network coordination",
    details:
      "With Sarah Moore, Senior Program Manager at the Optica Foundation, at the Amplify Optics banner. Sarah provided end-to-end guidance from the initial application through travel coordination, helping connect Black scientists and engineers in optics worldwide.",
  },
  {
    id: "wilfred-anoopoma-bhowmik",
    caption: "With Dr. Anoopoma Bhowmik (Optica Foundation)",
    category: "Amplify Optics (NY)",
    src: imgWilfredAnoopoma,
    tagline: "Research career mentorship session · 'Doing It Scared'",
    quote: {
      text: "Act despite the fear. Uncertainty should never prevent you from contributing your perspective.",
      author: "Dr. Anoopoma Bhowmik",
    },
    details:
      "One-on-one mentorship session with Dr. Anoopoma Bhowmik during the Amplify Optics Immersion. Discussed navigating imposter syndrome in top-tier international research environments and the imperative of sharing perspectives from under-resourced healthcare contexts.",
  },
  {
    id: "optica-nametag",
    caption: "Optica Amplify Optics Immersion Desk & Credentials",
    category: "Amplify Optics (NY)",
    src: imgOpticaNametag,
    tagline: "Official symposium name tag, Edmund Optics precision cleaning cloth & Optica proceedings",
    details:
      "Official credentials at the Rochester Riverside Convention Center. Selected as one of 25 scholars worldwide for the September 2026 program, supported by Optica and the Medirevs Fourier Ptychography team.",
  },
  {
    id: "wilfred-rochester-city",
    caption: "Wilfred in Rochester, NY — 'The World's Imaging Capital'",
    category: "Amplify Optics (NY)",
    src: imgWilfredRochester,
    tagline: "Representing Ghanaian biomedical engineering in national colors on the streets of Rochester",
    details:
      "Exploring Rochester, New York — historic birthplace of modern optics, home to the University of Rochester Institute of Optics, Eastman Kodak, and Bausch & Lomb. Representing the University of Ghana and Pan-African biomedical innovation on the global stage.",
  },
  {
    id: "field-test-dr-cletus",
    caption: "3D Depth Gate & Livestock Computer Vision Field Test",
    category: "Research",
    src: imgFieldTestCletus,
    tagline: "Real-time edge livestock gate counter & depth-plane filter with Dr. Cletus Fiifi Adams",
    quote: {
      text: "The simulation and the lab are not the same — the bench and the field decide.",
      author: "Field Test · Dr. Cletus Fiifi Adams Research Group",
    },
    details:
      "Field-testing an edge-deployed computer vision pipeline featuring real-time 3D depth gating (Z-plane thresholding at 3.0m), automated human filtering/suppression, and multi-object tracking. Validated on hardware running at ~10 FPS under ambient lighting and dust conditions.",
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
  "Amplify Optics (NY)",
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
            Optica Amplify Immersion (Rochester, NY), research lab, hardware CAD defenses, NeoVita incubator design, AI panels, Operation Smile missions, sports, and music.
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
              <p className="lightbox-tagline">{selectedImg.tagline}</p>
              {selectedImg.quote && (
                <div className="lightbox-quote-box">
                  <blockquote className="lightbox-quote">
                    &ldquo;{selectedImg.quote.text}&rdquo;
                  </blockquote>
                  <cite className="lightbox-cite">— {selectedImg.quote.author}</cite>
                </div>
              )}
              {selectedImg.details && (
                <div className="lightbox-details-box">
                  <span className="lightbox-details-label">Field Notes &amp; Technical Insights</span>
                  <p className="lightbox-details-text">{selectedImg.details}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
