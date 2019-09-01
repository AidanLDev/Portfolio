import React from 'react'

import styles from './Style'

export const projectsDescription = <p>
Developing websites/web applications is more than a carear, but a hobby too. I have worked on various personal projects:
</p>


export const burgerBuilder = <div className={styles.burgerBuilder}>
  <p>The Burger Builder was developed as part of a Udemy course on React 16; including hooks, the context API, Redux and Firebase's NoSQL database. The project highlights user authentication and storing persistant data using Firebase, a FE application using React with state management from Redux. Once authenticated you can create a burger using the controls at the bottom of the page and 'order' this burger. Orderes are stored on a NoSQL database and can be viewed, if authenticated, in the Orders page</p>
  {/* <div className={styles.imgWrapper}></div>
  <img src={firebaseLogo} alt="Firebase logo" width="100" height="100"/>
  <img src={reactLogo} alt="React logo" width="100" height="100"/>
  <img src={reduxLogo} alt="Redux logo" width="130" height="100"/> */}
  </div>

export const nodeShop = <div className={styles.nodeShop}>
  <p>This project uses Node.js, GraphQL, and SQL to build a shop and several templating engines.</p>
  {/* <img src={graphQLLogo} alt="graphQL logo" width="100" height="100"/>
  <img src={nodeLogo} alt="node.js logo" width="100" height="100"/>
  <img src={sqlLogo} alt="sql logo" width="100" height="100"/> */}
</div>

export const userAuth = <div className={styles.userAuth}>
  <p>A project created by team treehouse, teaching Mongoose, the MongoDB framework and Express, the Node.js framework, to create a user authentication system. The project uses hashing and saliting techniques to encrypt sensative user information in a MongoDB.</p>
</div>