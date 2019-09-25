import React from 'react';
import styles from './Style.scss'
import Button from 'components/Button/Button';

const modal = (props) => (
  <div
    className={styles.modal}
    style={{
      transform: props.show
        ? 'translateY(0)'
        : 'translateY(-100vh)',
      opacity: props.show
        ? '1'
        : '0'
    }}
  >
    {props.children}
    {/* <Button clicked={props.closeModal}>Close</Button> */}
  </div>
);

export default modal;
