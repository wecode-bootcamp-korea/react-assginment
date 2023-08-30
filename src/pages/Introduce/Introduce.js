import React from 'react';
import "./introduceStyle.css";
import imgProfile from "./49-youngeun-profile.jpg";

const Introduce =()=>{
    return(
        <div className='wrap'>
            <section className='imgProfile'><img src={imgProfile} alt='49-이영은의 프로필 사진'/></section>
            <section>
            <h1>이영은</h1>
            <span>49기</span>
            </section>
        </div>
    )
}

export default Introduce