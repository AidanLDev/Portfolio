import React from "react";
import Card from "components/Card/Card";
import Skills from "./skills/Skills";
import * as descriptions from "data/Achievements/Achievements";

/*  Logos  */
// import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import teamTreehouse from "assets/Certs/teamTreeHouse.jpg";
import degree from "assets/Certs/degree.jpeg";

// import Udemy from 'assets/Certs/Udemy.png'
// import UdemyBurgerCert from 'assets/Certs/udemyBurgerBuilder.jpg'

//  Test comment
import styles from "./Style";

const Achievements = props => {
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
        <Card title="Udemy" content={descriptions.react16} />
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
