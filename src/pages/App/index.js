import React, { useState } from 'react'
import styles from './style.module.css'
import Toolbar from '../../components/Toolbar'
import BurgerPage from '../BurgerPage';
import Sidebar  from '../../components/SideBar';
import OrderPage from '../OrderPage';
import { Route, withRouter} from 'react-router-dom';
import ShippingPage from '../ShippingPage'; 
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
          <Route exact path = '/'>
            <BurgerPage/>
          </Route>
           <Route exact path = '/ship'>
            <ShippingPage/>
          </Route>
        <Route exact path = '/orders'>
      <OrderPage/>
      </Route>
      </main>
    </div>
   );
}

export default withRouter(App)