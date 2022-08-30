import React,{useState} from 'react';
import styles from './style.module.css'
import Burger from '../../components/Burger'
function ShippingPage() {
      const[ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0, 
        bacon: 0,
        meat: 0,
    })
    return ( 
        <div>
            <Burger orts = {ingredients}/>
        </div>
     );
}

export default ShippingPage;