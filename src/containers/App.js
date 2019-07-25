import React from 'react';
import Card from '../components/Card/Card'

import styles from './App';

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
