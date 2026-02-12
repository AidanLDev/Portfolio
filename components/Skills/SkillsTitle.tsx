import Subtitle from "@/components/ui/text/Subtitle";

import styles from "./styles.module.scss";

export default function SkillsTitle() {
  return (
    <div className={styles.skillsTitle} id="skills-header">
      <Subtitle title="Technical" />
      <Subtitle title="Skills" colour="secondary" />
    </div>
  );
}
