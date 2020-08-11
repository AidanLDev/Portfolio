import React from 'react';
import styles from './Style.module.scss';
import Button from 'components/Button/Button';
import Backdrop from 'components/Backdrop/Backdrop';

interface Props {
  closeModal: () => void;
  show: boolean;
}

const modal: React.FC<Props> = ({ closeModal, show }, props) => (
  <div>
    <Backdrop show={show} clicked={closeModal} />
    <div
      className={styles.modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {props.children}
      <Button clicked={closeModal}>Close</Button>
    </div>
  </div>
);

export default modal;
