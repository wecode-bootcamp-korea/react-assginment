import React, { useState } from "react";
import "./Count.scss";

const Count = () => {
  const [count, setCount] = useState(0)

   const increaseNumber = () => {
     setCount (count + 1);
   }
     const decreasNumber = () => {
      if (count > 0)
      setCount (count -1);

     }



  return (
    <div className="count">
      <div className={`selected ${count}`}/>{count} 
      <div className="countInput"> 
        <button onClick={() => {decreasNumber()}}>-</button>
        <div className="countInputText">1</div>
        <button onClick={() => {increaseNumber()}}>+</button>
      </div>
      <button className="resetBtn" onClick={() => {setCount(0)}}>
        reset
      </button>
    </div>
  );
};

export default Count;
