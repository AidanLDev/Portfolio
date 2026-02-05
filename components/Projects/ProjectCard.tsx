"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Project } from "../../interfaces/projectInterfaces.types";
import { MotionImageProps } from "../../lib/types";
import styles from "./style.module.scss";

const cardVariants: Variants = {
  offscreen: {
    scale: 0.7, // Start smaller
    opacity: 0, // Start fully transparent
  },
  onscreen: {
    scale: 1, // Grow to full size
    opacity: 1, // Become fully opaque
    transition: {
      type: "tween",
      duration: 0.6,
    },
  },
};

const MotionImg = motion.img as React.FC<MotionImageProps>;

export default function ProjectCard({
  img,
  link,
  title,
  gitHubLink,
  date,
  description,
  tags,
}: Project) {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
    >
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={`${styles.projectLink} ${styles.projectImageLink}`}
      >
        <span className={styles.imageTooltip} role="tooltip">
          {`Click to view - ${title}`}
        </span>
        <MotionImg
          alt={title}
          src={`/images/Projects/${img}`}
          width="100%"
          whileHover={{ scale: 1.02 }}
        />
      </a>
      <div className={styles.projectCardContent}>
        <div className={styles.projectHeading}>
          <div className={styles.projectTitleTagsContainer}>
            <h3 className={styles.heading}>{title}</h3>
            <div className={styles.tags}>
              {tags.map((tag, idx) => (
                <p key={`${tag}__${idx}`}>{tag}</p>
              ))}
            </div>
          </div>
          <p className={styles.date}>Created Date - {date}</p>
        </div>
        <div className={styles.descriptionBox}>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          <a href={gitHubLink} rel="noreferrer" target="_blank">
            <Image
              src="/icons/githubIcon.svg"
              alt="GitHub"
              width={32}
              height={32}
              className={styles.githubIcon}
            />
            <span>GitHub</span>
          </a>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className={styles.viewProjectsLink}
          >
            <span>View Project</span>
            <Image
              src="/icons/rightArrowIcon.svg"
              alt="right arrow"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
