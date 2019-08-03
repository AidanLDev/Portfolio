import React from 'react'
import firebaseLogo from 'assets/Tech/firebaseLogo.png'
import reactLogo from 'assets/Tech/ReactLogo.png'
import reduxLogo from 'assets/Tech/Redux.png'

import CloudPractitioner from 'assets/Certs/CloudPractitionerEmailBadge.png'

import styles from './Style'
/*  ############################################################################  */
/*  ####  Projects  ####  */
export const projectsDescription = <p>
Developing websites/web applications is more than a carear, but a hobby too. I have worked on various personal projects:
</p>


export const burgerBuilderDesc = <div className={styles.burgerData}>
  <p>The Burger Builder was developed as part of a Udemy course on React 16; including hooks, the context API, Redux and Firebase's NoSQL database.</p>
  <div className={styles.imgWrapper}></div>
  <img src={firebaseLogo} alt="Firebase logo" width="100" height="100"/>
  <img src={reactLogo} alt="React logo" width="100" height="100"/>
  <img src={reduxLogo} alt="Redux logo" width="130" height="100"/>
  </div>

/*  ############################################################################  */
/*  ####  Achievemnets  ####  */

export const achivementDescription = <p> I'm a lifelong learner, during my endovers I have picked up numerous accolades.</p>
  
export const AWSContent = (
  <div>
    <br />
    <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-03-14&ci=AWS00694170" target="_blank" rel="noopener noreferrer">
      <img src={CloudPractitioner} alt="AWS Cloud Practitioner badge"/>
    </a>
  </div>
)
