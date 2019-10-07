import React from "react";
import PropTypes from "prop-types";

import styles from "./Style.scss";

const blogCard = props => {

  return (
    <div className={styles.blogCardContainer} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

blogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  clicked: PropTypes.func
};

export default blogCard;