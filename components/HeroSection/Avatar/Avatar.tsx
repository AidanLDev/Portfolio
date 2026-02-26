import Image from 'next/image'
import avatarImg from '@/public/images/BromoSoloRoundSmallerCompressed.webp'
import styles from './styles.module.scss'

export default function Avatar() {
  return (
    <div className={styles.cardCenter}>
      <div className={styles.avatarRing}>
        <Image
          alt='Aidan Lowson smiling at mount Bromo Indonesia'
          src={avatarImg}
          width={200}
          height={200}
          priority
          placeholder='blur'
          className={styles.cardImg}
        />
      </div>
    </div>
  )
}
