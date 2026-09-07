import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, LoadBar } from "@/components/site/Reveal";

import imgElectrode from "@/assets/coursework-electrode-cad.jpg";
import imgNeovita from "@/assets/neovita-ghana-incubator.jpg";
import imgOrthosis from "@/assets/mechanical-systems-cad-model.jpg";

export const Route = createFileRoute("/coursework")({
  head: () => ({
    meta: [
      { title: "Coursework & Hardware Engineering — Wilfred Asumboya" },
      {
        name: "description",
        content:
          "Engineering design projects: Sweat-Tolerant Bioelectrodes, NeoVita Neonatal Monitor Enclosure, and Cable-Actuated PIP Rehabilitation Orthosis.",
      },
      { property: "og:title", content: "Coursework & Design — Wilfred Asumboya" },
      {
        property: "og:description",
        content:
          "Biomedical engineering design process, material selection, morphological charts, and physical prototypes.",
      },
    ],
    links: [{ rel: "canonical", href: "/coursework" }],
  }),
  component: Coursework,
});

interface CourseProject {
  id: string;
  course: string;
  team: string;
  title: string;
  subtitle: string;
  img: string;
  badge: string;
  problem: string;
  solution: string;
  specs: string[];
  highlights: string[];
  process: string[];
}

const courseProjects: CourseProject[] = [
  {
    id: "electrode",
    course: "BMEN 306: Medical Instrumentation Design",
    team: "Team Cosmic-75",
    title: "Sweat-Tolerant Skin Bioelectrode Attachment System",
    subtitle:
      "Advanced skin-conformal surface electrode maintaining low impedance under high heat and humidity",
    img: imgElectrode,
    badge: "Biomaterials & Sensors",
    problem:
      "Commercial surface bioelectrodes (ECG, EMG, EEG) rapidly degrade in warm, humid climates like Ghana due to sweat accumulation at the hydrogel-skin interface, causing motion artifacts, impedance spikes, and skin detachment.",
    solution:
      "Engineered a multi-layer bioelectrode combining a directional Janus wicking membrane with a breathable perforated adhesive backing and stabilized Ag/AgCl hydrogel element to continuously transport sweat away from the skin interface without drying the conductive gel.",
    specs: [
      "Skin Interface: Biocompatible Ag/AgCl conductive hydrogel",
      "Moisture Control: Janus asymmetric porous PTFE/cotton wicking layer",
      "Adhesive Backing: Perforated medical-grade acrylic polymer",
      "Target Impedance: < 5 kΩ across 10 Hz – 1 kHz frequency range",
      "Operating Conditions: Validated for 35°C, 85% relative humidity",
    ],
    highlights: [
      "Formulated morphological decision matrix evaluating 12 material combinations",
      "Designed directional fluid-transport channel using differential surface energy gradient",
      "Reduced signal noise floor during active motion in thermal chamber testing",
    ],
    process: [
      "1. Problem Definition & Clinical Requirement Mapping",
      "2. Morphological Chart & Concept Generation (3 core concepts)",
      "3. Material Compatibility & Surface Energy Analysis",
      "4. Prototype Layer Fabrication & Impedance Spectroscopy Simulation",
    ],
  },
  {
    id: "neovita",
    course: "BMEN 322: Medical Device Design & Manufacturing",
    team: "Group 5",
    title: "NeoVita Ghana — Neonatal Monitor Mechanical Enclosure",
    subtitle:
      "Modular, ruggedized enclosure for continuous neonatal vital signs monitoring in district hospitals",
    img: imgNeovita,
    badge: "Medical Device Design",
    problem:
      "Neonatal monitoring equipment in low-resource district hospitals faces harsh operating conditions including dust accumulation, accidental fluid spills, frequent transport, and high ambient temperatures.",
    solution:
      "Designed an ergonomic, modular enclosure featuring a high-clarity polycarbonate viewing panel, dual quick-connect sensor ports with silicone gasket seals, and passive thermal dissipation channels molded into flame-retardant ABS housing.",
    specs: [
      "Housing Material: Flame-retardant ABS (UL94-V0 rated)",
      "Display Cover: Optical-grade scratch-resistant Polycarbonate (PC)",
      "Ingress Protection: IP54 rated (dust protected & splash resistant)",
      "Thermal Rating: Passive convection up to 40°C ambient room temp",
      "Modular Ports: Dual circular quick-release magnetic sensor interfaces",
    ],
    highlights: [
      "Evaluated candidate polymers using Ashby material property charts for toughness vs cost",
      "Pugh Concept Selection Matrix identified modular clamshell design as optimal",
      "Finite Element Analysis (FEA) verified structural integrity under 1.2m drop test",
    ],
    process: [
      "1. Clinical Site Contextual Analysis & User Persona Modeling",
      "2. Ashby Chart Material Screening (Toughness, Thermal Conductance, Cost)",
      "3. CAD Modeling in SolidWorks & Component Clearance Verification",
      "4. Pugh Matrix Screening & FEA Stress/Drop Simulation",
    ],
  },
  {
    id: "orthosis",
    course: "BMEN 308: Rehabilitation Engineering & Biomechanics",
    team: "Group 2",
    title: "Cable-Actuated Wrist-Finger Extension Orthosis",
    subtitle:
      "Mechanical rehabilitation device for PIP joint extension and post-stroke hand therapy",
    img: imgOrthosis,
    badge: "Biomechanics & Rehab",
    problem:
      "Flexor tendon injuries and post-stroke spasticity often result in severe proximal interphalangeal (PIP) joint flexion contractures, requiring consistent, adjustable passive extension force that traditional static splints fail to provide comfortably.",
    solution:
      "Developed a lightweight, cable-actuated wrist-mounted orthosis that utilizes Bowden cable transmission connected to a tension dial, allowing incremental, quantifiable finger extension assistance for guided physical therapy.",
    specs: [
      "Actuation Mechanism: High-tensile stainless steel Bowden cable",
      "Adjustment Interface: Micro-ratchet rotary tension dial",
      "Body Frame: Ergonomic 3D-printed PETG wrist cuff & dorsal splint",
      "Range of Motion: 0° (full extension) to 90° (flexion) adjustable lock",
      "Weight: < 220 grams for minimal patient muscle fatigue",
    ],
    highlights: [
      "Biomechanical force analysis calculated maximum allowable tendon strain (F < 15 N)",
      "Modular finger cuffs allow custom fitting for digits II through V",
      "Smooth ratchet click feedback provides visual and auditory milestone tracking for physical therapists",
    ],
    process: [
      "1. Anatomical Kinematic & PIP Joint Moment Analysis",
      "2. Mechanism Design: Bowden Cable vs Linkage Bar Comparisons",
      "3. Ergonomic Wrist Cuff Parametric Modeling",
      "4. Dynamic Mechanical Testing & Tension Load Calibration",
    ],
  },
];

function Coursework() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProj = courseProjects.find((p) => p.id === selectedId);

  return (
    <>
      <LoadBar />
      <Nav />
      <header className="page-header">
        <div className="container-x">
          <span className="tag" style={{ marginBottom: 12, display: "inline-block" }}>
            Biomedical Engineering &amp; Hardware Design
          </span>
          <h1>Coursework &amp; Engineering Design</h1>
          <p className="sub">
            Rigorous engineering design projects — from clinical needs assessment and morphological charts to CAD modeling, FEA simulation, and prototype fabrication.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container-x">
          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
            {courseProjects.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 100}>
                <article className="course-card">
                  <div className="course-grid">
                    <div className="course-media">
                      <img src={p.img} alt={p.title} loading="lazy" />
                      <div className="course-badge">{p.badge}</div>
                    </div>
                    <div className="course-content">
                      <div className="course-meta">
                        <span className="course-code">{p.course}</span>
                        <span className="course-team">{p.team}</span>
                      </div>
                      <h2 className="course-title">{p.title}</h2>
                      <p className="course-subtitle">{p.subtitle}</p>

                      <div className="course-section-box">
                        <h3>Problem Statement</h3>
                        <p>{p.problem}</p>
                      </div>

                      <div className="course-section-box">
                        <h3>Engineered Solution</h3>
                        <p>{p.solution}</p>
                      </div>

                      <div className="course-details-grid">
                        <div className="course-specs-box">
                          <h4>Technical Specifications</h4>
                          <ul>
                            {p.specs.map((s, i) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="course-highlights-box">
                          <h4>Key Design Accomplishments</h4>
                          <ul>
                            {p.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="course-process-bar">
                        <span className="process-label">Design Methodology:</span>
                        <div className="process-steps">
                          {p.process.map((step, i) => (
                            <span key={i} className="process-step">
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
