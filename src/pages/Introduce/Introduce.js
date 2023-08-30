import React from 'react';
import "./Introduce.css";
import profileImg from "../../assets/images/ryuchangsun.png"

const Introduce =()=>{
    return(
        <div className="flex">
            <section className="introduce-item">
                <div className="image-area">
                    <img src={profileImg} alt="49기 류창선 프로필 사진" />
                </div>
                <div className="text-area">
                    <strong>류창선</strong>
                    <span>49기</span>
                </div>
                <div>
                    <input type="text" onChange={handleInput} />
                    <button type="button" onClick={handleButton}>클릭</button>
                </div>
            </section>
        </div>
    )
}

function handleInput () {
    console.log("input 태그 동작");
}

function handleButton () {
    console.log("button 태그 동작");
}

export default Introduce