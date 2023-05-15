import React from "react"
import "./Introduce.css";

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;