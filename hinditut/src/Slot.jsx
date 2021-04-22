import React from 'react';


const SlotM = (props) => {


  let x = props.x;
  let y = props.y;
  let z = props.z;

   if((x===y) && (y===z)){
    return(
    <>
      <div className="Slot_ inner">
        <h1> {x} {y} {z} </h1>
        <h1> this is matching</h1>
      </div>
      </>
    );
  } else {
    return (
      <>
      
      <div className="Slot_ inner">
        <h1> {x} {y} {z} </h1>
        <h1> this is not  matching</h1>
      </div>

      </>


    );
  }
}

export default SlotM;