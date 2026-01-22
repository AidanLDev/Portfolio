import { FaArrowAltCircleDown } from 'react-icons/fa'

import styles from './styles.module.scss'

export default function ScrollDown() {
  return (
    <div className={styles.scrollDownContainer}>
      <a href='#projects-header'>
        <span>Scroll Down...</span>
        <FaArrowAltCircleDown />
      </a>
    </div>
  )
}
