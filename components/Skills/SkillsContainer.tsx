import React from "react";
import Certifications from "./Certifications";

import Skills from "./Skills";
import styles from "./styles.module.scss";

export default function SkillsContainer() {
  return (
    <div className={`${styles.skillsContainer} containerPadding`}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Skills</h2>
      </div>
      <Skills />
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Certifications</h2>
      </div>
      <Certifications />
    </div>
  );
}
