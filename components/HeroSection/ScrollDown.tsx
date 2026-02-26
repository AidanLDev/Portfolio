import Image from 'next/image'
import styles from './styles.module.scss'

export default function ScrollDown() {
  return (
    <div className={styles.scrollDownContainer}>
      <a href='#experience-header'>
        <Image width={24} height={24} alt='Chevron down icon' src='/icons/chevronDownIcon.svg' />
      </a>
    </div>
  )
}
