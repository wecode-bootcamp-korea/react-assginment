import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Introduce.scss";


const Introduce = () => {

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate('/product');
    };

    const handleInput = () => {
        console.log("input 태그 동작")
    }

    return (
    <div className = "introduce">
        <div className = "wecodebox">
            <h1>>wecode</h1>
        </div>
        <p>유정인</p>
        <p>43기</p>
        <div>
            <input type="text" onChange={handleInput}/>
            <button onClick={goToProduct}>button</button>
        </div>
        <span>
            <Link to="/product">product 페이지로 이동</Link>
        </span>
    </div>
);};
    
export default Introduce;