import React from 'react';
import "./introduce.css";
import mainImg from "../../assets/img/yojin.jpg";

const Introduce =()=>{
    return(
        <div className="Container">

            <div className="ImgBox">
                <img src={mainImg} alt="img" className="Img"/>
            </div> 

            <div className="Profile">
                <h1>박요진</h1>
                <p>49기</p>
            </div>

        </div>


    )
}

export default Introduce