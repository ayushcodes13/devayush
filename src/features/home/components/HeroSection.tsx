import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BadgeTag from "@/components/ui/badge-tag";

const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "operational",
      "retrieval-driven",
      "evaluation-aware",
      "workflow",
      "production",
      "governance-aware",
      "decision-support",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video removed to use the global persistent shader background */}
      
      {/* Global persistent shader and tint are handled in App.tsx */}

      <div className="section-container relative z-10 w-full pt-20">
        <div className="max-w-7xl">
          <div className="font-mono text-[11px] sm:text-[12px] text-white/70 uppercase tracking-[0.25em] mb-6 animate-fade-in">
            Retrieval • Evals • Workflow Systems
          </div>

          <motion.h1 layout className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.08] mb-6 text-white animate-slide-up drop-shadow-lg flex flex-wrap items-center gap-x-[0.3em]">
            <motion.span layout>I build</motion.span>
            <motion.span layout className="relative inline-flex flex-col h-[1.1em] overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={titles[titleNumber]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="text-primary drop-shadow-[0_0_15px_rgba(20,184,104,0.3)] inline-block whitespace-nowrap"
                >
                  {titles[titleNumber]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
            <motion.span layout>AI Systems.</motion.span>
          </motion.h1>

          <div className="animate-slide-up" style={{ animationDelay: "0.16s" }}>
            <p className="text-[17px] sm:text-[19px] text-white/90 leading-[1.6] mb-8 font-light max-w-2xl drop-shadow-md">
              Hey, I’m Devayush. I build retrieval systems, workflow intelligence, and evaluation-driven AI infrastructure for real-world environments.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <BadgeTag />
          </div>

          <div
            className="flex flex-wrap items-center gap-4 mt-6 animate-slide-up"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="/DevayushRout_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[160px] font-mono text-[13px] px-6 py-3.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,104,0.3)] hover:shadow-[0_0_30px_rgba(20,184,104,0.5)] transform hover:-translate-y-0.5"
            >
              view resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-w-[160px] font-mono text-[13px] px-6 py-3.5 rounded-md border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5"
            >
              get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
