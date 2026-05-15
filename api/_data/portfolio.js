// api/_data/portfolio.js

export const portfolioKnowledge = {
    policysystem: `
PROJECT: Internal Policy Intelligence System

TYPE:
Governance-aware enterprise retrieval system.

SUMMARY:
Internal Policy Intelligence System is a retrieval-driven enterprise knowledge platform designed to answer internal policy and operational questions with controlled, traceable, and governance-aware responses.

PROBLEM:
Employees repeatedly ask operational and HR-related questions whose answers are buried across fragmented internal documents, policy PDFs, and internal knowledge repositories. Traditional search systems are slow, inconsistent, and difficult to trust.

SYSTEM DESIGN:
- retrieval-augmented generation pipeline
- scoped enterprise search
- governance-aware response routing
- access-controlled retrieval workflows
- refusal-aware response generation
- source-grounded answer generation

ARCHITECTURE COMPONENTS:
- document ingestion pipeline
- chunking + embedding workflows
- semantic + keyword retrieval
- response grounding layer
- policy-aware refusal logic
- traceability and citation system

TECH STACK:
Python, FastAPI, LangChain, PostgreSQL, pgvector, OpenAI embeddings, hybrid retrieval pipelines.

ENGINEERING FOCUS:
- governance-aware AI
- enterprise retrieval systems
- bounded generation
- operational AI workflows
- retrieval reliability
- traceable AI systems

KEY DESIGN PRINCIPLE:
The system prioritizes controlled and grounded behavior over unrestricted generation. It is designed to know when not to answer.

CURRENT DIRECTION:
Evolving toward a more operational enterprise intelligence layer with stronger observability, evaluation pipelines, and access-aware retrieval infrastructure.
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
Operational AI portfolio and retrieval-aware interface.

SUMMARY:
Personal portfolio platform designed to showcase retrieval systems, workflow intelligence projects, evaluation-aware AI infrastructure, and operational engineering work.

FEATURES:
- retrieval-aware portfolio assistant
- scoped AI interaction system
- semantic query classification
- governance-aware refusal logic
- operational AI positioning

TECH STACK:
React, Vite, TailwindCSS, Framer Motion, Vercel, Groq API.

ENGINEERING FOCUS:
- scoped AI systems
- retrieval-aware interaction
- portfolio intelligence workflows
- operational UI systems
- AI interface governance
`,

    background: `
PROFILE: Devayush Rout

ROLE:
Applied AI Engineer focused on retrieval systems, workflow intelligence, and operational AI infrastructure.

BACKGROUND:
BTech in Artificial Intelligence and Machine Learning based in India.

ENGINEERING PHILOSOPHY:
- reliability over flashiness
- retrieval before generation
- observability matters
- evaluation-aware development
- systems should behave predictably under real-world constraints

CORE INTERESTS:
- retrieval systems
- workflow intelligence
- evaluation pipelines
- governance-aware AI
- multimodal AI systems
- operational ML systems

PRIMARY STACK:
Python, FastAPI, PostgreSQL, pgvector, LangGraph, LlamaIndex, Docker, OpenAI, Anthropic, AWS.

WORK STYLE:
Builds end-to-end systems with emphasis on operational reliability, traceability, and deployment realism.
`,

    collaborations: `
OPEN TO WORK & COLLABORATIONS

CURRENT STATUS:
Active — Open to:
- applied AI engineering roles
- product-focused AI systems
- startup collaborations
- operational AI infrastructure projects
- retrieval and workflow intelligence systems

INTEREST AREAS:
- retrieval systems
- workflow intelligence
- multimodal systems
- evaluation infrastructure
- operational AI products

PREFERRED WORK:
Projects involving:
- real-world workflows
- infrastructure-aware AI
- governance-sensitive systems
- operational reliability
- deployment-oriented AI engineering
`
};