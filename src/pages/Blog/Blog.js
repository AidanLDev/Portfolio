import React from "react";
import Blog from "containers/Blog/Blog";

import styles from "./Style.module.scss";

const blog = props => {
  return (
    <div className={styles.container}>
      <Blog />
    </div>
  );
};

export default blog;