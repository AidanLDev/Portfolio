import React from "react";
import PropTypes from "prop-types";

import styles from "./Style";

const Card = props => {
  return (
    <div className={styles.CardWrapper}>
      <h2>{props.title}</h2>
      {props.imgLink ? (
        <a
          href={props.imgLinkLocation}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={props.img}
            alt={props.imgAlt}
            width={props.imgWidth}
            height={props.imgHeight}
            className={props.transition ? styles.transitionStyle : null}
          />
        </a>
      ) : (
        <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          className={props.transition ? styles.transitionStyle : null}
        />
      )}
      <br />
      {props.content}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string,
  imgLinkLocation: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  transition: PropTypes.bool,
  content: PropTypes.node
};

export default Card;
