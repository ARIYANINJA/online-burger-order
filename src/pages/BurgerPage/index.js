import React,{useEffect, useState} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal'
import OrderSummary from '../../components/OrderSummary';
import Shadow from '../../components/General/Shadow'
import axios from '../../axios-orders';
import Spinner from '../../components/General/Spinner';
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
    const[Loader, setLoader] = useState(false)
    const[lastCustomerName, setLastCustomerName] = useState('')

    useEffect(() =>{
        setLoader(true) 
        axios.get('/orders.json').then(response =>{
            const arr = Object.values(response.data)
            const lastOrder = arr.slice(-1)
            setIngredients(lastOrder[0].orts)
            setTotalPrice(lastOrder[0].dun)
           setLastCustomerName(lastOrder[0].hayag.name)
        
        }).catch(err => console.log(err)).finally(()=>{
               setLoader(false)
        })
    },[])
    useEffect(()=>{
        totalPrice > 0 ? setPurchasing(true) : setPurchasing(false)
    },[totalPrice])
    const ortsNemeh = (type) =>{
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
    const order = {
        orts: ingredients,
        dun: totalPrice,
        hayag:{
            name:'ARYNINJA',
            city: 'UB',
            street: 'littleToiruu'
        }
    }
    const continueOrder = () => {
        setLoader(true)
      axios.post('/orders.json', order).then(response =>{
      }).finally(()=>{
        setLoader(false)
      })
    }
    return ( 
        <div>
            <Modal closeConfirmModal = {closeConfirmModal} show  = {confirmOrder}>
                {Loader ? Spinner : <OrderSummary onCancel = {closeConfirmModal} 
                onContinue = {continueOrder } price = {totalPrice} ingredients = {ingredients} ingredientsNames = {INGREDIENTS_NAMES}/> }
                </Modal>
                <Shadow show = {confirmOrder} onClick = {closeConfirmModal}></Shadow>
                <h1 style={{textAlign: 'center'}}>suuliin uilchluulegch bol {lastCustomerName}</h1>
                {Loader && <Spinner/>}
            <Burger orts = {ingredients}/>
            <BuildControls ingredientsNames = {INGREDIENTS_NAMES} disabled ={!purchasing} price = {totalPrice}
             disabledIngredients = {disabledIngredients} ortsHasah  = {ortsHasah}
             ortsNemeh = {ortsNemeh} showConfirmModal = {showConfirmModal} />
           
        </div>
     );
}

export default BurgerBuilder;