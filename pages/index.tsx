import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO'
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
        <SEO
          title="Aidan Lowson | Portfolio"
          description="Showcasing my personal projects and anything else I feel should be shared with the world."
          url="https://aidanlowson.com"
        />

        <Box className="container">
          <Box className="landingScreen">
            <Navbar />
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
