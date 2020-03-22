import React, { useState } from "react";
import Card from "components/Card/Card";
import Skills from "./skills/Skills";
import Modal from "components/Modal/Modal";
import * as descriptions from "data/Achievements/Achievements";

import teamTreehouse from "assets/Certs/teamTreeHouse.jpg";
import degree from "assets/Certs/degree.jpeg";
import UdemyBurgerCert from "assets/Certs/udemyBurgerBuilder.jpg";
import styles from "./Style.module.scss";

const Achievements = props => {
  const [showUdemy, setShowUdemy] = useState(false);
  const [showDeg, setShowDeg] = useState(false);

  const showModal = modalToDisplay => {
    if (modalToDisplay === "udemy") {
      setShowUdemy(true);
    } else if (modalToDisplay === "deg") {
      setShowDeg(true);
    }
  };

  const closeModal = modalDisplayed => {
    if (modalDisplayed === "udemy") {
      setShowUdemy(false);
    } else if (modalDisplayed === "deg") {
      setShowDeg(false);
    }
  };

  const treehousePointsValues = () => {
    return (
      <div>
        <p>
          Completed the 'Stack JavaScript Developer' track, gaining relevant
          skills in becoming a competent JavaScript developer.
        </p>
      </div>
    );
  };

  return (
    <div>
      <Skills />
      <hr />
      <h1>Certifications</h1>
      <div className={styles.achCards}>
        <div className={styles.degreeCard}>
          <Card
            title="BSc Computing"
            img={degree}
            imgWidth={300}
            imgHeight={400}
            clicked={() => showModal("deg")}
            toolTipText="Click to view degree certificate"
          />
        </div>
        <Modal show={showDeg} closeModal={() => closeModal("deg")}>
          <img src={degree} alt="Computing Degree" height="500" width="350" />
          <ul>
            <li>
              Graduated summer of 2016 with a 2:1 in computing from Manchester
              Metropolitan University
            </li>
          </ul>
        </Modal>
        <Card title="AWS" content={descriptions.AWS} />
        <div onClick={() => showModal("udemy")}>
          <Card title="Udemy" content={descriptions.react16} />
        </div>
        {/* Udemy modal */}
        <Modal show={showUdemy} closeModal={() => closeModal("udemy")}>
          <img
            src={UdemyBurgerCert}
            alt="React-16 Cert"
            height="300"
            width="600"
          />
          <ul>
            <li>
              A certificate achieved on completion of Max's React 16 course
            </li>
          </ul>
        </Modal>
        <Card
          title="Team Treehouse"
          content={treehousePointsValues()}
          img={teamTreehouse}
          imgWidth={400}
          imgHeight={200}
          imgAlt="Team Treehouse Logo"
        />
      </div>
      <hr />
      <h1>Projects</h1>
    </div>
  );
};

export default Achievements;
