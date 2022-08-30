import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import MenuItem from '../MenuItem';
function Menu(props) {
    return ( 
        <div>
            <ul className={styles.Menu}>
            <MenuItem link = '/' active = {true} >New Order</MenuItem>
            <MenuItem link  = '/orders' active = {false}>Orders</MenuItem>
            </ul>
        </div>
     );
}

export default Menu;