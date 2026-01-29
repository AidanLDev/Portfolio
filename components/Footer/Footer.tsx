import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Link href="#nav-bar">
        <span>Back to top</span>
        <Image alt="Chevron up icon" width={24} height={24} src="/icons/chevronUpIcon.svg" />
      </Link>
    </footer>
  );
}
