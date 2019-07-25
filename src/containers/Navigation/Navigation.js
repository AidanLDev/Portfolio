import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Style';

const Navigation = props => {

  return (
    <div className={styles.navBar}>
      <ul>
        <li>Link one</li>
        <li>Link two</li>
      </ul>
    </div>
  )
}

export default Navigation;