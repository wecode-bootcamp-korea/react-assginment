import React from 'react';
import "./Introduce.css";
import capture from "../../assets/images/1692785007289.jpg";


const Introduce =()=>{

    function handleInput(){
        console.log("input 태그 동작")
    }
    function handleButton(){
        console.log("button 태그 동작")
    }

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
                <section> 
                    <input type="text" onChange={handleInput} />
                    <button type="button" onClick={handleButton}>클릭</button>
                </section>
            </div>
        </div>
    )
}




export default Introduce