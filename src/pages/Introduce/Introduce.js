import React from 'react';
import "./introduce.css";


const Introduce =()=>{
    const imageUrl = "/images/golf-ball-white.jpg" // public 폴더 하위의 이미지 경로
    return(
        <div className="fullline">
        <div>
            <img className="thumbnail" src={imageUrl} alt="cat"></img>
      </div>
      </div>
    )
}

export default Introduce