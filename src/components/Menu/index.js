import React from 'react';
import styles from './style.module.css'
import MenuItem from '../MenuItem';
function Menu() {
    return ( 
        <div>
            <ul className={styles.Menu}>
            <MenuItem>Burger</MenuItem>
            <MenuItem>Payment</MenuItem>
            </ul>
        </div>
     );
}

export default Menu;