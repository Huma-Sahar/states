import React,{useState} from 'react'

 const Strin = () => {
    
       const [names,setNames]= useState('Huma');
    return(
    <div>
        <h2>My name is {names}</h2>
        <button className = 'btn' onClick = {() => setNames ('Hafsa')}>Name Changer</button>
            
            
        </div>
    )
}

export default Strin