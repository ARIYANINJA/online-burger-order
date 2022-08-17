import React from 'react';
import styles from './style.module.css'
import MenuItem from '../MenuItem';
function Menu() {
    return ( 
        <div>
            <ul className={styles.Menu}>
            <MenuItem link = '/' >New Order</MenuItem>
            <MenuItem active link  = '/login'>Login</MenuItem>
            </ul>
        </div>
     );
}

export default Menu;