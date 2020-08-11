import React from 'react';
import { motion } from 'framer-motion';
import gitHubLogo from 'assets/Githublogo.png';

import styles from './Style.module.scss';

interface Props {
  title: string;
  imgLinkLocation: string;
  img: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  content: JSX.Element;
  clicked:
    | ((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void)
    | undefined;
  hoverScale: number;
  toolTipText: string;
  projects: string;
}

const Card: React.FC<Props> = ({
  title,
  imgLinkLocation,
  img,
  imgAlt,
  imgWidth,
  imgHeight,
  content,
  clicked,
  hoverScale,
  toolTipText,
  projects,
}) => {
  return (
    <div className={styles.CardWrapper}>
      {projects && (
        <div className={styles.git}>
          <a href={projects} rel='noopener noreferrer' target='_blank'>
            <img src={gitHubLogo} alt='Github' />
          </a>
        </div>
      )}
      <h2>{title}</h2>
      {imgLinkLocation ? (
        <div className={styles.tooltip}>
          <span className={styles.tooltiptext}>
            Checkout the {title} project
          </span>
          <a href={imgLinkLocation} rel='noopener noreferrer' target='_blank'>
            <motion.img
              src={img}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
              whileHover={{ scale: hoverScale || 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
        </div>
      ) : toolTipText ? (
        <div className={styles.tooltip}>
          <span className={styles.tooltiptext}>{toolTipText}</span>
          <img
            src={img}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            onClick={clicked}
          />
        </div>
      ) : (
        <img
          src={img}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          onClick={clicked}
        />
      )}
      <br />
      {content}
    </div>
  );
};

export default Card;
