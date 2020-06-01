import React from 'react';
import Card from 'components/Card/Card';
import * as descriptions from 'data/Projects/Projects';

import BurgerBuilderImg from 'assets/Burger.png';
import Mars from 'assets/Projects/Mars_space.jpg';
import FizzBuzz from 'assets/Projects/fizzBuzz.png';
import TrackSearch from 'assets/Projects/MusicLibraryProject.png';
import ReactBootstrapCityGuide from 'assets/Projects/ReactBootstrapCityGuide.png';

import styles from './Style.module.scss';

const Projects = (props) => {
  return (
    <div>
      <div className={styles.projectCards}>
        <Card
          projects='https://github.com/AidanLDev/Training-Burger-Builder'
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
          projects='https://github.com/AidanLDev/Weather-App'
          title='Mars Weather App'
          content={descriptions.marsWeatherApp}
          img={Mars}
          imgWidth={400}
          imgHeight={250}
          imgLinkLocation='https://aidanldev.github.io/'
          imgAlt='Burger builder project'
        />
        <Card
          projects='https://github.com/AidanLDev/Song_Search'
          title='Track Search'
          content={descriptions.trackSearch}
          img={TrackSearch}
          imgWidth={400}
          imgHeight={250}
          imgLinkLocation='https://aidans-song-search.herokuapp.com/'
          imgAlt='Burger builder project'
        />
        <Card
          projects='https://github.com/AidanLDev/React-Bootstrap-City-Guide'
          title='React Bootstrap City Guide'
          content={descriptions.boostStrapReactCityGuide}
          img={ReactBootstrapCityGuide}
          imgWidth={400}
          imgHeight={250}
          imgLinkLocation='http://react-bootstrap-city-guide.s3-website.eu-west-2.amazonaws.com/'
          imgAlt='Burger builder project'
        />
        <Card
          projects='https://github.com/AidanLDev/FizzBuzz.js'
          title='FizzBuzz'
          content={descriptions.fizzBuzz}
          img={FizzBuzz}
          imgWidth={400}
          imgHeight={250}
          imgLinkLocation='http://fizz-buzz.s3-website.eu-west-2.amazonaws.com/'
          imgAlt='Burger builder project'
        />
      </div>
    </div>
  );
};

export default Projects;
