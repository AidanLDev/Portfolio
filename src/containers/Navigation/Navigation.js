import React from 'react'
import NavigationLink from './NavigationLink/NavigationLink'
import Icon from '@mdi/react'
import { mdiCodeBraces } from '@mdi/js'
import { mdiTrophy } from '@mdi/js'

import styles from './Style'

const Navigation = props => {
  console.log(props);
  console.log(window.location)
  return (
    <div className={styles.navBar}>
      <ul className={styles.linkContainer}>
        <NavigationLink
          link="/"
          exact >
            <Icon
              path={mdiCodeBraces}
              size={1}
              color='#ccc'
            />
              Projects
        </NavigationLink>
        <NavigationLink
          link="/achievements"
          exact>
            <Icon
              path={mdiTrophy}
              size={1}
            />
          Achievements
        </NavigationLink>
      </ul>
    </div>
  )
}

export default Navigation;