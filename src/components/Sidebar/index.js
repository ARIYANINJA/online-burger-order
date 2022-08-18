import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import Logo from '../Logo';
import Menu from '../Menu';
import Shadow from '../General/Shadow'
function SideBar(props) {
    const[classes, setClasses] = useState([styles.SideBar,styles.Close])
    useEffect(()=>{
        if(props.showSidebar)
        setClasses([styles.SideBar, styles.Open])
    },[props.showSidebar])
    return ( 
        <div className={styles.Container}>
            <Shadow show = {props.showSidebar}/>
        <div className={classes.join(" ")} onClick = {props.toggleSidebar}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <Menu/>
        </div>
        </div>
     );
}

export default SideBar;