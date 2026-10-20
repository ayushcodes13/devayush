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
import tenderCover from "@/assets/tender-cover.png";
import tenderArch1 from "@/assets/tender-arch-1.png";
import tenderArch2 from "@/assets/tender-arch-2.png";
import tenderArch3 from "@/assets/tender-arch-3.png";
import atlasDashboard from "@/assets/project-captures/atlas-live-dashboard.png";

export interface Project {
  title: string;
  summary: string;
  image: string;
  gallery?: string[];
  problem: string;
  architecture: string;
  architectureImage?: string | string[];
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
        architectureImage: clarisWorkstation,
        resultsImages: [clarisImaging],
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
        image: "https://raw.githubusercontent.com/ayushcodes13/tender-compliance-engine/main/docs/screenshots/readme-review-evidence.jpg",
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
        image: "https://raw.githubusercontent.com/ayushcodes13/lintel/main/output/playwright/lintel-sample-report.png",
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
        image: "https://raw.githubusercontent.com/ayushcodes13/agentic-policy-reliability/main/output/playwright/policy-desktop-match-aside.png",
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
        image: "https://raw.githubusercontent.com/ayushcodes13/clara-agent-reliability/main/output/playwright/clara-review.png",
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
        problem: "Spiritual seekers and curious minds want accessible, contextual guidance from the Bhagavad Gita, but existing resources are either static translations or generic chatbots with no understanding of scripture. There's no product that combines authentic Gita wisdom with modern AI conversation, beautiful design, and real SaaS features.",
        architecture: "A full-stack application with FastAPI backend handling SSE streaming, Supabase for auth and PostgreSQL storage, Groq Cloud running Llama 3 for fast inference, and SentenceTransformers for semantic retrieval of relevant Gita verses. The frontend is pure vanilla HTML/CSS/JS for maximum performance.",
        architecturePipeline: [
          "User authenticates via Email/Password or Google OAuth (Supabase GoTrue)",
          "Query is embedded using all-MiniLM-L6-v2 for semantic search",
          "RAG retrieves relevant Bhagavad Gita verses from vector store",
          "Groq Cloud (Llama 3) generates contextual divine response via SSE streaming",
          "Chat sessions persisted to PostgreSQL with full history",
          "Usage tracking enforces freemium tier (5 answers/day for free users)",
          "Share cards generated via html2canvas for social sharing",
        ],
        decisions: [
          "Used Groq Cloud with Llama 3 for blazing-fast inference - divine responses shouldn't keep seekers waiting",
          "Local SentenceTransformers embeddings instead of API calls - reduces latency and cost for semantic verse retrieval",
          "Pure vanilla HTML/CSS/JS frontend - zero bloat, maximum performance, and full control over the Sacred Minimalism aesthetic",
          "Freemium tiering with usage tracking - demonstrates real SaaS architecture, not just a demo",
          "Supabase RLS policies on all tables - production-grade security from day one",
        ],
        technologies: ["FastAPI", "Supabase", "Groq Cloud", "Llama 3", "SentenceTransformers", "HTML/CSS/JS", "html2canvas"],
        failureModes: [
          "Initial RAG retrieval returned verses that were semantically similar but contextually wrong - improved chunking to include verse commentary alongside shloka text",
          "SSE streaming occasionally dropped connections on slower networks - added reconnection logic with message buffering",
          "Share card generation was slow on mobile - optimized html2canvas rendering with reduced DOM complexity",
        ],
        results: [
          "Full SaaS with auth, streaming, freemium tiers, and admin dashboard - built as a weekend project",
          "Sacred Minimalism design (Midnight + Warm Parchment + Marigold Gold) creates a unique, temple-like atmosphere",
          "Persistent chat history with journal-style sidebar for revisiting past dialogues",
          "Viral share cards optimized for Instagram, Twitter, and WhatsApp",
          "Feedback loop (thumbs up/down) enables continuous improvement of AI responses",
        ],
        github: "https://github.com/ayushcodes13/Ask-Krishna",
      },
      {
        title: "AURA - Adaptive Understanding & Response Assistant",
        summary: "An experimental voice and camera assistant prototype; its hosted page is a static presentation, and no accessibility outcome evaluation is claimed.",
        image: auraCover,
        architectureImage: auraNotes,
        resultsImages: [auraIntentRouter, auraWakeword],
        problem: "Many elderly and visually impaired individuals cannot describe what they see or read, making traditional voice assistants useless. They face daily challenges identifying medicines, reading labels, or understanding their surroundings - leading to dependence on caregivers and reduced independence. Voice alone is insufficient when the user cannot describe the problem.",
        architecture: "A session-based, real-time voice system where users activate AURA with a wakeword, speak naturally, and receive spoken responses. When voice is insufficient, AURA captures an image to understand context. The system determines whether visual input is needed, processes multimodal inputs, and responds via speech - all without requiring a screen.",
        architecturePipeline: [
          "Wakeword detection activates session (one-time per session)",
          "Real-time speech capture and transcription",
          "Intent analysis determines if visual context is required",
          "Camera captures image when vision is needed",
          "Multimodal AI processes speech + image together",
          "Response generated and delivered via natural speech output",
          "Session maintains conversational context for follow-ups",
        ],
        decisions: [
          "Voice-first, screen-free design - the target users cannot rely on visual interfaces",
          "Vision is used selectively, not constantly - protects user privacy and reduces processing overhead",
          "Session-based interaction eliminates repeated wakeword usage - feels natural and conversational",
          "Locked to a single core use case (understanding objects and text) - prevents feature creep while maximizing impact",
          "Designed for real-time processing - assistive tech must respond immediately, not after processing delays",
        ],
        technologies: ["Python", "Speech Recognition", "Computer Vision", "TTS", "Multimodal AI"],
        failureModes: [
          "Background noise in home environments degrades speech recognition - added noise filtering and confidence thresholds",
          "Camera captures can be blurry or poorly lit - implemented image quality checks before processing",
          "Elderly users sometimes pause mid-sentence - tuned silence detection to avoid premature cutoffs",
        ],
        results: [
          "The README describes a local voice workflow with optional visual context and spoken responses",
          "The hosted page is informational only and does not provide the device-backed assistant",
          "The README states that the prototype has not been evaluated with its intended users or in an accessibility evaluation",
        ],
        github: "https://github.com/ayushcodes13/AURA",
      },
      {
        title: "AURA 2.0",
        summary: "An experimental wellbeing conversation prototype with self-described check-ins, reviewed voice transcription, and browser-local OCR; it does not measure emotion or provide clinical care.",
        image: "https://raw.githubusercontent.com/ayushcodes13/AURA-2.0/main/output/playwright/aura-aside-home.jpg",
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
        image: "https://raw.githubusercontent.com/ayushcodes13/Ally/main/output/playwright/ally-aside-demo-chat.png",
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
        image: "https://raw.githubusercontent.com/ayushcodes13/SwasthaSamvad/main/screenshots/swasthasamvad-production-explorer.jpg",
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
