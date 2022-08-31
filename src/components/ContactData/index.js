import React,{useState} from 'react';
import Button from '../General/Button';
import styles from './style.module.css'
function ContactData(props) {
        const[hayag, setHayag] = useState({
        name: null,
        city: null,
        street: null
    })
    return ( 
        <div className={styles.ContactData}>
          <input type = 'text' name = 'name' placeholder='name'/>
          <input type = 'text' name = 'city' placeholder='city'/>
          <input type = 'text' name = 'street' placeholder='street'/>
          <Button text = 'Send' btnType = 'Success' />
        </div>
     );
}

export default ContactData;