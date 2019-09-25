import React, { useState } from "react";
import Card from "components/Card/Card";
import Skills from "./skills/Skills";
import Modal from "components/Modal/Modal";
import * as descriptions from "data/Achievements/Achievements";

/*  Logos  */
// import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import teamTreehouse from "assets/Certs/teamTreeHouse.jpg";
import degree from "assets/Certs/degree.jpeg";

// import Udemy from 'assets/Certs/Udemy.png'
import UdemyBurgerCert from 'assets/Certs/udemyBurgerBuilder.jpg'

//  Test comment
import styles from "./Style";

const Achievements = props => {
  
  const [showUdemy, setShowUdemy] = useState(false);

  const handleShowUdemy = () => setShowUdemy(true);

  const closeModal = () => setShowUdemy(false);

  return (
    <div>
      {/* {descriptions.achivementDescription} */}
      <h1>Now with an express backend!</h1>
      <Skills />
      <h1>Certifications</h1>
      <div className={styles.achCards}>
        {/* TODO: Create model that opens up this image onclick */}
        <Card
          title="BSc Computing"
          img={degree}
          imgWidth={300}
          imgHeight={400}
        />
        <Card title="AWS" content={descriptions.AWS} />
        <div onClick={handleShowUdemy}>
          <Card title="Udemy" content={descriptions.react16} />
        </div>
        <Modal show={showUdemy}>
          <img
            src={UdemyBurgerCert}
            alt="React-16 Cert"
            height="300"
            width="600"
          />
          <ul>
            <li>A certificate achieved on completion of Max's React 16 course</li>
          </ul>
        </Modal>
        <Card
          title="Team Treehouse"
          content={descriptions.javaScriptTrack}
          img={teamTreehouse}
          imgWidth={400}
          imgHeight={200}
          imgAlt="Team Treehouse Logo"
        />
      </div>
    </div>
  );
};

export default Achievements;
