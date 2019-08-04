import React from 'react'
import Card from 'components/Card/Card'
import BurgerBuilderImg from 'assets/Burger.png'
import palceHolderNode from 'assets/Tech/nodeLogo.png'
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
          title="Serverside Shop"
          content={descriptions.ssShopDesc}
          img={palceHolderNode}
          imgLink
          imgWidth={300}
          imgHeight={200}
          transition
          imgLinkLocation="https://nodejs.org/en/"
          imgAlt="Serverside Shop"
        />
      </div>
    </div>
  )
}

export default Projects;