import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";

const focusAreas = [
  "RAG and agent evaluation",
  "Evidence grounding and source validation",
  "Document workflow exception handling",
  "Python APIs and integration reliability",
];

const availableFor = [
  "Focused AI reliability reviews",
  "Evaluation and regression test sprints",
  "Scoped backend or RAG integrations",
  "Agency AI engineering workstreams",
];

const CollabSection = () => {
  return (
    <section id="collab" className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Working with AI product teams
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold tracking-[-0.02em] text-foreground mb-4">
              I help AI product teams find and fix failures that ordinary demos and evaluations miss.
            </h2>
            
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[13px] font-medium text-foreground mb-3 font-mono uppercase tracking-wider">Problems I Work On</p>
                <ul className="space-y-2 text-[14px] text-muted-foreground leading-[1.65]">
                  {focusAreas.map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">
                        <CheckCircle2 size={14} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-muted-foreground leading-[1.65] max-w-md">
              A first review focuses on one workflow, a small set of synthetic or authorized test cases,
              and reproducible findings. Scope and fees are agreed before work starts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:devayushrout.work@gmail.com?subject=AI%20reliability%20review"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 text-[13px] font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                <Mail size={15} aria-hidden="true" />Discuss a scoped review
              </a>
              <a href="https://github.com/ayushcodes13/canon" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-[13px] font-medium text-foreground hover:bg-secondary transition-colors">
                Inspect my public engineering<ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="card-surface p-6 md:p-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="text-[13px] font-medium text-foreground mb-4 font-mono uppercase tracking-wider text-primary">Available For:</p>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              {availableFor.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span className="font-medium text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollabSection;
