import React from 'react';
import styles from './style.module.css'
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
function Toolbar() {
    return ( 
        <header className={styles.toolbar}>
            <div >...</div>
                <Logo/>
            <nav className = {styles.HideOnMobile}><Menu/></nav>
        </header>
     );
}


export default Toolbar;