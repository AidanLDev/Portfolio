import React from 'react';

import styles from './Style.module.scss';

export const projectsDescription = (
  <p>
    Developing websites/web applications is more than a career, but a hobby too.
    I have worked on various personal projects:
  </p>
);

export const burgerBuilder = (
  <div className={styles.padding}>
    <p>
      The Burger Builder was developed as part of a Udemy course on React 16;
      including hooks, the context API, Redux and Firebase's NoSQL database. The
      project highlights user authentication and storing persistent data using
      Firebase, a FE application using React with state management from Redux.
      Once authenticated you can create a burger using the controls at the
      bottom of the page and 'order' this burger. Orders are stored on a NoSQL
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
      create a user authentication system. The project uses hashing and salting
      techniques to encrypt sensitive user information, ring-fences routes
      whether users are logged in or not and uses sessions to keep a user logged
      in.
    </p>
  </div>
);

export const marsWeatherApp = (
  <p className={styles.padding}>
    Using the Mars InSight API that provides data from our red neighbour, I have
    created a simple webpage that displays what the weathers like on Mars.
  </p>
);

export const fizzBuzz = (
  <p className={styles.padding}>
    My take on the classic Fizz Buzz programming challenge. The program takes
    two numbers It will print Fizz when there's a multiple of the first number
    Buzz when it's a multiple of the second number. When a multiple of both the
    first and second number Fizz Buzz will be printed
  </p>
);

export const trackSearch = (
  <p className={styles.padding}>
    Search through a data set of songs, either by searching for a specific track
    ID or by Artist name. The frontend uses a Bootstrap template and a React
    Frontend to serve the initiative UI. The app is served using Express and the
    API for querying and serving the data is also written using Express. Using
    TypeScript, development for this project was quick as I could utilise
    VSCode's built-in TypeScript support and reduce bugs that may otherwise have
    gone unnoticed.
  </p>
);
