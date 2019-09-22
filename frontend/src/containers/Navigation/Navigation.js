import React from 'react'
import NavigationLink from './NavigationLink/NavigationLink'
import { mdiCodeBraces } from '@mdi/js'
import { mdiTrophy } from '@mdi/js'

import styles from './Style'

const Navigation = props => (
  <div className={styles.navBar}>
    <ul className={styles.linkContainer}>
      <NavigationLink
        link="/"
        exact
        iconPath={mdiTrophy}>
           Skills/Achievements
      </NavigationLink>
      <NavigationLink
        link="/projects"
        exact
        iconPath={mdiCodeBraces}>
         Projects
      </NavigationLink>
    </ul>
  </div>
)


export default Navigation;