import Image from 'next/image'
import styles from './styles.module.scss'

export default function Avatar() {
  return (
    <div className={styles.cardCenter}>
      <div className={styles.avatarRing}>
        <Image
          alt='Aidan Lowson smiling at mount Bromo Indonesia'
          src='/images/BromoSoloRoundSmaller.webp'
          width={200}
          height={200}
          priority
          className={styles.cardImg}
        />
      </div>
    </div>
  )
}
