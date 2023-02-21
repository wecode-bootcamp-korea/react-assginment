import React from "react";
import "../Introduce/Introduce.scss"
import {Link} from "react-router-dom";


const Self = ()=> {
    return(
        <nav className="outline">
            <div className="logobox">
                <h1 className="text">wecode</h1>
            </div>
            <button>오지수</button>
            <h5>43기</h5>
            <form>
                <input type="text" onChange={handleInput}></input>
                <button type="button" onClick={handleButton}><Link to="/Product">버튼</Link></button>
                <br/>
                <a href="/Product">Product 페이지로 이동</a>
            </form>
        </nav>
    ) ;
}

const handleInput = ()=> {
    console.log("input 태그 동작");
}

const handleButton = ()=> {
    console.log("button 태그 동작");

}


export default Self;