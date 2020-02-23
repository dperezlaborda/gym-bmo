import React,{useState} from 'react';
import './AddBttn.scss'

const AddBttn = () =>{
    const [number, setNumber] = useState(0);
    const addNumber = event =>{
        setNumber(number + 10);
    }
    return(
        <div>
            <button onClick={addNumber}>+</button>
            <span>{number} minutos</span>
        </div>
    )
}

export default AddBttn;