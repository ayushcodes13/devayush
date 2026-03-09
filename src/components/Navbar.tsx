import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, User, FolderOpen, Layers, Play, PenLine, Mail, Radio, Compass, Heart } from "lucide-react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "about", href: "#about", icon: User },
  { label: "approach", href: "#approach", icon: Compass },
  { label: "now", href: "#now", icon: Radio },
  { label: "projects", href: "#projects", icon: FolderOpen },
  { label: "stack", href: "#stack", icon: Layers },
  { label: "videos", href: "#videos", icon: Play },
  { label: "writing", href: "#writing", icon: PenLine },
  { label: "values", href: "#values", icon: Heart },
  { label: "contact", href: "#contact", icon: Mail },
];

const tabTransition = { type: "spring" as const, bounce: 0, duration: 0.5 };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.classList.contains("dark") ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  const navRef = useRef<HTMLDivElement>(null);

  const updateActiveSection = useCallback(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="section-container flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-[13px] font-medium text-foreground hover:text-primary transition-colors duration-150"
          >
            devayush
          </a>

          {/* Desktop: Expandable Tabs Nav */}
          <div className="hidden md:flex items-center">
            <div
              ref={navRef}
              className="flex items-center gap-0.5 rounded-full border border-border bg-card/80 backdrop-blur-sm px-1 py-1"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ gap: 0, paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                    animate={{
                      gap: isActive ? "0.375rem" : 0,
                      paddingLeft: isActive ? "0.75rem" : "0.5rem",
                      paddingRight: isActive ? "0.75rem" : "0.5rem",
                    }}
                    transition={tabTransition}
                    className={cn(
                      "relative flex items-center rounded-full py-1.5 text-[11px] font-mono transition-colors duration-200",
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon size={14} />
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={tabTransition}
                          className="overflow-hidden whitespace-nowrap"
                        >
                          {link.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                );
              })}

              {/* Separator */}
              <div className="mx-0.5 h-4 w-px bg-border" />

              {/* Theme toggle inside pill */}
              <button
                onClick={() => setDark(!dark)}
                className="flex items-center justify-center rounded-full p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label="Toggle menu"
            >
              <MenuToggleIcon open={mobileOpen} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-14 left-0 right-0 z-40 bg-background border-b border-border md:hidden"
          >
            <div className="section-container py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 font-mono text-sm px-3 py-2.5 rounded-md transition-colors duration-150",
                      isActive
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon size={15} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
