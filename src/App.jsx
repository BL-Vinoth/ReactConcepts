
import React from "react" ;
import Hello from "./Components/Hello";


// Named function or function expression
function App(){
 
  let userName1 = "Vinoth" ;
  let userName2 = "Sathish";
  return(
    <div>
       <h1>Greetings</h1>
       <Hello name="vinoth" age={25}/>
    </div>
  )
}

export default App ;