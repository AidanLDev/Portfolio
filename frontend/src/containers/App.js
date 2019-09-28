import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

import Navigation from "containers/Navigation/Navigation";
import Portfolio from "pages/Portfolio/Portfolio";
import Projects from "containers/Projects/Projects";
import Footer from "containers/Footer/Footer";

import styles from "./Style";
import Sidedrawer from "./Navigation/Sidedrawer/Sidedrawer";

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const routes = (
    <Switch>
      <Route path="/" exact component={Portfolio} />
      <Route path="/projects" component={Projects} />
      <Redirect to="/" />
    </Switch>
  );

  const closeSideDrawer = () => setShowSideDrawer(false);
  const openSideDrawer = () => setShowSideDrawer(true);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <nav className={styles.desktopOnly}>
          <Navigation />
        </nav>
        <nav>
          <div className={styles.mobileOnly}>
            <Icon
              path={mdiMenu}
              size={2}
              color={"white"}
              onClick={openSideDrawer}
            />
            {/* Logo */}
          </div>
          {showSideDrawer && (
            <Sidedrawer
              showDrawer={showSideDrawer}
              closeDrawer={closeSideDrawer}
            />
          )}
        </nav>
      </header>
      <div className={styles.MainContent}>{routes}</div>
      <Footer />
    </div>
  );
};

export default App;
