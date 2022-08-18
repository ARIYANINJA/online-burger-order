import React from 'react';
import styles from './style.module.css'
function HamburgerMenu(props) {
    return (  
    <div onClick={props.toggleSideBar} className={styles.HamburgerMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    );  
}

export default HamburgerMenu;