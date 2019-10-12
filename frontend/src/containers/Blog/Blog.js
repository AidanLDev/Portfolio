import React from "react";
import { Redirect } from "react-router-dom";

import Button from "components/Button/Button";

import * as Blogs from "blogs";

const Blog = props => {
  const path = window.location.pathname.split("/").slice(-1)[0];
  console.log(path);

  const goBack = () => window.history.back();

  const renderSwitch = path => {
    switch (path) {
      case "deploying-a-website":
        return <Blogs.deployWebsite />;
      case "must-use-array-methods":
        return <Blogs.javaScriptArrayMethods />;
      case "using-use-effect":
        return <Blogs.usingUseEffect />;
      case "quantum-computing":
        return <Blogs.quantumComputing />;
      case "spread-vs-flatten":
        return <Blogs.spreadFlatten />;
      case "javascript-prototype":
        return <Blogs.javaScriptProtoType />;
      default:
        return <Redirect to="/blog/search" />;
    }
  };

  return (
    <div>
      <Button clicked={() => goBack()}>Go Back</Button>
      <h1>Something interesting</h1>
      {renderSwitch(path)}
    </div>
  );
};

export default Blog;
