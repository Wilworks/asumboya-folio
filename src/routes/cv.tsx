import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Wilfred Asumboya" },
      { name: "description", content: "Wilfred Asumboya - AI/ML Engineer & Biomedical Researcher Resume" },
    ],
  }),
  component: CV,
});

function CV() {
  const handlePrint = () => {
    window.print();
  };

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
          {/* Left Sidebar */}
          <aside className="cv-sidebar">
            <div className="cv-header">
              <div className="cv-monogram">WA</div>
            </div>

            <section className="cv-section">
              <h3 className="cv-heading">CONTACT</h3>
              <ul className="cv-list cv-contact">
                <li>Accra, Ghana</li>
                <li>wilfredasumboya@gmail.com</li>
                <li>+233 55 123 4567</li>
                <li><a href="https://linkedin.com/in/wilfred-asumboya" target="_blank" rel="noreferrer">linkedin.com/in/wilfred-asumboya</a></li>
                <li><a href="https://github.com/wilfredasumboya" target="_blank" rel="noreferrer">github.com/wilfredasumboya</a></li>
              </ul>
            </section>

            <section className="cv-section">
              <h3 className="cv-heading">TECHNICAL STACK</h3>
              <div className="cv-stack-group">
                <h4>Languages</h4>
                <p>Python, TypeScript, C/C++, SQL, MATLAB</p>
              </div>
              <div className="cv-stack-group">
                <h4>ML / DL</h4>
                <p>PyTorch, TensorFlow, scikit-learn, HuggingFace, XGBoost</p>
              </div>
              <div className="cv-stack-group">
                <h4>AI Systems</h4>
                <p>RAG, LLM fine-tuning, multi-task learning, SHAP / explainability, vector DBs</p>
              </div>
              <div className="cv-stack-group">
                <h4>Data</h4>
                <p>NumPy, Pandas, OpenCV, MONAI, DICOM, nibabel</p>
              </div>
              <div className="cv-stack-group">
                <h4>Backend</h4>
                <p>Django, FastAPI, Node.js, REST, PostgreSQL, Supabase</p>
              </div>
              <div className="cv-stack-group">
                <h4>MLOps</h4>
                <p>Docker, Git, W&B, Hugging Face Hub, CI/CD</p>
              </div>
              <div className="cv-stack-group">
                <h4>Domains</h4>
                <p>Medical imaging, computational biology, digital mental health</p>
              </div>
            </section>

            <section className="cv-section">
              <h3 className="cv-heading">EDUCATION</h3>
              <div className="cv-edu-item">
                <h4>BSc. Biomedical Engineering</h4>
                <p className="cv-edu-meta">University of Ghana · Exp. Jan 2028</p>
                <p className="cv-edu-desc">
                  First Class Honours (L100–L300)<br/>
                  Dean's Honour List · UGAANA Scholar
                </p>
              </div>
              <div className="cv-edu-item">
                <h4>WASSCE — General Science</h4>
                <p className="cv-edu-meta">Notre Dame Seminary SHS · 2023</p>
                <p className="cv-edu-desc">Aggregate 7 · NSMQ 2022 National 1/8 Finalist</p>
              </div>
            </section>

            <section className="cv-section">
              <h3 className="cv-heading">LANGUAGES</h3>
              <p className="cv-text">English — Native</p>
            </section>

            <section className="cv-section">
              <h3 className="cv-heading">INTERESTS</h3>
              <p className="cv-text">
                Biomedical AI · Computational imaging · LLMs for health · Low-cost medical devices · STEM education · Football
              </p>
            </section>
          </aside>

          {/* Main Content */}
          <div className="cv-main">
            <header className="cv-main-header">
              <h1>WILFRED A. ASUMBOYA</h1>
              <h2>AI / ML ENGINEER · BIOMEDICAL RESEARCHER</h2>
            </header>

            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> PROFILE</h3>
              <p className="cv-body-text">
                AI/ML engineer building deployable systems at the intersection of deep learning and biomedicine. I ship multi-task models, RAG pipelines, and explainable AI for clinical decision support — from research notebook to production API. Currently leading AI at INNOGEN while studying Biomedical Engineering at the University of Ghana (Dean's List, First Class Honours).
              </p>
            </section>

            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> EXPERIENCE</h3>
              
              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>AI/ML Engineer (Lead)</h4>
                  <span className="cv-job-date">Jan 2025 – Present</span>
                </div>
                <p className="cv-job-company">INNOGEN · Accra, Ghana</p>
                <ul>
                  <li>Lead a 4-engineer AI team shipping multi-task PyTorch models for diabetes-complication risk prediction with SHAP-based clinician explanations.</li>
                  <li>Designed and deployed a Django + RAG pipeline (LangChain, pgvector) serving contextual medical guidance over 12k+ curated documents.</li>
                  <li>Built CI/CD for model retraining and evaluation; cut iteration time from days to under 2 hours.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Research Assistant — AI in Medical Imaging</h4>
                  <span className="cv-job-date">Aug 2024 – Present</span>
                </div>
                <p className="cv-job-company">Institute of Applied Science & Tech. (IAST), University of Ghana</p>
                <ul>
                  <li>Authored DeepMammo: a CNN ensemble for breast-lesion classification on full-field digital mammograms (AUC 0.93 on internal hold-out).</li>
                  <li>Developed an nnU-Net airway-segmentation pipeline for low-dose CT, optimised for sub-Saharan clinical data scarcity.</li>
                  <li>Prototyping LLM-driven triage agents for digital mental-health screening.</li>
                </ul>
              </div>

              <div className="cv-job">
                <div className="cv-job-header">
                  <h4>Undergraduate Researcher</h4>
                  <span className="cv-job-date">2023 – Present</span>
                </div>
                <p className="cv-job-company">Dept. of Biomedical Engineering, University of Ghana</p>
                <ul>
                  <li>Fourier Ptychography microscopy reconstruction in Python — gigapixel imaging on consumer hardware.</li>
                  <li>Neutron Activation Analysis of Fort Amsterdam artefacts — statistical modelling of trace-element signatures.</li>
                </ul>
              </div>
            </section>

            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> SELECTED PROJECTS</h3>
              <ul className="cv-projects-list">
                <li><strong>Nexus Intellisense</strong> — RAG agent + Django backend for medical literature search; hybrid BM25 + dense retrieval, streaming LLM responses.</li>
                <li><strong>DeepMammo</strong> — PyTorch ensemble (EfficientNet + ConvNeXt) for mammography classification with Grad-CAM and SHAP overlays.</li>
                <li><strong>Multi-Label Diabetes Risk</strong> — Explainable multi-task model predicting 5 diabetes complications jointly; outperforms single-task baselines by 8% F1.</li>
                <li><strong>MindMesh</strong> — Voice-first digital mental-health companion using Whisper + fine-tuned Llama for low-bandwidth deployment.</li>
                <li><strong>EquiBase</strong> — Open dataset tooling for African biomedical imaging — DICOM normalisation, de-identification, and federated splits.</li>
              </ul>
            </section>

            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> RESEARCH OUTPUT</h3>
              <ul className="cv-bullets">
                <li>Multi-Task Explainable Framework for Diabetes Complications (in prep, 2026).</li>
                <li>DeepMammo: Ensemble Learning for Mammographic Lesion Classification (preprint).</li>
                <li>Airway Segmentation in Low-Dose CT for Resource-Limited Settings (ongoing).</li>
                <li>Fourier Ptychography on Commodity Optics (completed report, 2024).</li>
              </ul>
            </section>

            <section className="cv-main-section">
              <h3 className="cv-main-heading"><span className="cyan-box"></span> AWARDS</h3>
              <ul className="cv-bullets">
                <li>Dean's Honour List — University of Ghana (L100–L300)</li>
                <li>UGAANA Scholarship — University of Ghana Alumni</li>
                <li>Harvard Health Systems Hackathon — Participant (2025)</li>
                <li>NSMQ Upper East Regional Winner (2022) · National 1/8 Finalist</li>
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
