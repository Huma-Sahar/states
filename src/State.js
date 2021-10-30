import React,{useState} from 'react'
import "./App.css"

function State() {
    const [count,setCount] = useState(0);
    
    return (
        <div>
            <h1>Counting Starts</h1>
            <h2>{count}</h2>
            <button className = "btn" onClick = {() => setCount(count+1)}>Click me</button>

            
        </div>
    )
}

export default State
