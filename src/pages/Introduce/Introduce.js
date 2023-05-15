import React from "react"
import "./Introduce.css"

function Introduce(){
    function handleInput(){
        console.log('input 태그 동작')
    }
    function handleButton(){
        console.log('button 태그 동작')
    }
    return(
      <div className="container">
        <div className="card-box">
            <div className="wecode">
                <p>>wecode</p>
            </div>
            <h4>이재웅</h4>
            <p>46기</p>
            <input type="text" onChange={handleInput} />
            <button onClick={handleButton}>클릭</button>
        </div>
      </div>    
    )
}

export default Introduce