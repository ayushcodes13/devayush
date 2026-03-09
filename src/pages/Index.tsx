import Navbar from "@/core/layout/Navbar";
import HeroSection from "@/features/home/components/HeroSection";
import AboutSection from "@/features/home/components/AboutSection";
import EngineeringApproachSection from "@/features/home/components/EngineeringApproachSection";
import NowSection from "@/features/home/components/NowSection";
import ProjectsSection from "@/features/home/components/ProjectsSection";
import TechStackSection from "@/features/home/components/TechStackSection";
import VideoSection from "@/features/home/components/VideoSection";
import WritingSection from "@/features/home/components/WritingSection";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import ContactSection from "@/features/home/components/ContactSection";
import Footer from "@/core/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ScrollToTop from "@/components/shared/ScrollToTop";
import MouseGlow from "@/components/shared/MouseGlow";
import AIChatBot from "@/features/ai-chat/components/AIChatBot";

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
