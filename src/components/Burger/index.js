import React from 'react';
import BurgerIngredient from '../BurgerIngredient'
import styles from './style.module.css'
function Burger() {
    return ( 
        <div className={styles.Burger}>
            <BurgerIngredient type = 'bread-top'>
    <BurgerIngredient class="seed"></BurgerIngredient>
    <BurgerIngredient class="seed second"></BurgerIngredient>
    <BurgerIngredient class="seed third"></BurgerIngredient>
    <BurgerIngredient class="seed fourth"></BurgerIngredient>    
            </BurgerIngredient>
            <BurgerIngredient type = 'salad'></BurgerIngredient>
            <BurgerIngredient type = 'cheese'></BurgerIngredient>
            <BurgerIngredient type = 'meat'></BurgerIngredient>
            <BurgerIngredient type = 'bacon'></BurgerIngredient>
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
        </div>
     );
}

export default Burger;