import React from "react";
import Blog from "containers/Blog/Blog";
import styles from "./Style.scss";

const blog = props => (
  <div className={styles.container}>
    <Blog />
  </div>
);

export default blog;
