import React from 'react';
import PropTypes from 'prop-types';

import styles from './Style'

const Card = props => {
  
  return (
    <div className={styles.CardWrapper}>
      {props.content}
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.string
}

export default Card;