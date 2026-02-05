"use client";

import { motion } from "framer-motion";
import React from "react";
import { CertBoxProps } from "../../interfaces/skillsInterfaces.types";
import { MotionImageProps } from "../../lib/types";
import styles from "./styles.module.scss";

const MotionImg = motion.img as React.FC<MotionImageProps>;

export default function CertificationBox({ name, img, link }: CertBoxProps) {
  return (
    <div className={styles.certBox}>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={styles.certImageLink}
      >
        <span className={styles.imageTooltip} role="tooltip">
          Click to verify certificate
        </span>
        <MotionImg
          alt={name}
          src={`/images/Certs/${img}`}
          width={500}
          height={400}
          whileHover={{ scale: 1.01 }}
        />
      </a>
    </div>
  );
}
