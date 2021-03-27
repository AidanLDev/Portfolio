import React from 'react';

import styles from './Style.module.scss';

interface Props {
  disabled?: boolean;
  clicked?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const button: React.FC<Props> = ({ disabled, clicked }, props) => {

  return (
    <button
      disabled={disabled}
      className={styles.Button}
      onClick={clicked}
    >
      {props.children}
      {props.text}
    </button>
  );
};

export default button;
