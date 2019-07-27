import React from 'react'
import PropTypes from 'prop-types'

import styles from './Style'

const Card = props => {
  
  return (
    <div className={styles.CardWrapper}>
      <h1>{props.title}</h1>
      {props.imgLink
      ? <a href={props.imgLinkLocation} target="_blank"><img src={props.img} imgAlt={props.imgAlt} width={props.imgWidth} height={props.imgHeight}/></a>
      : <img src={props.img} imgAlt={props.imgAlt} width={props.imgWidth} height={props.imgHeight}/>
      }
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string
}

export default Card;