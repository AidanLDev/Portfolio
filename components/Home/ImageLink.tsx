import { motion } from "framer-motion";
import React from "react";
import { ImageLinkProps } from "../../interfaces/homeInterfaces";
import { MotionImageProps } from "../../lib/types";
import styles from "./style.module.scss";

const MotionImg = motion.img as React.FC<MotionImageProps>;

export default function ImageLink({
  link,
  imagePath,
  alt,
}: Readonly<ImageLinkProps>) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className={styles.imageLink}
    >
      <span className={styles.imageTooltip} role="tooltip">
        {alt}
      </span>
      <MotionImg alt={alt} src={imagePath} whileHover={{ scale: 1.1 }} />
    </a>
  );
}
