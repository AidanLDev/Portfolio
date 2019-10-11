import React from "react";
import Button from "components/Button/Button";

import * as Blogs from "blogs";

const Blog = props => {
  const path = window.location.pathname.split("/").slice(-1)[0];
  console.log(path);

  return (
    <div>
      <Button clicked={() => console.log("Back button clicked")}>
        Go back
      </Button>
      <h1>Something interesting</h1>
      {path === "deploying-a-website" ? <Blogs.deployWebsite /> : null}
    </div>
  );
};

export default Blog;
