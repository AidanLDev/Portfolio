import React from 'react';
import styles from './Style.module.scss'
import Button from 'components/Button/Button';
import Backdrop from 'components/Backdrop/Backdrop';

const modal = (props) => (
  <div>
    <Backdrop show={props.show} clicked={props.closeModal} />
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
      <Button clicked={props.closeModal}>Close</Button>
    </div>
  </div>
);

export default modal;
