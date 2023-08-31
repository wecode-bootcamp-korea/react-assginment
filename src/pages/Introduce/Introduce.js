import React from 'react';
import "./Introduce.css";
import capture from "../../assets/images/1692785007289.jpg";
import { Link,useNavigate } from 'react-router-dom';


const Introduce =()=>{

    const navigate = useNavigate();

    function handleInput(){
        console.log("input 태그 동작")
    }
    
    function handleButton(){
        navigate('/product');
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
                <div className='profile'> 
                    <input type="text" onChange={handleInput} />
                    <button type="button" onClick={handleButton}>클릭</button>
                </div>
                <div>
                    <Link to="/product">회원가입</Link>
                </div>
            </div>
        </div>
    )
}


export default Introduce