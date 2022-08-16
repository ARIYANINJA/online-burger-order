import React from 'react';
import styles from './style.module.css'
import Button from '../General/Button'
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
            <strong>your order price is : {props.price}₮</strong>
            <div>
            <Button clicked  = {props.onCancel} onClick = {props.onCancel} text = 'Cancel' btnType = 'Danger' />
            <Button clicked = {props.onContinue} text = 'Confirm' btnType = 'Success'/>
            </div>
        </div>
     );
}

export default OrderSummary;