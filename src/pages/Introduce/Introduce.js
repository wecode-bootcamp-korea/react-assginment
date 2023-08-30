import React from 'react';
import "./Introduce.css";
import capture from "../../assets/images/1692785007289.jpg";


const Introduce =()=>{
    return(
        <div className="main">
            <div className="introBox">
                <div className="imageBox">
                    <img src={capture} alt="profile" />
                </div>
                <div className="textBox">
                    <strong className="name">박민재</strong>
                    <span className="semester">49기</span>
                </div>
            </div>
        </div>
    )
}


export default Introduce