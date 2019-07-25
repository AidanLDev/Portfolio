import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Style'

const NavigationLink = props => (
  <li className={styles.NavLink}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={styles.active}
    >
      {props.children}
    </NavLink>
  </li>
)

export default NavigationLink;
