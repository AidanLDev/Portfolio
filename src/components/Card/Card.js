import React from 'react'
import PropTypes from 'prop-types'

import styles from './Style'

const Card = props => {
  
  return (
    <div className={styles.CardWrapper}>
      <h1>{props.title}</h1>
      {props.imgLink
      ? <a href={props.imgLinkLocation} rel="noopener noreferrer" target="_blank"><img src={props.img} alt={props.imgAlt} width={props.imgWidth} height={props.imgHeight}/></a>
      : <img src={props.img} alt={props.imgAlt} width={props.imgWidth} height={props.imgHeight}/>
      }
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Card;