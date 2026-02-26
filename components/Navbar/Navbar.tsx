import Link from 'next/link'
import NavLink from './NavLink'
import { navItems } from './navItems'

import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navContainer} id='nav-bar'>
      <div className={styles.navInner}>
        <div className={styles.navLeft}>
          <Link href='/' className={styles.logoLink}>
            <span className={styles.logo}>AL</span>
          </Link>
        </div>
        <div className={styles.navRight}>
          {navItems.map((item, i) => {
            return <NavLink key={`${item.label}__${i}`} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}
