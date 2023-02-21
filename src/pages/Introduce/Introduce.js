import React from 'react';
import "./Introduce.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Introduce = () => {

    // const handleInput = () => {
    //     console.log("input 태그 동작")
    // };

    // const handleButton = () => {
    //     console.log("button 태그 동작")
    // };

    const navigate = useNavigate();

    const goToProduct = () => {
        navigate('/product');
    };

    return (
    <div className = "box">
        <div className = "wecodebox">
            <h1>>wecode</h1>
        </div>
        <p>유정인</p>
        <p>43기</p>
        <div>
            <input type="text"></input>
            <button onClick={goToProduct}>button</button>
        </div>
        <span><Link to="/product">product 페이지로 이동</Link></span>
    </div>
);};
    

export default Introduce;