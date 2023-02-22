import React from "react";
import "../Introduce/Introduce.scss"
import {Link} from "react-router-dom";


const Introduce = ()=> {
    return(
        <nav className="Introduce">
            <div className="logobox">
                <h1 className="mainbox">wecode</h1>
            </div>
            <h2 className="namebox">오지수</h2>
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


export default Introduce;