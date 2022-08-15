import React from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerPage from '../BurgerPage';
function App() {
  return ( 
    <div>
      <Toolbar/>
      <main className={styles.content}>
      <BurgerPage/>
      </main>
    </div>
   );
}

export default App