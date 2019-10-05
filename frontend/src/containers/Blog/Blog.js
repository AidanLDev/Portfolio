import React from "react";

import styles from "./Style";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightSidebar}>
        <span>Search</span>
        {/* Make a nice UI component */}
        <input type="text" name="search"></input>
      </div>
      <div className={styles.mainContainer}>
        <h1>Blog Posts</h1>
        <p>This is where my content will go</p>
      </div>
    </div>
  );
};

export default Blog;
