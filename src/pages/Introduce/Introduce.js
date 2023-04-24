import React from "react";
import "./Introduce.scss";

const Introduce = () => {

    function handleInput() {
        console.log("input 태그 동작");
      }

    function handleButton() {
        console.log("button 태그 동작");
      }

     

    return(
        <div className="container">
            <div className="wecode">
                <div className="text">>wecode</div>

            </div>
            <p className="name">오승민</p>
            <p>45기</p>
            <input type="text" onChange={handleInput}></input>
            <button onClick={handleButton}>클릭</button>
        </div>
    
    )
}

export default Introduce;