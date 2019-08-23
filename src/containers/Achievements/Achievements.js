import React from 'react'
import Card from 'components/Card/Card'
import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import * as descriptions from 'data/Data'

import styles from './Style'

const Achievements = props => {
  return (
  <div>
      {/* {descriptions.achivementDescription} */}
    <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <h2>JavaScript</h2>
        <h2>React</h2>
        <h2>Angular</h2>
        <h2>Node.js</h2>
        <h2>MySQL</h2>
        <h2>AWS</h2>
      </div>
    <h1>Certifications</h1>
    <div className={styles.achCards}>
      <Card
        title="AWS"
        content={descriptions.AWSContent}
        img={AWSCertified}
        imgAlt="AWS certified"
      />
      <Card
        title="Udemy/Treehouse"
        content={descriptions.AWSContent}
        img={AWSCertified}
        imgAlt="AWS certified"
      />
    </div>
  </div>
  )
}

export default Achievements;