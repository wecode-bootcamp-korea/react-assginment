import React from 'react';
import './Introduce.css'
import { Link,useNavigate } from 'react-router-dom';

const Introduce =()=>{
    const navigate = useNavigate(); 

    function handleInput(){
        console.log( "input 태그 동작")
    }
    function handleButton(){
        navigate('/Product');
     }
    return(
    
        <div className='Bigbox'>
            <div className='Myimg'>
                 <img src='자기소개.jpeg' />  
            </div>
            <div className='Name'>
                <h1>이청원</h1> 
                <p className='Cardinal'>49기</p>
            </div>
            <div className='Input'>
                <input onChange={handleInput} type='text'></input>
                <button onClick={handleButton}>클릭</button>
            </div>
            <Link to='/Product'>회원가입</Link>;
        </div>
    
    )
}

export default Introduce