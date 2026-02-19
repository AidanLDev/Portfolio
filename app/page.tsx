import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProjectContainer from "../components/Projects/ProjectContainer";
import ExperienceTimeline from "@/components/ExperienceTimeline/ExperienceTimeline";
import SkillsContainer from "@/components/Skills/SkillsContainer";
import ContactContainer from "@/components/Contact/ContactContainer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="landingScreen">
          <HeroSection />
        </div>
        <ExperienceTimeline />
        <SkillsContainer />
        <ProjectContainer />
        <ContactContainer />
        <Footer />
      </div>
    </div>
  );
}
