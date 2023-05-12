import React from 'react'

import styles from './style.module.scss'
import { Image, Tooltip } from '@chakra-ui/react'

export default function ProjectCard({ img, link, tooltip }) {
  return (
    <div className={styles.projectCard}>
      <a href={link} rel="noreferrer" target="_blank">
        <Tooltip label={tooltip}>
          <Image
            alt={tooltip}
            src={`/images/Projects/${img}`}
            h={240}
            width="100%"
          />
        </Tooltip>
      </a>
    </div>
  )
}
