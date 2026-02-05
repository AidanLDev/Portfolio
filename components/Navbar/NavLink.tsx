import Link from "next/link";
import { NavLinkProps } from "../../interfaces/navbarInterfaces.types";
import styles from "./styles.module.scss";

export default function NavLink({ item }: Readonly<NavLinkProps>) {
  return (
    <Link href={item.link} className={styles.linkStyle} rel="noreferrer">
      <span className={styles.linkLabel}>{item.label}</span>
    </Link>
  );
}
