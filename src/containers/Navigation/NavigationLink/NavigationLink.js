import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Style'
import Icon from '@mdi/react';

const NavigationLink = props => (
  <li className={styles.NavLink}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={styles.active}
    >
      {props.children}
      <Icon
      path={props.iconPath}
      size={1.2}
      color={'green'}
    />
    </NavLink>
  </li>
)

export default NavigationLink;
