import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Logo from '../Logo';
import Menu from '../Menu';
import Shadow from '../General/Shadow'
function SideBar(props) {
    const[classes, setClasses] = useState([styles.SideBar,styles.Close])
    useEffect(()=>{
        setClasses(props.showSidebar ? [styles.SideBar , styles.Open]:[styles.SideBar,styles.Close])
    },[props.showSidebar])
    return ( 
        <div className={styles.Container}>
            <Shadow show = {props.showSidebar} onClick = {props.toggleSideBar}/>
        <div className={classes.join(" ")} onClick = {props.toggleSideBar}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <Menu/>
        </div>
        </div>
     );
}

export default SideBar;