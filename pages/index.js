import { Box, Text, Center } from '@chakra-ui/react'
import Navbar from '../components/Navbar/Navbar'
import { getBlogPostPaths } from '../lib/posts'
import SEO from '../components/SEO'

import HtmlBodyTags from '../components/htmlTags/HtmlBodyTags'
import Title from '../components/Home/Title'
import AboutMeCard from '../components/Home/AboutMeCard'
import AWSCert from '../components/Skills/AWSCert'

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
        <Title />
        <Center>
          <AboutMeCard />
        </Center>
        {/* say scroll down to see what skills I have and some projects I've worked on */}
        <AWSCert /> 
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
