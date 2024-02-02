import React from 'react'
import Link from 'next/link'
import { NavLinkProps } from '../../interfaces/navbarInterfaces'
import styles from './styles.module.scss'

export default function NavLink({ item, active }: NavLinkProps) {
  const activeClass = active === item.link
  return (
    <Link href={item.link} passHref legacyBehavior>
      <a
        className={`${styles.linkStyle} ${activeClass ? styles.active : ''}`}
        rel="noreferrer"
        target="_blank"
      >
        <span className={styles.linkLabel}>{item.label}</span>
      </a>
    </Link>
  )
}
