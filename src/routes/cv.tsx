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
                  First Class Honours (Distinction)<br />
                  Dean’s Honour List, Levels 100–300 (2024–2026)<br />
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
                Biomedical Engineering undergraduate at the University of Ghana researching comorbidity-aware architectures for multi-label clinical prediction, with applied work spanning medical-imaging inference, retrieval-augmented applications, and LLM-assisted reporting. Building toward a research career connecting machine learning to healthcare access in under-resourced settings. Head of AI at INNOGEN and in active research correspondence with Prof. Rama Ramakrishnan (MIT Sloan).
              </p>
            </section>

            {/* Research Experience */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> RESEARCH EXPERIENCE</h3>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Comorbidity-Aware Output-Layer Design for Multi-Label Clinical Prediction</h4>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <p className="cv-job-company">Lead Researcher · Supervisor: Dr. Cletus Fiifi Adams · Correspondence: Prof. Rama Ramakrishnan (MIT Sloan)</p>
                <ul>
                  <li>Studies whether modeling comorbidity structure in the output layer improves multi-label prediction of diabetes complications. The question began as how a model could handle interacting diseases such as malaria and typhoid without jointly labeled patient data, and was sharpened by guidance from Prof. Rama Ramakrishnan (MIT Sloan) on when an inductive bias helps.</li>
                  <li>Compared six output-head designs (independent, additive, multiplicative, symmetric CRF, residual MLP, and combined) across five training-data fractions, with backbone initialization matched within conditions for paired comparison.</li>
                  <li>Extended the study to 20 seeds and added three CRF ablations (frozen-random, fixed to empirical co-occurrence, and a deliberately incorrect asymmetric prior) following Prof. Ramakrishnan’s review. The CRF advantage seen at seven seeds did not survive 20, and the ablations showed no consistent ordering between biologically motivated and incorrect priors.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>DeepMammo — Multi-Task Mammography Segmentation &amp; Classification</h4>
                  <span className="cv-job-date">2026 · Manuscript</span>
                </div>
                <p className="cv-job-company">Co-Author (software, data curation, visualization, methodology) · Supervisor: Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>Unified framework that segments lesions and predicts abnormality type and pathology. A shared EfficientNet-B4 encoder and FPN feed an attention U-Net-style decoder and two classification heads, trained jointly on two unpaired datasets (INbreast for segmentation, CBIS-DDSM for classification).</li>
                  <li>Hold-out results on a single split: Dice 0.870, IoU 0.786, abnormality AUC 0.977, pathology AUC 0.983 with 93.5% sensitivity and 93.1% specificity.</li>
                  <li>Built the Django/DRF inference service with ONNX Runtime and LLM-assisted PDF reports, reducing the Docker image by about 800 MB (<a href="https://huggingface.co/spaces/WilfredAyine/deepmammo" target="_blank" rel="noreferrer">live demo</a>).</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>GDHS Maternal Health Risk — Epidemiological Analysis</h4>
                  <span className="cv-job-date">Apr 2026 – Present · Manuscript in preparation</span>
                </div>
                <p className="cv-job-company">Lab Lead &amp; Second Author · INNOGEN AI Research</p>
                <ul>
                  <li>Led a student team analyzing three pooled Ghana Demographic and Health Survey waves (2008, 2014, 2022; 29,326 women) using a composite risk index built from eight WHO-validated clinical criteria.</li>
                  <li>Composite maternal risk fell from 68.9% to 32.0%, while anaemia stalled near 20.7% after 2014 and recorded low birth weight rose from 3.63% to 5.43% — a ceiling that expanded facility access alone does not address.</li>
                  <li>Multi-morbidity (three or more risk criteria at once) fell from 20.8% to 2.4%, while newly created regions in the ecological transition belt (Bono East, Savannah, and Oti) emerged as the highest-risk areas in 2022.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>GDHS Maternal Health Risk — Machine Learning Prediction</h4>
                  <span className="cv-job-date">Apr 2026 – Present · Manuscript in preparation</span>
                </div>
                <p className="cv-job-company">Lab Lead &amp; Second Author · INNOGEN AI Research</p>
                <ul>
                  <li>Led the benchmarking of logistic regression against LightGBM and XGBoost for predicting maternal risk at first antenatal booking from 83 non-invasive features. XGBoost reached AUC-ROC 0.853 ±0.003 under five-fold stratified cross-validation, against 0.801 for logistic regression.</li>
                  <li>The team’s automated leakage scanner removed every variable derived from the outcome criteria, and SHAP analysis surfaced clinically interpretable drivers such as a sharp rise in risk below 45 kg maternal weight.</li>
                  <li>Designed for rural clinics without laboratory equipment: the 83 inputs come from a questionnaire of about 10 minutes and can run as offline inference on tablets already deployed in Ghana.</li>
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
                  <h4>Nasal High Flow Therapy and End-tidal CO₂ During Hypercarbia</h4>
                  <span className="cv-job-date">Jan 2026 · Manuscript in preparation</span>
                </div>
                <p className="cv-job-company">Co-Author · Lead author: Dr. Cletus Fiifi Adams</p>
                <ul>
                  <li>In-vitro study using a 3D-printed adult upper-airway model with piston-driven breathing and simulated apnea of 10 to 40 seconds, testing nasal high flow from 10 to 60 L/min. At 60 L/min, end-tidal CO₂ fell 18% after 40 seconds of apnea.</li>
                  <li>Raising flow lowered end-tidal CO₂ by about 0.15 mmHg per L/min up to 40 L/min with little further change to 60 L/min, and the peak value after 40 seconds of apnea fell from 8.2% to 7.0% (v/v) at 60 L/min.</li>
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
                  <li>Contribute to medical-imaging research through data curation, model training, evaluation, and explainable AI implementation.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>DermaVision — Dermatological Screening Prototype</h4>
                  <span className="cv-job-date">May 2026</span>
                </div>
                <p className="cv-job-company">Backend Developer</p>
                <ul>
                  <li>Built and deployed a Django/DRF API for a DINOv2-Base classifier across 31 skin disease classes, with ONNX CPU inference and Grad-CAM explanations (<a href="https://huggingface.co/spaces/WilfredAyine/DermaDetect" target="_blank" rel="noreferrer">live demo</a>).</li>
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
                  <strong>Edge Vision 3D Depth Gate &amp; Livestock Counter</strong> (2026) — Collaboration with Dr. Cletus Fiifi Adams. Edge computer vision system using calibrated overhead RGB-D depth sensing, optical flow, and boundary tracking for automated livestock counting in rural environments; running at 9.8 FPS on embedded edge hardware.
                </li>
                <li>
                  <strong>DeepMammo Clinical Inference API</strong> (May 2026) —{" "}
                  <a href="https://huggingface.co/spaces/WilfredAyine/deepmammo" target="_blank" rel="noreferrer">Interactive Demo ↗</a>
                  {" "}· Mammography REST API prototype returning abnormality type, pathology prediction, lesion segmentation mask, Grad-CAM heatmaps, and LLM-assisted PDF report from a single POST request. ONNX export reduced Docker container footprint by ~800 MB.
                </li>
                <li>
                  <strong>DermaVision Screening API</strong> (May 2026) —{" "}
                  <a href="https://huggingface.co/spaces/WilfredAyine/DermaDetect" target="_blank" rel="noreferrer">Interactive Demo ↗</a>
                  {" "}· Django/DRF inference API demo serving a DINOv2-Base vision model across 31 skin disease classes (ONNX CPU runtime); full pipeline with Grad-CAM visual explanations and automated clinical reports via Docker on Hugging Face Spaces.
                </li>
                <li>
                  <strong>BEMS-Lite: Hospital Biomedical Equipment Management</strong> (2026) — Offline-first desktop engineering application for low-resource district hospitals. Features local SQLite storage with Turso cloud synchronization, preventative maintenance scheduling, and automated PDF/Excel compliance reporting.
                </li>
                <li>
                  <strong>Sweat-Tolerant Skin Bioelectrode System</strong> (BMEN 306, 2026) — Engineered multi-layer surface bioelectrode combining directional Janus wicking membrane, breathable perforated acrylic backing, and Ag/AgCl hydrogel element to maintain low contact impedance (&lt; 5 kΩ) under tropical heat (35°C) and 85% relative humidity.
                </li>
                <li>
                  <strong>NeoVita Ghana — Neonatal Monitor Mechanical Enclosure</strong> (BMEN 322, 2026) — Modular IP54-rated neonatal vital signs monitor enclosure for district hospitals. Optical-grade polycarbonate viewing panel, flame-retardant ABS housing, FEA drop-test validation (1.2m), and passive convection cooling up to 40°C ambient room temperature.
                </li>
                <li>
                  <strong>Cable-Actuated PIP Extension Orthosis</strong> (BMEN 308, 2026) — Wrist-mounted active extension orthosis for PIP joint contracture and post-stroke hand rehabilitation, utilizing Bowden cable transmission and micro-ratchet tension adjustment (F &lt; 15 N).
                </li>
              </ul>
            </section>

            {/* Publications */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> PUBLICATIONS</h3>
              <ul className="cv-bullets">
                <li>
                  Safiu Sumani Benina, Chrysol Owusua Amoah-Bamfoa, Ethel Enam Nyamadora, Rhoda Yayra Kuwordea, Rowland Pittman Arthur, Cletus Fiifi Adams, Samuel Kojo Kwofie, <strong>Wilfred Ayine Asumboya</strong>. DeepMammo: A Multi-Task Learning Framework for Joint Lesion Segmentation and Hierarchical Classification in Mammography. <em>2026. Under review.</em>
                </li>
                <li>
                  Cletus F. Adams, Patrick H. Geoghegan, Mark C. Jermy, <strong>Wilfred A. Asumboya</strong>. In-vitro Modelling of the Effect of Nasal High Flow Therapy on End-tidal Tracheal CO₂ Tension During Hypercarbia. <em>2026. In preparation.</em>
                </li>
                <li>
                  Lead Author et al., <strong>Wilfred Ayine Asumboya</strong> (Lab Lead &amp; Second Author). Trends in Maternal Health Risk in Ghana: Evidence from Three Rounds of the Demographic and Health Survey (2008–2022). <em>Manuscript in preparation.</em> INNOGEN AI Research.
                </li>
                <li>
                  Lead Author et al., <strong>Wilfred Ayine Asumboya</strong> (Lab Lead &amp; Second Author). Machine Learning Prediction of Maternal Risk at First Antenatal Booking from Non-Invasive Features: An XGBoost-Led Benchmark on the Ghana DHS. <em>Manuscript in preparation.</em> INNOGEN AI Research.
                </li>
              </ul>
            </section>


            {/* Leadership */}
            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> LEADERSHIP &amp; ACTIVITIES</h3>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Co-Founder &amp; Head, AI Department</h4>
                  <span className="cv-job-date">2025 – Present</span>
                </div>
                <p className="cv-job-company">INNOGEN — Institute for Innovation and Next-Generation Engineering · Accra, Ghana</p>
                <ul>
                  <li>Co-founded and lead a research and engineering team building intelligent systems addressing challenges in West Africa — maternal health risk stratification, flood risk mapping, satellite-based galamsey detection, and water pollution detection.</li>
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
                <li>Dean’s Honour List — School of Engineering Sciences, University of Ghana (Levels 100–300, 2024–2026)</li>
                <li>UGAANA Scholar — University of Ghana Alumni Association of North America (2024)</li>
                <li>Optica Amplify Optics Immersion Program — Selected as one of 25 students worldwide; Group 2 received the 2026 Best Presentation Award for work on low-cost Fourier Ptychography microscopy (Sep 2026)</li>
                <li>Panelist, “AI for Humanity: Opportunity, Responsibility, and the Future We Want” — University of Ghana &amp; Nelson Mandela University student panel on the UN Independent International Scientific Panel on AI’s Preliminary Report (Jul 2026)</li>
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
