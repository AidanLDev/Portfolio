import Subtitle from "../ui/text/Subtitle";

import styles from "./styles.module.scss"

export default function ExperienceTimelineTitle() {
  return (
    <div className={styles.experienceTimelineTitle}>
      <Subtitle title="Work" />
      <Subtitle title="Experience" colour="secondary" />
    </div>
  );
}
