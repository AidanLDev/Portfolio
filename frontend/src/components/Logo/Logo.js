import React from 'react';
import PropTypes from 'prop-types';
import styles from './Style.scss';

const logo = props => (
  <div className={styles.logoContainer} onClick={props.clicked}>
    <a href="/">LOGO PLACEHOLDER</a>
  </div>
);

export default logo;

logo.propTypes = {
  clicked: PropTypes.func
};