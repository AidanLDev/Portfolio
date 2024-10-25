import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

import HtmlBodyTags from '../components/htmlTags/HtmlBodyTags'
import Title from '../components/Home/Title'
import AboutMeCard from '../components/Home/AboutMeCard'
import SkillsContainer from '../components/Skills/SkillsContainer'
import ScrollDown from '../components/Home/ScrollDown'
import ProjectContainer from '../components/Projects/ProjectContainer'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Box>
        <Box className="container">
          <Box className="landingScreen">
            <Navbar active="" />
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
      <GoogleAnalytics gaId="G-W0ZWY4VS2K" />
    </>
  )
}
