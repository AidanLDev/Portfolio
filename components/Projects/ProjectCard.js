import React, { useState } from 'react'

import styles from './style.module.scss'
import { Image, Tooltip } from '@chakra-ui/react'

import { motion } from 'framer-motion'

export default function ProjectCard({ img, link, tooltip, gitHubLink }) {
  const [isShown, setIsShown] = useState(true) // True for deving purposes
  return (
    <div
      className={styles.projectCard}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <a href={link} rel="noreferrer" target="_blank">
        {/* Use this JS fiddle to centre this badboy http://jsfiddle.net/6xo11zwv/2/ */}
        {gitHubLink && isShown && <div>Overlay with GH Link</div>}
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
