import { Box, Center } from '@chakra-ui/react'
import React from 'react'
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
    <Box>
      <Box className='container'>
        <Box className='landingScreen'>
          <Navbar active='' />
          <HtmlBodyTags />
          <Title />
          <Center>
            <AboutMeCard />
          </Center>
          <ScrollDown />
        </Box>
        {/* Projects */}
        <ProjectContainer />
        {/* Skills */}
        <SkillsContainer />
        <Footer />
      </Box>
    </Box>
  )
}
