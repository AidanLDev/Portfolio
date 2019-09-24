import React from "react";
import Card from "components/Card/Card";
import BurgerBuilderImg from "assets/Burger.png";
import placeHolderImg from "assets/ComingSoon.png";
import * as descriptions from "data/Projects/Projects";

import styles from "./Style";

const Projects = props => {
  return (
    <div>
      {/* {descriptions.projectsDescription} */}
      <div className={styles.projectCards}>
        <Card
          title="Burger Builder"
          content={descriptions.burgerBuilder}
          img={BurgerBuilderImg}
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
          imgAlt="Burger builder project"
        />
        <Card
          title="Udemy Serverside Shop"
          content={descriptions.nodeShop}
          img={placeHolderImg}
          imgWidth={500}
          imgHeight={200}
          // imgAlt="Serverside Shop"
        />
        <Card
          title="Treehouse user authentication"
          content={descriptions.userAuth}
          img={placeHolderImg}
          // imgLink
          imgWidth={500}
          imgHeight={200}
          // transition
          // imgLinkLocation="https://nodejs.org/en/"
          // imgAlt="Serverside Shop"
        />
      </div>
    </div>
  );
};

export default Projects;
