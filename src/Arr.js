
import React,{useState} from 'react'

export const Arr = () => {
const biodata = [
    {
        id: 0, name : 'Huma,'
    },{
        id : 1 , name : 'Sahar'
    },
]
 const [data, setdata] = useState(biodata)
 const clear = () =>{
     setdata([])
 }

    return (
        <div>
            {
            data.map((elem) => <h5>My id is : {elem.id} and Name :{elem.name}</h5> )
            }
            <button className ='btn' onClick = {clear}>Clear</button>
            
        </div>
    )
}
