import React from "react";
import Achievements from "containers/Achievements/Achievements";
import Projects from "containers/Projects/Projects";
import Particles from "react-particles-js";
import styles from "./Style.scss";

import * as portfolioData from "data/Backgrounds/particleBackgrounds";

const Portfolio = () => {
  const dateTime = new Date();
  const currentMonth = dateTime.getMonth();

  console.log(currentMonth);
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
      <Achievements />
      <Projects />
    </div>
  );
};

export default Portfolio;
