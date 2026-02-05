import Link from "next/link";
import styles from "../styles.module.scss";
import ExperienceCard from "./ExperienceCard";
import { experienceItems } from "./experienceItems";

export default function ExperienceCards() {
  return (
    <div className={styles.experienceCardsContainer}>
      {experienceItems.map((item, idx) => (
        <Link
          href={item.link}
          rel="noreferrer"
          key={`${item.roleName}__${idx}`}
          target="_blank"
        >
          <ExperienceCard {...item} />
        </Link>
      ))}
    </div>
  );
}
