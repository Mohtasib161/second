import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCompo from './ListCompo';

const ToDo = () => {

    const [ item , setItem] = useState('');
    const [newitem , setNewItem] = useState( []); 

    const itemEvent = (event) => {
         setItem(event.target.value);
    };
         const listOfItem = () => {
              setNewItem((preValue)=> {
                    return [...preValue,item]

            

            });
            setItem('');
         };
        
    
    return ( 
        <>
        <div className='main_div'>
            <div className="center_div">
                <br />
                <h1> ToDo List </h1>
                <br />

                <input type='text' value={item}placeholder='Add an Items'
                onChange={itemEvent} />
             <Button  className="newBtn" onClick={listOfItem} >
             <AddIcon />
             </Button>
             <br />
             <ol>
                 
                 {newitem.map((val,index) =>{
                     return <ListCompo key={index}text={val} />

                 })}

             </ol>
             <br />
            </div>
        </div>
        </>
     );
}
 
export default ToDo;