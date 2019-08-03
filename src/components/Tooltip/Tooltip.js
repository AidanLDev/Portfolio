import React from 'react'

import styles from './Style'

const Tooltip = props => {

  console.log('Here state: ', props.active)

  return (
    <div
      className={styles.tooltipWrapper}
    >
      {props.active ? <p>{props.text}</p> : null}
    </div>
  )
}

export default Tooltip;