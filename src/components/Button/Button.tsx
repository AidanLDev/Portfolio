import React from 'react';

import styles from './Style.module.scss';

interface Props {
  footer?: boolean;
  disabled?: boolean;
  clicked:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const button: React.FC<Props> = ({ footer, disabled, clicked }, props) => {
  const variableStyles = {
    color: footer ? '' : '#131211',
  };
  return (
    <button
      disabled={disabled}
      className={styles.Button}
      onClick={clicked}
      style={variableStyles}
    >
      {props.children}
    </button>
  );
};

export default button;
