import React, { useState } from 'react';
import "./introduce.css";
import mainImg from "../../assets/img/yojin.jpg";

const Introduce = () => {

    const [ input, setInput ] = useState('');
    const [ button, setButton ] = useState('');
    
    const handleInput = (e) => {
        setInput(console.log("input 태그 동작"));
    }

    const handleButton = (e) => {
        setButton(console.log('button 태그 동작'));
    }

    return(
        <div className="Container">

            <div className="ImgBox">
                <img src={mainImg} alt="img" className="Img"/>
            </div> 

            <div className="Profile">
                <h1>박요진</h1>
                <p>49기</p>
            </div>

            <div className='Event'>
                <input type='text' value={input} onChange={handleInput}></input>
                <button onClick={handleButton}>클릭</button>
            </div>
        </div>


    )
}

export default Introduce