import React from 'react';
import styles from './style.module.css'
import { NavLink } from 'react-router-dom';
function MenuItem(props) {
    return ( 
        <li className={styles.MenuItem}>
            <a className ={props.active ? styles.active : null }  href = {props.link} >{props.children}</a>
        </li>
     );
}

export default MenuItem;