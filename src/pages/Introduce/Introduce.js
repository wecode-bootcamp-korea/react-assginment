import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Introduce.scss";
import profileImg from "../../assets/images/ryuchangsun.png"

const Introduce =()=> {
    const handleInput =()=> {
        console.log("input 태그 동작");
    }

    const navigate = useNavigate();

    const goToProduct =()=> {
        navigate('/product');
    };

    return(
        <div className="flex">
            <section className="introduce-item">
                <div className="image-area">
                    <img src={profileImg} alt="49기 류창선 프로필 사진" />
                </div>
                <div className="text-area">
                    <strong>류창선</strong>
                    <span>49기</span>
                </div>
                <div>
                    <input type="text" onChange={handleInput} />
                    <button type="button" onClick={goToProduct}>클릭</button>
                </div>
                <Link to='/product'>product 페이지로 이동</Link>
            </section>
        </div>
    )
}

export default Introduce