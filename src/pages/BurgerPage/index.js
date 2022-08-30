import React,{useEffect, useState} from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal'
import OrderSummary from '../../components/OrderSummary';
import Shadow from '../../components/General/Shadow'
import axios from '../../axios-orders';
import Spinner from '../../components/General/Spinner';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
const INGREDIENTS_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500 }
    const INGREDIENTS_NAMES = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad:"Салад"
    }
function BurgerBuilder(props) {
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
    //     setLoader(true)
    //   axios.post('/orders.json', order).then(response =>{
    //   }).finally(()=>{
    //     setLoader(false)
    //   })
    const params = [];
    for(let orts in ingredients){
        params.push(orts + '=' + ingredients[orts])
    }
    const query = params.join("&");
    props.history.push({
        pathname: '/ship/',
        search: query
    })
    closeConfirmModal();
     }
    return ( 
        <div>
            <Modal closeConfirmModal = {closeConfirmModal} show  = {confirmOrder}>
                {Loader ? Spinner : <OrderSummary onCancel = {closeConfirmModal} 
                onContinue = {continueOrder } price = {totalPrice} ingredients = {ingredients} ingredientsNames = {INGREDIENTS_NAMES}/> }
                </Modal>
                <Shadow show = {confirmOrder} onClick = {closeConfirmModal}></Shadow>
                {Loader && <Spinner/>}
            <Burger orts = {ingredients}/>
            <BuildControls ingredientsNames = {INGREDIENTS_NAMES} disabled ={!purchasing} price = {totalPrice}
             disabledIngredients = {disabledIngredients} ortsHasah  = {ortsHasah}
             ortsNemeh = {ortsNemeh} showConfirmModal = {showConfirmModal} />
           
        </div>
     );
}

export default withRouter(BurgerBuilder);