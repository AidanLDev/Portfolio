import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./Style.module.scss";

const blogCard = props => {
  return (
    <NavLink to={"/blog/" + props.route} className={styles.blogLinks}>
      <div className={styles.blogCardContainer} onClick={props.clicked}>
        <h1>{props.title}</h1>
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
