import React from 'react';
import Button from '@material-ui/core/Button';

import Backdrop from 'components/Backdrop/Backdrop';
import Logo from 'components/Logo/Logo';
import Navigation from 'containers/Navigation/Navigation';

import styles from './Style.module.scss';

const sidedrawer = (props) => {
  return (
    <div>
      <Backdrop show={props.showDrawer} clicked={props.closeDrawer} />
      <div className={styles.sidedrawer}>
        <Logo />
        <hr />
        {/* Logo */}
        <nav>
          <Navigation />
        </nav>
        <hr />
        <Button onClick={props.closeDrawer}>Close Menu</Button>
      </div>
    </div>
  );
};

export default sidedrawer;
