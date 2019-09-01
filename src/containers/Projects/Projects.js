import React from 'react'
import Card from 'components/Card/Card'
import BurgerBuilderImg from 'assets/Burger.png'
import palceHolderNode from 'assets/Tech/Node.png'
import * as descriptions from 'data/Projects/Projects'

import styles from './Style'

const Projects = props => {

  return (
    <div>
       {/* {descriptions.projectsDescription} */}
      <div className={styles.projectCards}>
      
        <Card
          title="Burger Builder"
          content={descriptions.burgerBuilder}
          img={BurgerBuilderImg}
          imgLink
          transition
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation="https://aidans-burger-builder.firebaseapp.com/"
          imgAlt="Burger builder project"
        />
        <Card
          title="Udemy Serverside Shop"
          content={descriptions.nodeShop}
          img={palceHolderNode}
          // imgLink
          imgWidth={300}
          imgHeight={200}
          // transition
          // imgLinkLocation="https://nodejs.org/en/"
          // imgAlt="Serverside Shop"
        />
        <Card
          title="Treehouse user authentication"
          content={descriptions.userAuth}
          img={palceHolderNode}
          // imgLink
          imgWidth={300}
          imgHeight={200}
          // transition
          // imgLinkLocation="https://nodejs.org/en/"
          // imgAlt="Serverside Shop"
        />
      </div>
    </div>
  )
}

export default Projects;