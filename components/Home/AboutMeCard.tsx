"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";
import ImageLink from "./ImageLink";

import styles from "./style.module.scss";

export default function AboutMeCard() {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardCenter}>
          <Image
            alt="Cartoon avatar"
            src="/images/BromoSoloRoundSmaller.webp"
            width={200}
            height={200}
            priority
            className={styles.cardImg}
          />
        </div>
        <div className={styles.cardCenter}>
          <h2 className={styles.cardHeading}>Software Engineer</h2>
        </div>
      </div>
      <div className={styles.detailsBox}>
        <p className={styles.cardText}>
          Full time Software Engineer, life long learner and programming
          enthusiast.{" "}
          {!isTablet && !isMobile && "Hover for social media links."}
        </p>
        <div className={styles.cardLinks}>
          <ImageLink
            alt="GitHub"
            link="https://github.com/AidanLDev"
            imagePath="/images/Logos/github-512.webp"
          />
          <ImageLink
            alt="YouTube"
            link="https://www.youtube.com/@aidanl94"
            imagePath="/images/Logos/YTNoBackGround.webp"
          />
          <ImageLink
            alt="LinkedIn"
            link="https://www.linkedin.com/in/aidanlowson1/"
            imagePath="/images/Logos/LinkedInLogoRound.webp"
          />
          <ImageLink
            alt="X"
            link="https://twitter.com/AidanL94"
            imagePath="/images/Logos/x_icon.webp"
          />
          <ImageLink
            alt="Instagram"
            link="https://www.instagram.com/lowsonaidan/"
            imagePath="/images/Logos/InstagramCircle.webp"
          />
          <ImageLink
            alt="Personal Blog"
            link="https://blog.aidanlowson.com"
            imagePath="/images/Logos/blogIcon.webp"
          />
        </div>
      </div>
    </div>
  );
}
