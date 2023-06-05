import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavLink({ item, active }) {
  const activeClass = active === item.link
  return (
    <Link href={item.link} passHref legacyBehavior>
      <a
        className={styles.linkStyle}
        style={{
          textDecoration: activeClass ? 'underline' : '',
          color: activeClass ? '#ffd700' : '',
        }}
        rel="noreferrer" target="_blank"
      >
        {item.label}
      </a>
    </Link>
  )
}
