import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <span>Made by Aidan Lowson, thanks for visiting</span>
      <div className={styles.linkSection}>
        <Link href='#nav-bar'>
          <Image alt='Chevron up icon' width={24} height={24} src='/icons/chevronUpIcon.svg' />
        </Link>
      </div>
    </footer>
  )
}
