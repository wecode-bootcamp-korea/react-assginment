import React, { useState } from 'react';
import "./introduce.scss";
import mainImg from "../../assets/img/yojin.jpg";
import { useNavigate, Link } from "react-router-dom";

const Introduce = () => {

    // const [ input, setInput ] = useState('');
    // const [ button, setButton ] = useState('');

    const navigator = useNavigate();
    
    const handleInput = () => {
        console.log("input 태그 동작");
    }

    const handleButton = () => {
        navigator("/product");
    }

    return(
        <div className="container">

            <div className="imgBox">
                <img src={mainImg} alt="img" className="Img"/>
            </div> 

            <div className="profile">
                <h1>박요진</h1>
                <p>49기</p>
            </div>

            <div className='event'>
                <input type='text' id="input" onChange={handleInput}></input>
                <button onClick={handleButton}>클릭</button>
                <Link to='./product'>product 페이지로 이동!</Link>
            </div>
            
        </div>


    )
}

export default Introduce