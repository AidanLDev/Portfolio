import React from 'react';

import styles from './Style.module.scss';

export const projectsDescription = (
  <p>
    Developing websites/web applications is more than a carear, but a hobby too.
    I have worked on various personal projects:
  </p>
);

export const burgerBuilder = (
  <div className={styles.padding}>
    <p>
      The Burger Builder was developed as part of a Udemy course on React 16;
      including hooks, the context API, Redux and Firebase's NoSQL database. The
      project highlights user authentication and storing persistant data using
      Firebase, a FE application using React with state management from Redux.
      Once authenticated you can create a burger using the controls at the
      bottom of the page and 'order' this burger. Orderes are stored on a NoSQL
      database and can be viewed, if authenticated, in the Orders page
    </p>
  </div>
);

export const nodeShop = (
  <div className={styles.padding}>
    <p>
      This project uses Node.js, GraphQL, and SQL to build a shop and several
      templating engines.
    </p>
  </div>
);

export const userAuth = (
  <div className={styles.padding}>
    <p>
      A project created by team treehouse, teaching Mongoose and Express, to
      create a user authentication system. The project uses hashing and saliting
      techniques to encrypt sensative user information, ring fences routes
      whether a users logged in or not and uses sessions to keep a user logged
      in.
    </p>
  </div>
);

export const marsWeatherApp = (
  <p className={styles.padding}>
    Using the Mars InSight API that provides data from our red neighbour, I have
    created an simple webpage that displays what the weathers like on Mars.
  </p>
);
