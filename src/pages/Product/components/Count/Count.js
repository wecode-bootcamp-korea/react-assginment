import React, {useState} from "react";
import "./Count.scss";


const Count= () => { 
  const [count, setCount] = useState(1)

  const decreaseCount = ()=> {
    if (count>1){
      setCount(count -1)
    }
  }
  const increaseCount = ()=> {
      setCount(count +1)
  }
  
  const resetCount = ()=> {
    setCount(1)  
  }
   
  return (
   
  <div>
      <button onClick={decreaseCount}>-</button>
      <div>{count}</div>
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>reset</button>
  </div>

  );
};

export default Count;