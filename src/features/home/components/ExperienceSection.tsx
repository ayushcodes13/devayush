import { motion } from "framer-motion";

const experiences = [
  {
    company: "Bynd",
    role: "AI Engineer",
    period: "Jun 2026 — Present",
    location: "Gurugram, India · On-site",
    current: true,
    description:
      "Building validation and reliability systems for document-heavy AI workflows, with a focus on evidence tracing, source validation, retrieval quality, failure classification, and human review.",
    focus: ["Evidence verification", "LLM evaluation", "Human review"],
  },
  {
    company: "Independent / Upwork",
    role: "AI Engineering & Automation",
    period: "Aug 2026 — Present",
    location: "Remote",
    current: true,
    description:
      "Building practical AI workflows for businesses around document processing, internal operations, integrations, and human-reviewed automation.",
    focus: ["Document workflows", "Integrations", "Automation"],
  },
  {
    company: "Prettiflow",
    role: "AI Builder",
    period: "May 2026 — Jun 2026",
    location: "Remote",
    current: false,
    description:
      "Built Truss, an LLM evaluation project focused on failure modes including unsupported outputs, scope violations, prompt injection, and privacy risks.",
    focus: ["LLM evals", "Failure modes", "Risk testing"],
  },
  {
    company: "FlyRank AI",
    role: "AI Engineer Intern",
    period: "Jan 2026 — May 2026",
    location: "Remote",
    current: false,
    description:
      "Worked on RAG and agent workflows spanning retrieval quality, orchestration, backend/API integration, and practical reliability.",
    focus: ["RAG", "Agents", "Backend APIs"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-foreground mb-14 md:mb-16 max-w-4xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Building AI systems across reliability, retrieval, and workflows.
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[6px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((experience, i) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                className="relative pl-10"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span
                  className={`absolute left-0 top-2 w-[13px] h-[13px] rounded-full border-2 border-background ${
                    experience.current ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
                />

                <div className="grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)_280px] gap-4 md:gap-10 lg:gap-14 items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[16px] font-semibold text-foreground">
                        {experience.company}
                      </h3>
                      {experience.current && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary/80">
                          current
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground mt-2">
                      {experience.period}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground/60 mt-1.5">
                      {experience.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-foreground">
                      {experience.role}
                    </p>
                    <p className="text-[15px] text-muted-foreground leading-[1.75] mt-3 max-w-3xl">
                      {experience.description}
                    </p>
                  </div>

                  <div className="hidden lg:block pt-0.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50 mb-3">
                      Focus
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.focus.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] px-2.5 py-1.5 rounded-md border border-border bg-card/40 text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
