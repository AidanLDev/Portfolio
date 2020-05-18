import React from 'react';
import Card from 'components/Card/Card';
import Skills from './skills/Skills';
import * as descriptions from 'data/Achievements/Achievements';

import teamTreehouse from 'assets/Certs/teamTreeHouse.jpg';
import degree from 'assets/Certs/degree.jpeg';
import styles from './Style.module.scss';

const Achievements = (props) => {
  const treehousePointsValues = () => {
    return (
      <div className={styles.padding}>
        <p>
          Completed the 'Stack JavaScript Developer' track, gaining relevant
          skills in becoming a competent JavaScript developer.
        </p>
      </div>
    );
  };

  return (
    <div>
      <Skills />
      <hr />
      <h1>Certifications</h1>
      <div className={styles.achCards}>
        <div className={styles.degreeCard}>
          <Card
            title='BSc Computing'
            img={degree}
            imgWidth={300}
            imgHeight={400}
          />
        </div>
        <Card title='AWS' content={descriptions.AWS} />
        <Card title='Udemy' content={descriptions.react16} />
        <Card
          title='Team Treehouse'
          content={treehousePointsValues()}
          img={teamTreehouse}
          imgWidth={400}
          imgHeight={200}
        />
      </div>
      <hr />
      <h1>Projects</h1>
    </div>
  );
};

export default Achievements;
