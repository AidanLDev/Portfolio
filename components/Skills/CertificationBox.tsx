import { Image } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'

export interface CertBoxProps {
  name: string
  img: string
  link: string
}

export default function CertificationBox({ name, img, link }: CertBoxProps) {
  return (
    <div className={styles.certBox}>
      <a href={link} rel="noreferrer" target="_blank">
        <Tooltip label="Click to verify certificate">
          <Image
            as={motion.img}
            alt={name}
            src={`/images/Certs/${img}`}
            w={500}
            h={400}
            whileHover={{ scale: 1.01 }}
          />
        </Tooltip>
      </a>
    </div>
  )
}
