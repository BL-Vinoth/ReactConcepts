/*
  Hooks: 
    - any function that starts with "use" is called a hook
    - they are special functions that are available only while React is rendering.

    To create a counter, where the value is increased as a function of time or at the click of a button.
*/

import React from "react" ;
import { useState } from "react";
function App(){
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  }

  const handleMinus = () => {
    setCounter(counter - 1);
  }

  const handleZero = () => {
    setCounter(0);
  }

 
  return(
    <div>
        <p>Button Click Counts : { counter }</p>
        <button onClick={handlePlus} style={{padding:'5px', margin:'5px'}} >Increse</button>
        <button onClick={handleMinus} style={{padding:'5px', margin:'5px'}} >Decrese</button>
        <button onClick={handleZero} style={{padding:'5px',margin:'5px'}} >Reset</button>
    </div>
  )
}

export default App ;