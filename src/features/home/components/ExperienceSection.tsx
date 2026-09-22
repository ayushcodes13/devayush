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
  },
  {
    company: "Independent / Upwork",
    role: "AI Engineering & Automation",
    period: "Aug 2026 — Present",
    location: "Remote",
    current: true,
    description:
      "Building practical AI workflows for businesses around document processing, internal operations, integrations, and human-reviewed automation.",
  },
  {
    company: "Prettiflow",
    role: "AI Builder",
    period: "May 2026 — Jun 2026",
    location: "Remote",
    current: false,
    description:
      "Built Truss, an LLM evaluation project focused on failure modes including unsupported outputs, scope violations, prompt injection, and privacy risks.",
  },
  {
    company: "FlyRank AI",
    role: "AI Engineer Intern",
    period: "Jan 2026 — May 2026",
    location: "Remote",
    current: false,
    description:
      "Worked on RAG and agent workflows spanning retrieval quality, orchestration, backend/API integration, and practical reliability.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Experience
        </motion.p>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Building AI systems across reliability, retrieval, and workflows.
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((experience, i) => (
              <motion.article
                key={`${experience.company}-${experience.role}`}
                className="relative pl-8"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span
                  className={`absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 border-background ${
                    experience.current ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
                />

                <div className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8">
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground">
                      {experience.company}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground mt-1">
                      {experience.period}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground/60 mt-1">
                      {experience.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-[14px] font-medium text-foreground">
                      {experience.role}
                    </p>
                    <p className="text-[14px] text-muted-foreground leading-[1.7] mt-2 max-w-2xl">
                      {experience.description}
                    </p>
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
