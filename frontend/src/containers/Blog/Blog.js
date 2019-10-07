import React from "react";
import BlogCard from "components/BlogCard/BlogCard";
import * as blogData from "data/Blog/blogData";

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
        <BlogCard title="Deploying your first website" description={blogData.deployingWebAppDesc}/>
      </div>
    </div>
  );
};

export default Blog;
