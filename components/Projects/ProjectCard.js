import React, { useState } from 'react'
import styles from './style.module.scss'
import { Image, Tooltip, Text } from '@chakra-ui/react'
import useIsTablet from '../../hooks/useIsTablet'

import { motion } from 'framer-motion'

export default function ProjectCard({ img, link, tooltip, gitHubLink }) {
  const [isShown, setIsShown] = useState(false)
  const isTablet = useIsTablet()
  return (
    <div
      className={styles.projectCard}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <a href={link} rel="noreferrer" target="_blank">
        {gitHubLink && isShown && !isTablet && (
          <Tooltip label="View code on GitHub">
            <div className={styles.ghOverlay}>
              <a href={gitHubLink} rel="noreferrer" target="_blank">
                <Image
                  w="64px"
                  as={motion.img}
                  alt="GitHub Logo"
                  src={'/images/Logos/GithubLogo.png'}
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </div>
          </Tooltip>
        )}
        {gitHubLink && isTablet && (
          <div className={styles.ghOverlay}>
            <a href={gitHubLink} rel="noreferrer" target="_blank">
              <Image
                w="64px"
                as={motion.img}
                alt="GitHub Logo"
                src={'/images/Logos/GithubLogo.png'}
                whileHover={{ scale: 1.1 }}
              />
              {/* <Text>
                View code on GitHub
              </Text> */}
            </a>
          </div>
        )}
        <Tooltip label={tooltip}>
          <Image
            as={motion.img}
            alt={tooltip}
            src={`/images/Projects/${img}`}
            h={240}
            width="100%"
            whileHover={{ scale: 1.1 }}
          />
        </Tooltip>
      </a>
    </div>
  )
}
