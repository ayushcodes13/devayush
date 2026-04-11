import { Mail, Github, Linkedin, ArrowUpRight, BookOpen, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { icon: Mail, label: "devayushrout.work@gmail.com", href: "mailto:devayushrout.work@gmail.com", external: false },
  { icon: Github, label: "github.com/ayushcodes13", href: "https://github.com/ayushcodes13", external: true },
  { icon: Linkedin, label: "linkedin.com/in/devayush-rout", href: "https://www.linkedin.com/in/devayush-rout/", external: true },
  { icon: Youtube, label: "youtube.com/@devayushrout", href: "https://www.youtube.com/@devayushrout", external: true },
  { icon: BookOpen, label: "hashnode.com/@ayoozzzz", href: "https://hashnode.com/@ayoozzzz", external: true },
];

const terminalLines = [
  { prompt: true, text: "whoami", delay: 0 },
  { prompt: false, text: "devayush — applied ai engineer", delay: 600 },
  { prompt: true, text: "cat status.txt", delay: 1200 },
  { prompt: false, text: "🟢 available for startup collaborations & early product roles", delay: 1800 },
  { prompt: true, text: "cat location.txt", delay: 2400 },
  { prompt: false, text: "📍 india (IST, UTC+5:30)", delay: 3000 },
  { prompt: true, text: "cat interests.txt", delay: 3600 },
  { prompt: false, text: "retrieval systems, llm agents, eval pipelines", delay: 4200 },
  { prompt: true, text: "ssh devayush@collaborate", delay: 4800 },
  { prompt: false, text: "connecting... ✓ ready", delay: 5400 },
];

const TypingLine = ({ line, startDelay }: { line: typeof terminalLines[0]; startDelay: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= line.text.length) {
        setDisplayed(line.text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        // Keep cursor blinking on last line only
      }
    }, line.prompt ? 50 : 25);
    return () => clearInterval(interval);
  }, [started, line.text, line.prompt]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(interval);
  }, []);

  if (!started) return null;

  return (
    <div className="flex items-start gap-0 font-mono text-[11px] leading-[1.8]">
      {line.prompt ? (
        <>
          <span className="text-primary shrink-0">❯ </span>
          <span className="text-foreground">{displayed}</span>
          {displayed.length < line.text.length && (
            <span className={`text-primary ${cursorVisible ? "opacity-100" : "opacity-0"}`}>▋</span>
          )}
        </>
      ) : (
        <span className="text-muted-foreground pl-3">{displayed}</span>
      )}
    </div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing border-t border-border">
      <div className="section-container">
        <motion.p
          className="section-label mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — text + links */}
          <div>
            <motion.h3
              className="text-lg font-semibold tracking-[-0.01em] mb-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              Have an operational workflow problem worth solving?
            </motion.h3>
            <motion.p
              className="text-[14px] text-muted-foreground mb-6 max-w-md leading-[1.65]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Let's prototype an AI system around it. Based in India. Open to early-stage product roles, startup collaborations, and founder conversations.
            </motion.p>
            <motion.div
              className="flex items-center gap-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <a
                href="mailto:devayushrout.work@gmail.com?subject=Book%20a%20conversation"
                className="inline-flex items-center gap-2 font-mono text-[12px] px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150"
              >
                Book a conversation
              </a>
              <a
                href="mailto:devayushrout.work@gmail.com"
                className="inline-flex items-center gap-2 font-mono text-[12px] px-4 py-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
              >
                Email me
              </a>
            </motion.div>
            <div className="flex flex-col gap-2.5">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                >
                  <link.icon size={15} className="text-muted-foreground/60 group-hover:text-foreground transition-colors duration-150" />
                  <span className="group-hover:underline underline-offset-4 decoration-border">{link.label}</span>
                  {link.external && (
                    <ArrowUpRight size={11} className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors duration-150" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — Terminal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-border bg-card/50 overflow-hidden"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground/50 ml-2">devayush@portfolio ~ %</span>
            </div>
            {/* Terminal body */}
            <div className="p-4 min-h-[220px]">
              {terminalLines.map((line, i) => (
                <TypingLine key={i} line={line} startDelay={line.delay} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
