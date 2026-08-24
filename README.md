<div align="center">
  <img src="public/favicon.png" alt="Devayush logo" width="88" />

  # Devayush Rout

  **Portfolio for governed AI systems, retrieval workflows, and applied ML projects.**

  [![Live Site](https://img.shields.io/badge/LIVE-devayushrout.me-16A34A?style=for-the-badge&logo=vercel&logoColor=white)](https://devayushrout.me)
  [![CANON](https://img.shields.io/badge/CANON-policy_governed_AI-111111?style=for-the-badge)](https://canon.devayushrout.me)
  [![CLARIS](https://img.shields.io/badge/CLARIS-clinical_AI_research-2563EB?style=for-the-badge)](https://claris.devayushrout.me)
  [![GitHub](https://img.shields.io/badge/GitHub-ayushcodes13-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayushcodes13)

  <br />
  <br />

  <a href="https://devayushrout.me">
    <img src="public/og-image.png" alt="Devayush portfolio preview" width="100%" />
  </a>
</div>

## Overview

This is my personal portfolio website. It presents my work around governed AI systems, evidence-grounded retrieval, clinical reasoning prototypes, workflow intelligence, and evaluation-aware AI infrastructure.

The site includes structured project case studies, a scoped AI assistant, live project links, and deployment-ready frontend/backend boundaries.

## Featured Work

| Project | Focus | Live |
| --- | --- | --- |
| CANON | Policy-governed AI with retrieval, verdicts, constraints, and cited answers | [canon.devayushrout.me](https://canon.devayushrout.me) |
| CLARIS | Provenance-aware clinical case investigation for HCC research | [claris.devayushrout.me](https://claris.devayushrout.me) |
| TenderMatch | Procurement intelligence and tender matching workflow | [GitHub](https://github.com/ayushcodes13/tendermatch) |
| MedWaste Guardian | Multimodal biomedical waste compliance assistant | [GitHub](https://github.com/ayushcodes13/MedWaste-Guardian) |

## Stack

| Layer | Tools |
| --- | --- |
| Frontend | React, TypeScript, Vite |
| UI | Tailwind CSS, Radix UI, Framer Motion |
| Assistant API | Express, Supabase Edge Function |
| AI | Groq |
| Deployment | Vercel |

## Run Locally

```bash
git clone https://github.com/ayushcodes13/devayush.git
cd devayush
npm install
echo "GROQ_API_KEY=your_key_here" > .env
npm run dev
```

Required for the assistant:

```bash
GROQ_API_KEY=
```

The frontend runs at `http://localhost:8080` and the local API server runs at `http://localhost:3000`.

## Project Structure

```text
src/
  core/              shared layout
  features/home/     portfolio sections
  features/ai-chat/  scoped portfolio assistant
  data/              project case-study data
api/                 local/serverless assistant API
supabase/functions/  edge assistant function
public/              static assets and metadata images
```

## Checks

```bash
npm run lint
npm test -- --run
npm run build
```

## Notes

- CANON and CLARIS are linked as live deployed projects.
- The assistant is scoped to my portfolio, projects, background, and collaboration context.
- Clinical project content is framed as research/prototype work, not medical advice.

<div align="center">
  <sub>Built by <a href="https://github.com/ayushcodes13">Devayush Rout</a>.</sub>
</div>
