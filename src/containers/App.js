import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

import Navigation from "containers/Navigation/Navigation";
import Portfolio from "pages/Portfolio/Portfolio";
import BlogSearch from "pages/BlogSearch/BlogSearch";
import Blog from "pages/Blog/Blog";
import Map from "pages/Map/Map";
import Footer from "containers/Footer/Footer";

import styles from "./Style.scss";
import Sidedrawer from "./Navigation/Sidedrawer/Sidedrawer";

const App = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const routes = (
    <Switch>
      <Route path="/" exact component={Portfolio} />
      <Route exact path="/blog/search" component={BlogSearch} />
      <Route path="/blog" component={Blog} />
      <Route path="/map" component={Map} />
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
