import React from 'react';
import "./Introduece.scss";


const Introduce =()=>{  

    const myFunction =()=> {
        console.log("input 태그 동작");
    };

    const handleButton =()=> {
        console.log("button 태그 동작");
    };
    
    return(
        <div className="introduce">
           <div className="container">
           <img className="main_img" src="./images/golf-ball-red.jpg" alt="사진없음"/>
            <p className="name">김기영</p>
            <p className="group">49기</p>
            <input className="input_1" type="text" onChange={myFunction}/> 
            <button className="button_1" onClick={handleButton}>클릭</button>
            <a className="product_1" href="" >product 페이지로 이동</a>
            </div>
        </div>
    )
};

export default Introduce

