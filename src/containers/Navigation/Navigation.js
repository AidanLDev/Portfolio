import React from 'react'
import NavigationLink from './NavigationLink/NavigationLink'
import Icon from '@mdi/react'
import { mdiCodeBraces } from '@mdi/js'
import { mdiTrophy } from '@mdi/js'

import styles from './Style'

const Navigation = props => {
  console.log(props);
  console.log(window.location)
  console.log(props.history)
  return (
    <div className={styles.navBar}>
      <ul className={styles.linkContainer}>
        <NavigationLink
          link="/"
          exact
          iconPath={mdiCodeBraces}
          clickedProps="Proj">
            Projects
        </NavigationLink>
        <NavigationLink
          link="/achievements"
          exact
          iconPath={mdiTrophy}
          clickedProps="Achiv">
            Achievements
        </NavigationLink>
      </ul>
    </div>
  )
}

export default Navigation;