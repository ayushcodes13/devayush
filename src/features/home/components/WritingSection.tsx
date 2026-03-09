import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Post {
  title: string;
  description: string;
  date: string;
  tag: string;
  href: string;
}

const posts: Post[] = [
  {
    title: "Designing reliable RAG systems",
    description: "Lessons from building retrieval pipelines that need to work every time, not just most of the time.",
    date: "2025",
    tag: "SYSTEMS",
    href: "https://hashnode.com/@ayoozzzz",
  },
  {
    title: "Why evaluation matters in LLM applications",
    description: "You can't improve what you can't measure. A framework for thinking about LLM evaluation beyond vibes.",
    date: "2025",
    tag: "EVALUATION",
    href: "https://hashnode.com/@ayoozzzz",
  },
  {
    title: "Failure modes in retrieval pipelines",
    description: "A taxonomy of how RAG systems break, and what to monitor to catch it early.",
    date: "2024",
    tag: "DEBUGGING",
    href: "https://hashnode.com/@ayoozzzz",
  },
];

const WritingSection = () => {
  return (
    <section id="writing" className="section-spacing border-t border-border">
      <div className="section-container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.p
              className="section-label mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              Writing
            </motion.p>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Blog Articles
            </motion.h2>
          </div>
          <motion.a
            href="https://hashnode.com/@ayoozzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors duration-150 inline-flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            view all on hashnode
            <ArrowUpRight size={10} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-muted-foreground/30 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="px-5 pt-5 pb-3">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
                  #{post.tag}
                </span>
              </div>
              <div className="flex flex-col flex-1 px-5 pb-5">
                <h3 className="text-[15px] font-medium text-foreground group-hover:text-primary transition-colors duration-150 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-[1.65] mb-4 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary group-hover:gap-2.5 transition-all duration-200">
                    <ArrowRight size={12} />
                    Read more
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground/50">
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
