import { Box, Text, Center } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from '../components/Navbar/Navbar'
import { getBlogPostPaths } from '../lib/posts'
import SEO from '../components/SEO'

import HtmlBodyTags from '../components/htmlTags/HtmlBodyTags'
import Title from '../components/Home/Title'
import AboutMeCard from '../components/Home/AboutMeCard'
import SkillsContainer from '../components/Skills/SkillsContainer'
import ScrollDown from '../components/Home/ScrollDown'

export async function getStaticProps() {
  // Change to Projects
  const blogs = getBlogPostPaths()
  return {
    props: {
      blogs,
    },
  }
}

export default function Home({ blogs }) {
  return (
    <Box>
      <SEO
        title="Aidan Lowson | Portfolio"
        description="Showcasing my personal projects and anything else I feel should be shared with the world."
        url="https://aidanlowson.com"
      />

      <Box className="container">
        <Navbar />
        <HtmlBodyTags />
        <Parallax pages={3}>
          <ParallaxLayer speed={0.6} offset={0}>
            <Title />
            <Center>
              <AboutMeCard />
            </Center>
            <ScrollDown />
          </ParallaxLayer>
          {/* Skills */}
          <ParallaxLayer offset={1} speed={1.3}>
            <SkillsContainer />
          </ParallaxLayer>
        </Parallax>
      </Box>

      {/* <Box m="2% 6%" minH="1000px"> */}
      {/* Skills */}
      {/* Projects */}
      {/* <HomeBlogs blogs={blogs} /> */}
      {/* </Box> */}
      {/* <Footer /> */}
    </Box>
  )
}
