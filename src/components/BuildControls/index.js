import React from 'react';
 import BuildControl from '../BuildControl';
 import styles from './style.module.css'
function BuildControls(props) {

    return ( 
        <div className={styles.BuildControls}>
            <p>Burger price : <strong>{props.price}</strong></p>
            {Object.keys(props.ingredientsNames).map(el => (
                    <BuildControl key = {el} disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh ={props.ortsNemeh}  type = {el} orts = {props.ingredientsNames[el]}/>
            ))}
            <button onClick={props.showConfirmModal} disabled = {props.disabled} className={styles.OrderButton}>Захиалах</button>
        </div>
     );
}

export default BuildControls;