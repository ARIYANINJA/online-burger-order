import React from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerBuilder from '../BurgerBuilder';
function App() {
  return ( 
    <div>
      <Toolbar/>
      <main className={styles.content}>
      <BurgerBuilder/>
      </main>
    </div>
   );
}

export default App