import React from "react";
import Card from "components/Card/Card";
import * as descriptions from "data/Projects/Projects";

import BurgerBuilderImg from "assets/Burger.png";
import placeHolderImg from "assets/ComingSoon.png";
import userAuthImg from "assets/userAuth.png";

import styles from "./Style";

const Projects = props => {
  return (
    <div>
      <div className={styles.projectCards}>
        <Card
          title="Burger Builder"
          content={descriptions.burgerBuilder}
          img={BurgerBuilderImg}
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
          imgAlt="Burger builder project"
          hoverScale={1.2}
        />
      </div>
    </div>
  );
};

export default Projects;
