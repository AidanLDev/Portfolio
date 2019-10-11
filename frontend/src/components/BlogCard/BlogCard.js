import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./Style.scss";

const blogCard = props => {
  return (
    <NavLink to={"/blog/" + props.route} className={styles.blogLinks}>
      <div className={styles.blogCardContainer} onClick={props.clicked}>
        <h1 className={styles.blogHeading}>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </NavLink>
  );
};

blogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  clicked: PropTypes.func,
  route: PropTypes.string
};

export default blogCard;
