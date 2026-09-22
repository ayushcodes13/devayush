// api/_data/portfolio.js

export const portfolioKnowledge = {
    policysystem: `
PROJECT: CANON

TYPE:
Policy-governed AI and enterprise retrieval system.

SUMMARY:
CANON is a policy-governed intelligence system designed to answer internal policy and operational questions only after routing the query, retrieving the authoritative policy version, enforcing governance constraints, and grounding the response in cited evidence.

PROBLEM:
Employees repeatedly ask operational questions whose answers are buried across fragmented internal documents, SOPs, policy files, and internal repositories. A normal chatbot can answer fluently while still being wrong. CANON is built for decisions where the answer needs proof, source clauses, and an explicit safe/refuse/escalate verdict.

SYSTEM DESIGN:
- React 19 + Vite + TanStack frontend
- Python FastAPI policy intelligence backend
- Gemini embedding retrieval over approved policy documents
- Groq-powered constrained generation
- owner-scoped retrieval workflows
- deterministic governance verdicts
- source-grounded answer and refusal generation

ARCHITECTURE COMPONENTS:
- intent detection
- owner scoping
- Gemini embedding index
- version-aware policy retrieval
- governance gate with SAFE, REFUSE_POLICY, REFUSE_INVALID, and ESCALATE outcomes
- cited response contract with sources, supporting clauses, confidence, and grounding status

TECH STACK:
React 19, TypeScript, Vite, TanStack Router, TanStack Query, Tailwind CSS v4, Radix UI, Python FastAPI, Gemini embeddings, Groq inference, Vercel.

ENGINEERING FOCUS:
- governance-aware AI
- enterprise retrieval systems
- bounded generation
- operational AI workflows
- retrieval reliability
- traceable AI systems

KEY DESIGN PRINCIPLE:
The system prioritizes controlled and grounded behavior over unrestricted generation. It is designed to know when not to answer, when to refuse, and when to escalate.

CURRENT DIRECTION:
CANON is now deployed as a productionized portfolio MVP at https://canon.devayushrout.me with a Python AI runtime, Gemini embeddings, Groq generation, custom logo/favicon, updated README, and live Vercel deployment.
`,

    claris: `
PROJECT: CLARIS

TYPE:
Provenance-aware clinical case investigation and decision-support research prototype.

SUMMARY:
CLARIS is a clinical learning, analysis, reasoning, and intelligence system for longitudinal HCC case investigation. It combines structured patient state, imaging-derived measurements, controlled evidence retrieval, validation, and traceable synthesis into a clinician-review workflow.

PROBLEM:
Medical-adjacent AI systems cannot just produce polished answers. They need to show what data exists, what data is missing, what evidence supports each claim, and where human review is required. CLARIS is built around traceability and clinical boundaries instead of autonomous diagnosis.

SYSTEM DESIGN:
- Python-owned clinical reasoning backend
- generated checkpoint artifacts for frontend review
- React/TanStack clinical workstation
- imaging workspace with CT previews and selected SEG-derived measurements
- controlled evidence retrieval
- missing-data and review-flag tracking
- clinician-review report output

ARCHITECTURE COMPONENTS:
- PatientCase construction
- case investigation orchestrator
- clinical context investigation
- imaging investigation
- treatment response context
- evidence investigation
- validation and traceable synthesis

TECH STACK:
Python, React, TypeScript, TanStack Start, TanStack Router, TanStack Query, Vite, Tailwind CSS, Radix UI, Recharts, Vercel.

ENGINEERING FOCUS:
- clinical AI boundaries
- provenance-aware reasoning
- inspectable agent state
- evidence-grounded medical-adjacent workflows
- frontend/backend contract design

KEY DESIGN PRINCIPLE:
CLARIS is a research prototype for clinician review, not an autonomous diagnostic system, treatment recommender, clinically validated product, or regulated medical device.

CURRENT DIRECTION:
CLARIS is deployed at https://claris.devayushrout.me and documented at https://github.com/ayushcodes13/claris.
`,

    tendermatch: `
PROJECT: TenderMatch

TYPE:
Procurement intelligence and retrieval system.

SUMMARY:
TenderMatch is an AI-powered procurement intelligence pipeline designed to help manufacturers identify relevant government tenders without manually scanning fragmented procurement portals.

PROBLEM:
Procurement opportunities are scattered across CPPP, GeM, IIT portals, and institutional websites. Manual tender discovery is repetitive, slow, and easy to miss.

SYSTEM DESIGN:
- multi-source procurement scraping pipeline
- deduplication and freshness detection
- semantic manufacturer-to-tender matching
- retrieval-aware relevance scoring
- multi-stage filtering and ranking pipeline
- automated operational reporting workflows

ARCHITECTURE COMPONENTS:
- ingestion layer
- parsing + normalization
- semantic retrieval layer
- ranking pipeline
- workflow reporting layer

TECH STACK:
Python, FastAPI, PostgreSQL, pgvector, BeautifulSoup, OpenAI embeddings, Streamlit.

ENGINEERING FOCUS:
- retrieval systems
- operational workflows
- semantic matching
- decision-support systems
- workflow automation

KEY OUTCOME:
Reduced manual tender review workflows from hours to minutes through automated retrieval and ranking.
`,

    medwaste: `
PROJECT: MedWaste Guardian

TYPE:
Multimodal biomedical compliance system.

SUMMARY:
MedWaste Guardian is a multimodal AI system designed for biomedical waste classification, compliance retrieval, and operational disposal guidance inside healthcare workflows.

PROBLEM:
Biomedical waste handling is operationally sensitive. Misclassification and incorrect disposal create health, regulatory, and compliance risks. Existing systems are fragmented and heavily manual.

SYSTEM DESIGN:
- computer vision classification pipeline
- multimodal input handling
- retrieval-augmented compliance workflows
- legal regulation retrieval system
- workflow orchestration layer
- auditability and traceability design

ARCHITECTURE COMPONENTS:
- YOLOv8 waste classification
- retrieval pipeline for regulations
- STT/TTS multimodal interface
- compliance verification layer
- escalation-aware workflow routing

TECH STACK:
Python, YOLOv8, OpenCV, ChromaDB, Pinecone, GPT-4, Vosk STT, FastAPI.

ENGINEERING FOCUS:
- multimodal AI systems
- retrieval-aware compliance
- operational healthcare AI
- workflow orchestration
- governance-aware AI systems

CURRENT DIRECTION:
Currently evolving from research prototype into a more operationally mature healthcare workflow system with stronger observability, traceability, and infrastructure design.
`,

    hydran: `
PROJECT: HYDRAN — Hybrid Dual Residual Attention Network

TYPE:
Medical imaging and deep learning research system.

SUMMARY:
HYDRAN is a research-focused deep learning architecture developed for brain tumor classification and medical imaging analysis using hybrid residual attention mechanisms.

PROBLEM:
Medical imaging workflows often struggle with balancing classification accuracy, feature preservation, and explainability under complex imaging conditions.

SYSTEM DESIGN:
- hybrid residual architecture
- dual attention mechanisms
- deep feature extraction pipeline
- medical image preprocessing workflows
- classification optimization pipeline

ARCHITECTURE COMPONENTS:
- residual feature blocks
- spatial attention modules
- channel attention mechanisms
- classification head
- medical imaging preprocessing layer

TECH STACK:
Python, PyTorch, OpenCV, NumPy, medical imaging datasets.

ENGINEERING FOCUS:
- deep learning systems
- medical AI
- attention architectures
- explainable imaging workflows
- research-oriented model design

KEY OUTCOME:
Achieved strong classification performance across benchmark comparisons while improving feature sensitivity for medical image interpretation.
`,

    askkrishna: `
PROJECT: Ask Krishna

TYPE:
Philosophical retrieval and conversational AI system.

SUMMARY:
Ask Krishna is a conversational AI application grounded in the Bhagavad Gita designed to provide context-aware philosophical guidance through retrieval-driven interactions.

SYSTEM DESIGN:
- retrieval-augmented conversational pipeline
- semantic scripture retrieval
- context-aware response generation
- streaming conversational interface

ARCHITECTURE COMPONENTS:
- scripture chunking pipeline
- embedding retrieval system
- semantic search workflows
- conversational response layer
- streaming frontend interface

TECH STACK:
Next.js, OpenAI, vector embeddings, streaming APIs, TailwindCSS.

ENGINEERING FOCUS:
- retrieval systems
- conversational interfaces
- semantic search
- grounded response generation
- streaming AI UX
`,

    aura: `
PROJECT: AURA — Adaptive Understanding & Response Assistant

TYPE:
Voice-first multimodal assistive AI system.

SUMMARY:
AURA is a multimodal assistive AI system designed for elderly and visually impaired users using speech and visual understanding workflows.

PROBLEM:
Many digital systems assume strong visual interaction capabilities, creating accessibility barriers for elderly and visually impaired users.

SYSTEM DESIGN:
- voice-first interaction pipeline
- multimodal perception workflows
- environmental understanding
- conversational assistance layer

ARCHITECTURE COMPONENTS:
- speech recognition pipeline
- visual understanding workflows
- multimodal reasoning layer
- conversational response engine
- accessibility-oriented interaction design

TECH STACK:
Python, speech processing frameworks, computer vision models, multimodal AI tooling.

ENGINEERING FOCUS:
- assistive AI
- multimodal systems
- accessibility workflows
- speech interfaces
- human-centered AI systems
`,

    portfolio: `
PROJECT: Portfolio Website

TYPE:
Applied AI engineering portfolio with a scoped retrieval-backed assistant.

SUMMARY:
Personal portfolio focused on reliable applied AI: retrieval, evaluation, evidence-aware systems, document workflows, and practical automation.

FEATURES:
- retrieval-backed portfolio assistant
- scoped AI interaction system
- semantic query classification
- refusal behavior for out-of-scope questions
- project case studies with architecture, tradeoffs, and limitations

TECH STACK:
React, Vite, TailwindCSS, Framer Motion, Vercel, Groq API.

ENGINEERING FOCUS:
- reliable AI systems
- evidence and evaluation
- retrieval-aware interaction
- document and workflow systems
- practical AI engineering
`,

    background: `
PROFILE: Devayush Rout

ROLE:
Applied AI Engineer at Bynd focused on making AI systems trustworthy enough to actually use.

BACKGROUND:
BTech in Artificial Intelligence and Machine Learning based in India.

ENGINEERING PHILOSOPHY:
- evidence before confidence
- measure failures instead of relying on vibes
- use deterministic checks where they are more reliable than an LLM
- route ambiguous cases to humans instead of forcing confident answers
- build systems that behave predictably under real-world constraints

CORE INTERESTS:
- LLM evaluation and reliability
- retrieval and RAG systems
- evidence verification
- document intelligence
- human-in-the-loop workflows
- practical AI automation

PRIMARY STACK:
Python, FastAPI, PostgreSQL, pgvector, LangGraph, LlamaIndex, Docker, OpenAI, Anthropic, AWS.

WORK STYLE:
Builds end-to-end AI systems with emphasis on evidence, failure handling, traceability, and practical deployment.
`,

    collaborations: `
WORK & COLLABORATIONS

CURRENT STATUS:
Open to select scoped AI engineering projects and collaborations around:
- retrieval and RAG systems
- LLM evaluation and reliability
- document intelligence
- workflow automation
- backend and integration work for AI features

PREFERRED WORK:
Projects where AI has to interact with real documents, data, tools, or business workflows — especially when evidence, failure handling, or human review matters.

WORKING STYLE:
Start with a specific problem and a bounded first deliverable. Prefer measurable outcomes and honest system limitations over broad AI transformation claims.
`
};
