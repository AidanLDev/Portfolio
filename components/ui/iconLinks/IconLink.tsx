import Image from 'next/image'
import type { SvgType } from '@/lib/types'
import styles from './styles.module.scss'

interface IIconLinkProps {
  link: string
  icon: SvgType
  label: string
}

export default function IconLink({ link, icon, label }: Readonly<IIconLinkProps>) {
  return (
    <a
      className={styles.iconLink}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
    >
      <Image
        className={styles.iconImage}
        src={icon}
        alt=''
        width={icon.width}
        height={icon.height}
      />
    </a>
  )
}
