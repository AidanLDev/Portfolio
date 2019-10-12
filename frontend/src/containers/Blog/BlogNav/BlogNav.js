import React, { useState } from "react";
import BlogCard from "components/BlogCard/BlogCard";
import * as blogData from "data/Blog/blogData";

import styles from "./Style";

const BlogNav = () => {
  const [filterValue, setFilterValue] = useState("");
  const handleInputChange = event => setFilterValue(event.target.value);

  const blogs = [
    {
      title: "Deploying your first website",
      description: blogData.deployingWebAppDesc,
      route: "deploying-a-website"
    },
    {
      title: "# Must use JavaScript array methods",
      description: blogData.placeHolder1,
      route: "must-use-array-methods"
    },
    {
      title: "Reacts useEffect()",
      description: blogData.placeHolder2,
      route: "using-use-effect"
    },
    {
      title: "Will Quantum Computing break encryption",
      description: blogData.placeHolder3,
      route: "quantum-computing"
    },
    {
      title: "JS ES6 using Spread vs Flatten",
      description: blogData.placeHolder3,
      route: "spread-vs-flatten"
    },
    {
      title: "JavaScript prototype",
      description: blogData.placeHolder3,
      route: "javascript-prototype"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.rightSidebar}>
        <span>Search</span>
        {/* Make a nice UI component */}
        <input
          name="search"
          placeholder="Search Blogs"
          value={filterValue}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.mainContainer}>
        <h1>Blog Posts</h1>
        {blogs.map(blog => {
          if (filterValue === "" || filterValue === blog.title) {
            return (
              <BlogCard
                key={blog.title}
                title={blog.title}
                description={blog.description}
                route={blog.route}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogNav;
