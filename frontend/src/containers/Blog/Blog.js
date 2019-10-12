import React from "react";
import { Redirect } from "react-router-dom";

import Button from "components/Button/Button";

import * as Blogs from "blogs";

const Blog = props => {
  const path = window.location.pathname.split("/").slice(-1)[0];
  console.log(path);

  const renderSwitch = path => {
    switch (path) {
      case "deploying-a-website":
        return <Blogs.deployWebsite />;
      case "must-use-array-methods":
        return <Blogs.javaScriptArrayMethods />;
      default:
        return <Redirect to="/blog/search" />;
    }
  };

  return (
    <div>
      <Button clicked={() => console.log("Back button clicked")}>
        Go back
      </Button>
      <h1>Something interesting</h1>
      {renderSwitch(path)}
    </div>
  );
};

export default Blog;
