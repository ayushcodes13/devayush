import avatarImg from "@/assets/avatar.png";


const HeroSection = () => {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Subtle grid overlay for technical identity */}
      {/* Grid inherited from parent grid-bg — no separate overlay needed */}

      <div className="section-container relative z-10 pt-14">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card mb-10 animate-fade-in">
              <span className="status-dot" />
              <span className="font-mono text-[11px] text-muted-foreground">
                available for startup collaborations & early product roles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-[1.08] mb-5 animate-slide-up">
              <span className="block">
                I build <span className="gradient-text">Operational AI Systems</span>.
              </span>
              <span className="block mt-0.5 text-3xl sm:text-4xl md:text-5xl text-muted-foreground font-bold">
                Founders can <span className="gradient-text">ship with quality and restraint in mind.</span>.
              </span>
            </h1>

            <p
              className="text-[15px] text-muted-foreground max-w-[480px] leading-[1.7] mt-6 animate-slide-up"
              style={{ animationDelay: "0.16s" }}
            >
              Hey, I’m Devayush. I build workflow intelligence, retrieval systems, and decision-support products for real-world workflows.
            </p>

            <div
              className="flex items-center gap-3 mt-10 animate-slide-up"
              style={{ animationDelay: "0.24s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-mono text-[13px] px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-150"
              >
                view case studies
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-[13px] px-4 py-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
              >
                work together
              </a>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
