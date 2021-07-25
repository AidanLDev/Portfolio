import React from 'react';
import Particles from 'react-particles-js';
import styles from './Style.module.scss';
import SquareLoader from 'react-spinners/SquareLoader';

import * as portfolioData from 'data/Backgrounds/particleBackgrounds';
const About = React.lazy(() => import('containers/About/About'));
const Achievements = React.lazy(() =>
  import('containers/Achievements/Achievements')
);
const Projects = React.lazy(() => import('containers/Projects/Projects'));

const Portfolio = () => {
  const dateTime = new Date();
  const currentMonth = dateTime.getMonth();
  return (
    <div>
      <Particles
        className={styles.particlesBackground}
        params={
          currentMonth === 11
            ? portfolioData.particleParamsSnow
            : portfolioData.particleParamsPent
        }
      />
      <React.Suspense
        fallback={
          <SquareLoader
            size={350}
            color='#F5A623'
            styles={{ position: 'absolute' }}
          />
        }
      >
        <About />
        <Achievements />
        <Projects />
      </React.Suspense>
    </div>
  );
};

export default Portfolio;
