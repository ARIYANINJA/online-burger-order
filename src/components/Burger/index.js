import React from 'react';
import BurgerIngredient from '../BurgerIngredient'
import styles from './style.module.css'
function Burger(props) {
    let content = []
    const items = Object.entries(props.orts)
    items.map(el => {
        for( let i = 0; i < el[1]; i++ ){
        content.push( <BurgerIngredient key = {`${el[0]} ${i + 1}`} type = {el[0]} ></BurgerIngredient>)
        }
    })
    if(content.length === 0){
        content = "please set a burger ingredients"
}
    return ( 
        <div className={styles.Burger}>
            <BurgerIngredient type = 'bread-top'>
    <BurgerIngredient class="seed"></BurgerIngredient>
    <BurgerIngredient class="seed second"></BurgerIngredient>
    <BurgerIngredient class="seed third"></BurgerIngredient>
    <BurgerIngredient class="seed fourth"></BurgerIngredient>    
    </BurgerIngredient>
                {content}
    <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
        </div>
     );
}

export default Burger;