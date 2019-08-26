import React from 'react'

import styles from './Style'

/*  BurgerBuilder Photos  */
import firebaseLogo from 'assets/Tech/firebaseLogo.png'
import reactLogo from 'assets/Tech/ReactLogo.png'
import reduxLogo from 'assets/Tech/Redux.png'
/*  Node Photos  */
import graphQLLogo from 'assets/Tech/graphQLLogo.png'
import sqlLogo from 'assets/Tech/SQLLogo.png'
import nodeLogo from 'assets/Tech/Node.png'

/*  Achievement Photos  */
import CloudPractitioner from 'assets/Certs/CloudPractitionerEmailBadge.png'


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

export const ssShopDesc = <div className={styles.ssShopData}>
  <p>Another project started from a Udemy course. This project uses Node.js, GraphQL, and SQL to build a shop served from the backend?</p>
  <img src={graphQLLogo} alt="graphQL logo" width="100" height="100"/>
  <img src={nodeLogo} alt="node.js logo" width="100" height="100"/>
  <img src={sqlLogo} alt="sql logo" width="100" height="100"/>
</div>

export const userAuth = <div>
  <p>A project created by team treehouse, teaching Mongoose, the MongoDB framework and Express, the Node.js framework, create a user authentication system. The project uses hashing and saliting techniques to encrypt sensative user information in a MongoDB</p>
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

export const TreehouseContent = (
  <div>
    <br />
  </div>
)