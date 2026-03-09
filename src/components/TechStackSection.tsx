import { lazy, Suspense } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const TechGlobe = lazy(() => import("@/components/TechGlobe"));

interface StackItem {
  name: string;
  icon?: string;
  desc: string;
}

interface StackCategory {
  label: string;
  items: StackItem[];
}

const stack: StackCategory[] = [
  {
    label: "Core Language",
    items: [
      { name: "Python", icon: "python", desc: "General-purpose programming language for ML & data science" },
    ],
  },
  {
    label: "LLM Systems",
    items: [
      { name: "LangChain", icon: "langchain", desc: "Framework for building LLM-powered applications" },
      { name: "LangGraph", desc: "Stateful multi-agent orchestration on LangChain" },
      { name: "LlamaIndex", desc: "Data framework for LLM applications" },
    ],
  },
  {
    label: "Retrieval",
    items: [
      { name: "PostgreSQL / pgvector", icon: "postgresql", desc: "Vector similarity search with PostgreSQL" },
      { name: "FAISS", desc: "Facebook's efficient similarity search library" },
    ],
  },
  {
    label: "Model Providers",
    items: [
      { name: "OpenAI", icon: "openai", desc: "GPT series & DALL·E API provider" },
      { name: "Anthropic", icon: "anthropic", desc: "Safety-focused LLM by Anthropic" },
    ],
  },
  {
    label: "Infra",
    items: [
      { name: "FastAPI", icon: "fastapi", desc: "High-performance Python web framework" },
      { name: "Docker", icon: "docker", desc: "Containerization platform" },
      { name: "AWS", icon: "amazonwebservices", desc: "Amazon cloud computing services" },
    ],
  },
];
const TechIcon = ({ slug }: { slug: string }) => (
  <img
    src={`https://cdn.simpleicons.org/${slug}/currentColor`}
    alt=""
    className="w-3.5 h-3.5 opacity-50 group-hover:opacity-80 transition-opacity duration-150 dark:invert"
    loading="lazy"
  />
);

const LetterIcon = ({ name }: { name: string }) => {
  const initials = name.split(/[\s.]+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] border border-border text-[7px] font-mono font-medium leading-none text-muted-foreground group-hover:text-foreground group-hover:border-muted-foreground/50 transition-colors duration-150 select-none">
      {initials}
    </span>
  );
};

const TechStackSection = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <section id="stack" className="section-spacing border-t border-border">
        <div className="section-container">
          <p className="section-label mb-3">Tech Stack</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground mb-12">
            Tools I Use
          </h2>
          {/* Mobile globe - above the list */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block md:hidden mb-8"
          >
              <Suspense fallback={<div className="w-full h-[280px]" />}>
                <TechGlobe compact />
              </Suspense>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="grid gap-10">
              {stack.map((category, catIdx) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                >
                  <p className="text-[13px] font-medium text-foreground mb-3.5">{category.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIdx) => (
                      <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                          <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: catIdx * 0.08 + itemIdx * 0.03 }}
                            className="group inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-md bg-card text-muted-foreground border border-border hover:text-foreground hover:border-muted-foreground/30 transition-colors duration-150 cursor-default"
                          >
                            {item.icon ? <TechIcon slug={item.icon} /> : <LetterIcon name={item.name} />}
                            {item.name}
                          </motion.span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[220px] text-xs">
                          {item.desc}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Desktop globe - side by side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block sticky top-24"
            >
              <Suspense fallback={<div className="w-full h-[450px]" />}>
                <TechGlobe />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechStackSection;
