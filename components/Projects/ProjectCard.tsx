import React from 'react'
import styles from './style.module.scss'
import { Box, Image, Text, Tooltip } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { motion } from 'framer-motion'

export interface Project {
  img: string
  link: string
  title: string
  gitHubLink: string
  date: string
  description: string
  tags: string[]
}

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
    <Box className={styles.projectCard}>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className={styles.projectLink}
      >
        <Tooltip label={`Ckick to view - ${title}`}>
          <Image
            as={motion.img}
            alt={title}
            src={`/images/Projects/${img}`}
            h={320}
            width="100%"
            whileHover={{ scale: 1.1 }}
          />
        </Tooltip>
      </a>
      <Box className={styles.projectCardContent}>
        <Box className={styles.projectHeading}>
          <Box className={styles.projectTitleTagsContainer}>
            <Text className={styles.heading}>{title}</Text>
            <Box className={styles.tags}>
              {tags.map((tag, idx) => (
                <Text key={`${tag}__${idx}`}>{tag}</Text>
              ))}
            </Box>
          </Box>
          <Text className={styles.date}>Created Date - {date}</Text>
        </Box>
        <Box className={styles.descriptionBox}>
          <Text>{description}</Text>
        </Box>
        <Box className={styles.links}>
          <a href={gitHubLink} rel="noreferrer" target="_blank">
            <AiFillGithub /><Text>GitHub</Text>
          </a>
          <a href={link} rel="noreferrer" target="_blank" className={styles.viewProjectsLink}>
            <Text>View Project</Text>
            <BsArrowRightShort />
          </a>
        </Box>
      </Box>
    </Box>
  )
}
