import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import styles from "./Style";

const Card = props => {
  return (
    <div className={styles.CardWrapper}>
      <h2>{props.title}</h2>
      {props.imgLinkLocation ? (
        <div className={styles.tooltip}>
          <span className={styles.tooltiptext}>
            Checkout the {props.title} project
          </span>
          <a
            href={props.imgLinkLocation}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.img
              src={props.img}
              alt={props.imgAlt}
              width={props.imgWidth}
              height={props.imgHeight}
              whileHover={{ scale: props.hoverScale }}
              whileTap={{ scale: 0.9 }}
            />
          </a>
        </div>
      ) : (
        <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          onClick={props.clicked}
        />
      )}
      <br />
      {props.content}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgLinkLocation: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  content: PropTypes.node,
  clicked: PropTypes.func,
  hoverScale: PropTypes.number
};

export default Card;
