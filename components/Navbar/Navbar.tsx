import Link from "next/link";
import { NavBarProps, NavItem } from "../../interfaces/navbarInterfaces";
import NavLink from "./NavLink";
import styles from "./styles.module.scss";

const navItems: NavItem[] = [
  { label: "Blogs", link: "https://blog.aidanlowson.com" },
];

export default function Navbar({ active }: Readonly<NavBarProps>) {
  return (
    <div className={styles.navContainer} id="nav-bar">
      <div className={styles.navInner}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logo}>AL</span>
          </Link>
        </div>
        <div className={styles.navRight}>
          {navItems.map((item, i) => {
            return (
              <NavLink
                key={`${item.label}__${i}`}
                item={item}
                active={active}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
