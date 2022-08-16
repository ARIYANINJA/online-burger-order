import React from 'react';
import styles from './style.module.css'
function OrderSummary(props) {
    return ( 
        <div>
            <h3>
                Your order
            </h3>
            <p>your choosing ingredients:</p>
            <ul style={styles}>
                {Object.keys(props.ingredients).map(el=> (<li  key = {el}>{props.ingredientsNames[el]} : {props.ingredients[el]} </li>))}
            </ul>
        </div>
     );
}

export default OrderSummary;