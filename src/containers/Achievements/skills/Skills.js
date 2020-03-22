import React from "react";

import styles from "./Style.scss";

/*  Logos */
import JSLogo from "assets/Tech/JavaScriptLogo.png";
import ReactLogo from "assets/Tech/ReactLogo.png";
import AngularLogo from "assets/Tech/AngularLogo.png";
import SASSLogo from "assets/Tech/sassLogo.png";
import NodeLogo from "assets/Tech/Node.png";
import MySQLLogo from "assets/Tech/mySQLLogo.png";
import MongoLogo from "assets/Tech/mongoDBLogo.png";
import AWSLogo from "assets/Tech/AWSLogo.png";
import GitLogo from "assets/Tech/GitLogo.png";
import WebpackLogo from "assets/Tech/webpackLogo.png";
import DockerLogo from "assets/Tech/DockerLogo.png";
import SolidityLogo from "assets/Tech/SolidityLogo.png";

const Skills = props => {
  const imgHeight = "50";
  const imgWidth = "50";

  return (
    <div>
      <h1>Technology Stack</h1>
      <div className={styles.skillsContainer}>
        <div>
          <img
            src={JSLogo}
            height={imgHeight}
            width={imgWidth}
            alt="JavaScript Logo"
          />
          <h2>JavaScript</h2>
          {/* <p>From front-end frameworks to using JQuery to vanilla JavaScript when writting my first web applications. JavaScript has been a constant in my web development carear.</p> */}
        </div>
        <div>
          <img
            src={ReactLogo}
            height={imgHeight}
            width={imgWidth}
            alt="React Logo"
          />
          <h2>React</h2>
          {/* <p>The front-end framework I use within my organisation to create CMS, Callback Solutions and web applications</p> */}
        </div>
        <div>
          <img
            src={AngularLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Angular Logo"
          />
          <h2>Angular</h2>
          {/* <p>Developed public facing forms for finacial(check spelling) services using this framework. Creating a front-end that looks good both on 300px wide mobiles and 1920px desktops</p> */}
        </div>
        <div>
          <img
            src={SASSLogo}
            height={imgHeight}
            width={imgWidth}
            alt="SASS Logo"
          />
          <h2>SASS</h2>
          {/* <p>CSS prefixing. Re-usable colour pallets/variables/mixins simplifies consistancy</p> */}
        </div>
        <div>
          <img
            src={NodeLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Node Logo"
          />
          <h2>Node.js</h2>
          {/* <p>Used in conjunction with Koa and Express to server secure services.</p> */}
        </div>
        <div>
          <img
            src={MySQLLogo}
            height={imgHeight}
            width={imgWidth}
            alt="MySQL Logo"
          />
          <h2>MySQL</h2>
          {/* <p>The RDMS used for persitant data storage, experiance in both Oracle database engine and MS SQL creating transactional SQL procedures.</p> */}
        </div>
        <div>
          <img
            src={MongoLogo}
            height={imgHeight}
            width={imgWidth}
            alt="MongoDB Logo"
          />
          <h2>MongoDB</h2>
          {/* <p>NoSQL alternative to traditional RDMS</p> */}
        </div>
        <div>
          <img
            src={AWSLogo}
            height={imgHeight}
            width={imgWidth}
            alt="AWS Logo"
          />
          <h2>AWS</h2>
          {/* <p>The cloud platform used to host this portfolio and my organisations mission criticle applications</p> */}
        </div>
        <div>
          <img
            src={GitLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Git Logo"
          />
          <h2>GIT</h2>
          {/* <p></p> */}
        </div>
        <div>
          <img
            src={WebpackLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Webpack Logo"
          />
          <h2>Webpack</h2>
          {/* <p></p> */}
        </div>
        <div>
          <img
            src={DockerLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Docker Logo"
          />
          <h2>Docker</h2>
          {/* <p>TODO</p> */}
        </div>
        <div>
          <img
            src={SolidityLogo}
            height={imgHeight}
            width={imgWidth}
            alt="Solidity Logo"
          />
          <h2>Solidity </h2>
          {/* <p>The language used to create de-centralised Etheruim applications using the latest Block Chain technology</p> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
