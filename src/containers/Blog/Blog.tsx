import React from 'react';
import { Redirect } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import * as Blogs from 'blogs';
import styles from './Style.module.scss';

const Blog = () => {
  const path: string = window.location.pathname.split('/').slice(-1)[0];

  const goBack = () => window.history.back();

  const renderSwitch = (path: string) => {
    switch (path) {
      // case 'deploying-a-website':
      //   return <Blogs.deployWebsite />;
      // case 'must-use-array-methods':
      //   return <Blogs.javaScriptArrayMethods />;
      // case 'using-use-effect':
      //   return <Blogs.usingUseEffect />;
      // case 'quantum-computing':
      //   return <Blogs.quantumComputing />;
      // case 'spread-vs-flatten':
      //   return <Blogs.spreadFlatten />;
      // case 'javascript-prototype':
      //   return <Blogs.javaScriptProtoType />;
      case 'pending':
        return <Blogs.Pending />;
      default:
        return <Redirect to='/blog/search' />;
    }
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.buttonWrapper} onClick={() => goBack()}>
        {/* #131211 */}
        <Button startIcon={<ChevronLeftIcon />}>Go Back</Button>
      </div>
      {renderSwitch(path)}
    </div>
  );
};

export default Blog;
