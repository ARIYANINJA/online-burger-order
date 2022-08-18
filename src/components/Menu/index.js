import React from 'react';
import styles from './style.module.css'
import MenuItem from '../MenuItem';
function Menu() {
    return ( 
        <div>
            <ul className={styles.Menu}>
            <MenuItem active link = '/' >New Order</MenuItem>
            <MenuItem  link  = '/'>Login</MenuItem>
            </ul>
        </div>
     );
}

export default Menu;