import React from "react";
import Achievements from "containers/Achievements/Achievements";
import Projects from "containers/Projects/Projects";
import Particles from "react-particles-js";
import styles from "./Style.scss";

import * as portfolioData from "data/portfolio/portfolio";

const Portfolio = props => {
  return (
    <div>
      <Particles
        className={styles.particlesBackground}
        params={portfolioData.particleParams}
      />
      <Achievements />
      <Projects />
    </div>
  );
};

export default Portfolio;
