import React from 'react'

import styles from './Style'

/*  Logos */
import JSLogo from 'assets/Tech/JavaScriptLogo.png'
import ReactLogo from 'assets/Tech/ReactLogo.png'
import AngularLogo from 'assets/Tech/AngularLogo.png'
import SASSLogo from 'assets/Tech/sassLogo.png'
import NodeLogo from 'assets/Tech/Node.png'
import MySQLLogo from 'assets/Tech/mySQLLogo.png'
import AWSLogo from 'assets/Tech/AWSLogo.png'

const Skills = props => {

  const imgHeight = "50";
  const imgWidth = "50";

  return (
    <div>
      <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <div>
            <h2>JavaScript <img src={JSLogo} height={imgHeight} width={imgWidth} alt="JavaScript Logo"/></h2>
            <p>From front-end frameworks to using JQuery to vanilla JavaScript when writting my first web applications. JavaScript has been a constant in my web development carear.</p>
          </div>
          <div>
            <h2>React <img src={ReactLogo} height={imgHeight} width={imgWidth} alt="React Logo"/></h2>
            <p>The front-end framework I use within my organisation to create CMS, Callback Solutions and web applications</p>
          </div>
          <div>
            <h2>Angular <img src={AngularLogo} height={imgHeight} width={imgWidth} alt="Angular Logo"/></h2>
            <p>Developed public facing forms for finacial(check spelling) services using this framework. Creating a front-end that looks good both on 300px wide mobiles and 1920px desktops</p>
          </div>
          <div>
            <h2>SASS <img src={SASSLogo} height={imgHeight} width={imgWidth} alt="SASS Logo"/></h2>
            <p>CSS prefixing. Re-usable colour pallets/variables/mixins simplifies consistancy</p>
          </div>
          <div>
            <h2>Node.js <img src={NodeLogo} height={imgHeight} width={imgWidth} alt="Node Logo"/></h2>
            <p>Used in conjunction with Koa and Express to server secure services.</p>
          </div>
          <div>
            <h2>MySQL <img src={MySQLLogo} height={imgHeight} width={imgWidth} alt="MySQL Logo"/></h2>
            <p>The RDMS used for persitant data storage, experiance in both Oracle database engine and MS SQL creating transactional SQL procedures.</p>
          </div>
          <div>
            <h2>AWS <img src={AWSLogo} height={imgHeight} width={imgWidth} alt="AWS Logo"/></h2>
            <p>The cloud platform used to host this portfolio and my organisations mission criticle applications</p>
          </div>
        </div>
    </div>
  );
}

export default Skills;