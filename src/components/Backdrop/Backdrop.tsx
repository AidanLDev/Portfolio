import React from 'react';
import styles from './Style.module.scss';

interface Props {
  clicked:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  show: boolean;
}

const backdrop: React.FC<Props> = ({ clicked, show }) =>
  show ? <div className={styles.backdrop} onClick={clicked}></div> : null;

export default backdrop;
