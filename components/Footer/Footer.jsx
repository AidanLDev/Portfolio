import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link href='#nav-bar'>
        <span>Back to top</span>
        <FaArrowAltCircleUp />
      </Link>
    </footer>
  )
}
