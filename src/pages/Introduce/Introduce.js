import React from 'react';
import "./Introduce.css";

const Introduce = () => {

    const handleInput = () => {
        console.log("input 태그 동작")
    };

    return (
    <div className = "box">
        <div className = "wecodebox">
            <h1>>wecode</h1>
        </div>
        <p>유정인</p>
        <p>43기</p>
        <div>
            <input type="text" onChange={handleInput}></input>
            <button onClick={(e)=>{console.log("button 태그 작동")}}>button</button>
        </div>
    </div>
);};


export default Introduce;