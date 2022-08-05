import { Box, Text } from '@chakra-ui/react';
import HomeBackground from '../components/HomeBackground';
import HomeHeader from '../components/HomeHeader';
import HomeBlogs from '../components/HomeBlogs';
import Footer from '../components/Footer';
import { getBlogPostPaths } from '../lib/posts';
import SEO from '../components/SEO';

import styles from '../styles/Home.module.scss';

export async function getStaticProps() {
  // Change to Projects
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

export default function Home({ blogs }) {
  return (
    <Box w='100%' h='100%'>
      <SEO
        title='Aidan Lowson | Portfolio'
        description='Showcasing my personal projects and anything else I feel should be shared with the world.'
        url='https://aidanlowson.com'
      />
      <Box className={styles.main}>
        <HomeBackground />
        <HomeHeader />
      </Box>

      <Box m='2% 6%' minH='1000px'>
        <Text fontSize={'38px'} align='center' color='red' pb='12px'>
          Latest Blogs
        </Text>
        <HomeBlogs blogs={blogs} />
      </Box>
      <Footer />
    </Box>
  );
}
