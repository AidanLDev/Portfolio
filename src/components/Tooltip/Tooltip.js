import React from 'react'

import styles from './Style'

const Tooltip = props => {

  console.log('Position', props.position)

  const toolTipPosition = {
    left: `${props.position ? props.position[0].toString().concat('px') : '0px'}`,
    top: `${props.position ? props.position[1].toString().concat('px') : '0px'}`
  }

  return (
    <div
      className={styles.tooltipWrapper}
      style={toolTipPosition}
    >
      {props.active ? <p>{props.text}</p> : null}
    </div>
  )
}

export default Tooltip;