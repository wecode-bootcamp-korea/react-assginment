import React from "react";
import './Introduce.scss';
import { Link, useNavigate } from "react-router-dom";


const Introduce = () => {
    const navigate = useNavigate();

    const handleInput = (e) => {
        console.log('input 태그 동작')
        // console.log(e.target.value)
    }

    const handleButton = () => {
        console.log('button 태그 동작')
        navigate('/product');
    }



    return(
        <div className = 'Introduce'>
            <div className = 'profileBox'>
                <img alt = 'mm' className= 'profile' src = "/images/mm.jpg" width = '300'></img>
                <div></div>
                <div className= 'name'>박현아</div>
                <div className= 'generation'>45기</div>
                <input className = 'txt' type ='text' onChange={handleInput} ></input>
                <input className = 'btn' type ='button' value="클릭" onClick={handleButton}></input>
                
                
                <div>
                    <Link to='/product'>Product 페이지로 이동</Link>
                </div>
                
                
            </div>
        </div>
    );
}

export default Introduce;
