import React from 'react';
import "./Introduce.css";

const Introduce =()=>{

    function handleInput(){
        console.log("input 태그 동작");
    }
    function handleButton(){
        console.log("button 태그 동작")
    }

    return(
        <div className="flex">
        <section className="introduce-item">
            <div>
                <img className="image" src="images/1000.jpg" alt="내사진" />
            </div>
            <div>
                <span className="name">이주은</span>
            </div>
            <div>
                <span className="number">49기</span>
            </div>
            <div>
                <input type="text" onChange={handleInput}/>
            </div>
            <div>
                <button type="click" onClick={handleButton}>클릭</button>
            </div>
            <div>
            </div>
        </section>
        </div>
    )
}

export default Introduce