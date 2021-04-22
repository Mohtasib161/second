import React, { useEffect , useState } from 'react';
import axios from 'axios';


const Comp1 = () => {

    const [num , setnum] = useState();

    useEffect(() => {
        alert('h1')
    } )
    return ( 
        <>
        <h1> you Chosse { num} value</h1>
        <h1>Pokemon </h1>
        <select value={num} onChange={(event) => {
         setnum(event.target.value)
        }}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        
        </select>
        </>
     );
}
 
export default Comp1;