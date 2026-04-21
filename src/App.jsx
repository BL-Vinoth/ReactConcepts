
import React from "react" ;



// Named function or function expression
function App(){
 
  let userName1 = "Vinoth" ;
  let userName2 = "Sathish";
  return(
    <div>
        <h1>Multiple Components</h1>
        <p>Welcome to {userName1}</p>
        <h3>Welcome to {userName2}</h3>
        <a href="www.google.com" target="_blank">google</a>
    </div>
  )
}

export default App ;