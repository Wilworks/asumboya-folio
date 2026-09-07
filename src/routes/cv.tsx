import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Wilfred Asumboya" },
      { name: "description", content: "Wilfred Ayine Asumboya — Biomedical AI Researcher & ML Engineer. CV with research, publications, projects, and leadership." },
    ],
  }),
  component: CV,
});

function CV() {
  const handlePrint = () => { window.print(); };

  return (
    <>
      <Nav />
      <div className="cv-page-wrapper">
        <div className="cv-actions no-print">
          <button onClick={handlePrint} className="btn btn-primary print-btn">
            Print / Save as PDF
          </button>
        </div>

        <main className="cv-container">
          {/* ── Left Sidebar ── */}
          <aside className="cv-sidebar">
            <div className="cv-header">
              <div className="cv-monogram">WA</div>
            </div>

            {/* Contact */}
            <section className="cv-section">
              <h3 className="cv-heading">CONTACT</h3>
              <ul className="cv-list cv-contact">
                <li>Accra, Ghana</li>
                <li>wilfredasumboya@gmail.com</li>
                <li>+233 55 930 3975</li>
                <li>
                  <a href="https://linkedin.com/in/asumboya-wilfred-573321283" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Wilworks" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="cv-section">
              <h3 className="cv-heading">EDUCATION</h3>
              <div className="cv-edu-item">
                <h4>BSc. Biomedical Engineering</h4>
                <p className="cv-edu-meta">University of Ghana · Expected 2027</p>
                <p className="cv-edu-desc">
                  First Class Honours (Dean's Honour List,<br />
                  Levels 100–300, 2024–2026)<br />
                  UGAANA Scholar (2024)
                </p>
              </div>
              <div className="cv-edu-item">
                <h4>WASSCE — General Science</h4>
                <p className="cv-edu-meta">Notre Dame Seminary SHS · Navrongo, 2023</p>
                <p className="cv-edu-desc">Aggregate 7 · NSMQ Contestant &amp; Upper East Regional Winner</p>
              </div>
            </section>

            {/* Technical Stack */}
            <section className="cv-section">
              <h3 className="cv-heading">TECHNICAL STACK</h3>
              <div className="cv-stack-group">
                <h4>Languages</h4>
                <p>Python, JavaScript, MATLAB, C/C++, SQL</p>
              </div>
              <div className="cv-stack-group">
                <h4>ML / DL</h4>
                <p>PyTorch, TensorFlow/Keras, scikit-learn, Hugging Face, ONNX Runtime, XGBoost</p>
              </div>
              <div className="cv-stack-group">
                <h4>AI Systems</h4>
                <p>Multi-task learning, LoRA fine-tuning, RAG, LLM integration, SHAP, GradCAM, CRF, multi-label classification</p>
              </div>
              <div className="cv-stack-group">
                <h4>Data &amp; Imaging</h4>
                <p>Pandas, NumPy, OpenCV, MONAI, DICOM, nibabel, ImageJ, 3D Slicer</p>
              </div>
              <div className="cv-stack-group">
                <h4>Backend &amp; MLOps</h4>
                <p>Django/DRF, FastAPI, REST APIs, Docker, Git, W&amp;B, Hugging Face Hub, PostgreSQL</p>
              </div>
              <div className="cv-stack-group">
                <h4>Research Methods</h4>
                <p>Experimental design, statistical analysis, NAA, Fourier ptychography, signal processing, scientific writing</p>
              </div>
            </section>

            {/* Languages */}
            <section className="cv-section">
              <h3 className="cv-heading">LANGUAGES</h3>
              <p className="cv-text">English — First Language</p>
            </section>

            {/* Interests */}
            <section className="cv-section">
              <h3 className="cv-heading">INTERESTS</h3>
              <p className="cv-text">
                Biomedical AI · Computational imaging · LLMs for health · Multi-task learning · STEM education · Low-cost diagnostics · Football
              </p>
            </section>
          </aside>

          {/* ── Main Content ── */}
          <div className="cv-main">
            <header className="cv-main-header">
              <h1>WILFRED AYINE ASUMBOYA</h1>
              <h2>BIOMEDICAL AI RESEARCHER · ML ENGINEER · CAMPUS LEADER</h2>
            </header>

            {/* Profile */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> PROFILE</h3>
              <p className="cv-body-text">
                Biomedical Engineering undergraduate at the University of Ghana researching medical imaging and multi-label clinical prediction, with experience deploying AI applications for healthcare and education. First author of a bioRxiv preprint under review and Head of the AI Department at INNOGEN. In active research correspondence with Prof. Rama Ramakrishnan (MIT Sloan). Combines machine-learning engineering with campus leadership, STEM mentorship, and initiatives connecting student innovation to practical health and education challenges. Driven by a long-term vision of building impactful AI for low-resource healthcare settings in Africa.
              </p>
            </section>

            {/* Research Experience */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> RESEARCH EXPERIENCE</h3>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Comorbidity-Aware Output-Layer Design for Multi-Label Prediction</h4>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <p className="cv-job-company">First Author / Lead Researcher · Supervisor: Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>Designed a 350-run controlled study comparing six output-layer interaction mechanisms for multi-label clinical prediction across Type 2 diabetes and myocardial infarction complication settings.</li>
                  <li>Implemented independent, additive, multiplicative, symmetric CRF, residual MLP, and combined heads in PyTorch; evaluated across five data fractions and seven random seeds.</li>
                  <li>Developed a samples-to-parameter backbone-matching protocol to ensure methodologically defensible cross-disease comparison; introduced a reverse-inference framework treating winning mechanism identity as a biological instrument for characterising disease co-occurrence structure.</li>
                  <li>First-author bioRxiv preprint under review (doi: 10.64898/2026.06.18.733068).</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>DeepMammo — Multi-Task Mammography Segmentation &amp; Classification</h4>
                  <span className="cv-job-date">Mar 2026</span>
                </div>
                <p className="cv-job-company">Co-Author · Supervisor: Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>Co-authored a multi-task learning study using a shared EfficientNet encoder, FPN, U-Net decoder, and dual classification heads trained on INbreast and CBIS-DDSM datasets.</li>
                  <li>Achieved Dice Score 0.87, pathology AUC 0.98, and hold-out accuracy of 93.39%; manuscript under review.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>3D Airway Segmentation from CT Using Deep Learning</h4>
                  <span className="cv-job-date">Jul – Sep 2025</span>
                </div>
                <p className="cv-job-company">Supervisor: Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>Developed an automated 3D U-Net pipeline for nasal airway segmentation from CT volumes with combined Dice + BCE loss, LR scheduling, early stopping, and mixed-precision training.</li>
                  <li>Achieved Dice 0.8855, IoU 0.7982, sensitivity 89.06%, and specificity 99.73% on 26 validation volumes.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Diabetes Complications — Explainable Multi-Task &amp; RAG-Enhanced Framework</h4>
                  <span className="cv-job-date">Apr 2026</span>
                </div>
                <p className="cv-job-company">Supervisors: Prof. Kwabena Kan-Dapaah &amp; Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>Developed a multi-task deep learning framework jointly predicting five T2DM vascular complications with SHAP-based feature attribution and a guideline-grounded RAG module targeting AUROC ≥ 0.85 across all heads.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Fort Amsterdam Ceramic Analysis — Neutron Activation Analysis</h4>
                  <span className="cv-job-date">Jan 2026</span>
                </div>
                <p className="cv-job-company">Supervisor: Prof. Elvis Tiburu Kwason</p>
                <ul>
                  <li>Conducted elemental analysis of 17th-century colonial ceramic specimens using NAA; processed data in Python (matplotlib/seaborn), ImageJ, and 3D Slicer to confirm artefact shapes and provenance.</li>
                  <li>Identified one anomalous sample; main group showed a shared coastal clay signature validating Fort Amsterdam's colonial-era pottery sources.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Fourier Ptychography Microscopy — Low-Cost Computational Imaging</h4>
                  <span className="cv-job-date">Ongoing</span>
                </div>
                <p className="cv-job-company">Project Lead · Supervisor: ING. Prof. Elsie Effah Kaufmann</p>
                <ul>
                  <li>Leading development of a low-cost computational microscopy system at the intersection of optical engineering, signal processing, and phase retrieval for diagnostics in low-resource settings.</li>
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> EXPERIENCE</h3>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Research Assistant — Medical Imaging &amp; Digital Mental Health</h4>
                  <span className="cv-job-date">Sep 2025 – Present</span>
                </div>
                <p className="cv-job-company">University of Ghana — Institute of Applied Science &amp; Technology · Supervisor: Prof. Samuel Kojo Kwofie</p>
                <ul>
                  <li>Contribute to AI-driven healthcare research including medical imaging and digital mental health interventions.</li>
                  <li>Support data curation, model training, evaluation, and implementation of explainable AI techniques.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Volunteer Teacher</h4>
                  <span className="cv-job-date">Jan 2019 – Jan 2024</span>
                </div>
                <p className="cv-job-company">Bolgatanga Model JHS · Bolgatanga, Ghana</p>
                <ul>
                  <li>Taught science and IT daily to approximately 200 pupils across four streams (A–D), averaging 50 per class; also supported mathematics and assisted other teachers.</li>
                  <li>Assisted students with IT-related final-year projects integrating automation and AI solutions.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Volunteer</h4>
                  <span className="cv-job-date">Jun – Jul 2025</span>
                </div>
                <p className="cv-job-company">Operation Smile · Cape Coast, Ghana</p>
                <ul>
                  <li>Supported delivery of free cleft lip and palate surgeries, assisting medical teams and patient care; contributed to community education initiatives.</li>
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> SELECTED PROJECTS &amp; ENGINEERING DESIGN</h3>
              <ul className="cv-projects-list">
                <li>
                  <strong>Sweat-Tolerant Skin Bioelectrode System</strong> (BMEN 306, 2026) — Engineered multi-layer surface bioelectrode combining directional Janus wicking membrane, breathable perforated acrylic backing, and Ag/AgCl hydrogel element to maintain low contact impedance under tropical heat and humidity.
                </li>
                <li>
                  <strong>NeoVita Ghana — Neonatal Monitor Mechanical Enclosure</strong> (BMEN 322, 2026) — Modular IP54-rated neonatal vital signs monitor enclosure for district hospitals. Optical-grade polycarbonate viewing panel, flame-retardant ABS housing, FEA drop-test validation, and passive convection cooling.
                </li>
                <li>
                  <strong>Cable-Actuated PIP Extension Orthosis</strong> (BMEN 308, 2026) — Wrist-mounted active extension orthosis for PIP joint contracture and post-stroke hand rehabilitation, utilizing Bowden cable transmission and micro-ratchet tension adjustment.
                </li>
                <li>
                  <strong>DermaVision</strong> (May 2026) —{" "}
                  <a href="https://huggingface.co/spaces/WilfredAyine/DermaDetect" target="_blank" rel="noreferrer">Interactive Demo ↗</a>
                  {" "}· Django/DRF inference API demo serving a DINOv2-Base vision model (31 skin disease classes, ONNX export); full pipeline with GradCAM, Groq LLM clinical reports, and ReportLab PDFs via Docker on Hugging Face Spaces.
                </li>
                <li>
                  <strong>DeepMammo Inference API</strong> (May 2026) —{" "}
                  <a href="https://huggingface.co/spaces/WilfredAyine/deepmammo" target="_blank" rel="noreferrer">Interactive Demo ↗</a>
                  {" "}· Mammography REST API prototype returning abnormality type, pathology prediction, segmentation mask, GradCAM, and LLM PDF report from a single POST request. ONNX export cut Docker image size ~800 MB.
                </li>
                <li>
                  <strong>Llama Fine-Tuning Pipeline (LoRA)</strong> (2026) — Configuration-driven modular pipeline for parameter-efficient LLM fine-tuning with architecture-aware attention-module selection, activation/gradient checkpointing, dynamic device mapping, and FP16/FP32 mixed precision.
                </li>
                <li>
                  <strong>Nexus Intellisense</strong> (2025 – Present) — Django-based multi-task clinical AI system demo with SHAP explainability, RAG-powered recommendations, and end-to-end inference pipeline for low-resource healthcare.
                </li>
                <li>
                  <strong>NSTP Chatbot</strong> (2025 – 2026) — Django CBT mental health chatbot demo identifying negative self-talk; local Ollama + Perplexity LLMs with RAG cognitive-distortion detection. Supervisor: Prof. S. K. Kwofie.
                </li>
                <li>
                  <strong>MindMesh &amp; EquiBase</strong> — AI study platform with RAG research summaries (MindMesh); Django biomedical device management system with real-time dashboards and lifecycle tracking (EquiBase).
                </li>
                <li>
                  <strong>Additional Prototypes:</strong> BEMS-Lite offline-first hospital equipment management desktop app (Turso cloud sync, PDF/Excel reporting); GoldManager inventory app with GHS currency support; Voice Cloning pipeline; SGLT2 compound classification with RDKit; Weather tracking mobile app.
                </li>
              </ul>
            </section>

            {/* Publications */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> PUBLICATIONS</h3>
              <ul className="cv-bullets">
                <li>
                  <strong>Wilfred Ayine Asumboya</strong>, Perfect Kwasi Agbenorhevi, Cletus Fiifi Adams, Dennis Ayinsune Ayariga, Thaddeus Adjadeh, Shamsudini Adam Ziblim, Samuel Kojo Kwofie. Comorbidity structure as an inductive bias: Comparing output-head designs for multi-label prediction of diabetes and myocardial infarction complications. <em>2026. Preprint; under review.</em> doi: 10.64898/2026.06.18.733068
                </li>
                <li>
                  Safiu Sumani Benina, Chrysol Owusua Amoah-Bamfoa, Ethel Enam Nyamadora, Rhoda Yayra Kuwordea, Rowland Pittman Arthur, Cletus Fiifi Adams, Samuel Kojo Kwofie, <strong>Wilfred Ayine Asumboya</strong>. DeepMammo: A Multi-Task Learning Framework for Joint Lesion Segmentation and Hierarchical Classification in Mammography. <em>2026. Under review.</em>
                </li>
                <li>
                  Cletus F. Adams, Patrick H. Geoghegan, Mark C. Jermy, <strong>Wilfred A. Asumboya</strong>. In-vitro Modelling of the Effect of Nasal High Flow Therapy on End-tidal Tracheal CO₂ Tension During Hypercarbia. <em>2026. In preparation.</em>
                </li>
              </ul>
            </section>

            {/* Leadership */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> LEADERSHIP &amp; ACTIVITIES</h3>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Head, AI Department</h4>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <p className="cv-job-company">INNOGEN — Institute for Innovation and Next-Generation Engineering · Accra, Ghana</p>
                <ul>
                  <li>Lead a research and engineering team building intelligent systems addressing challenges in West Africa — maternal health risk stratification, flood risk mapping, satellite-based galamsey detection, and water pollution detection.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Campus-to-Country Lead</h4>
                  <span className="cv-job-date">2026 – Present</span>
                </div>
                <p className="cv-job-company">Innovate for Global Health (IGH) — University of Ghana Chapter</p>
                <ul>
                  <li>Lead campus-level initiatives connecting student innovation to national and global health challenges.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Vice President &amp; Head, Academic Committee</h4>
                  <span className="cv-job-date">2024 – 2026</span>
                </div>
                <p className="cv-job-company">Ghana Society of Biomedical Engineers (GSBE-UG)</p>
                <ul>
                  <li>Co-organized Code a Maze (Python coding competition, 40+ attendees), hospital visits for incoming Level 100 students, and Learning Spaces Saturday tutorial sessions averaging 30 students.</li>
                  <li>Led Saturday course-support sessions for ~20 coursemates and co-organized CV-building sessions, seminars, and student events with 20–40 attendees per event.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Deputy Head, IT Committee</h4>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <p className="cv-job-company">Student Representative Council (SRC) — University of Ghana</p>
                <ul>
                  <li>Lead AI-feature development for the official SRC mobile app — designing RAG pipelines and integrating LLM APIs for intelligent student-facing query resolution.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Peer-to-Peer Mentorship Facilitator</h4>
                  <span className="cv-job-date">2024 – 2026</span>
                </div>
                <p className="cv-job-company">Mentereon — University of Ghana</p>
                <ul>
                  <li>Mentor approximately 15 students through tutorials, coding sessions, project guidance, and career support; mentees include students who have secured fully funded scholarships.</li>
                </ul>
              </div>

              <p className="cv-body-text" style={{ marginTop: 8, fontSize: "0.85em", opacity: 0.8 }}>
                Additional roles: Class of 2027 Biomedical Engineering Representative (present); Bonaboto Union Level 100 President (2024–2025); Academic Affairs Member (2024–2025); Learning Space Committee Member (2025–2026); JISH Hostel Deputy Head, Editorial Board Committee (2024–2025).
              </p>
            </section>

            {/* Awards */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> AWARDS &amp; RECOGNITION</h3>
              <ul className="cv-bullets">
                <li>Dean's Honour List — School of Engineering Sciences, University of Ghana (Levels 100–300, 2024–2026)</li>
                <li>UGAANA Scholar — University of Ghana Alumni Association of North America (2024)</li>
                <li>Panelist, "AI for Humanity: Opportunity, Responsibility, and the Future We Want" — University of Ghana &amp; Nelson Mandela University student panel on the UN Independent International Scientific Panel on AI's Preliminary Report (Jul 2026)</li>
                <li>Certificate of Honour, Pre-Works Initiative — GSBE-UG recognition for leadership as CEO &amp; Founder and for driving development of the GSBE-UG website (2025)</li>
                <li>Harvard Health Systems Innovation Lab Hackathon — Participant, 7th Edition: Building High-Value Health Systems: Leveraging AI · Accra Hub, University of Ghana (Apr 2025) · Team Pre-Works</li>
                <li>NSMQ Superstar Spotlight — Featured by Prof. Elsie Effah Kaufmann for excellence in science and mathematics; Upper East Regional Winner &amp; National 1/8 Finalist (2022)</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
