import React from "react";
import Logo from "components/Logo/Logo";
import NavigationLink from "./NavigationLink/NavigationLink";
import { mdiCodeBraces, mdiPencil } from "@mdi/js";

import styles from "./Style";

const Navigation = props => {
  return (
    <div className={styles.navBar}>
      <div className={[styles.leftNavBar, styles.mobileOnly].join(" ")}>
        <Logo />
      </div>
      <ul className={styles.linkContainer}>
        <NavigationLink link="/" exact iconPath={mdiCodeBraces}>
          Portfolio
        </NavigationLink>
        <NavigationLink link="/blog" exact iconPath={mdiPencil}>
          (Blog - Coming Soon)
        </NavigationLink>
      </ul>
    </div>
  );
};

export default Navigation;
