import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavLink({ item, active }) {
  return (
    <Link href={item.link} passHref>
      <a
        className={styles.linkStyle}
        style={{ textDecoration: active === '/posts' ? 'underline' : '' }}
      >
        {item.label}
      </a>
    </Link>
  );
}
