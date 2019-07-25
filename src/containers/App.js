import React from 'react';
import Card from 'components/Card/Card.js'

import styles from './Style';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Card content='Test' />
      </header>
    </div>
  );
}

export default App;
