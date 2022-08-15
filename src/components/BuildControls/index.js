import React from 'react';
 import BuildControl from '../BuildControl';
 import styles from './style.module.css'
function BuildControls(props) {
    const controls = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad:"Салад"
    }
    return ( 
        <div className={styles.BuildControls}>
            <p>Burger price : <strong>{props.price}</strong></p>
            {Object.keys(controls).map(el => (
                    <BuildControl key = {el} disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh ={props.ortsNemeh}  type = {el} orts = {controls[el]}/>
            ))}
            <button disabled = {props.disabled} className={styles.OrderButton}>Захиалах</button>
        </div>
     );
}

export default BuildControls;