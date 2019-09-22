import React from 'react';

import styles from './Style';

const button = (props) => (
    <button
      disabled={props.disabled}
      className={styles.Button}
      onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;