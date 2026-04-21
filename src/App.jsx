
import React from "react" ;

// arrow function 
const Hello = () =>{
  return (
    <div>
      <p>Hello Welcome to BridgeLabz</p>
    </div>
  )
}

// Named function or function expression
function App(){
  const a = 10 ;
  const b = 20 ;

  const date = new Date();
  return(
    <div>
        <h1>Multiple Components</h1>
        <Hello/>
        <Hello/>
    </div>
  )
}

export default App ;