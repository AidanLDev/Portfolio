import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import Radium from 'radium'
import Tooltip from 'components/Tooltip/Tooltip'

import styles from './Style'

const Card = props => {

  const [active, setActive] = useState(false);
  const [mousePosition, setMousePosition] = useState(null);

  const handleMouseOver = e => {
    setTimeout(function(){setActive(true)}, 200)
    setMousePosition([e.pageX, e.pageY])
    console.log(e.pageX, e.pageY)
  }
  const handleMouseLeave = () => {
    setTimeout(function(){setActive(false)}, 200)
  };

  // const transitionStyle = {
  //   ':hover': {
  //     width: `calc(${props.imgWidth ? props.imgWidth.toString().concat('px') : '0px'} + 20px)`,
  //     height: `calc(${props.imgHeight ? props.imgHeight.toString().concat('px') : '0px'} + 20px)`
  //   }
  // }
  
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
            className={props.transition ? styles.transitionStyle : null}
            // style={props.transition ? transitionStyle : null}
            onMouseOver={e => handleMouseOver(e)}
            onMouseLeave={handleMouseLeave}
            /></a>
      : <img
          src={props.img}
          alt={props.imgAlt}
          width={props.imgWidth}
          height={props.imgHeight}
          className={props.transition ? styles.transitionStyle : null}
          // style={props.transition ? transitionStyle : null}
        />
      }
      <Tooltip text={`Click to navigate to the ${props.imgAlt}`} active={active} position={mousePosition}/>
      <br />
      {props.content}
     
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Card;