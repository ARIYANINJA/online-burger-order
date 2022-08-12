import React from 'react';
import BurgerIngredient from '../BurgerIngredient'
function Burger() {
    return ( 
        <div>
            <BurgerIngredient type = 'bread-top'></BurgerIngredient>
            <BurgerIngredient type = 'salad'></BurgerIngredient>
            <BurgerIngredient type = 'cheese'></BurgerIngredient>
            <BurgerIngredient type = 'meat'></BurgerIngredient>
            <BurgerIngredient type = 'bacon'></BurgerIngredient>
            <BurgerIngredient type = 'bread-bottom'></BurgerIngredient>
        </div>
     );
}

export default Burger;