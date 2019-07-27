import React from 'react';
import PropTypes from 'prop-types';

import styles from './Style'

const Card = props => {
  
  return (
    <div className={styles.CardWrapper}>
      <h1>{props.title}</h1>
      {props.img}
      <br />
      {props.content}
      <img src='../../assets/AwsCpOrange.png'/>
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string
}

export default Card;