import React from 'react';
import Card from 'components/Card/Card'
import BurgerBuilderImg from 'assets/Burger.png'

import styles from './Style'

const Projects = props => {

  return (
    <div>
      <p>
        Developing websites/web applications is more than just a carear, but a hobby too. I have worked on various projects which I will be going through the technologies used to develop said projects.
      </p>
      <Card
        title="Burger Builder"
        content='My projects'
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