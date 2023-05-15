import React from "react"
import "./Introduce.css";

const handleInput = (e) => {
    console.log("input 태그 동작");
}

const handleButton = (e) => {
    console.log("button 태그 동작");
}
function Introduce (){
    return(
        <div className="main">
            <div className="container">
                <div className="container-inner">
                    <div className="user-box">
                    <img className ="user-img" src="images/cat.jpeg" alt="user-img"/>
                    </div>
                    <div className="user-exp">
                        <span className="boldStyle">김민지</span>
                        <br/>
                        <span className="smallStyle">46기</span>
                        <br />
                        <input type="text" onChange={handleInput}/>
                        <button type="button" onClick={handleButton}>클릭</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;