import React, {useState} from "react";
import "./Count.scss";


const Count= () => { 
 const [props, setCount] =  useState(1)

  const decreaseCount = ()=> {
    if (props>1){
      setCount(props -1)
    }
  }
  const increaseCount = ()=> {
      setCount(props +1)
  }
  
  const resetCount = ()=> {
    setCount(1)  
  }
   
  return (
   
  <div>
      <button onClick={decreaseCount}>-</button>
      <div>{props}</div>
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>reset</button>
  </div>

  );
};

export default Count;