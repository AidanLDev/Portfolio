'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { Project } from '../../interfaces/projectInterfaces.types'
import styles from './style.module.scss'

const cardVariants: Variants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
}

export default function ProjectCard({ img, link, title, gitHubLink, description, tags }: Project) {
  return (
    <motion.div
      className={styles.card}
      viewport={{ once: true, amount: 0.15 }}
      initial='offscreen'
      whileInView='onscreen'
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <a
        href={link}
        rel='noreferrer'
        target='_blank'
        className={styles.imageLink}
        aria-label={`View ${title}`}
      >
        <div className={styles.imageWrapper}>
          <Image
            alt={title}
            src={`/images/Projects/${img}`}
            fill
            className={styles.cardImage}
            sizes='(max-width: 575px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />
        </div>
      </a>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={`${tag}__${idx}`} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={gitHubLink} rel='noreferrer' target='_blank' className={styles.linkBtn}>
            <Image
              src='/icons/githubIcon.svg'
              alt='GitHub'
              width={16}
              height={16}
              className={styles.linkIcon}
            />
            <span>Code</span>
          </a>
          <a href={link} rel='noreferrer' target='_blank' className={styles.linkBtn}>
            <Image
              src='/icons/rightArrowIcon.svg'
              alt='Demo'
              width={16}
              height={16}
              className={styles.linkIcon}
            />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
