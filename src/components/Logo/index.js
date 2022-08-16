import React from 'react';
import styles from './style.module.css'
import logoImage from '../../assets/images/burgerKingLogo.png'
function Logo() {
    return ( 
        <div>
           <img className={styles.Logo} src = {logoImage}></img>
        </div>
     );
}

export default Logo;