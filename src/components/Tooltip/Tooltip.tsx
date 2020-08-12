import React from 'react'

import styles from './Style.module.scss'

interface Props {
  position?:Array<number>;
  active?: boolean;
  text: string;
}

const Tooltip:React.FC<Props> = ({ position, active, text }) => {
  /*  TODO: add fade-in/out animation   */
  const toolTipPosition = {
    left: `${position ? position[0].toString().concat('px') : '0px'}`,
    top: `${position ? position[1].toString().concat('px') : '0px'}`,
    display: `${active ? 'block' : 'none'}` 
  }

  return (
    active ? <div
      className={styles.tooltipWrapper}
      style={toolTipPosition}
    >
      <p>{text}</p>
    </div> : null
  )
}

export default Tooltip;