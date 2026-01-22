import Footer from '../components/Footer/Footer'
import AboutMeCard from '../components/Home/AboutMeCard'
import ScrollDown from '../components/Home/ScrollDown'
import Title from '../components/Home/Title'
import HtmlBodyTags from '../components/htmlTags/HtmlBodyTags'
import Navbar from '../components/Navbar/Navbar'
import ProjectContainer from '../components/Projects/ProjectContainer'
import SkillsContainer from '../components/Skills/SkillsContainer'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='landingScreen'>
          <Navbar active='' />
          <HtmlBodyTags />
          <Title />
          <div className='center'>
            <AboutMeCard />
          </div>
          <ScrollDown />
        </div>
        {/* Projects */}
        <ProjectContainer />
        {/* Skills */}
        <SkillsContainer />
        <Footer />
      </div>
    </div>
  )
}
