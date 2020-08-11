import React from 'react';
import styles from './Style.module.scss';

interface Props {
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
}

const logo: React.FC<Props> = ({ clicked }) => (
  <div className={styles.logoContainer} onClick={clicked}>
    <a href='/'>
      <p className={styles.logo}>Aidan Lowson</p>
    </a>
  </div>
);

export default logo;
