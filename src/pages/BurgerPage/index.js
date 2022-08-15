import React,{useState} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal'
const INGREDIENTS_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500 }

function BurgerBuilder() {
    const[ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0, 
        bacon: 0,
        meat: 0,
    })
    const[totalPrice, setTotalPrice] = useState(0)
    const[purchasing, setPurchasing] = useState(false)
    const ortsNemeh = (type) =>{
        setPurchasing(true)
        const newIngredients = {...ingredients}
        newIngredients[type]++;
        setIngredients(newIngredients, ingredients)
        const newPrice = totalPrice + INGREDIENTS_PRICES[type];
         setTotalPrice(newPrice, totalPrice)
    }
    const ortsHasah = (type) =>{
        if(ingredients[type] > 0 ){
            const newIngredients = {...ingredients}
            newIngredients[type]--;
            setIngredients(newIngredients, ingredients)
            const newPrice = totalPrice - INGREDIENTS_PRICES[type];
         setTotalPrice(newPrice, totalPrice)
          const newPurchase = newPrice > 0
         setPurchasing(newPurchase, purchasing)
         console.log(purchasing);
        }
    }
    const disabledIngredients = {...ingredients}
    for(let key in disabledIngredients){
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return ( 
        <div>
            <Modal><h1>
                Та итгэлтэй байна уу
                </h1>
                <p>Захиалагын дэлгэрэнгүй</p>
                </Modal>
            <Burger orts = {ingredients}/>
            <BuildControls disabled ={!purchasing} price = {totalPrice}
             disabledIngredients = {disabledIngredients} ortsHasah  = {ortsHasah}
             ortsNemeh = {ortsNemeh}/>
           
        </div>
     );
}

export default BurgerBuilder;