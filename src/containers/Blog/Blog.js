import React from 'react';
import { Redirect } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';

import Button from 'components/Button/Button';

import * as Blogs from 'blogs';
import styles from './Style.module.scss';

const Blog = props => {
  const path = window.location.pathname.split('/').slice(-1)[0];

  const goBack = () => window.history.back();

  const renderSwitch = path => {
    switch (path) {
      case 'deploying-a-website':
        return <Blogs.deployWebsite />;
      case 'must-use-array-methods':
        return <Blogs.javaScriptArrayMethods />;
      case 'using-use-effect':
        return <Blogs.usingUseEffect />;
      case 'quantum-computing':
        return <Blogs.quantumComputing />;
      case 'spread-vs-flatten':
        return <Blogs.spreadFlatten />;
      case 'javascript-prototype':
        return <Blogs.javaScriptProtoType />;
      case 'pending':
        return <Blogs.pending />;
      default:
        return <Redirect to='/blog/search' />;
    }
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.buttonWrapper} onClick={() => goBack()}>
        <Icon color='#131211' size={1} path={mdiChevronLeft} />
        <Button>Go Back</Button>
      </div>
      {renderSwitch(path)}
    </div>
  );
};

export default Blog;
