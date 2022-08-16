import React from 'react';
import styles from './style.module.css'
function MenuItem(props) {
    return ( 
        <li className={styles.MenuItem}>
            <a href = "" >{props.children}</a>
        </li>
     );
}

export default MenuItem;