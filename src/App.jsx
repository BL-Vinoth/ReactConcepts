
import React from "react" ;

function App(){
  const a = 10 ;
  const b = 20 ;

  const date = new Date();
  return(
    <div>
        <p>Today Date is <b>{date.toDateString()}</b></p>
        <p>{a} plus {b} it is {a+b}</p>
    </div>
  )
}

export default App ;