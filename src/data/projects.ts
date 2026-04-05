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
import tenderCover from "@/assets/tender-cover.png";
import tenderArch1 from "@/assets/tender-arch-1.png";
import tenderArch2 from "@/assets/tender-arch-2.png";
import tenderArch3 from "@/assets/tender-arch-3.png";

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
    label: "Flagship Projects",
    tagline: "Production-grade LLM application systems",
    icon: "",
    projects: [
      {
        title: "Internal Policy Intelligence System",
        summary: "A deterministic, governance-gated RAG architecture for enterprise operations — designed to prioritize correctness, traceability, and architectural clarity over raw generative capability.",
        image: policyCover,
        architectureImage: policyArchitecture,
        problem: "In corporate environments, LLMs cannot be allowed to guess. If an employee asks about a refund policy or a security protocol, giving a 'creative' but incorrect answer is a liability. Typical conversational AI chatbots prioritize fluency over correctness — this system enforces zero-trust generation where the LLM is only allowed to respond after deterministic risk gates confirm the query is safe and the retrieved context is the latest, owner-approved version.",
        architecture: "A heavily controlled RAG engine with strict separation of concerns across 7 pipeline stages. No layer mixes responsibilities. The system enforces governance so it knows exactly when to answer, when to refuse, and when to escalate — and importantly, why.",
        architecturePipeline: [
          "Intent Detection — What is the user asking?",
          "Routing (Owner Scoping) — Which departments are allowed to answer?",
          "Retrieval (FAISS) — Version dominance (v2 > v1) & owner filtering",
          "Constraint Filtering & Governance — Risk gate: safe / refuse / escalate?",
          "Verdict Handler — Execute decision based on the gate",
          "Strict JSON Generation — Formulate objective answer",
          "Lexical Grounding Check — Verify every generated clause against source text",
        ],
        decisions: [
          "Version-aware retrieval: Older document versions are automatically suppressed in favor of the most recent policy version using deterministic dominance rules during ranking",
          "Owner-based scoping: Documents are rigidly filtered based on routed intent ownership, preventing cross-domain contamination (e.g., Support agents accessing Finance internal memos)",
          "Deterministic governance gating with strict verdicts: SAFE, REFUSE_POLICY, REFUSE_INVALID, ESCALATE (limited strictly to security, legal, or compromise cases)",
          "Evidence-backed refusals: Policy denials must cite exact clauses from retrieved documents. Generated answers undergo sentence-level lexical grounding checks — unsupported sentences are flagged, preventing silent hallucination drift",
        ],
        technologies: ["Python 3.10+", "Groq (llama-3.3-70b)", "FAISS (CPU)", "Sentence-Transformers", "Streamlit"],
        failureModes: [
          "Governance is semantic-only and operates at the query level — no per-token control",
          "Multi-intent queries may bias dense retrieval toward dominant semantic clusters",
          "Hybrid retrieval (BM25 + vector) is implemented but not enabled by default",
          "Grounding is lexical, not semantic — subtle paraphrases may pass unchecked",
          "No production hardening for the core pipeline (async execution, distributed databases)",
        ],
        resultsImages: [policyDemo],
        results: [
          "Recall@5 of 0.8889 and MRR of 0.5259 on 18 evaluation queries",
          "Verdict accuracy of 85% across 20 governance test cases",
          "Interactive Streamlit dashboard with real-time metrics (confidence, verdicts, execution latency)",
          "Document explorer for direct comparison against raw markdown policies",
          "Explicitly documented limitations to maintain architectural transparency",
        ],
        metrics: [
          { label: "Recall@5", value: "0.889" },
          { label: "MRR", value: "0.526" },
          { label: "Verdict Accuracy", value: "85%" },
        ],
        github: "https://github.com/ayushcodes13/Internal-Policy-Intelligence-System",
        demo: "https://github.com/ayushcodes13/Internal-Policy-Intelligence-System",
      },
      {
        title: "Tender Intelligence System",
        summary: "An AI-powered decision intelligence workflow built to automate government tender discovery, relevance scoring, and shortlisting — reducing manual daily research from 2 hours to 10 minutes.",
        image: tenderCover,
        architectureImage: [tenderArch1, tenderArch2, tenderArch3],
        problem: "A business team was spending nearly 2 hours every day manually scanning multiple government tender portals to identify relevant opportunities. The workflow was repetitive, high-friction, and error-prone. The core problem was decision speed and filtering relevance at scale. The system needed to answer one question reliably: Which tenders deserve immediate review today?",
        architecture: "A multi-stage tender intelligence pipeline designed to convert raw portal listings into a decision-ready shortlist. The system separates ingestion, filtering, ranking, and summarization into deterministic workflow stages.",
        architecturePipeline: [
          "01 Data Ingestion — Automated retrieval of tender listings from multiple portals",
          "02 Parsing & Structuring — Extracting eligibility, deadlines, and intent into structured records",
          "03 Relevance Scoring — LLM-assisted semantic matching against business-specific criteria",
          "04 Priority Ranking — Weighted ranking based on urgency, fit score, and contract value",
          "05 Shortlist Generation — Conversion of top-ranked tenders into a daily review list",
          "06 Workflow Dashboard — Operator-facing interface for validation and fast action",
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
    ],
  },
  {
    id: "ai-automation",
    label: "AI Automations",
    tagline: "Intelligent workflows that replace manual processes",
    icon: "",
    projects: [
      {
        title: "Siri + n8n Personal Assistant",
        summary: "Turned Siri from a basic voice assistant into a domain-specific AI agent that handles emails, calendar, and web research.",
        image: siriCover,
        architectureImage: siriArchitecture,
        problem: "Siri can set alarms and reminders, but it doesn't act like a true personal assistant. It can't summarize your inbox, draft contextual replies, provide a smart daily agenda, or run AI-powered web research. The gap between 'voice command' and 'useful action' is massive.",
        architecture: "A voice-triggered automation system where Siri Shortcuts fire n8n webhooks, which orchestrate multi-step workflows across email, calendar, and web search APIs, with AI processing results into actionable outputs sent back to the user.",
        architecturePipeline: [
          "Siri Shortcut triggers webhook",
          "n8n receives and routes request",
          "API calls to Gmail/Outlook, Google Calendar",
          "Web search via custom API integration",
          "AI (LLM) processes and summarizes results",
          "Actionable output returned to user",
        ],
        decisions: [
          "Used n8n as the orchestration layer instead of building custom — visual workflow builder makes iteration fast and non-destructive",
          "Kept Siri as the trigger interface — leveraging existing voice UX instead of building a new one",
          "Designed modular workflows (email, calendar, research) that can be composed together for complex requests",
        ],
        technologies: ["Siri Shortcuts", "n8n", "OpenAI API", "Gmail API", "Google Calendar API", "REST APIs"],
        failureModes: [
          "Siri sometimes misinterprets voice commands — added confirmation step before executing destructive actions like sending emails",
          "Long email threads exceed token limits — implemented smart truncation that preserves the most recent and relevant messages",
          "Webhook latency makes Siri timeout on complex workflows — added async processing with push notification for results",
        ],
        results: [
          "Email workflow: Summarizes inbox, drafts replies, and nudges important messages — all triggered by voice",
          "Calendar workflow: Provides smart daily agenda with conflict detection and scheduling suggestions",
          "Web research: Returns concise AI-powered summaries instead of raw search results",
          "Turned Siri from a passive listener into an active assistant that actually does things",
        ],
        github: "https://github.com/ayushcodes13/siri-n8n-assistant",
        demo: "https://www.youtube.com/watch?v=TNvFyeE1ILY",
      },
      {
        title: "AI Client Acquisition System",
        summary: "End-to-end AI sales engine that finds leads, sends personalized outreach, makes cold calls, and closes clients on autopilot.",
        image: clientCover,
        architectureImage: clientArchitecture,
        problem: "Freelancers and small agencies spend 60%+ of their time on manual outreach — finding leads, writing cold emails, following up, making calls. It's repetitive, time-consuming, and doesn't scale. The entire client acquisition pipeline needs to run as a self-operating engine.",
        architecture: "A two-version system: v1 automates the full text-based sales pipeline (lead gen → outreach → proposals → invoicing). v2 adds AI voice calling with ElevenLabs and Vapi, enabling the system to cold-call prospects, qualify them in real-time, and route hot leads to the CRM.",
        architecturePipeline: [
          "AI-powered lead generation and qualification",
          "Personalized outreach drafting via OpenAI",
          "Automated follow-up sequences",
          "AI cold calling with ElevenLabs + Vapi voice",
          "Real-time call qualification with branching logic",
          "CRM sync, proposal generation, and invoicing",
        ],
        decisions: [
          "Built in two versions — v1 proved the text pipeline worked before investing in voice automation for v2",
          "Used ElevenLabs for natural-sounding voice instead of robotic TTS — first impressions on cold calls are everything",
          "Designed adaptive call scripts with branching logic that responds to live prospect reactions, not just static scripts",
          "Integrated Twilio for call routing so hot leads get immediately flagged and synced to CRM",
        ],
        technologies: ["OpenAI", "ElevenLabs", "Vapi", "n8n", "Twilio", "Google Cloud", "REST APIs"],
        failureModes: [
          "Generic outreach gets ignored — added deep personalization using scraped LinkedIn/website data about each prospect",
          "AI voice calls sound uncanny if pauses are wrong — fine-tuned timing and added filler words for natural cadence",
          "Follow-up sequences annoyed prospects when too aggressive — implemented sentiment detection to adjust frequency",
          "CRM sync had race conditions with rapid call handling — added queue-based processing with deduplication",
        ],
        results: [
          "v1: 4x faster client response rate compared to manual outreach",
          "v2: AI cold calls qualify prospects in real-time and route hot leads directly to pipeline",
          "Automated the entire sales workflow from lead discovery to invoice generation",
          "System operates as a self-running engine — predictable, scalable, fully automated client acquisition",
        ],
        demo: "https://www.youtube.com/watch?v=9uEhwPiAWko",
      },
      {
        title: "AI Cold Calling System",
        summary: "Fully automated cold calling upgrade — AI calls leads, delivers your pitch with a human-like voice, handles responses, and updates CRM in real-time.",
        image: coldCallingCover,
        problem: "The Client Acquisition System proved that automated text outreach works, but cold emails have declining response rates. The next frontier: what if the system could actually call prospects, deliver a natural-sounding pitch, handle objections in real-time, and route qualified leads — all without a human picking up the phone?",
        architecture: "An extension of the Client Acquisition System that adds a fully automated voice calling layer. The system dials leads, delivers AI-generated pitches using human-like voice synthesis, handles live responses with branching conversation logic, manages follow-ups, and syncs everything to CRM in real-time.",
        architecturePipeline: [
          "Lead queue from acquisition system",
          "Twilio initiates outbound call",
          "ElevenLabs generates human-like voice in real-time",
          "Vapi handles speech-to-text and conversation flow",
          "Branching logic adapts to prospect responses",
          "CRM updated in real-time with call outcomes",
        ],
        decisions: [
          "Built as an upgrade to the existing system rather than standalone — leverages the same lead pipeline and CRM infrastructure",
          "Used ElevenLabs over standard TTS for voice quality — the difference between a prospect hanging up and engaging is in the voice",
          "Implemented branching conversation logic instead of linear scripts — the AI adapts its pitch based on what the prospect says",
          "Real-time CRM updates during calls so sales team can see hot leads the moment they're qualified",
        ],
        technologies: ["OpenAI", "ElevenLabs", "Vapi", "Twilio", "n8n", "Google Cloud", "REST APIs"],
        failureModes: [
          "Prospects detect AI voice and hang up — improved with more natural pacing, breathing sounds, and varied intonation",
          "Branching logic gets stuck on unexpected responses — added fallback paths and graceful conversation exits",
          "Call timing matters — calling at wrong hours tanks pickup rates; added timezone-aware scheduling",
          "Regulatory compliance (Do Not Call lists) — integrated DNC database checking before dialing",
        ],
        results: [
          "AI calls deliver pitches indistinguishable from junior sales reps in blind tests",
          "Handles responses and follow-ups autonomously — no human touches the phone",
          "Real-time CRM sync means qualified leads are acted on within minutes, not hours",
          "Scales cold calling from 20 manual calls/day to 200+ automated calls/day",
        ],
        demo: "https://www.youtube.com/watch?v=FVIyn2aYblg",
      },
    ],
  },
  {
    id: "weekend-experiments",
    label: "Weekend Experiments",
    tagline: "Small projects I build quickly to test ideas, explore tools, or prototype AI workflows.",
    icon: "",
    projects: [
      {
        title: "Ask Krishna",
        summary: "Seek divine guidance through the wisdom of the Bhagavad Gita — a full-stack SaaS with authentication, streaming AI, and a Sacred Minimalism aesthetic.",
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
          "Used Groq Cloud with Llama 3 for blazing-fast inference — divine responses shouldn't keep seekers waiting",
          "Local SentenceTransformers embeddings instead of API calls — reduces latency and cost for semantic verse retrieval",
          "Pure vanilla HTML/CSS/JS frontend — zero bloat, maximum performance, and full control over the Sacred Minimalism aesthetic",
          "Freemium tiering with usage tracking — demonstrates real SaaS architecture, not just a demo",
          "Supabase RLS policies on all tables — production-grade security from day one",
        ],
        technologies: ["FastAPI", "Supabase", "Groq Cloud", "Llama 3", "SentenceTransformers", "HTML/CSS/JS", "html2canvas"],
        failureModes: [
          "Initial RAG retrieval returned verses that were semantically similar but contextually wrong — improved chunking to include verse commentary alongside shloka text",
          "SSE streaming occasionally dropped connections on slower networks — added reconnection logic with message buffering",
          "Share card generation was slow on mobile — optimized html2canvas rendering with reduced DOM complexity",
        ],
        results: [
          "Full SaaS with auth, streaming, freemium tiers, and admin dashboard — built as a weekend project",
          "Sacred Minimalism design (Midnight + Warm Parchment + Marigold Gold) creates a unique, temple-like atmosphere",
          "Persistent chat history with journal-style sidebar for revisiting past dialogues",
          "Viral share cards optimized for Instagram, Twitter, and WhatsApp",
          "Feedback loop (thumbs up/down) enables continuous improvement of AI responses",
        ],
        github: "https://github.com/ayushcodes13/Ask-Krishna",
      },
      {
        title: "AURA — Adaptive Understanding & Response Assistant",
        summary: "A voice-first assistive AI system that helps elderly and visually impaired users understand their surroundings using natural speech and vision.",
        image: auraCover,
        architectureImage: auraNotes,
        resultsImages: [auraIntentRouter, auraWakeword],
        problem: "Many elderly and visually impaired individuals cannot describe what they see or read, making traditional voice assistants useless. They face daily challenges identifying medicines, reading labels, or understanding their surroundings — leading to dependence on caregivers and reduced independence. Voice alone is insufficient when the user cannot describe the problem.",
        architecture: "A session-based, real-time voice system where users activate AURA with a wakeword, speak naturally, and receive spoken responses. When voice is insufficient, AURA captures an image to understand context. The system determines whether visual input is needed, processes multimodal inputs, and responds via speech — all without requiring a screen.",
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
          "Voice-first, screen-free design — the target users cannot rely on visual interfaces",
          "Vision is used selectively, not constantly — protects user privacy and reduces processing overhead",
          "Session-based interaction eliminates repeated wakeword usage — feels natural and conversational",
          "Locked to a single core use case (understanding objects and text) — prevents feature creep while maximizing impact",
          "Designed for real-time processing — assistive tech must respond immediately, not after processing delays",
        ],
        technologies: ["Python", "Speech Recognition", "Computer Vision", "TTS", "Multimodal AI"],
        failureModes: [
          "Background noise in home environments degrades speech recognition — added noise filtering and confidence thresholds",
          "Camera captures can be blurry or poorly lit — implemented image quality checks before processing",
          "Elderly users sometimes pause mid-sentence — tuned silence detection to avoid premature cutoffs",
        ],
        results: [
          "Functional voice interaction with real-time speech recognition — ~40% of planned scope completed",
          "Vision-assisted responses successfully identify medicines, labels, and household objects",
          "Screen-free operation makes it accessible to visually impaired and low-literacy users",
          "Session-based design supports natural conversational corrections and follow-ups",
          "Designed with real-world constraints for a college project exhibition focused on societal impact",
        ],
      },
    ],
  },
  {
    id: "legacy",
    label: "Legacy Projects",
    tagline: "Earlier machine learning and deep learning research-based projects",
    icon: "",
    projects: [
      {
        title: "HYDRAN: Hybrid Dual Residual Attention Network",
        summary: "State-of-the-art brain tumor detection and segmentation model outperforming all benchmark architectures.",
        image: hydranCover,
        problem: "Cancer is one of the leading causes of fatalities worldwide. Traditional diagnostic methods rely on human interpretation of medical images, which is prone to inconsistencies and is time-consuming. Early and accurate detection can significantly improve treatment outcomes and survival rates — but requires superhuman consistency at pixel-level precision.",
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
          "Designed a custom hybrid architecture instead of using off-the-shelf U-Net — dual residual paths preserve fine-grained spatial details critical for tumor boundaries",
          "Attention mechanisms focus computation on diagnostically relevant regions rather than processing the entire image uniformly",
          "Prioritized explainability alongside accuracy — Grad-CAM visualizations help clinicians trust and verify predictions",
        ],
        technologies: ["Python", "PyTorch", "OpenCV", "scikit-learn", "NumPy", "matplotlib"],
        failureModes: [
          "Small tumors at image boundaries were initially missed — added padding-aware augmentation to improve edge detection",
          "Class imbalance between tumor and non-tumor pixels caused bias — addressed with focal loss and balanced sampling",
          "High-resolution images caused memory issues — implemented patch-based training with overlap stitching for inference",
        ],
        results: [
          "Pixel Accuracy: 99.80% — outperforming all benchmark models",
          "Dice Score: 89.97% — strong agreement between predicted and actual segmentation",
          "Precision: 92.93% with very low false positive rate",
          "Recall: 91.50% — successfully identifies nearly all true tumor cases",
          "IoU: 81.93% — effective localization and segmentation",
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
        title: "XGBoost Stock Trading Pipeline",
        summary: "Quantitative trading pipeline comparing ML predictions with rule-based technical analysis on Indian stocks.",
        image: xgboostCover,
        architectureImage: xgboostArchitecture,
        resultsImages: [xgboostResults],
        problem: "Can machine learning improve upon simple technical analysis rules for predicting next-day stock price direction? This project honestly investigates this question across three major Indian stocks — Reliance Industries, HDFC Bank, and Infosys — with proper backtesting, transaction costs, and no look-ahead bias.",
        architecture: "A full quantitative pipeline from raw OHLCV data through feature engineering to dual prediction strategies (XGBoost + rule-based), with consensus analysis where both methods agree and backtesting with realistic transaction costs.",
        architecturePipeline: [
          "Historical OHLCV data via yfinance (5-year window)",
          "Technical indicator computation (RSI, MACD, SMA, EMA, Volatility)",
          "Feature engineering with target encoding",
          "XGBoost with TimeSeriesSplit cross-validation",
          "Rule-based signal generation (RSI < 35, SMA crossover)",
          "Agreement analysis and backtesting with 0.1% transaction costs",
        ],
        decisions: [
          "Used TimeSeriesSplit for CV instead of random splits — prevents data leakage from future data into training",
          "Combined ML predictions with rule-based signals via agreement analysis — consensus trades filter noise",
          "Included transaction costs (0.1%) in backtesting — many 'profitable' strategies disappear when costs are realistic",
        ],
        technologies: ["Python", "XGBoost", "scikit-learn", "yfinance", "pandas", "Plotly"],
        failureModes: [
          "XGBoost overfits to training patterns that don't generalize — TimeSeriesSplit and precision-optimized hyperparameters mitigate this",
          "Rule-based signals are too sparse for meaningful backtesting — most days produce no signal",
          "Agreement trades are rare — consensus between ML and rules happens infrequently, limiting sample size for evaluation",
        ],
        results: [
          "INFY accuracy: 48.36% — near random, best F1: 60.38%",
          "RELIANCE accuracy: 50.82% — marginal edge with 40% rule-based win ratio",
          "HDFC accuracy: 45.90% — below random, 0% rule-based win ratio",
          "Both ML and simple logic are very noisy for next-day direction prediction",
          "Transaction costs eliminate most apparent edges — an honest finding",
          "The notebook provides a full, reproducible pipeline for trading ML research",
        ],
        metrics: [
          { label: "INFY Accuracy", value: "48.36%" },
          { label: "RELIANCE Accuracy", value: "50.82%" },
          { label: "HDFC Accuracy", value: "45.90%" },
          { label: "Best F1-Score", value: "60.38%" },
        ],
        github: "https://github.com/ayushcodes13",
      },
      {
        title: "30-Day ML Challenge",
        summary: "15+ ML projects in 30 days — from regression to clustering to from-scratch algorithm implementations.",
        image: mlChallengeCover,
        gallery: [mlChallengeRegression, mlChallengeEnsemble, mlChallengeClustering, mlChallengeScratch],
        problem: "After completing the Machine Learning Specialization, there was a gap between understanding concepts and building intuition for debugging real ML systems. The only way to close that gap: build aggressively — 15+ projects across every major ML paradigm, many implemented from scratch.",
        architecture: "A structured 30-day challenge organized into focused modules: regression and SVMs, clustering and anomaly detection, ensemble methods, EDA, and from-scratch implementations. Each module uses real Kaggle datasets with full Jupyter notebook documentation.",
        architecturePipeline: [
          "Regression & SVM models on real datasets",
          "Clustering & anomaly detection (K-Means, DBSCAN, Isolation Forest)",
          "Ensemble learning (Random Forest, Gradient Boosting, Stacking)",
          "Exploratory Data Analysis projects",
          "From-scratch implementations of core algorithms",
          "Comparative analysis: scratch vs scikit-learn",
        ],
        decisions: [
          "Implemented algorithms from scratch alongside scikit-learn — understanding gradient descent, kernel tricks, and convergence builds debugging intuition",
          "Used real Kaggle datasets instead of toy data — forces handling of messy data, missing values, and class imbalance",
          "Organized by topic rather than chronologically — makes the repo useful as a reference, not just a log",
        ],
        technologies: ["Python", "scikit-learn", "NumPy", "pandas", "matplotlib", "Jupyter"],
        failureModes: [
          "Scratch implementations initially had numerical stability issues — learned to add epsilon values and use log-sum-exp tricks",
          "Some Kaggle datasets had undocumented quality issues — forced learning of robust EDA practices",
          "From-scratch SVM was 100x slower than scikit-learn — highlighted the importance of optimized linear algebra backends",
        ],
        results: [
          "15+ complete ML projects across 5 major paradigms in 30 days",
          "From-scratch implementations matched scikit-learn accuracy on all test cases",
          "Built lasting intuition for debugging ML systems — understanding the math makes you a better engineer",
          "The dual approach (scratch + library) transfers directly to production ML debugging",
        ],
        github: "https://github.com/ayushcodes13/Machine-Learning-Practice",
      },
      {
        title: "MedWaste Guardian",
        summary: "A multi-modal AI system for biomedical waste compliance — classifies waste via image, voice, and text, checks legal regulations, and guides proper disposal.",
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
          "Used YOLOv8 for waste classification — fast inference and high accuracy on custom-trained biomedical waste categories",
          "RAG over fine-tuning for legal compliance — regulations change frequently, retrieval ensures up-to-date guidance without retraining",
          "Multi-agent architecture with CrewAI — each modality handled by a specialist agent, coordinated for unified response",
          "Included TTS output — hands-free operation is critical in clinical environments where staff wear gloves",
        ],
        technologies: ["YOLOv8", "OpenCV", "GPT-4-Turbo", "RAG", "ChromaDB", "Pinecone", "Vosk STT", "Google TTS", "CrewAI", "Python"],
        failureModes: [
          "YOLOv8 confusion between similar waste types (e.g., cotton vs gauze) — mitigated with augmented training data and confidence thresholds",
          "RAG retrieval can surface outdated regulations if vector store isn't updated — built automated ingestion pipeline for regulatory updates",
          "Voice input in noisy hospital environments degrades STT accuracy — added noise filtering and confirmation step before execution",
        ],
        results: [
          "Unified multi-modal input system supporting image, voice, and text for real-time waste analysis",
          "Automated legal compliance checking against country-specific biomedical waste regulations",
          "Reduced manual compliance verification time from hours to seconds",
          "Hands-free voice interaction enables use in sterile clinical environments",
          "Modular multi-agent architecture allows easy addition of new modalities and regulatory frameworks",
        ],
        github: "https://github.com/ayushcodes13/MedWaste-Guardian",
      },
    ],
  },
];
