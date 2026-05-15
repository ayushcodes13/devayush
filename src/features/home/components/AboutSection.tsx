import { motion } from "framer-motion";
import { Database, GitFork, Wrench, Cpu, Activity, ListFilter } from "lucide-react";

const Node = ({ x, y, icon: Icon, label }: any) => (
  <foreignObject x={x - 50} y={y - 16} width={100} height={32}>
    <div className="w-full h-full flex items-center justify-center gap-1.5 rounded-[4px] border border-white/20 bg-white/[0.05] backdrop-blur-md shadow-xl text-[10px] md:text-[11px] text-white/90 font-medium tracking-wide">
      {Icon && <Icon className="w-3.5 h-3.5 text-white/70" />}
      {label}
    </div>
  </foreignObject>
);

const ArchitectureDiagram = () => {
  return (
    <div className="w-full relative overflow-visible opacity-90 hover:opacity-100 transition-opacity duration-500">
      <svg viewBox="0 0 700 360" className="w-full h-auto font-mono overflow-visible drop-shadow-lg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
          </marker>
          <marker id="arrow-dashed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.5)" />
          </marker>
        </defs>

        <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.25" fill="none">
          {/* Req to Rou */}
          <path d="M 110 160 L 150 160" markerEnd="url(#arrow)" />

          {/* Rou to branches */}
          <path d="M 250 160 L 275 160" />
          <circle cx="275" cy="160" r="2" fill="rgba(255,255,255,0.4)" />
          <path d="M 275 160 L 275 60 L 300 60" markerEnd="url(#arrow)" />
          <path d="M 275 160 L 300 160" markerEnd="url(#arrow)" />
          <path d="M 275 160 L 275 260 L 300 260" markerEnd="url(#arrow)" />

          {/* Ret to Rer */}
          <path d="M 400 60 L 450 60" strokeDasharray="3 3" markerEnd="url(#arrow-dashed)" stroke="rgba(255,255,255,0.45)" />

          {/* Branches to Res */}
          <path d="M 550 60 L 570 60 L 570 160" />
          <path d="M 400 260 L 570 260 L 570 160" />
          <path d="M 400 160 L 570 160" />
          <path d="M 570 160 L 590 160" markerEnd="url(#arrow)" />

          {/* Feedback Loops (Dashed) */}
          <g strokeDasharray="3 3" stroke="rgba(255,255,255,0.45)">
            {/* Res to Obs */}
            <path d="M 640 176 L 640 330 L 475 330" markerEnd="url(#arrow-dashed)" />
            {/* Obs to Rou */}
            <path d="M 375 330 L 200 330 L 200 176" markerEnd="url(#arrow-dashed)" />
            {/* Rer to Rou */}
            <path d="M 500 44 L 500 15 L 200 15 L 200 144" markerEnd="url(#arrow-dashed)" />
          </g>
        </g>

        {/* Nodes */}
        <Node x={60} y={160} label="Request" />
        <Node x={200} y={160} label="Router" icon={GitFork} />
        <Node x={350} y={60} label="Retriever" icon={Database} />
        <Node x={350} y={160} label="Tools" icon={Wrench} />
        <Node x={350} y={260} label="LLM" icon={Cpu} />
        <Node x={500} y={60} label="Re-rank" icon={ListFilter} />
        <Node x={640} y={160} label="Response" />
        <Node x={425} y={330} label="Observability" icon={Activity} />
      </svg>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing border-t border-border overflow-hidden">
      <div className="section-container relative">
        <div className="w-full relative z-10">
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
            className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-foreground mb-12 leading-[1.2] max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            I work on retrieval systems, workflow intelligence, and evaluation-aware AI infrastructure.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-10 items-center w-full">
            <div className="lg:col-span-4 space-y-6">
              <motion.p 
                className="text-[16px] text-foreground/90 leading-[1.8] font-normal"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Most of my work focuses on AI systems operating under real-world constraints - incomplete context, noisy data, reliability requirements, and failure-sensitive workflows.
              </motion.p>
              
              <motion.p 
                className="text-[16px] text-muted-foreground leading-[1.8] font-light"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                I’m particularly interested in retrieval infrastructure, evaluation pipelines, governance-aware generation, and systems that know when not to answer.
              </motion.p>
              
              <motion.p 
                className="text-[16px] text-muted-foreground leading-[1.8] font-light"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                I care less about impressive demos and more about whether a system behaves predictably once deployed into actual workflows.
              </motion.p>
            </div>

            <motion.div 
              className="lg:col-span-6 relative w-full flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ArchitectureDiagram />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
