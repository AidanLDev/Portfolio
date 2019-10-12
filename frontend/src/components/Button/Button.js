import React from "react";

import styles from "./Style";

const button = props => {
  const variableStyles = {
    color: props.footer ? "" : "#131211"
  };
  return (
    <button
      disabled={props.disabled}
      className={styles.Button}
      onClick={props.clicked}
      style={variableStyles}
    >
      {props.children}
    </button>
  );
};

export default button;
