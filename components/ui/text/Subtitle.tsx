import { ITitleProps } from "@/interfaces/uiInterfaces";

import styles from "./styles.module.scss";

const colourMapping = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export default function Subtitle({ title, colour = "primary" }: ITitleProps) {
  return (
    <h2 className={`${styles.subtitle} ${colourMapping[colour]}`}>{title}</h2>
  );
}
