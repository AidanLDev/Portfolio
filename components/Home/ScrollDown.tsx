import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'

import style from './style.module.scss'

export default function ScrollDown() {
  return (
    <div className={style.scrollDownContainer}>
      <a href='#projects-header'>
        <span>Scroll Down...</span>
        <FaArrowAltCircleDown />
      </a>
    </div>
  )
}
