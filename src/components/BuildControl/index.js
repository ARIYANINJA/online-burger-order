import React from 'react';
import styles from './style.module.css'
function BuildControl({orts, type, ortsHasah, disabledIngredients, ortsNemeh}) {
    return ( 
        <div className={styles.BuildControl}>
        <div className={styles.Label}>{orts}</div>
        <button disabled={disabledIngredients[type]} onClick={() => ortsHasah(type)} className={styles.Less}>Хасах</button>
        <button onClick={() => ortsNemeh(type)} className={styles.More}>Нэмэх</button>
        
     </div>
     );
}

export default BuildControl
