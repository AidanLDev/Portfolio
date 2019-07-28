import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium';

import styles from './Style'

const Card = props => {

  const transitionStyle = {
    ':hover': {
      width: `calc(${props.imgWidth ? props.imgWidth.toString().concat('px') : '0px'} + 20px)`,
      height: `calc(${props.imgHeight ? props.imgHeight.toString().concat('px') : '0px'} + 20px)`
    }
  }
  console.log(props.imgWidth);
  console.log(props.imgHeight);
  
  return (
    <div className={styles.CardWrapper}>
      <h1>{props.title}</h1>
      {props.imgLink
      ? <a
          href={props.imgLinkLocation}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={props.img}
            alt={props.imgAlt}
            width={props.imgWidth}
            height={props.imgHeight}
            style={props.transition ? transitionStyle : null}/></a>
      : <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          style={props.transition ? transitionStyle : null}/>
      }
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Radium(Card);