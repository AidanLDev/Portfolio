import React from 'react';
import Backdrop from 'components/Backdrop/Backdrop';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import Navigation from 'containers/Navigation/Navigation';

import styles from './Style.scss';

const sidedrawer = props => {
  return (
    <div>
      <Backdrop show={props.showDrawer} clicked={props.closeDrawer}/>
      <div className={styles.sidedrawer}>
        <Logo />
        <hr/>
        {/* Logo */}
        <nav>
          <Navigation />
        </nav>
        <hr/>
        <Button clicked={props.closeDrawer}>Close Menu</Button>
      </div>
    </div>
  );
}

export default sidedrawer;
