import React from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerPage from '../BurgerPage';
import Sidebar  from '../../components/Sidebar';
function App() {
  return ( 
    <div>
      <Toolbar/>
      <Sidebar></Sidebar>
      <main className={styles.content}>
      <BurgerPage/>
      </main>
    </div>
   );
}

export default App