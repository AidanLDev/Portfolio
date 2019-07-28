import React from 'react'
import Card from 'components/Card/Card'
import BurgerBuilderImg from 'assets/Burger.png'
import * as Descriptions from 'data/Data'

import styles from './Style'

const Projects = props => {

  return (
    <div className={styles.projectsWrapper}>
      {Descriptions.projectsDescription}
      <Card
        title="Burger Builder"
        content={Descriptions.burgerBuilderDesc}
        img={BurgerBuilderImg}
        imgLink
        imgWidth={300}
        imgHeight={200}
        imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
        imgAlt="Burger builder project"
      />
            <Card
        title="Burger Builder"
        content={Descriptions.burgerBuilderDesc}
        img={BurgerBuilderImg}
        imgLink
        imgWidth={300}
        imgHeight={200}
        imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
        imgAlt="Burger builder project"
      />
            <Card
        title="Burger Builder"
        content={Descriptions.burgerBuilderDesc}
        img={BurgerBuilderImg}
        imgLink
        imgWidth={300}
        imgHeight={200}
        imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
        imgAlt="Burger builder project"
      />
            <Card
        title="Burger Builder"
        content={Descriptions.burgerBuilderDesc}
        img={BurgerBuilderImg}
        imgLink
        imgWidth={300}
        imgHeight={200}
        imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
        imgAlt="Burger builder project"
      />
            <Card
        title="Burger Builder"
        content={Descriptions.burgerBuilderDesc}
        img={BurgerBuilderImg}
        imgLink
        imgWidth={300}
        imgHeight={200}
        imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
        imgAlt="Burger builder project"
      />
    </div>
  )
}

export default Projects;