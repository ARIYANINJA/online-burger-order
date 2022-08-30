import React, { useEffect, useState } from 'react';
import axios from '../../axios-orders';
import Spinner from '../../components/General/Spinner';
import Order from '../../components/Order'
function OrderPage() {
    const[orders, setOrders] = useState([])
    const[loader, setLoader] = useState(false)
   useEffect(() =>{
        setLoader(true) 
        axios.get('/orders.json').then(response =>{ 
            setOrders(Object.entries(response.data).reverse())
        }).catch(err => console.log(err)).finally(()=>{
               setLoader(false)
        })
    },[])
    return ( 
        <div>   
            {loader ? <Spinner/> : orders.map(el => <Order key = {el[0]} order = {el[1]}/> )} 
        </div>
     );
}

export default OrderPage;