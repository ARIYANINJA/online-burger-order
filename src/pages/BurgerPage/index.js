import React,{useState} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal'
import OrderSummary from '../../components/OrderSummary';
const INGREDIENTS_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500 }
    const INGREDIENTS_NAMES = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad:"Салад"
    }
function BurgerBuilder() {
    const[ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0, 
        bacon: 0,
        meat: 0,
    })
    const[totalPrice, setTotalPrice] = useState(0)
    const[purchasing, setPurchasing] = useState(false)
    const[confirmOrder, setConfirmOrder] = useState(false)
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
    const showConfirmModal = () => {
        setConfirmOrder(true)
    }
    const closeConfirmModal = () => {
        setConfirmOrder(false)
    }
    const disabledIngredients = {...ingredients}
    for(let key in disabledIngredients){
        disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return ( 
        <div>
            <Modal closeConfirmModal = {closeConfirmModal} show  = {confirmOrder}>
                <OrderSummary ingredients = {ingredients} ingredientsNames = {INGREDIENTS_NAMES}/>
                </Modal>
            <Burger orts = {ingredients}/>
            <BuildControls ingredientsNames = {INGREDIENTS_NAMES} disabled ={!purchasing} price = {totalPrice}
             disabledIngredients = {disabledIngredients} ortsHasah  = {ortsHasah}
             ortsNemeh = {ortsNemeh} showConfirmModal = {showConfirmModal} />
           
        </div>
     );
}

export default BurgerBuilder;