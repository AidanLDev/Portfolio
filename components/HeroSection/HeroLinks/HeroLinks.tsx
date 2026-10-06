import IconLink from '@/components/ui/iconLinks/IconLink'
import styles from '../styles.module.scss'
import { heroLinkList } from './heroLinkList'

export default function HeroLinks() {
  return (
    <div className={styles.heroLinksContainer}>
      {heroLinkList.map(({ link, icon, label }) => (
        <IconLink key={link} link={link} icon={icon} label={label} />
      ))}
    </div>
  )
}
