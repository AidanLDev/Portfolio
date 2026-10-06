import Link from 'next/link'
import NavLink from './NavLink'
import { navItems } from './navItems'

import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navContainer} id='nav-bar' aria-label='Main'>
      <div className={styles.navInner}>
        <div className={styles.navLeft}>
          <Link href='/' className={styles.logoLink} aria-label='Aidan Lowson home'>
            <span className={styles.logo}>AL</span>
          </Link>
        </div>
        <div className={styles.navRight}>
          {navItems.map((item) => {
            return <NavLink key={`${item.label}__${item.link}`} item={item} />
          })}
        </div>
      </div>
    </nav>
  )
}
