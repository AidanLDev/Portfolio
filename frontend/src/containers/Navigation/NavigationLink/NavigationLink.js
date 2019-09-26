import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Style";
import Icon from "@mdi/react";

const NavigationLink = props => (
  <motion.li
    className={styles.NavLink}
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.2 }}
  >
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={styles.active}
    >
      {props.children}
      {props.iconPath ? (
        <Icon path={props.iconPath} size={1.2} color={"#faebd7"} />
      ) : null}
    </NavLink>
  </motion.li>
);

export default NavigationLink;
