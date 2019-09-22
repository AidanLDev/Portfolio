import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navigation from 'containers/Navigation/Navigation'
import Achievements from 'containers/Achievements/Achievements'
import Projects from 'containers/Projects/Projects'
import Footer from 'containers/Footer/Footer'

import styles from './Style'

const App = () => {

  const routes = (
    <Switch>
      <Route path="/" exact component={Achievements} />
      <Route path="/projects" component={Projects} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className={styles.App}>  
    {/* TODO: Background img  */}
      <header className={styles.AppHeader}>
        <Navigation />
      </header>
      <div className={styles.MainContent}>
        {routes}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
