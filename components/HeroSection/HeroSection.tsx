import HeroTitle from "../ui/text/HeroTitle";
import Subtitle from "../ui/text/Subtitle";
import Avatar from "./Avatar/Avatar";
import HeroLinks from "./HeroLinks/HeroLinks";
import ScrollDown from "./ScrollDown";

import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <Avatar />
      <div className={styles.textSection}>
        <HeroTitle />
        <Subtitle title="Full-Stack Software Engineer" />
        <p>
          Working as a developer since 2018, I’m curious about all things
          software and have worked across the full stack, from frontend to
          backend and DevOps.
        </p>
        <HeroLinks />
      </div>

      <ScrollDown />
    </section>
  );
}
