import { Github, Linkedin, Youtube, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/ayushcodes13", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/devayush-rout/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@devayushrout", label: "YouTube" },
  { icon: BookOpen, href: "https://hashnode.com/@ayoozzzz", label: "Hashnode" },
];

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="section-container flex items-center justify-between">
        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} devayush
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-foreground transition-colors duration-150"
              aria-label={link.label}
            >
              <link.icon size={14} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] text-muted-foreground hidden sm:block">
          built with intent
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
