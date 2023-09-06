import React from 'react';
import "./Introduce.scss";
import { Link, useNavigate } from 'react-router-dom';

const Introduce =()=>{
    const navigate = useNavigate(); 
    function handleInput(){
        console.log("input 태그 동작");
    }
    function handleButton(){
        navigate('/Product');
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
                    <button type="button" onClick={handleButton}>product 페이지로 이동</button>
                </div>
                <div>
                    <Link to="/product">회원가입</Link>
                </div>
            </section>
        </div>
    )
}

export default Introduce

