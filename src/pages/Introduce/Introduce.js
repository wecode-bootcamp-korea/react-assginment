import React from "react";
import "./Introduce.scss" ;
import {Link} from "react-router-dom";

const Introduce = () => {
    const handleInput = () => {
        return console.log( "input 태그 동작")
    }

    const handleButton = () => {
        return console.log( "button 태그 동작")
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
        <button onClick={handleButton} Link to="/product">클릭 </button>
    </div>
    <div>
        <Link to="/product">
            <div>product 페이지로 이동</div>
        </Link>
    </div>
    </div>

    );
};

export default Introduce ;