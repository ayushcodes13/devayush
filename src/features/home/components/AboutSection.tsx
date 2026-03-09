import { Zap, Target, Cpu, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Focus", value: "Applied AI", icon: Target },
  { label: "LANGUAGE", value: "Python", icon: Cpu },
  { label: "Status", value: "Building", icon: Zap },
  { label: "Degree", value: "BTech AI/ML", icon: GraduationCap },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          About
        </motion.p>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Who I Am
        </motion.h2>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main bio card */}
          <motion.div variants={item} className="md:col-span-2 card-surface p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-lg text-foreground font-medium leading-[1.6] tracking-[-0.01em]">
                I work on applied AI systems with a focus on reliability, retrieval, and real-world constraints.
              </p>
              <p className="text-[15px] text-muted-foreground leading-[1.75]">
                Most of my projects deal with messy data, incomplete information, and AI systems
                that need to behave predictably outside notebooks. I care less about flashy demos
                and more about whether a system can be trusted when it actually matters.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={item} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="card-surface p-4 flex flex-col items-start gap-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
              >
                <stat.icon size={16} className="text-primary" />
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                  <p className="text-sm font-medium text-foreground">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* What I'm working on */}
          <motion.div variants={item} className="md:col-span-2 card-surface p-6">
            <p className="text-[13px] font-medium text-foreground mb-3">What I'm working on</p>
            <ul className="space-y-2 text-[14px] text-muted-foreground leading-[1.65]">
              {[
                "Retrieval-augmented generation and decision-support systems",
                "Multimodal setups where vision and language have clear roles",
                "Applied ML projects where accuracy and traceability matter",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.08 }}
                >
                  <span className="text-primary font-mono text-xs mt-0.5">→</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Education note */}
          <motion.div variants={item} className="card-surface p-5 flex flex-col justify-center">
            <p className="text-[13px] text-muted-foreground leading-[1.7]">
              <span className="text-primary font-mono mr-1.5">↳</span>
              Learning by building and documenting systems end to end, not by following tutorials.
              Open to collaborating on applied AI projects where the goal is to ship something real.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
