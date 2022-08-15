import React from 'react';
import styles from './style.module.css'
function Modal(props) {
    return ( 
        <div className={styles.Modal}>
            {props.children}
        </div>
     );
}

export default Modal;