import React from 'react';
import "./Introduce.css";

const Introduce = () => {
    return (
    <div className = "box">
        <div className = "wecodebox">
            <h1>>wecode</h1>
        </div>
        <p>유정인</p>
        <p>43기</p>
        <input type="text" onChange={(e)=>{console.log("input 태그 작동")}}></input>
        <button onClick={(e)=>{console.log("button 태그 작동")}}>button</button>
    </div>
);};


export default Introduce;