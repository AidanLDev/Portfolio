import { ITitleProps } from "@/interfaces/uiInterfaces";

import styles from "./styles.module.scss"

export default function Subtitle({ title }: ITitleProps) {
  return <h2 className={styles.subtitle}>{title}</h2>;
}
