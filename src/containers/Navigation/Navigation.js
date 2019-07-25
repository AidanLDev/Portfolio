import React from 'react'
import NavigationLink from './NavigationLink/NavigationLink'

import styles from './Style'

const Navigation = props => {

  return (
    <div className={styles.navBar}>
      <ul>
        <NavigationLink link="/" exact>Projects</NavigationLink>
        <NavigationLink link="/achievements" exact>Achievements</NavigationLink>
      </ul>
    </div>
  )
}

export default Navigation;