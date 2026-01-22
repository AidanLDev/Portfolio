import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProjectContainer from "../components/Projects/ProjectContainer";
import SkillsContainer from "../components/Skills/SkillsContainer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="landingScreen">
          <HeroSection />
        </div>
        {/* Projects */}
        <ProjectContainer />
        {/* Skills */}
        <SkillsContainer />
        <Footer />
      </div>
    </div>
  );
}
