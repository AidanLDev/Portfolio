import React from 'react'
import Navigation from 'containers/Navigation/Navigation'

import Achievements from 'containers/Achievements/Achievements'
import Projects from 'containers/Projects/Projects'

import styles from './Style'

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Navigation />
      </header>
      <div className={styles.MainContent}>
        <Achievements />
        <Projects />
      </div>
    </div>
  );
}

export default App;
