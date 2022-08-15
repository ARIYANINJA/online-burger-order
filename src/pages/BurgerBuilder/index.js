import React,{useState} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
function BurgerBuilder() {
    const[ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0, 
        bacon: 0,
        meat: 0,
    })
    const ortsNemeh = (type) =>{
        const newIngredients = {...ingredients}
        newIngredients[type]++;
        setIngredients(newIngredients, ingredients)
    }
    const ortsHasah = (type) =>{
        const newIngredients = {...ingredients}
        newIngredients[type]--;
        setIngredients(newIngredients, ingredients)
    }
    return ( 
        <div>
            <Burger orts = {ingredients}/>
            <BuildControls ortsHasah  = {ortsHasah}
             ortsNemeh = {ortsNemeh}/>
        </div>
     );
}

export default BurgerBuilder;