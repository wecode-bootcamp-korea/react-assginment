import React from 'react';
import "./introduceStyle.css";
import imgProfile from "./49-youngeun-profile.jpg";


const Introduce =()=>{

    const handleInput =() =>{

        return console.log('input 태그 동작')
    }

    const handleButton =() =>{

        return console.log('button 태그 동작')
    }


    return(
        <div className='wrap'>
            <section className='imgProfile'><img src={imgProfile} alt='49-이영은의 프로필 사진'/></section>
            <section>
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
            onClick={handleButton}
            />
            </section>
        </div>
    )
}

export default Introduce