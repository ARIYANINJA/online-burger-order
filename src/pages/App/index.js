import React, { useState } from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerPage from '../BurgerPage';
import Sidebar  from '../../components/SideBar';
import OrderPage from '../OrderPage';
function App() {
  const [showSidebar , setShowSidebar] = useState(false);
  const toggleSideBar = () => {
     setShowSidebar(!showSidebar)    
  }
  return ( 
    <div>
      <Toolbar toggleSideBar = {toggleSideBar}/>
      <Sidebar showSidebar = {showSidebar} toggleSideBar = {toggleSideBar} />
      <main className={styles.content}>
      <BurgerPage/>
      <OrderPage/>
      </main>
    </div>
   );
}

export default App