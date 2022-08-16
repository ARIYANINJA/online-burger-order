import React from 'react';
import styles from './style.module.css'
function Button(props) {
    return ( 
        <button onClick={props.clicked} className={`${styles.Button} ${styles[props.btnType]}`} name = {props.name} type = {props.type}>{props.text}</button>
     );
}

export default Button;