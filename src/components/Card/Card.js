import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'components/Tooltip/Tooltip'

import styles from './Style'

const Card = props => {

  const [active, setActive] = useState(false);
  const [mousePosition, setMousePosition] = useState(null);

  const handleMouseOver = e => {
    setTimeout(function(){setActive(true)}, 1200)
    setMousePosition([e.pageX, e.pageY])
  }
  const handleMouseLeave = () => setActive(false);
  
  return (
    <div className={styles.CardWrapper} onMouseLeave={handleMouseLeave}>
       <Tooltip text={`Click to navigate to the ${props.imgAlt}`} active={active} position={mousePosition}/>
      <h2>{props.title}</h2>
      {props.imgLink
      ? <a
          href={props.imgLinkLocation}
          rel="noopener noreferrer"
          target="_blank"
          onMouseLeave={handleMouseLeave}
        >
          
          <img
            src={props.img}
            alt={props.imgAlt}
            width={props.imgWidth}
            height={props.imgHeight}
            className={props.transition ? styles.transitionStyle : null}
            onMouseOver={e => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
            /></a>
      : <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          className={props.transition ? styles.transitionStyle : null}
        />
      }
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string,
  imgLinkLocation: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  transition: PropTypes.bool,
  content: PropTypes.node
}

export default Card;