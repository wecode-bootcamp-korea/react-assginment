import React from 'react';
import "./introduceStyle.scss";
import imgProfile from "./49-youngeun-profile.jpg";
import { Link, useNavigate } from 'react-router-dom';


const Introduce =()=>{

    const handleInput =() =>{

        return console.log('input 태그 동작');
    }

    // const handleButton =() =>{

    //     return console.log('button 태그 동작');
    // }

    const navigate = useNavigate();

    const goToProduct=()=>{
        navigate('/Product');
    }


    return(
        <div className='introduce'>
            <section className='imgProfile'><img className='profileImg' src={imgProfile} alt='49-이영은의 프로필 사진'/></section>
            <section className='textName'>
            <h1>이영은</h1>
            <span>49기</span>
            </section>
            <section className='clickWrap'>
            <input
                type='text'
                className='textArea'
                onChange={handleInput}
                />
            <input
            type='button'
            className='clickBtn'
            value="클릭"
            // onClick={handleButton}
            onClick={goToProduct}
            />
            </section>
            <p><Link to="/Product">product페이지로 이동</Link></p>
        </div>
    );
};

export default Introduce;