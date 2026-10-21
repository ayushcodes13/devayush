import mlChallengeCover from "@/assets/ml-challenge-cover.jpg";
import mlChallengeEnsemble from "@/assets/ml-challenge-ensemble.jpeg";
import mlChallengeClustering from "@/assets/ml-challenge-clustering.jpeg";
import mlChallengeScratch from "@/assets/ml-challenge-scratch.jpeg";
import mlChallengeRegression from "@/assets/ml-challenge-regression.jpg";
import hydranCover from "@/assets/hydran-cover.jpg";
import hydranArchitecture from "@/assets/hydran-architecture.jpg";
import hydranTrainingCurves from "@/assets/hydran-training-curves.jpg";
import hydranMetrics from "@/assets/hydran-metrics.jpg";
import coldCallingCover from "@/assets/cold-calling-cover.png";
import siriCover from "@/assets/siri-cover.png";
import siriArchitecture from "@/assets/siri-architecture.png";
import clientCover from "@/assets/client-cover.png";
import clientArchitecture from "@/assets/client-architecture.png";
import xgboostCover from "@/assets/xgboost-cover.jpg";
import xgboostArchitecture from "@/assets/xgboost-architecture.jpg";
import xgboostResults from "@/assets/xgboost-results.jpg";
import medwasteArch1 from "@/assets/medwaste-arch1.jpg";
import medwasteArch2 from "@/assets/medwaste-arch2.jpg";
import medwasteArch3 from "@/assets/medwaste-arch3.jpg";
import medwasteResults from "@/assets/medwaste-results.jpg";
import medwasteCover from "@/assets/medwaste-cover.jpg";
import auraCover from "@/assets/aura-cover.png";
import auraNotes from "@/assets/aura-notes.jpg";
import auraIntentRouter from "@/assets/aura-intent-router.jpg";
import auraWakeword from "@/assets/aura-wakeword.jpg";
import krishnaCover from "@/assets/krishna-cover.png";
import krishnaWelcome from "@/assets/krishna-welcome.png";
import krishnaVerse from "@/assets/krishna-verse.png";
import policyArchitecture from "@/assets/policy-architecture.png";
import policyCover from "@/assets/policy-cover.png";
import policyDemo from "@/assets/policy-demo.png";
import clarisCover from "@/assets/claris-cover.png";
import clarisWorkstation from "@/assets/claris-workstation.png";
import clarisImaging from "@/assets/claris-imaging.png";
import clarisCaseReview from "@/assets/architecture/claris-case-review.svg";
import tenderCover from "@/assets/tender-cover.png";
import tenderArch1 from "@/assets/tender-arch-1.png";
import tenderArch2 from "@/assets/tender-arch-2.png";
import tenderArch3 from "@/assets/tender-arch-3.png";
import atlasDashboard from "@/assets/project-captures/atlas-live-dashboard.png";
import atlasMobile from "@/assets/project-captures/atlas-mobile.png";
import atlasDataFlow from "@/assets/architecture/atlas-data-flow.svg";
import tenderReviewDashboard from "@/assets/project-captures/tender-review-dashboard.jpg";
import tenderReviewEvidence from "@/assets/project-captures/tender-review-evidence.jpg";
import tenderReviewFlow from "@/assets/architecture/tender-review-flow.svg";

export interface Project {
  title: string;
  summary: string;
  image: string;
  gallery?: string[];
  galleryAlts?: string[];
  problem: string;
  architecture: string;
  architectureImage?: string | string[];
  architectureImageAlts?: string[];
  architecturePipeline: string[];
  decisions: string[];
  technologies: string[];
  failureModes: string[];
  results: string[];
  resultsImages?: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  demo?: string;
}

export interface ProjectCategory {
  id: string;
  label: string;
  tagline: string;
  icon: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "flagship",
    label: "Selected Work",
    tagline: "Applied AI systems where evidence, workflow behavior, and reliability matter",
    icon: "",
    projects: [
      {
        title: "CANON",
        summary: "Policy-governed AI that retrieves authoritative rules before it answers",
        image: policyCover,
        architectureImage: policyArchitecture,
        problem: "In corporate environments, LLMs cannot be allowed to guess. If someone asks about refund exceptions, security protocols, account closure, or support escalation, a fluent but wrong answer creates operational risk. CANON treats approved policy documents as the canonical source of truth and only lets the model answer after routing, retrieval, governance, and grounding checks pass.",
        architecture: "A Python-owned policy intelligence runtime behind a Vite + React interface. The frontend is a fast portfolio-grade console, while the Python API handles intent detection, owner scoping, Gemini embeddings, policy retrieval, governance verdicts, source-backed generation, and grounding review.",
        architecturePipeline: [
          "Intent Detection - What is the user asking?",
          "Owner Scoping - Which departments are allowed to answer?",
          "Gemini Embedding Retrieval - Retrieve policy evidence from the active corpus",
          "Constraint Filtering & Governance - Risk gate: safe / refuse / escalate?",
          "Verdict Handler - Answer, refuse, or escalate based on the gate",
          "Groq Generation - Produce a constrained source-backed response",
          "Grounding Review - Verify the answer against cited supporting clauses",
        ],
        decisions: [
          "Version-aware retrieval: Older document versions are automatically suppressed in favor of the most recent policy version using deterministic dominance rules during ranking",
          "Owner-based scoping: Documents are rigidly filtered based on routed intent ownership, preventing cross-domain contamination (e.g., Support agents accessing Finance internal memos)",
          "Deterministic governance gating with strict verdicts: SAFE, REFUSE_POLICY, REFUSE_INVALID, ESCALATE (limited strictly to security, legal, or compromise cases)",
          "Evidence-backed responses: Answers and refusals include source paths, supporting clauses, confidence, and a grounding signal so the user can audit why CANON responded",
        ],
        technologies: ["React 19", "TypeScript", "Vite", "TanStack Router", "TanStack Query", "Tailwind CSS v4", "Radix UI", "Python FastAPI", "Gemini Embeddings", "Groq"],
        failureModes: [
          "Governance is query-level and evidence-level - it is not a formal legal approval system",
          "The current policy corpus is static markdown, not a live document management integration",
          "Grounding is lexical, not semantic - subtle paraphrases may pass unchecked",
          "Authentication, role-aware policy access, and durable audit logging still need to be added",
        ],
        resultsImages: [policyDemo],
        results: [
          "Migrated from a slow Streamlit-hosted prototype into a deployable Vercel app with a Python API",
          "Live custom domain at canon.devayushrout.me with same-origin API routing",
          "Gemini embeddings replaced the heavier local ingestion dependency for production deployment",
          "Interactive console returns status, verdict, confidence, context count, sources, and supporting clauses",
          "README, docs, favicon, logo, screenshots, and deployment instructions were productionized",
        ],
        metrics: [
          { label: "Live Domain", value: "canon.devayushrout.me" },
          { label: "Runtime", value: "Python" },
          { label: "Verdicts", value: "4" },
        ],
        github: "https://github.com/ayushcodes13/canon",
        demo: "https://canon.devayushrout.me",
      },
      {
        title: "CLARIS",
        summary: "Provenance-aware clinical case investigation for HCC decision-support research",
        image: clarisCover,
        architectureImage: clarisCaseReview,
        architectureImageAlts: ["CLARIS architecture: checkpointed specialist investigation flows through deterministic validation to a clinician-review checkpoint; optional model assistance stays allowlisted."],
        gallery: [clarisWorkstation, clarisImaging],
        galleryAlts: ["CLARIS case overview showing patient context, evidence trace, missing information, and review flags.", "CLARIS imaging workspace showing a CT preview, imaging context, measurements, and review boundary."],
        problem: "Medical-adjacent AI systems need to show how a conclusion was formed, what evidence was used, what data is missing, and where clinician review is required. CLARIS focuses on longitudinal hepatocellular carcinoma case investigation without pretending to be an autonomous diagnostic product.",
        architecture: "A Python-owned clinical reasoning backend produces checkpoint artifacts for a React/TanStack workstation. The frontend presents normalized patient state, imaging-derived measurements, evidence retrieval, agent trajectory, missing data, review flags, and a traceable clinician-review report.",
        architecturePipeline: [
          "PatientCase Construction - Normalize demographics, labs, imaging context, and timeline",
          "Case Investigation Orchestrator - Coordinate clinical, imaging, treatment-response, and evidence passes",
          "Imaging Investigation - Surface CT previews, SEG overlays, and selected derived measurements",
          "Evidence Retrieval - Attach controlled-corpus references to claims instead of free-form claims",
          "Validation - Track missing information, review flags, and unsupported assumptions",
          "Clinician-Review Report - Produce a bounded assessment for human review, not autonomous diagnosis",
        ],
        decisions: [
          "Kept the AI architecture in Python so reasoning state, validation, and checkpoint generation remain inspectable",
          "Separated clinical investigation from frontend rendering so the UI reflects generated artifacts rather than inventing state",
          "Used real HCC-TACE-Seg CT preview examples while keeping raw DICOM and heavy data outside git",
          "Framed the product as a research prototype with explicit clinical boundaries instead of a treatment recommender",
        ],
        technologies: ["Python", "React", "TypeScript", "TanStack Start", "TanStack Router", "TanStack Query", "Vite", "Tailwind CSS", "Radix UI", "Recharts"],
        failureModes: [
          "Research prototype only - not clinically validated and not a regulated medical device",
          "Frontend currently reads generated checkpoint/demo artifacts instead of a full live clinical backend",
          "Raw DICOM, SEG, and NIfTI files remain outside git and must be managed separately",
          "Any medical conclusion requires clinician review and cannot be treated as diagnosis or treatment advice",
        ],
        results: [
          "Live custom domain at claris.devayushrout.me",
          "Clinical workstation presents case overview, imaging workspace, evidence trace, investigation state, and report routes",
          "Real CT preview examples and SEG overlay demo are included as lightweight committed assets",
          "Backend tests currently pass with 61 test cases documented in the project README",
          "README clearly documents clinical boundaries, architecture, run commands, and research limitations",
        ],
        metrics: [
          { label: "Tests", value: "61" },
          { label: "Domain", value: "claris.devayushrout.me" },
          { label: "Boundary", value: "Review" },
        ],
        github: "https://github.com/ayushcodes13/claris",
        demo: "https://claris.devayushrout.me",
      },
      {
        title: "Tender Review",
        summary: "A source-linked workflow for turning text-based tender PDFs into human-reviewed OEM response sheets.",
        image: tenderReviewDashboard,
        gallery: [tenderReviewEvidence],
        galleryAlts: ["Tender Review workspace with a candidate clause, cited source page, and matched text highlight."],
        architectureImage: tenderReviewFlow,
        architectureImageAlts: ["Tender Review flow from selectable PDF text through a candidate match and human review to a DOCX with blank supplier fields."],
        problem: "Preparing a technical response sheet starts with finding candidate clauses and checking them against the source page. The product keeps that match visible so a reviewer can inspect the original wording before exporting a blank OEM response sheet.",
        architecture: "The hosted MVP is a single Next.js app. A server-side route analyzes the text-based PDF and any configured model request; the browser renders the PDF, positions highlights from PDF.js text geometry, holds the active review, and creates the DOCX.",
        architecturePipeline: [
          "Read selectable PDF text page by page",
          "Find candidate technical clauses with the rule-based preview (or an optional configured model path)",
          "Match each quote to source text and page geometry",
          "Show the citation and highlight for human review",
          "Export tender wording with blank OEM response fields",
        ],
        decisions: [
          "Require a page-text match and usable geometry before presenting a quote as a verified citation",
          "Keep every candidate in Needs review; the app does not make a supplier compliance decision",
          "Describe extraction as a candidate finder because it can miss clauses or include false positives",
        ],
        technologies: ["Next.js", "TypeScript", "PDF.js", "DOCX", "Vercel"],
        failureModes: [
          "Scanned PDFs and OCR-heavy documents are outside the current hosted demo",
          "The rule-based candidate finder is not exhaustive; reviewers must check the original tender for omissions",
          "The hosted MVP has no sign-in or saved review history, so only non-confidential sample files should be used",
        ],
        results: [
          "Source-matched candidates show a page number, quote, and positioned highlight for review",
          "The DOCX export carries tender wording into a sheet with blank supplier response fields",
          "The README documents file limits, the hosted MVP boundary, and the human-review requirement",
        ],
        github: "https://github.com/ayushcodes13/tender-compliance-engine",
        demo: "https://tender-compliance-engine.vercel.app/",
      },
      {
        title: "Tender Match",
        summary: "Reduced manual tender research from 2 hours/day to 10 minutes",
        image: tenderCover,
        architectureImage: [tenderArch1, tenderArch2, tenderArch3],
        problem: "A business team was spending nearly 2 hours every day manually scanning multiple government tender portals to identify relevant opportunities. The workflow was repetitive, high-friction, and error-prone. The core problem was decision speed and filtering relevance at scale. The system needed to answer one question reliably: Which tenders deserve immediate review today?",
        architecture: "A multi-stage tender intelligence pipeline designed to convert raw portal listings into a decision-ready shortlist. The system separates ingestion, filtering, ranking, and summarization into deterministic workflow stages.",
        architecturePipeline: [
          "01 Data Ingestion - Automated retrieval of tender listings from multiple portals",
          "02 Parsing & Structuring - Extracting eligibility, deadlines, and intent into structured records",
          "03 Relevance Scoring - LLM-assisted semantic matching against business-specific criteria",
          "04 Priority Ranking - Weighted ranking based on urgency, fit score, and contract value",
          "05 Shortlist Generation - Conversion of top-ranked tenders into a daily review list",
          "06 Workflow Dashboard - Operator-facing interface for validation and fast action",
        ],
        decisions: [
          "Semantic fit scoring over keyword filtering to capture intent-level matches beyond simple text overlap",
          "Structured metadata extraction to normalize inconsistent source formats for downstream ranking logic",
          "Deterministic ranking rules combining semantic scores with explicit business constraints like deadlines",
          "Human-in-the-loop validation to ensure operational trust and prevent missed opportunities",
        ],
        technologies: ["Python 3.10+", "LangChain", "FastAPI", "PostgreSQL / pgvector", "BeautifulSoup", "OpenAI", "Streamlit"],
        failureModes: [
          "Government portal dynamic format changes breaking scraping logic",
          "Eligibility criteria extraction noise from poorly formatted source PDFs",
          "Semantic relevance overweighting generic procurement language",
          "Deadline parsing edge cases handled with explicit fallback rules",
        ],
        results: [
          "Reduced manual research from 2 hours to 10 minutes",
          "Converted hundreds of daily listings into a concise decision-ready shortlist",
          "Improved response speed for bid decision workflows",
          "Reduced risk of missing time-sensitive tenders",
        ],
        metrics: [
          { label: "Time Reduction", value: "91%" },
          { label: "Review Time", value: "10 min" },
          { label: "Consistency", value: "High" },
        ],
        github: "https://github.com/ayushcodes13/tendermatch",
      },
      {
        title: "MedWaste Guardian",
        summary: "A multi-modal AI system for biomedical waste compliance - classifies waste via image, voice, and text, checks legal regulations, and guides proper disposal.",
        image: medwasteCover,
        architectureImage: medwasteArch3,
        gallery: [medwasteArch1, medwasteArch2, medwasteArch3],
        resultsImages: [medwasteResults],
        problem: "Biomedical waste management is critical for healthcare safety and regulatory compliance. Misclassification causes health risks and legal issues. Hospitals struggle with country-specific regulations, compliance checks are slow and manual, and existing tools lack integrated voice/image/text support. Traditional methods are error-prone and miss frequent regulatory updates.",
        architecture: "A multi-modal AI system that accepts image, voice, and text inputs. YOLOv8 classifies waste from images, Vosk STT converts voice queries to text, and RAG with GPT-4-Turbo retrieves disposal laws from ChromaDB/Pinecone. A coordinator agent orchestrates all modalities and generates responses with text explanations and voice feedback via TTS.",
        architecturePipeline: [
          "User provides input (image, voice, or text)",
          "YOLOv8 + OpenCV identifies and classifies waste type",
          "Vosk STT converts speech input to text",
          "RAG pipeline fetches relevant legal regulations (ChromaDB/Pinecone)",
          "GPT-4-Turbo generates disposal instructions with legal compliance",
          "TTS engine delivers voice response back to user",
          "Coordinator agent orchestrates all agents and returns final output",
        ],
        decisions: [
          "Used YOLOv8 for waste classification - fast inference and high accuracy on custom-trained biomedical waste categories",
          "RAG over fine-tuning for legal compliance - regulations change frequently, retrieval ensures up-to-date guidance without retraining",
          "Multi-agent architecture with CrewAI - each modality handled by a specialist agent, coordinated for unified response",
          "Included TTS output - hands-free operation is critical in clinical environments where staff wear gloves",
        ],
        technologies: ["YOLOv8", "OpenCV", "GPT-4-Turbo", "RAG", "ChromaDB", "Pinecone", "Vosk STT", "Google TTS", "CrewAI", "Python"],
        failureModes: [
          "YOLOv8 confusion between similar waste types (e.g., cotton vs gauze) - mitigated with augmented training data and confidence thresholds",
          "RAG retrieval can surface outdated regulations if vector store isn't updated - built automated ingestion pipeline for regulatory updates",
          "Voice input in noisy hospital environments degrades STT accuracy - added noise filtering and confirmation step before execution",
        ],
        results: [
          "Unified multi-modal input system supporting image, voice, and text for real-time waste analysis",
          "Automated legal compliance checking against country-specific biomedical waste regulations",
          "Demonstrated fast retrieval of relevant disposal guidance in the prototype",
          "Hands-free voice interaction enables use in sterile clinical environments",
          "Modular multi-agent architecture allows easy addition of new modalities and regulatory frameworks",
        ],
        github: "https://github.com/ayushcodes13/MedWaste-Guardian",
      },
      {
        title: "Atlas",
        summary: "A static campaign analytics demo that turns synthetic or local CSV data into a filterable performance overview.",
        image: atlasDashboard,
        gallery: [atlasMobile],
        galleryAlts: ["Atlas campaign dashboard at a 390-pixel narrow viewport."],
        architectureImage: atlasDataFlow,
        architectureImageAlts: ["Atlas browser-side flow from bundled or local CSV through validation and filtering to calculated dashboard views, with no server or AI call."],
        problem: "Campaign data is often spread across rows and channels, making a quick performance review harder than it needs to be. Atlas demonstrates a compact way to explore a dataset without connecting an ad platform or sending a selected CSV to a server.",
        architecture: "A static HTML, CSS, and JavaScript app reads the bundled synthetic CSV or a file selected in the browser. It applies date, channel, and text filters, then calculates the visible KPIs, trend, and channel breakdown directly from the rows. There is no backend or model call.",
        architecturePipeline: [
          "Load the bundled 28-row synthetic campaign sample or choose a local CSV",
          "Parse and validate rows in the browser",
          "Filter by date range and channel, then search campaign activity",
          "Calculate revenue, conversions, ROAS, conversion rate, and chart data from visible rows",
          "Reset to the bundled sample when finished",
        ],
        decisions: [
          "Use clearly labeled synthetic data so example figures are not mistaken for customer results",
          "Keep selected CSV files in browser memory; the static demo has no upload endpoint or account system",
          "Calculate the dashboard directly from the currently filtered rows rather than claiming AI-generated insights",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "CSV", "Vercel"],
        failureModes: [
          "The project has no live ad-platform connection or persistent storage",
          "Imported data is not uploaded, saved, or protected by authentication; confidential CSV files should not be used",
          "Metrics are simple calculations over supplied rows and do not establish causal campaign attribution",
        ],
        results: [
          "Production site is served as a static Vercel deployment with no build command or environment variables",
          "Aside Browser review confirmed the live page displays the 28-row synthetic sample without browser console or request errors",
          "The README records browser checks for sample loading, filters, search, local CSV import, reset, and a narrow viewport",
        ],
        metrics: [
          { label: "Hosting", value: "Static Vercel" },
          { label: "Sample", value: "28 synthetic rows" },
        ],
        github: "https://github.com/ayushcodes13/atlas",
        demo: "https://atlas.devayushrout.me/",
      },
      {
        title: "Tender Compliance Engine",
        summary: "A human-reviewed workflow that extracts candidate clauses from tender PDFs, links them to source text, and exports a response sheet.",
        image: "https://tender-compliance-engine.vercel.app/images/review-workspace.png",
        problem: "Preparing technical tender responses requires finding requirements in long PDFs and checking each candidate against its original source.",
        architecture: "A Next.js app reads text from tender PDFs, matches candidate clauses to selectable source text, displays citations and page highlights, and exports tender wording with blank supplier response fields. A server-side route handles PDF analysis and any configured model request.",
        architecturePipeline: [
          "Read selectable PDF text page by page",
          "Find candidate requirement clauses",
          "Match candidates to cited page text and highlight the source location",
          "Have a reviewer compare each candidate with the original tender",
          "Export source wording with blank OEM response fields",
        ],
        decisions: [
          "Treat every candidate as needing review rather than deciding supplier compliance",
          "Show the cited quote and page highlight so reviewers can check the original source",
          "Keep supplier response fields blank in the exported DOCX",
        ],
        technologies: ["Next.js", "PDF.js", "DOCX", "Vercel"],
        failureModes: [
          "The rule-based candidate list can include false positives and miss requirements; its count is not a completeness measure",
          "A visible source match does not prove that the whole tender has been covered",
          "Candidates must be checked against the original tender before use",
        ],
        results: [
          "The hosted MVP shows candidate clauses with source quotes, page references, and review highlights",
          "The workflow exports tender wording with blank supplier response fields",
        ],
        github: "https://github.com/ayushcodes13/tender-compliance-engine",
        demo: "https://tender-compliance-engine.vercel.app/",
      },
      {
        title: "Lintel",
        summary: "A local CLI that screens AI-agent repositories for structural reliability signals and produces a Markdown report with findings and suggested fixes.",
        image: "https://lintel.devayushrout.me/assets/lintel-sample-report.png",
        problem: "Agent demos often show only the happy path; engineers need a first-pass way to inspect repository structure and configuration for reliability signals.",
        architecture: "A local Python command-line tool scans repository files and configuration using lexical indicators, separates source/config signals from documentation mentions, and writes findings and priority fixes to Markdown. The hosted page is a presentation only.",
        architecturePipeline: [
          "Scan an agent repository and its configuration",
          "Check structural signals such as retries, fallbacks, review gates, and error handling",
          "Separate source/config findings from documentation mentions",
          "Write findings, evidence locations, risk level, and suggested fixes to a Markdown report",
          "Review cited code to verify whether a control actually works",
        ],
        decisions: [
          "Use local files and the Python standard library without model credentials or service dependencies",
          "Treat lexical matches as leads for human review, not proof that a control is effective",
          "Include evidence locations and suggested fixes in the report",
        ],
        technologies: ["Python", "Standard Library", "Markdown"],
        failureModes: [
          "Lexical signals can miss real controls or over-credit superficial mentions",
          "Lintel is not a semantic code reviewer, penetration test, agent evaluator, or production certification",
          "The sample report uses an intentionally weak synthetic repository and is not evidence about a real agent",
        ],
        results: [
          "The local CLI produces a Markdown report with category findings, risk level, evidence locations, and suggested fixes",
          "The hosted page presents the project; it is not the hosted scanner",
        ],
        github: "https://github.com/ayushcodes13/lintel",
      },
      {
        title: "Agentic Policy Reliability",
        summary: "A local-first policy lookup prototype that demonstrates dated-source selection, clause evidence, abstention, and human-review routing.",
        image: "https://agentic-policy-reliability.devayushrout.me/images/local-match.png",
        problem: "Policy answers can rely on outdated versions, lack a traceable source, or go beyond the available evidence.",
        architecture: "A deterministic Python demo matches a question to local policy clauses and tags, selects the version effective on a requested date, and returns the clause metadata or abstains and routes the question for review. Its examples are synthetic; it does not call an LLM or represent a production policy system.",
        architecturePipeline: [
          "Accept a policy question and as-of date",
          "Search local policy clauses and tags using lexical token overlap",
          "Select the policy version effective on that date",
          "Return the matched clause with source and version metadata",
          "Abstain or route unmatched, tied, or high-impact questions to human review",
        ],
        decisions: [
          "Keep the lookup deterministic and locally inspectable",
          "Include policy ID, version, effective dates, and clause ID with a match",
          "Use abstention and review routing when evidence is insufficient or risky",
        ],
        technologies: ["Python", "Standard Library", "JSON"],
        failureModes: [
          "The fixtures are invented examples, not production policy content",
          "Lexical matching is a heuristic and may miss relevant clauses or match the wrong wording",
          "This demo does not call an LLM and is not a production policy system or source of real policy decisions",
        ],
        results: [
          "The local demo exposes dated clause matches, abstentions, and human-review routes for inspection",
          "The browser interface and CLI use the same deterministic evaluation implementation",
        ],
        github: "https://github.com/ayushcodes13/agentic-policy-reliability",
      },
      {
        title: "Clara Agent Reliability",
        summary: "A local review workspace demonstrating rule-based safety gates for medical-adjacent product recommendations.",
        image: "https://clara-agent-reliability.devayushrout.me/assets/clara-review.png",
        problem: "A product that matches a query may still be inappropriate for the user's context, so recommendations need visible risk checks and review gates.",
        architecture: "A local Python web workspace routes a query, searches a checked-in product catalogue, exposes catalogue claims and risk factors, and builds a review-gated result with a decision trace. The hosted page is a static presentation; the interactive Python service runs locally.",
        architecturePipeline: [
          "Route the query and flag selected high-risk terms",
          "Retrieve products from a small local catalogue using keyword rules",
          "Show catalogue-grounded claims, risk factors, and contraindications",
          "Hold recommendations when the doctor-review rules require it",
          "Expose the route, decisions, and pipeline trace for review",
        ],
        decisions: [
          "Keep routing and risk checks rule-based and inspectable",
          "Return only claims stored with catalogue products",
          "Hold recommendations for doctor review when the rules require it",
        ],
        technologies: ["Python", "Standard Library", "JSON", "HTML", "CSS", "JavaScript"],
        failureModes: [
          "This is a local demonstration, not a healthcare service and not for real medical use",
          "The catalogue is small and manually maintained; routing and risk checks use simple keyword rules",
          "The hosted static presentation does not provide the interactive Python service or clinician integration",
        ],
        results: [
          "The local interface displays catalogue claims, risk flags, review holds, and an expandable decision trace",
          "The README presents sample output as a demonstration, not medical advice",
        ],
        github: "https://github.com/ayushcodes13/clara-agent-reliability",
      },
    ],
  },
  {
    id: "research",
    label: "Research & Explorations",
    tagline: "Machine learning, deep learning research, and early systems",
    icon: "",
    projects: [
      {
        title: "HYDRAN: Hybrid Dual Residual Attention Network",
        summary: "A custom brain-tumor detection and segmentation model built from scratch and evaluated against common benchmark architectures.",
        image: hydranCover,
        problem: "Cancer is one of the leading causes of fatalities worldwide. Traditional diagnostic methods rely on human interpretation of medical images, which is prone to inconsistencies and is time-consuming. Early and accurate detection can significantly improve treatment outcomes and survival rates, while consistent pixel-level segmentation remains technically difficult.",
        architecture: "A novel hybrid architecture combining dual residual paths with attention mechanisms in an encoder-decoder framework. Skip connections preserve spatial detail while attention blocks focus on diagnostically relevant regions. Grad-CAM provides explainability for clinical trust.",
        architectureImage: hydranArchitecture,
        architecturePipeline: [
          "DICOM preprocessing and normalization",
          "Data augmentation for class balance",
          "Hybrid dual residual attention blocks",
          "Encoder-decoder with skip connections",
          "Multi-metric evaluation (IoU, Dice, Precision, Recall)",
          "Grad-CAM explainability visualization",
        ],
        decisions: [
          "Designed a custom hybrid architecture instead of using off-the-shelf U-Net - dual residual paths preserve fine-grained spatial details critical for tumor boundaries",
          "Attention mechanisms focus computation on diagnostically relevant regions rather than processing the entire image uniformly",
          "Prioritized explainability alongside accuracy - Grad-CAM visualizations help clinicians trust and verify predictions",
        ],
        technologies: ["Python", "PyTorch", "OpenCV", "scikit-learn", "NumPy", "matplotlib"],
        failureModes: [
          "Small tumors at image boundaries were initially missed - added padding-aware augmentation to improve edge detection",
          "Class imbalance between tumor and non-tumor pixels caused bias - addressed with focal loss and balanced sampling",
          "High-resolution images caused memory issues - implemented patch-based training with overlap stitching for inference",
        ],
        results: [
          "Pixel Accuracy: 99.80% - outperforming all benchmark models",
          "Dice Score: 89.97% - strong agreement between predicted and actual segmentation",
          "Precision: 92.93% with very low false positive rate",
          "Recall: 91.50% - successfully identifies nearly all true tumor cases",
          "IoU: 81.93% - effective localization and segmentation",
          "Outperforms DeepLabv3, U-Net, Mask R-CNN, SegNet, and ResUNet across all metrics",
        ],
        metrics: [
          { label: "Pixel Accuracy", value: "99.80%" },
          { label: "Dice Score", value: "89.97%" },
          { label: "Precision", value: "92.93%" },
          { label: "Recall", value: "91.50%" },
          { label: "IoU Score", value: "81.93%" },
        ],
        resultsImages: [hydranTrainingCurves, hydranMetrics],
        github: "https://github.com/ayushcodes13/HYDRAN",
      },
      {
        title: "Ask Krishna",
        summary: "A verse retrieval and answer-generation prototype for Bhagavad Gita guidance; the hosted page is presentation-only, not live chat.",
        image: krishnaCover,
        resultsImages: [krishnaWelcome, krishnaVerse],
        problem: "The README describes a prototype for Bhagavad Gita questions with an intended verse-retrieval and answer-generation flow. Its public page is static and does not provide that interaction.",
        architecture: "The README describes an intended FastAPI backend with SSE, Supabase/PostgreSQL for auth and storage, Groq with Llama 3.1, and SentenceTransformers using a local embeddings file for verse retrieval. The public page is a screenshot-led static presentation with no live chat, authentication, retrieval, or database access.",
        architecturePipeline: [
          "Documented intent: accept a Bhagavad Gita question in the browser interface",
          "Retrieve relevant verses from the local embeddings file using the SentenceTransformers flow",
          "Generate a response through the configured Groq model via the intended FastAPI service",
          "Use Supabase/PostgreSQL services for the documented auth and persistence design",
          "The static public page runs none of these live service steps",
        ],
        decisions: [
          "Describe FastAPI, Supabase/PostgreSQL, Groq, and SentenceTransformers as the README's intended stack, not verified live behavior",
          "Keep the static portfolio presentation distinct from the separate application described in the setup notes",
          "Do not claim auth, generated answers, retrieval, or persistence as working outcomes",
        ],
        technologies: ["FastAPI", "Supabase", "PostgreSQL", "Groq (Llama 3.1)", "SentenceTransformers", "HTML/CSS/JS"],
        failureModes: [
          "The README says end-to-end responses, persistence, and live API deployment are unverified",
          "The saved_verses table is referenced by the interface, but its schema/migration is missing from the repository",
          "The README says authentication and database reads/writes were not exercised; backend token/RLS identity handling needs review before relying on persistence",
        ],
        results: [
          "The README verifies frontend presentation captures only; generated answers, auth, database access, and end-to-end persistence are not verified",
          "The public page is static and does not provide live chat, authentication, verse retrieval, or database access",
        ],
        github: "https://github.com/ayushcodes13/Ask-Krishna",
      },
      {
        title: "AURA - Adaptive Understanding & Response Assistant",
        summary: "An experimental voice and camera assistant prototype; its hosted page is a static presentation, and no accessibility outcome evaluation is claimed.",
        image: auraCover,
        architectureImage: auraNotes,
        resultsImages: [auraIntentRouter, auraWakeword],
        problem: "The README describes an experimental local Python assistant exploring spoken questions with optional visual context. It is not a validated accessibility aid or a system for safety-critical reliance.",
        architecture: "The documented local flow uses Porcupine for wakeword detection, Deepgram for speech transcription, Groq for intent and response, optional OpenCV camera capture for visual context, and Edge TTS for spoken output. Audio, transcripts, and optional images may be sent to external providers. The hosted page is presentation-only.",
        architecturePipeline: [
          "Porcupine detects the configured wakeword in the local prototype",
          "Deepgram transcribes the spoken question",
          "Groq handles intent and response; a visual request can trigger optional local camera capture through OpenCV and send an image for Groq vision",
          "Edge TTS produces spoken output",
          "The hosted presentation does not run this device-backed flow",
        ],
        decisions: [
          "Keep visual context optional rather than continuously capturing images",
          "Describe the provider-backed voice and vision flow as an experiment, not a validated assistive outcome",
          "Treat the hosted page as informational and the existing video as previously recorded project media, not a fresh run",
        ],
        technologies: ["Python", "Porcupine", "Deepgram", "Groq", "OpenCV", "Edge TTS"],
        failureModes: [
          "Audio, transcripts, and optional images may be sent to external providers; their data handling should be reviewed before use",
          "The README says the prototype has not been evaluated with intended users or in an accessibility outcome evaluation and is not for safety-critical reliance",
          "The hosted page is a static presentation; the existing video is not a fresh run and the full device-backed flow was not re-run",
        ],
        results: [
          "The README documents an experimental local voice flow with optional visual context, but does not verify a fresh end-to-end run",
          "No intended-user or accessibility outcome evaluation is reported",
          "The deployed page is informational only and does not provide the local assistant",
        ],
        github: "https://github.com/ayushcodes13/AURA",
      },
      {
        title: "AURA 2.0",
        summary: "An experimental wellbeing conversation prototype with self-described check-ins, reviewed voice transcription, and browser-local OCR; it does not measure emotion or provide clinical care.",
        image: auraCover,
        problem: "AURA explores a supportive conversation interface with optional user-described context and ways to review speech transcripts or inspect image text locally.",
        architecture: "A Vite browser app supports text chat through a same-origin server proxy, optional self-described check-ins, reviewed voice transcription, and browser-local OCR. Chat and transcription need a server-side key; the hosted page is protected and is not an available public demo.",
        architecturePipeline: [
          "Optionally choose a self-described check-in or skip it",
          "Enter text for the conversation interface",
          "Optionally record speech and review its transcript before choosing to send it",
          "Run OCR in the browser and inspect extracted text locally",
          "Use browser speech synthesis to read assistant replies",
        ],
        decisions: [
          "Treat check-ins as user preferences, not emotion measurement",
          "Keep OCR in the browser and do not add its output to chat automatically",
          "Keep the provider key on the server rather than in browser code",
        ],
        technologies: ["Vite", "Node.js", "JavaScript", "Groq API", "Browser OCR"],
        failureModes: [
          "This is a wellbeing prototype, not a clinical or medical product and not a source of diagnosis or treatment advice",
          "Check-ins are self-reported and do not measure emotion",
          "The hosted deployment requires authorized access, and chat/transcription need a server-side key; no public demo is offered",
        ],
        results: [
          "The local prototype supports browser-local OCR and review-before-send transcription flows",
          "The README reports local build and offline test checks; screenshots contain synthetic content, not live model output",
        ],
        github: "https://github.com/ayushcodes13/AURA-2.0",
      },
      {
        title: "Ally",
        summary: "An experimental text conversation prototype centered on user choice and self-authored context.",
        image: "/ally-demo-chat.png",
        problem: "A conversation prototype should make optional user context explicit and avoid claiming it can reliably know how someone feels.",
        architecture: "The runnable Python browser app and CLI accept text and optional user-authored context. After consent, recent conversation text and the optional check-in go through a same-origin server handler to Groq. Experimental audio and vision modules are separate from the runnable experience.",
        architecturePipeline: [
          "Choose an optional self-described mood or skip it",
          "Review and accept the disclosure before sending text",
          "Send recent conversation text through the same-origin handler when configured",
          "Read the response in the current page or terminal process",
          "Keep conversation content in memory rather than persisting it to a database or local file",
        ],
        decisions: [
          "Keep the check-in user-provided context, not a prediction",
          "Keep experimental audio, vision, sentiment, and fusion modules out of the runnable web and CLI flows",
          "Do not persist the conversation locally",
        ],
        technologies: ["Python", "Standard Library", "Groq API", "HTML", "CSS", "JavaScript"],
        failureModes: [
          "This is an experiment, not therapy, diagnosis, medical advice, or crisis support",
          "The system cannot reliably know how someone feels",
          "Hosted chat is unavailable without a server-side key; README screenshots use synthetic content and no live model response",
        ],
        results: [
          "The local interface demonstrates consent, optional self-described context, and a text conversation flow",
          "The hosted page does not provide an enabled live chat service",
        ],
        github: "https://github.com/ayushcodes13/Ally",
      },
      {
        title: "SwasthaSamvad",
        summary: "A health-text research prototype with a browser-only evidence explorer and a separate local Python RAG experiment.",
        image: "/swasthasamvad-home.jpg",
        problem: "The project explores how to surface text passages and citations while making the limits of lexical matching and generated answers explicit.",
        architecture: "The published static browser explorer searches a chosen text file locally and surfaces sentences sharing words with a question. A separate local Python CLI retrieves reviewed text with BM25 and can optionally use Groq behind evidence gates; the hosted explorer does not generate answers or call an AI provider.",
        architecturePipeline: [
          "Choose a local text file or the clearly fictional sample in the browser explorer",
          "Search locally for sentences sharing words with the question",
          "Inspect the matching source passages and words",
          "Separately, the local CLI can retrieve reviewed documents with BM25",
          "In the CLI path, optional generated text is withheld unless its citations pass conservative checks",
        ],
        decisions: [
          "Keep the published explorer browser-only, with no upload or persistent storage",
          "Separate the static explorer from the local Python RAG experiment",
          "Prefer abstention or withholding when the local CLI's evidence checks do not pass",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Python", "BM25", "Groq API"],
        failureModes: [
          "This is not a medical service and must not be used for personal health decisions",
          "The explorer's word overlap is not factual support, clinical relevance, or accuracy; its sample content is fictional",
          "The published explorer is static and browser-only, so it provides no generated answers",
        ],
        results: [
          "The production explorer shows matching sentences and source passages from a fictional sample",
          "The hosted page searches selected text locally and does not upload it or send questions to a model",
        ],
        github: "https://github.com/ayushcodes13/SwasthaSamvad",
        demo: "https://swasthasamvad.devayushrout.me/",
      },
      {
        title: "Baymax",
        summary: "An experimental Llama 3.2 LoRA fine-tuning project with a local inference record; it is not a validated medical model.",
        image: "https://raw.githubusercontent.com/ayushcodes13/Baymax/main/screenshots/baymax-page-desktop-hero.png",
        problem: "The project documents an experimental fine-tuning workflow and keeps model artifacts, inference evidence, and limitations distinct from a deployed health service.",
        architecture: "A notebook describes 4-bit loading and LoRA fine-tuning for a Llama 3.2 1B base. A separate local inference smoke path records run evidence for a published full model. The Vercel showcase is a static project overview and does not host or run the model.",
        architecturePipeline: [
          "Load the configured base model and training inputs in a suitable local or hosted GPU runtime",
          "Apply the documented LoRA fine-tuning workflow",
          "Publish model artifacts separately from the static project page",
          "Run a separate local inference smoke check and record its evidence",
          "Review generated output independently; protocol verification does not validate its safety or quality",
        ],
        decisions: [
          "Keep local run manifests and verification evidence separate from model output claims",
          "Treat the inference smoke as a generation check, not a medical evaluation",
          "Keep the showcase informational rather than presenting it as a hosted model",
        ],
        technologies: ["Python", "Llama 3.2", "LoRA", "Transformers", "GGUF"],
        failureModes: [
          "The fine-tuning workflow is not fully reproducible and its data rights and schema mapping require review",
          "The model has not been independently or clinically evaluated and may produce inaccurate or unsafe health claims",
          "The showcase does not host the model; a recorded run verifier does not establish output correctness or safety",
        ],
        results: [
          "The repository documents a local inference smoke workflow and evidence verifier",
          "The README reports an unsupported health-monitoring claim in a recorded smoke output, underscoring that verification is not safety evaluation",
        ],
        github: "https://github.com/ayushcodes13/Baymax",
      },
    ],
  },
];
