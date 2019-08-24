import React from 'react'
import Card from 'components/Card/Card'
import Skills from './skills/Skills'


import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import * as descriptions from 'data/Data'

import styles from './Style'

const Achievements = props => {
  return (
  <div>
    {/* {descriptions.achivementDescription} */}
    <Skills/>
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