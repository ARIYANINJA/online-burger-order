import React from 'react';
 import BuildControl from '../BuildControl';
 import styles from './style.module.css'
function BuildControls(props) {
    return ( 
        <div className={styles.BuildControls}>
            <BuildControl ortsHasah = {props.ortsHasah} ortsNemeh ={props.ortsNemeh}  type = "salad" orts = "Салад"/>
            <BuildControl ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "bacon" orts = "Гахайн мах"/>
            <BuildControl  ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "cheese" orts = "Бяслаг"/>
            <BuildControl  ortsHasah = {props.ortsHasah} ortsNemeh = {props.ortsNemeh} type = "meat" orts = "Үхрийн мах"/>    s
        </div>
     );
}

export default BuildControls;