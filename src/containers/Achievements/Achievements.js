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
        <div><h2>JavaScript</h2><p>From front-end frameworks to using JQuery to vanilla JavaScript when writting my first web applications. JavaScript has been a constant in my web development carear.</p></div>
        <div><h2>React</h2><p>The front-end framework I use within my organisation to create CMS, Callback Solutions and web applications</p></div>
        <div><h2>Angular</h2><p>Developed public facing forms for finacial(check spelling) services using this framework. Creating a front-end that looks good both on 300px wide mobiles and 1920px desktops</p></div>
        <div><h2>Node.js</h2><p>Used in conjunction with <code>Koa</code> and <code>Express</code> to server secure services.</p></div>
        <div><h2>MySQL</h2><p>The RDMS used for persitant data storage, experiance in both Oracle database engine and MS SQL creating transactional SQL procedures.</p></div>
        <div><h2>AWS</h2><p>The cloud platform used to host this portfolio and my organisations mission criticle applications</p></div>
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