import React,{useEffect, useState} from 'react';
import styles from './style.module.css'
import Burger from '../../components/Burger'
import { withRouter, Route } from 'react-router-dom';
import Button from '../../components/General/Button'
import ContactData from '../../components/ContactData';
function ShippingPage(props) {  
      const[ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0, 
        bacon: 0,
        meat: 0,
    })
useEffect(()=>{
    const orts = {}
   const query = new URLSearchParams(props.location.search);
   for(let param of query.entries()){
    orts[param[0]] = param[1]
    setIngredients(orts)
   } 
},[])
 
const goBack = ()=>{
        props.history.goBack();
}

const showContactData = ()=>{
    props.history.push('/ship/' + props.location.search + '&/contact')
}

    return ( 
        <div className={styles.ShippingPage}>
            <Burger orts = {ingredients}/>
            <Button clicked  = {()=>goBack()} text = 'BackToTheOrder' btnType = 'Danger' />
            <Button clicked  = {()=>showContactData()} text = 'FillOrderInformation' btnType = 'Success' />
            <Route path = {'/ship/' + props.location.search + '&/contact'}>
                    <ContactData ingredients = {ingredients}/>
                     </Route>
        </div>
     );
}

export default withRouter(ShippingPage);