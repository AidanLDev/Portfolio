import React from 'react'

import styles from './Style.module.scss'

const Tooltip = props => {
  /*  TODO: add fade-in/out animation   */
  const toolTipPosition = {
    left: `${props.position ? props.position[0].toString().concat('px') : '0px'}`,
    top: `${props.position ? props.position[1].toString().concat('px') : '0px'}`,
    display: `${props.active ? 'block' : 'none'}` 
  }

  return (
    props.active ? <div
      className={styles.tooltipWrapper}
      style={toolTipPosition}
    >
      <p>{props.text}</p>
    </div> : null
  )
}

export default Tooltip;