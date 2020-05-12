import React from 'react';
import Card from 'components/Card/Card';
import * as descriptions from 'data/Projects/Projects';

import BurgerBuilderImg from 'assets/Burger.png';
import Mars from 'assets/Projects/Mars_space.jpg';

import styles from './Style.module.scss';

const Projects = (props) => {
  return (
    <div>
      <div className={styles.projectCards}>
        <Card
          title='Burger Builder'
          content={descriptions.burgerBuilder}
          img={BurgerBuilderImg}
          imgWidth={300}
          imgHeight={200}
          imgLinkLocation='https://aidans-burger-builder.firebaseapp.com/'
          imgAlt='Burger builder project'
          hoverScale={1.2}
        />
        <Card
          title='Mars Weather App'
          content={descriptions.marsWeatherApp}
          img={Mars}
          imgWidth={400}
          imgHeight={250}
          imgLinkLocation='https://aidanldev.github.io/'
          imgAlt='Burger builder project'
        />
      </div>
    </div>
  );
};

export default Projects;
