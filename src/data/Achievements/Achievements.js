import React from 'react'

import styles from './Style'
/*  Logos  */
import CloudPractitioner from 'assets/Certs/CloudPractitionerEmailBadge.png'
import UdemyBurgerCert from 'assets/Certs/udemyBurgerBuilder.jpg'

export const AWS = (
  <div className={styles.aws}>
    <p>May 2019, I achieved my AWS cloud practitioner certification. Demonstrating an overall understanding of the AWS Cloud along with the following skills:
    <ul>
      <li>AWS cloud architectural principles</li>
      <li>AWS cloud value proposition</li>
      <li>Key AWS services</li>
      <li>Security and compliance aspects of the AWS platform and the shared security model</li>
      <li>Billing, account management, and pricing models</li>
    </ul>
    <br/>Continuing on the AWS certification learning path, working on the AWS Solutions Architecture</p>
    <br />
    <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-03-14&ci=AWS00694170" target="_blank" rel="noopener noreferrer">
      <img src={CloudPractitioner} alt="AWS Cloud Practitioner badge"/>
    </a>
  </div>
)

export const react16 = (
  <div className={styles.react16}>
    <img height="200" width="400" alt="React-16 Cert Logo" src={UdemyBurgerCert}/>
    <p>Maximilian Schwarzmüller's comprehensive React 16 course. Gained indepth knowledge covering the following moduals:</p>
    <ul>
      <li>Ajax | Accessing a server | Routing | Forms/Validation | Redux | Testing | Next.js | Animations | Redux Saga | Hooks</li>
    </ul>
  </div>
)

export const javaScriptTrack = (
  <div className={styles.javaScriptTrack}>
    <p>Stack JavaScript track, covering the following skills in interactive courses:</p>
    <ul>
      <li>ES6/ES2015</li>
      <li>jQuery | Ajax</li>
      <li>Node.js | Express | Rest API</li>
      <li>Gulp</li>
      <li>Mongo | Mongoose</li>
      <li>JavaScript Unit Testing</li>
    </ul>
  </div>
)