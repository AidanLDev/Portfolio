import React from "react";
import { motion } from "framer-motion";

import styles from "./Style";
/*  Logos  */
import CloudPractitioner from "assets/Certs/CloudPractitionerEmailBadge.png";
import UdemyBurgerCert from "assets/Certs/udemyBurgerBuilder.jpg";


export const AWS = (
  <div className={styles.AWS}>
    <p>
      May 2019, I achieved my AWS cloud practitioner certification.
      Demonstrating an overall understanding of the AWS Cloud along with the
      following skills:
    </p>
    <ul>
      <li>AWS cloud architectural principles</li>
      <li>AWS cloud value proposition</li>
      <li>Key AWS services</li>
      <li>
        Security and compliance aspects of the AWS platform and the shared
        security model
      </li>
      <li>Billing, account management, and pricing models</li>
    </ul>
    <p>
      Continuing on the AWS certification learning path, working on the AWS
      Solutions Architecture
    </p>
    <div className={styles.tooltip}>
      <span className={styles.tooltiptext}>View Badge</span>
      <a
        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-03-14&ci=AWS00694170"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          whileTap={{ scale: 0.8 }}
          src={CloudPractitioner}
          alt="AWS Cloud Practitioner badge"
        />
      </a>
    </div>
  </div>
);

export const react16 = (
  <div className={styles.react16}>
    <img
      height="200"
      width="400"
      alt="React-16 Cert"
      src={UdemyBurgerCert}
    />
    <p>
      Maximilian Schwarzmüller's comprehensive React 16 course. Gained indepth
      knowledge covering the following moduals:
    </p>
    <ul>
      <li>
        Ajax | Accessing a server | Routing | Forms/Validation | Redux | Testing
        | Next.js | Animations | Redux Saga | Hooks
      </li>
    </ul>
  </div>
);

export const javaScriptTrack = (
  <div className={styles.javaScriptTrack}>
    <p>
      Stack JavaScript track, covering the following skills in interactive
      courses:
    </p>
    <ul>
      <li>ES6/ES2015</li>
      <li>jQuery | Ajax</li>
      <li>Node.js | Express | Rest API</li>
      <li>Gulp</li>
      <li>Mongo | Mongoose</li>
      <li>JavaScript Unit Testing</li>
    </ul>
  </div>
);
