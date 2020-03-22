import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Style";
import Icon from "@mdi/react";

const NavigationLink = props => {
  const capitalizeFirstLetter = string =>
    string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <li
      className={styles.NavLink}
      onClick={() => {
        if (window.location.pathname === "/") {
          return (document.title = "Aidan Lowson | Portfolio");
        }
        return (document.title = `Aidan Lowson | ${capitalizeFirstLetter(
          window.location.pathname.split("/")[1]
        )}`);
      }}
    >
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={styles.active}
      >
        {props.children}
        {props.iconPath ? (
          <Icon path={props.iconPath} size={1} color={"rgb(181, 145, 0)"} />
        ) : null}
      </NavLink>
    </li>
  );
};

export default NavigationLink;
