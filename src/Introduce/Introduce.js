import React from "react";
import "../Introduce/Introduce.css"


const Self = ()=> {
    return(
        <div className="outline">
            <div className="logobox">
                <h1 className="text">wecode</h1>
            </div>
            <h2>오지수</h2>
            <h5>43기</h5>
            <form>
                <input type="text" onChange={handleInput}></input>
                <button type="button" onClick={handleButton}>버튼</button>
            </form>
        </div>
    ) ;
}

const handleInput = ()=> {
    console.log("input 태그 동작");
}

const handleButton = ()=> {
    console.log("button 태그 동작");

}


export default Self;