import React, { useState } from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerPage from '../BurgerPage';
import Sidebar  from '../../components/SideBar';
function App() {
  const [showSidebar , setShowSidebar] = useState(false);
  const toggleSideBar = () => {
     setShowSidebar(!showSidebar)    
  }
  console.log('==>',showSidebar);
  return ( 
    <div>
      <Toolbar toggleSideBar = {toggleSideBar}/>
      <Sidebar showSidebar = {showSidebar} toggleSideBar = {toggleSideBar} />
      <main className={styles.content}>
      <BurgerPage/>
      </main>
    </div>
   );
}

export default App