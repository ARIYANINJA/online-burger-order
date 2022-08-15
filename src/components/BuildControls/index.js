import React from 'react';
 import BuildControl from '../BuildControl';
 import styles from './style.module.css'
function BuildControls(props) {
    return ( 
        <div className={styles.BuildControls}>
            <p>Burger price : {props.price}</p>
            <BuildControl disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh ={props.ortsNemeh}  type = "salad" orts = "Салад"/>
            <BuildControl disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "bacon" orts = "Гахайн мах"/>
            <BuildControl disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "cheese" orts = "Бяслаг"/>
            <BuildControl disabledIngredients = {props.disabledIngredients} ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "meat" orts = "Үхрийн мах"/>    
        </div>
     );
}

export default BuildControls;