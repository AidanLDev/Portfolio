import { ITimelineItem } from "@/interfaces/timelineInterfaces.types";
import styles from "../styles.module.scss";

export default function ExperienceCard(props: ITimelineItem) {
  return (
    <div className={styles.experienceCard}>
      <h3>{props.roleName}</h3>
      <div className={styles.companyName}>
        <h4>{props.companyName}</h4>
        <span>
          {props.startDate} - {props.endDate}
        </span>
      </div>
      <p>{props.description}</p>
      <ul>
        {props.bullets.map((bullet, idx) => (
          <li key={`${idx}`}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
