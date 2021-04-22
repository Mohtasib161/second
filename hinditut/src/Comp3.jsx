import React from 'react';
import { FirstName , LastName} from './App';

const Comp3 = () => {
    return (
        <>
          <FirstName.Consumer>
            {(fname) => {
             return(
                <LastName.Consumer>
                 {(lname) => {
                    return (
                        <h1
                        >My name is {fname} {lname}
                        </h1>
                    );
                }}
            </LastName.Consumer>
        )
        }}
    </FirstName.Consumer>
   </> 
   );
    
};
 
export default Comp3