import React from "react";
import { SocialMediaBoxProps } from "../../interfaces/linkPageInterfaces";
import styles from "./style.module.scss";

export default function SocialMediaBox(props: SocialMediaBoxProps) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div
        className={styles.socialMediaBox}
        style={{
          backgroundImage: `url('${props.backgroundImage}')`,
        }}
      ></div>
      {props.tag && (
        <div className={styles.socialMediaText}>
          <p>{props.tag}</p>
        </div>
      )}
    </a>
  );
}
