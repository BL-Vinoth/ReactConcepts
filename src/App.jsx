
import React from "react" ;

// arrow function 
const Hello = (props) =>{
  console.log(props);
  return (
    <div>
      <h4>Hello Welcome , {props.userName}</h4>
    </div>
  )
}

// Named function or function expression
function App(){
 
  let userName1 = "Vinoth" ;
  let userName2 = "Sathish";
  return(
    <div>
        <h1>Multiple Components</h1>
        <Hello userName = {userName1}/>
        <Hello userName = {userName2}/>

    </div>
  )
}

export default App ;