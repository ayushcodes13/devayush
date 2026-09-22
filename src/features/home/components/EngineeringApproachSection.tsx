import { motion } from "framer-motion";

const principles = [
  { label: "Evidence before confidence", detail: "When a task depends on evidence, the output should be traceable back to it." },
  { label: "Measure the failure, not the vibe", detail: "Eval sets and failure labels tell you what actually needs fixing." },
  { label: "Deterministic where possible", detail: "Don't ask an LLM to do work that code can verify reliably." },
  { label: "Escalate uncertainty", detail: "Ambiguous cases should reach a human instead of becoming confident guesses." },
];

const EngineeringApproachSection = () => {
  return (
    <section id="approach" className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Engineering Approach
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          How I Build Reliable AI
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              className="card-surface p-5 md:p-6 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-[14px] font-medium text-foreground leading-snug">
                    {p.label}
                  </p>
                  <p className="text-[13px] text-muted-foreground leading-[1.6] mt-1.5">
                    {p.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproachSection;
