import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Style'
import Icon from '@mdi/react';

const NavigationLink = props => {
  const [activeIcon, setActiveIcon] = useState("Proj")
  
  const handleClick = iconClicked => {
    setActiveIcon(iconClicked)
    console.log(activeIcon)
  }

  return (
  <li className={styles.NavLink}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={styles.active}
      onClick={() => handleClick(props.clickedProps)}
    >
      {props.children}
      <Icon
      path={props.iconPath}
      size={1.2}
      color={'green'}
    />
    </NavLink>
  </li>
)}

export default NavigationLink;
