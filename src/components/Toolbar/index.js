import React from 'react';
import styles from './style.module.css'
import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import HamburgerMenu from '../HamburngerMenu';
function Toolbar(props) {
    return ( 
        <header className={styles.toolbar}>
            <HamburgerMenu toggleSideBar = {props.toggleSideBar}/>
                <Logo/>
            <nav className = {styles.HideOnMobile}><Menu/></nav>
        </header>
     );
}


export default Toolbar;