import React from 'react'
import Card from 'components/Card/Card'
import Skills from './skills/Skills'
import * as descriptions from 'data/Data'

/*  Logos  */
// import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import teamTreehouse from 'assets/Certs/teamTreeHouse.jpg'
import Udemy from 'assets/Certs/Udemy.png'


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
        // img={AWSCertified}
        // imgAlt="AWS certified"
      />
      <Card
        title="Udemy"
        content={descriptions.UdemyContent}
        img={Udemy}
        imgWidth={400}
        imgHeight={200}
        imgAlt="Udemy Logo"
      />
      <Card
        title="Team Treehouse"
        content="Random crap"
        img={teamTreehouse}
        imgWidth={400}
        imgHeight={200}
        imgAlt="Team Treehouse Logo"
      />
    </div>
  </div>
  )
}

export default Achievements;