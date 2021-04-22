import React, { useEffect, useState } from 'react';

const App = () => {
    const [num , setnum] = useState(0);

    useEffect(() => {
    //alert('')
    document.title=`you clickedme ${num}`
    });


    return (
        <>
        <button onClick={() => {
            setnum(num+1)
        }}>Click me {num}</button>
        </>
      );
}
 
export default App;
