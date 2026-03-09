import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EngineeringApproachSection from "@/components/EngineeringApproachSection";
import NowSection from "@/components/NowSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import VideoSection from "@/components/VideoSection";
import WritingSection from "@/components/WritingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import MouseGlow from "@/components/MouseGlow";
import AIChatBot from "@/components/AIChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground grid-bg relative">
      <MouseGlow />
      <AIChatBot />
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <EngineeringApproachSection />
      </ScrollReveal>
      <ScrollReveal>
        <NowSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TechStackSection />
      </ScrollReveal>
      <ScrollReveal>
        <VideoSection />
      </ScrollReveal>
      <ScrollReveal>
        <WritingSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
};

export default Index;
