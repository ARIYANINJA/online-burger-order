import React from 'react';
import styles from './style.module.css'
import MenuItem from '../MenuItem';
function Menu() {
    return ( 
        <div>
            <ul className={styles.Menu}>
            <MenuItem link = '/' >Burger</MenuItem>
            <MenuItem active link = '/' >Payment</MenuItem>
            </ul>
        </div>
     );
}

export default Menu;