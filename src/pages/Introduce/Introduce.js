import React from "react";
import "./Introduce.scss" ;

const Introduce = () => {
    const handleInput = () => {
        return console.log( "input 태그 동작")
    }

    const handleButton = () => {
        return console.log(  "button 태그 동작")
    }

return (
<div className="outBox">
    <div className="inBox">
         <div className="wecode">>wecode </div>
    </div>
    <div className="texts">
        <div className="name">이원준</div>
        <div className="num">45기</div>
    </div>
    <div>
        <input onChange={handleInput}/> 
        <button onClick={handleButton}>클릭 </button>
    </div>
    </div>

    );
};

export default Introduce ;