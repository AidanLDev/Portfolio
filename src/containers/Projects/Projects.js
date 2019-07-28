import React from 'react'
import Card from 'components/Card/Card'
import BurgerBuilderImg from 'assets/Burger.png'
import * as descriptions from 'data/Data'

import styles from './Style'

const Projects = props => {

  return (
    <div>
       {descriptions.projectsDescription}
      <div className={styles.projectCards}>
      
        <Card
          title="Burger Builder"
          content={descriptions.burgerBuilderDesc}
          img={BurgerBuilderImg}
          imgLink
          transition
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
          imgAlt="Burger builder project"
        />
        <Card
          title="Burger Builder"
          content={descriptions.burgerBuilderDesc}
          img={BurgerBuilderImg}
          imgLink
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
          imgAlt="Burger builder project"
        />
      </div>
    </div>
  )
}

export default Projects;