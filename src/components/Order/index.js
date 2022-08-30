import React from 'react';
import styles from './style.module.css'
function Order(props) {
    return ( 
        <div className={styles.Order}>
            <p>Гахайн мах : {props.order.orts.bacon}</p>
            <p>Үхрийн мах : {props.order.orts.meat}</p>
            <p>Навч : {props.order.orts.salad}</p>
            <p>Бяслаг : {props.order.orts.cheese}</p>
            <p>Хаяг : {props.order.hayag.name} | {props.order.hayag.city} | {props.order.hayag.street}</p>
            <p> Үнийн дүн : <strong> {props.order.dun}$ </strong></p>
        </div>
     );
}

export default Order;