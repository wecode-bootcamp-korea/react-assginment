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
            </section>
        </div>
    )
}

export default Introduce