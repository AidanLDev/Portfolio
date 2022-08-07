import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function NavLink({ item }) {
  return (
    <Link href={item.link} passHref>
      <a className={styles.linkStyle}>{item.label}</a>
    </Link>
  );
}
