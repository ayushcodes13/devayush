import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, ExternalLink, X, ArrowLeft, AlertTriangle, Lightbulb, Wrench, BarChart3 } from "lucide-react";
import { projectCategories, Project, ProjectCategory } from "@/data/projects";

const sectionDelay = (i: number) => ({ duration: 0.35, delay: i * 0.07 });

const SectionBlock = ({ icon: Icon, label, children, index }: { icon: any; label: string; children: React.ReactNode; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={sectionDelay(index)}
    className="relative"
  >
    <div className="flex items-center gap-2 mb-3">
      <Icon size={12} className="text-primary" />
      <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.15em]">{label}</h3>
    </div>
    {children}
  </motion.div>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const closeAll = () => {
    setActiveProject(null);
    setActiveCategory(null);
  };

  const backToCategory = () => {
    setActiveProject(null);
  };

  return (
    <>
      <section id="projects" className="section-spacing border-t border-border">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <motion.p
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Projects
            </motion.p>
            <motion.a
              href="https://github.com/ayushcodes13"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-150 inline-flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              view all on github
              <ArrowUpRight size={10} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projectCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className="group text-left card-surface p-6 hover:border-primary/30 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </div>
                <h3 className="text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors duration-150 mb-1">
                  {cat.label}
                </h3>
                <p className="text-[12px] text-muted-foreground leading-[1.6]">
                  {cat.tagline}
                </p>
                <span className="inline-block mt-3 font-mono text-[10px] text-muted-foreground/50">
                  {cat.projects.length} projects
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={closeAll}
          >
            <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-[0_16px_64px_-16px_hsl(var(--primary)/0.1)] mx-2 sm:mx-0"
            >
              {/* Sticky header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-border bg-card/90 backdrop-blur-md rounded-t-2xl">
                <div className="flex items-center gap-3">
                  {activeProject && (
                    <button onClick={backToCategory} className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                      <ArrowLeft size={16} />
                    </button>
                  )}
                  <div>
                    <h2 className="text-[15px] font-semibold text-foreground">
                      {activeProject ? activeProject.title : activeCategory.label}
                    </h2>
                    {activeProject ? (
                      <p className="text-[11px] text-muted-foreground mt-0.5 max-w-md">{activeProject.summary}</p>
                    ) : (
                      <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{activeCategory.tagline}</p>
                    )}
                  </div>
                </div>
                <button onClick={closeAll} className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <X size={16} />
                </button>
              </div>

              <div className="p-5">
                <AnimatePresence mode="wait">
                  {activeProject ? (
                    <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                      
                      {/* Hero image */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={sectionDelay(0)}
                        className="rounded-xl overflow-hidden mb-4 aspect-video"
                      >
                        <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                      </motion.div>

                      {/* Gallery */}
                      {activeProject.gallery && activeProject.gallery.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={sectionDelay(0.5)}
                          className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6"
                        >
                          {activeProject.gallery.map((img, i) => (
                            <div key={i} className="rounded-lg overflow-hidden aspect-video border border-border hover:border-primary/30 transition-colors cursor-pointer">
                              <img src={img} alt={`${activeProject.title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tech stack bar */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={sectionDelay(1)}
                        className="flex flex-wrap items-center gap-2 mb-7 pb-5 border-b border-border"
                      >
                        <div className="flex items-center gap-2 mr-3">
                          <Wrench size={11} className="text-muted-foreground/50" />
                          <span className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest">Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 flex-1">
                          {activeProject.technologies.map((tech) => (
                            <span key={tech} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{tech}</span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Content sections */}
                      <div className="space-y-7">
                        
                        {/* Problem */}
                        <SectionBlock icon={Lightbulb} label="Problem" index={2}>
                          <p className="text-[13px] text-muted-foreground leading-[1.8]">{activeProject.problem}</p>
                        </SectionBlock>

                        {/* Architecture */}
                        <SectionBlock icon={ArrowRight} label="Architecture" index={3}>
                          <p className="text-[13px] text-muted-foreground leading-[1.8] mb-4">{activeProject.architecture}</p>
                          {/* Pipeline visualization */}
                          <div className="relative pl-4 border-l-2 border-primary/20 space-y-0">
                            {activeProject.architecturePipeline.map((step, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: 0.3 + i * 0.05 }}
                                className="relative py-2 group"
                              >
                                <div className="absolute -left-[calc(0.5rem+5px)] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                <p className="font-mono text-[11px] text-foreground/80 group-hover:text-foreground transition-colors">
                                  <span className="text-primary/40 mr-2">{String(i + 1).padStart(2, '0')}</span>
                                  {step}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                          {activeProject.architectureImage && (
                            <div className="rounded-xl overflow-hidden mt-4 border border-border">
                              <img src={activeProject.architectureImage} alt="Architecture diagram" className="w-full h-auto" />
                            </div>
                          )}
                        </SectionBlock>

                        {/* Engineering Decisions */}
                        <SectionBlock icon={Lightbulb} label="Engineering Decisions" index={4}>
                          <div className="space-y-3">
                            {activeProject.decisions.map((decision, i) => (
                              <div key={i} className="flex items-start gap-3 rounded-lg bg-background/60 border border-border p-3.5">
                                <span className="font-mono text-[10px] text-primary/60 mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                <p className="text-[12px] text-muted-foreground leading-[1.7]">{decision}</p>
                              </div>
                            ))}
                          </div>
                        </SectionBlock>

                        {/* Failure Modes */}
                        <SectionBlock icon={AlertTriangle} label="Failure Modes & Mitigations" index={5}>
                          <div className="space-y-2">
                            {activeProject.failureModes.map((failure, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-[12px] text-muted-foreground leading-[1.7]">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-destructive/40 mt-[7px] shrink-0" />
                                {failure}
                              </div>
                            ))}
                          </div>
                        </SectionBlock>

                        {/* Results / Metrics */}
                        <SectionBlock icon={BarChart3} label="Results & Learnings" index={6}>
                          {activeProject.metrics && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4">
                              {activeProject.metrics.map((metric) => (
                                <div key={metric.label} className="rounded-lg bg-background/60 border border-border p-3 text-center">
                                  <p className="text-[17px] font-semibold text-foreground leading-none mb-1">{metric.value}</p>
                                  <p className="font-mono text-[9px] text-muted-foreground/70 uppercase tracking-wider">{metric.label}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          {activeProject.resultsImages && activeProject.resultsImages.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                              {activeProject.resultsImages.map((img, i) => (
                                <div key={i} className="rounded-lg overflow-hidden border border-border">
                                  <img src={img} alt={`Results ${i + 1}`} className="w-full h-auto" />
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="space-y-2">
                            {activeProject.results.map((result, i) => (
                              <div key={i} className="flex items-start gap-2.5 text-[12px] text-muted-foreground leading-[1.7]">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-[7px] shrink-0" />
                                {result}
                              </div>
                            ))}
                          </div>
                        </SectionBlock>
                      </div>

                      {/* Links footer */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={sectionDelay(7)}
                        className="flex items-center gap-4 mt-8 pt-5 border-t border-border"
                      >
                        {activeProject.github && (
                          <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary">
                            <Github size={14} /> View Source
                          </a>
                        )}
                        {activeProject.demo && (
                          <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-secondary">
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        )}
                      </motion.div>

                    </motion.div>
                  ) : (
                    <motion.div key="grid" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeCategory.projects.map((project) => (
                        <button key={project.title} onClick={() => setActiveProject(project)} className="group text-left rounded-xl border border-border bg-background/40 overflow-hidden hover:border-muted-foreground/30 transition-colors duration-200">
                          <div className="aspect-[3/2] overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                          </div>
                          <div className="p-4">
                            <h3 className="text-[13px] font-medium text-foreground group-hover:text-primary transition-colors duration-150 mb-1.5 leading-snug">{project.title}</h3>
                            <p className="text-[11px] text-muted-foreground leading-[1.6] line-clamp-2">{project.summary}</p>
                            <span className="inline-flex items-center gap-1 mt-3 font-mono text-[10px] text-primary group-hover:gap-2 transition-all duration-200">
                              <ArrowRight size={10} /> View details
                            </span>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
